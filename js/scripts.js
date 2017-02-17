$(function(){

  $(".ownInfo").submit(function(){
    event.preventDefault();
    var person1 = $("input#firstName").val();
    var person2 =
    $("input#lastName").val();

    $(".firstname").text(person1);
    $(".lastname").text(person2);

    var side = $("input:radio[name=frontBack]:checked").val();

    var work = $("#environment").val();

    var startDate = $("#start").val();
debugger;
    var favoriteColor = $("#color").val();

    $('.panel-custom').css("background", favoriteColor)

    var track;

    if (side === 'back') {
      if (work === '1') {
        track = 'C#/.NET'
        $(".panelC, .resultDisplay").show();
        $(".panelPHP, .panelCSS, .panelJava, .panelRuby").hide();
      } else if (work === '2') {
        track = 'Java/Android'
        $(".panelJava, .resultDisplay").show();
        $(".panelPHP, .panelCSS, .panelRuby, .panelC").hide();
      } else if (work === '3') {
        track = 'PHP/Drupal'
        $(".panelPHP, .resultDisplay").show();
        $(".panelRuby, .panelCSS, .panelJava, .panelC").hide();
      } else {
        track = 'Ruby/Rails'
        $(".panelRuby, .resultDisplay").show();
        $(".panelPHP, .panelCSS, .panelJava, .panelC").hide();
      }
    } else {
      track = 'CSS'
      $(".panelCSS, .resultDisplay").show();
      $(".panelPHP, .panelRuby, .panelJava, .panelC").hide();
    }
    $("#track").empty().prepend(track);
  });
});
