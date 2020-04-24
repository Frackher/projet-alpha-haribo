//au load de la page 

$(document).ready(function() {

  $("#myForm input.style1").click(function(event){
    event.preventDefault();
	console.log('Click !');

    var name =$("#myForm #contact-name").val();
    var email =$("#myForm #contact-email").val();
    var message =$("#myForm #contact-message").val();

    //appel ajax
    
    $.ajax({

       url:'fonction.php',
       method:'POST',
       data : {name :name , email:email,message:message}


    }).done(function(){

    	alert("message envoyé");
    });

});

});
