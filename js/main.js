

/* Input Search:
  - user types and as they type keyup event will be used as trigger Ref.
  - value will be taken from input via val() method
  - value will be used to search through Div image attributes
  - if matched, will use show() method, if doesn't match hide() method used
  */

  $(.searchInput).on("keyup", function(){
    const $text = $(this).val();
    console.log($text)

  })