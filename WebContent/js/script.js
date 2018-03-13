$(document).ready(function(){ 

    $("#legendcliquable").click(function() {
         $("#tableauacacher").slideToggle();
    });
    
    $(".circle").click(function() {

            $(this).effect( "bounce", "slow" );
                    var couleur = $(this).css("background-color");
                    $("#paiement").css("background-color",couleur);

    });
    
    $("#reinitialiser").click(function() {
        $("#paiement")[0].reset();
    });
    
    $("#nom").change(function(){
        $("#nom_porteur").val($(this).val());

    });
});