


$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $("#itemField").val();

      if (text != "")
      {
        $list.append(`<li>${text}</li>`);
        $('input[type="text"]').val('');
      }
      else{
        alert("Please enter a To-do item");
      }
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  
  });


// You job is to comment the code here. 
// Walk through step by step and write down what you think the code is doing
// in the same format you're see this line of comments.

var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
    document.getElementById("my-coordinates").innerHTML = "Not available"
  }
}

/*
function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
    document.getElementById("my-coordinates").innerHTML = "test";
  }
  
}
*/

function displayPosition(position) {


  document.getElementById("my-coordinates").innerHTML = "Longitude: " + position.coords.longitude.toFixed(4) + "<br><br> Latitude: " + position.coords.latitude.toFixed(4)
}