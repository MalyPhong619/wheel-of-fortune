function replacingVowels(word){
  var replacedVowels = [];
  for (var i = 0; i <= word.length - 1; i++) {
      var newDamnWord = word[i].replace(/[aeiou]/gi, "-");
      replacedVowels.push(newDamnWord);
  }
   return replacedVowels.join("");
};


$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var sentence = $("#answer").val();
    var splitArray = sentence.split("");

    var hiddenVowels = replacingVowels(splitArray);


    $("#newSentence").text(hiddenVowels);
    $(".form-group").hide();
    $(".answer").show();
  });
});
