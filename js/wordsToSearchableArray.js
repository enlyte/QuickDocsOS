function wordsToArray() {
  var linkTitle = trimWhite(document.getElementById("doc-title").value);

  // var linkInformation = trimWhite(document.getElementById("doc-information").value);
    var linkInformation = trimWhite(quill.getText(0));
    var linkInfoNoPunctuation = removePunctuation(linkInformation);

  var titleArray = linkTitle.split(" ");
  var informationArray = linkInfoNoPunctuation.split(" ");

  var combinedArrayNoDupes = mergeStringArrays(titleArray, informationArray);
  var combinedArrayNoDupesNoStops =  removeStopWords(combinedArrayNoDupes);
  var finalArray = trimWhiteFromStopWords(combinedArrayNoDupesNoStops);

  return finalArray;
}

function trimWhiteFromStopWords(array){
  var arrayNoWhite = [];
  for (var key in array) {
    if (array.hasOwnProperty(key)) {
        arrayNoWhite.push(trimWhite(array[key]));
    }
  }
  // alert(arrayNoWhite)
  return arrayNoWhite;
}

function trimWhite (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function mergeStringArrays(string1, string2){
    var hash = {};
    var ret = [];
    for(var i=0; i < string1.length; i++){
        var e = removePunctuation(string1[i]);
        if (!hash[e]){
            hash[e] = true;
            ret.push(e);
        }
    }
    for(var i=0; i < string2.length; i++){
        var e = removePunctuation(string2[i]);
        if (!hash[e]){
            hash[e] = true;
            ret.push(e);
        }
    }
    return ret;
}

function removePunctuation(str) {
  return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g," ")
 }

 function removeStopWords(arrayOfWords) {
   var stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves", ""];

   for (var key in arrayOfWords){
     if (isInArray(stopwords, arrayOfWords[key])) {
       // Remove

       arrayOfWords.splice(key, 1);
     }
   }
   return arrayOfWords;
 }

 function isInArray(stopWords, word) {
   return stopWords.indexOf(word.toLowerCase()) > -1;
 }
