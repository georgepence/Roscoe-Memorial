
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

// Sends memorial message to API, receive back new display info
function sendMessage() {

  // Get form data organized.
  let to_send = {};
  to_send.message = document.getElementById("message").value;
  to_send.name = document.getElementById("name").value;
  to_send.email = document.getElementById("e-mail").value;
  to_send.anonymous = document.getElementById("hide-name").checked;
  
  // Construct XMLHttp request
  post_req = new XMLHttpRequest();
  send_this = JSON.stringify(to_send);
  post_req.open('POST', 'http://flip3.engr.oregonstate.edu:7210', true);
  post_req.setRequestHeader('Content-Type', 'application/json');
  console.log("I'm here now!")
  
  // Asynchronous handling
  // post_req.addEventListener('load', function() {
 
    // Display response
    
  // }
  
  event.preventDefault();
}