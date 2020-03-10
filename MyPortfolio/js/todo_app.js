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