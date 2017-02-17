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

    var favoriteColor = $("#color").val();

    var track;

    if (side === 'back') {
      if (work === '1') {
        track = 'C#/.NET'
        $("#track").empty().prepend(track);
        $(".panelC").show();
        $(".panelPHP, .panelCSS, .panelJava, .panelRuby").hide();
      } else if (work === '2') {
        track = 'Java/Android'
        $("#track").empty().prepend(track);
        $(".panelJava").show();
        $(".panelPHP, .panelCSS, .panelRuby, .panelC").hide();
      } else if (work === '3') {
        track = 'PHP/Drupal'
        $("#track").empty().prepend(track);
        $(".panelPHP").show();
        $(".panelRuby, .panelCSS, .panelJava, .panelC").hide();
      } else {
        track = 'Ruby/Rails'
        $("#track").empty().prepend(track);
        $(".panelRuby").show();
        $(".panelPHP, .panelCSS, .panelJava, .panelC").hide();
      }
    } else {
      track = 'CSS/Design'
      $("#track").empty().prepend(track);
      $(".panelCSS").show();
      $(".panelPHP, .panelRuby, .panelJava, .panelC").hide();
    }

  });
});
