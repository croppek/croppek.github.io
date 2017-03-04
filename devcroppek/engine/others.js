$(document).ready(function(){
    
    $('.close_popup').click(function(){
      
        var parent_id = $(this).parent().attr('id');
       
        $('#'+parent_id).slideUp(400);
       
    });
    
});