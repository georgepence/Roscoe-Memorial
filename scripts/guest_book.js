const fs = require('fs');

document.addEventListener('DOMContentLoaded', startListening);

function startListening() {
  document.getElementById("message").addEventListener("click", openForm);
  // document.getElementById("submit").addEventListener("click", sendIt);
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
  to_send.message = document.getElementById("message").value;
  to_send.name = document.getElementById("name").value;
  to_send.email = document.getElementById("e-mail").value;
  to_send.anonymous = document.getElementById("hide-name").checked;
  
  console.log(to_send)
  // Construct XMLHttp request
  let post_req = new XMLHttpRequest();
  let send_this = JSON.stringify(to_send);
  http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php
  // post_req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
  post_req.open('POST', 'http://flip3.engr.oregonstate.edu:7210', true);
  post_req.setRequestHeader('Content-Type', 'application/json');
  console.log("I'm here now!")
  
  // Asynchronous handling
  post_req.addEventListener('load', function() {
    if (post_req.status >= 200 && post_req.status < 400) {
      console.log("No Error")
      // Display response
      let post_response = JSON.parse(post_req.responseText).json;
      let display_messages = document.getElementById("guest-book-messages");
      display_messages.innerHTML = post_response();
    
    } else {
      console.log("Error in network request (guest_book): " + post_req.statusText);
    }
  });
  
  post_req.send(send_this);
  event.preventDefault();
}