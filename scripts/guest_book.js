document.addEventListener('DOMContentLoaded', startListening);

function startListening() {
  document.getElementById("message").addEventListener("click", openForm);
  document.getElementById("submit").addEventListener("click", sendIt);
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
  
  // Get form data organized.
  let to_send = {};
  let today = new Date();
  
  to_send.date = (today.getMonth()+1) + '/' +today.getDate() + '/' + today.getFullYear();
  to_send.message = document.getElementById("message").value;
  to_send.name = document.getElementById("name").value;
  to_send.email = document.getElementById("e-mail").value;
  to_send.anonymous = document.getElementById("hide-name").checked;
  
  // // Construct XMLHttp request - only purpose is to satisfy form send requirement
  // let post_req = new XMLHttpRequest();
  // let send_this = JSON.stringify(to_send);
  //
  // // post_req.open('POST', 'https://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
  // post_req.open('POST', 'https://httpbin.org/post', true);
  // post_req.setRequestHeader('Content-Type', 'application/json');
  //
  // // Asynchronous handling
  // post_req.addEventListener('load', function() {
  //   if (post_req.status >= 200 && post_req.status < 400) {
  //
  //     // Get response
  //     let post_response = JSON.parse(post_req.responseText).json;
  //
  //     // Update database of Messages (guest book signings)
  //     document.getElementById("guest-book-messages").innerHTML = post_response.message
  //     // updateGuestBook(post_response);
  //
  //     // Display messages, with new message added at the top
  //     // displayGuestBook();
  //
  //   } else {
  //     console.log("Error in network request (httpbin): " + post_req.statusText);
  //   }
    
    
    //  ========================================================================
    
    //  ========================================================================
    // Construct HTTP request to get previous messages from file
    let date = "date=" + to_send.date;
    let mess = "message=" + to_send.message;
    let name = "name=" + to_send.name;
    let email = "email=" + to_send.email;
    let anon = "anonymous=" + to_send.anonymous;
    let send_to_url = "http://flip3.engr.oregonstate.edu:7210"
    let send_url = send_to_url + "?" + date + "&" + mess + "&"+ name + "&"+ email + "&" + anon
    
    let get_req = new XMLHttpRequest()
    // post_2.open('GET', 'https://web.engr.oregonstate.edu/~penceg/roscoe-guestbook/', true);
    get_req.open('GET', send_url, true);
    
    get_req.addEventListener('load', function() {
      if (get_req.status >= 200 && get_req.status < 400) {
        let get_response = JSON.parse(get_req.responseText)
        document.getElementById("guest-book-messages").innerHTML += get_response
      }else {
        console.log("Error in network request (guest_book): " + post_req.statusText);
      }
  
    });

    //  ========================================================================
  get_req.send(null);
  event.preventDefault()
}
  
//   post_req.send(send_this);
//   event.preventDefault();
// }

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
    
  
    //  ========================================================================
    
    //  ========================================================================
    // Construct HTTP request to get previous messages from file
    let date = "date=" + to_send.date;
    let mess = "message=" + to_send.message;
    let name = "name=" + to_send.name;
    let email = "email=" + to_send.email;
    let anon = "anonymous=" + to_send.anonymous;
    let send_to_url = "http://flip3.engr.oregonstate.edu:7210"
    let send_url = send_to_url + "?" + date + "&" + mess + "&"+ name + "&"+ email + "&" + anon
  
    let get_req = new XMLHttpRequest()
    // post_2.open('GET', 'https://web.engr.oregonstate.edu/~penceg/roscoe-guestbook/', true);
    get_req.open('GET', send_url, true);

    get_req.addEventListener('load', function() {
      if (get_req.status >= 200 && get_req.status < 400) {
        let get_response = JSON.parse(get_req.responseText)
        document.getElementById("guest-book-messages").innerHTML += get_response
      }else {
        console.log("Error in network request (guest_book): " + post_req.statusText);
      }
    });
    get_req.send(null);
    //  ========================================================================
    
  });
  
  post_req.send(send_this);
  event.preventDefault();
}
