$(document).ready(function(){
    $('#btn').click(function(){
        var add =$('input[name=input]').val()
        $('ol').append('<li>'+ add +'<button class="Delete">Delete</button></li>')
        $('input[name=input]').val('');
    });
    $('ol').on('click','.Delete',function(){
        $(this).parent().remove();
    });
})
