function replacingVowels(word){
  var replacedVowels = [];
  for (var i = 0; i <= word.length - 1; i++) {
      var newDamnWord = word[i].replace(/[aeiou]/gi, "-");
      replacedVowels.push(newDamnWord);
  }
   return replacedVowels;
};



$(document).ready(function(){
  $(".form-group").submit(function(event){
    event.preventDefault();
    var sentence = $("#answer").val();
    var splitArray = sentence.split("");

    var hiddenVowels = replacingVowels(splitArray);
    var joiningWords = hiddenVowels.join("");

    $("#newSentence").text(joiningWords);
  });
});
