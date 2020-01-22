

/* Input Search:
  - user types and as they type keyup event will be used as trigger Ref.
  - value will be taken from input via val() method
  - value will be used to search through Div image attributes
  - if matched, will use show() method, if doesn't match hide() method used
  */


function randomColor() {
  let rgbColor = "rgb(";
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  rgbColor += red + "," +green+ "," +blue +")";
  return rgbColor
}




$(".searchInput").on("keyup", function(){
  const $text = $(this).val().toLowerCase();
  console.log($text);

  $(".photo-link").hide();

  $(".photo-link a").each(function(index, element){
    let $dataLink = $(this).attr('data-title').toLowerCase();
    if ($dataLink.includes($text)){
      $(this).parent().show();
    }
  });

});

$('.photo-link').each(function(index, element){
  $(this).css("box-shadow", "5px 5px 8px");
});

$(".photo-link").on("mouseover", function(){
  $(this).css("box-shadow", "10px 10px 12px " + randomColor());
});
    
$(".photo-link").on("mouseout", function(){
  $(this).css("box-shadow", "5px 5px 8px");

});