$(document).ready(function(){
    
    $.datepicker.setDefaults({
        dateFormat: "dd-mm-yy",
        regional: "fr",
        dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
        dayNamesShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
        dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
        monthNames: [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembere" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jui", "Aou", "Sep", "Oct", "Nov", "Dec" ]
    });
    
    /*$("input[type='radio']").checkboxradio();*/


    $("#legendcliquable").click(function() {
         $("#tableauacacher").slideToggle();
    });
    
    $(".circle").click(function() {
            $(this).effect("bounce","slow");
            var couleur = $(this).css("background-color");
            $("#paiement").css("background-color",couleur);
    });
    
    $("#reinitialiser").click(function() {
        $("#paiement")[0].reset();
    });
    
    $("#nom").change(function(){
        $("#nom_porteur").val($(this).val());

    });
    
    $("#datedenaissance").datepicker();
});

