document.addEventListener('DOMContentLoaded', startListening);

function startListening() {
  document.getElementById("message").addEventListener("click", openForm);
  document.getElementById("submit").addEventListener("click", sendMessage);
}

// The page initially opens to show the guest book entries that have been made,
// with just one 'Leave a message' field visible.  When the user clicks on that
// field, several other fields become visible for user entry.
function openForm() {
  let items = document.getElementsByClassName("hidden");
  let num_items = items.length
  for (let i = 0; i <= num_items - 1; i += 1) {
    items[0].classList.remove("hidden");
  }
}

function sendIt() {

  fs.readFile('/nfs/stak/users/penceg/public_html/roscoe-memorial/guest_book.txt', 'utf8', (err, data) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log(data);
  })
}

// Sends memorial message to API, receive back new display info
function sendMessage() {

  // Get form data organized.
  let to_send = {};
  let today = new Date();
  
  to_send.date = (today.getMonth()+1) + '/' +today.getDate() + '/' + today.getFullYear();
  to_send.message = document.getElementById("message").value;
  to_send.name = document.getElementById("name").value;
  to_send.email = document.getElementById("e-mail").value;
  to_send.anonymous = document.getElementById("hide-name").checked;
  
  // Construct XMLHttp request - only purpose is to satisfy form send requirement
  let post_req = new XMLHttpRequest();
  let send_this = JSON.stringify(to_send);
  
  // post_req.open('POST', 'https://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
  post_req.open('POST', 'https://httpbin.org/post', true);
  post_req.setRequestHeader('Content-Type', 'application/json');
  
  // Asynchronous handling
  post_req.addEventListener('load', function() {
    if (post_req.status >= 200 && post_req.status < 400) {
      
      // Get response
      let post_response = JSON.parse(post_req.responseText).json;
      
      // Update database of Messages (guest book signings)
      document.getElementById("guest-book-messages").innerHTML = post_response.message
      // updateGuestBook(post_response);
      
      // Display messages, with new message added at the top
      // displayGuestBook();
    
    } else {
      console.log("Error in network request (httpbin): " + post_req.statusText);
    }
    
    // Construct HTTP request to get previous messages from file
    let post_2 = new XMLHttpRequest()
    post_2.open('POST', 'https://web.engr.oregonstate.edu/~penceg/roscoe-guestbook', true);
    post_2.setRequestHeader('Content-Type', 'application/json');
    
    post_2.addEventListener('load', function() {
      if (post_2.status >= 200 && post_2.status < 400) {
        post_response = JSON.parse(post_2.responseText)
        document.getElementById("guest-book-messages").innerHTML = post_response
      }else {
        console.log("Error in network request (guest_book): " + post_req.statusText);
      }
    });
    
  });
  
  post_req.send(send_this);
  event.preventDefault();
}
