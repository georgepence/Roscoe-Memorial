document.addEventListener('DOMContentLoaded', startListening);

function startListening() {
  document.getElementById("message").addEventListener("click", openForm);
  document.getElementById("submit").addEventListener("click", sendMessage);
}

// The page initially opens to show the guest book entries that have been made,
// with just one 'Leave a message' field visible.  When the user clicks on that
// field, several other fields become visible for user entry.
//
// The website * should * store previous comments and display them, but after
// wrestling with the engineering server security for two weeks, I gave up on
// that.  I did hard code (HTML) one 'previous' comment.
//
function openForm() {
  let items = document.getElementsByClassName("hidden");
  let num_items = items.length
  for (let i = 0; i <= num_items - 1; i += 1) {
    items[0].classList.add("show-me");
    items[0].classList.remove("hidden");
  }
}

function closeForm() {
  document.getElementById("message").value = "";
  document.getElementById("name").value = "";
  document.getElementById("e-mail").value = "";
  document.getElementById("hide-name").checked = false;
  let items = document.getElementsByClassName("show-me");
  let num_items = items.length
  for (let i = 0; i <= num_items - 1; i += 1) {
    items[0].classList.add("hidden");
    items[0].classList.remove("show-me");
  }
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
  
  // Construct XMLHttp request - the only purpose here is to satisfy form send
  // requirement.
  let post_req = new XMLHttpRequest();
  let send_this = JSON.stringify(to_send);
  
  post_req.open('POST', 'https://httpbin.org/post', true);
  post_req.setRequestHeader('Content-Type', 'application/json');
  
  // Asynchronous handling
  post_req.addEventListener('load', function() {
    if (post_req.status >= 200 && post_req.status < 400) {
      
      // Get response
      let post_response = JSON.parse(post_req.responseText).json;
      console.log(post_response);
      
      // Close form, clear fields, and display new message
      closeForm()
      document.getElementById("guest-book-message").innerHTML = post_response.message;
      let signature = post_response.date + "     " +
          (to_send.anonymous ? "" : post_response.name);
      document.getElementById("guest-book-date-name").innerHTML = signature
      
    } else {
      console.log("Error in network request (httpbin): " + post_req.statusText);
    }
    
  });
  
  post_req.send(send_this);
  event.preventDefault();
}
