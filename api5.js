
$(document).ready(function(){

    $("#pincode").chosen();

    $(".chosen-search-input").keyup(function(){
    if($(this).val().length == 6){
    $.get("https://api.postalpincode.in/pincode/" + $(this).val(), function(data){
    $.each(data[0].PostOffice, function(key, value) {
    var newOption = new Option(
    value.Name + "," + value.District + "," + value.State + "," + value.Country + ','
     
     );
          
    $("#pincode").append(newOption);

    });

     $("#pincode").trigger("chosen:updated")

            });
        } 
    });
});


