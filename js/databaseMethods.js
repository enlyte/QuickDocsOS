var linkObjectsFromDBGlobal = [];

                /////// GET DOCs ///////
$.get("http://localhost:8080/api/links", function(response) {
  console.log("Ajax Worked");
  console.log(response);
  var linkObjectsFromDB = [];
  for (var key in response) {
    linkObjectsFromDB.push(response[key]);
  }
  linkObjectsFromDBGlobal = linkObjectsFromDB;
  console.log("About to Write to List");

  addDocsToTable(linkObjectsFromDBGlobal, 'doc-table');
  addRowHandlers(linkObjectsFromDBGlobal);
  buildCompleteListOfDocs(linkObjectsFromDBGlobal);

});


                /////// POST DOC ///////

function preAddToDB() {
   if (checkTextFields()) {
     $('#myModal').modal('hide');
     addToDB();

  } else { // Missing text field input
      alert("Please fill in a Title and Information");
   }
}

function checkTextFields() {
  var linkInformation = trimWhite(quill.getText(0));
  if (document.getElementById("doc-title").value === "" ||
    linkInformation === "") {
    return false;
  }
  else {return true;}
}

function addToDB() {

  var docTitle = trimWhite(document.getElementById("doc-title").value);
  var docInfoText =  trimWhite(quill.getText(0));
  var docInfoQuill = quill.getContents();
  var hyperlink = trimWhite((document.getElementById("hyperlink").value).replace(/ /g,''));

  console.log("Contents: ");
  console.log(docInfoText);
  console.log(docInfoQuill);

  var arrayOfWords = wordsToArray();
  var parsedQuillWords = JSON.stringify(docInfoQuill);

  var emptyTagsArray = [];
  var rando = (Math.random()*1e32).toString(36)//Math.random().toString(36);
  // alert(rando);
  var myDocData = { title: docTitle,
    hyperlink: hyperlink,
    information: docInfoText,
    // arrayOfQuillWords: arrayOfQuillWords,
    tags: '[]',
    clickCount: 1,
    parsedQuillWords : parsedQuillWords,
    arraySearchWords: arrayOfWords,
    docID: rando,
    type: "mongoDBDoc"
  };

  console.log(myDocData);

  postDocToDatabase(myDocData, function() {  // Add to Database
    document.getElementById("doc-title").value = "";
    document.getElementById("doc-information").value = "";
    document.getElementById("hyperlink").value = "";
    //
    // location.reload();
  });


}

function postDocToDatabase(myData, callback) {
  var hostName = "http://localhost:8080/api/links";

  $.ajax({
      type: 'POST',
      url: hostName,
      crossDomain: true,
      data: myData,
      dataType: 'json',
      success: function(responseData, textStatus, jqXHR) {
        console.log("Post Worked");
        console.log(responseData);
        var value = responseData._id;
        console.log(value);
        var value1 = responseData.testData;
        console.log(value1);
        callback();
      },
      error: function (responseData, textStatus, errorThrown) {
          console.log('POST failed.');
          console.log(responseData);
          console.log(textStatus);
          callback();
      }
  });

}
