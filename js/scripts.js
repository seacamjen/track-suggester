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
      } else if (work === '2') {
        track = 'Java/Android'
      } else if (work === '3') {
        track = 'PHP/Drupal'
      } else {
        track = 'Ruby/Rails'
      }
    } else {
      track = 'CSS/Design'
    }


    $("#track").prepend(track);
    $(".panel").show();

  });
});
