$(function(){

  $(".ownInfo").submit(function(){
    var person1 = $("input#firstName").val();
    var person2 =
    $("input#lastName").val();

    $(".firstname").text(person1);
    $(".lastname").text(person2);

    var side = $("input:radio[name=frontBack]:checked").val();

    var work = $("#environment").val();

    var startDate = $("#start").val();

    var favoriteColor = $("#color").val();

    if (side === 'front'){
      side =
    }  else {
      side =
    }

    $("#track").empty().append(side);
    $(".panel").show();
    event.preventDefault();
  });
});
