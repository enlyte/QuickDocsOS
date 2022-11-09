// <script type="text/javascript">
   //prefixes of implementation that we want to test
   window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

   //prefixes of window.IDB objects
   window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
   window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

   if (!window.indexedDB) {
      window.alert("Your browser doesn't support saving new links.  Try using Firefox or Chrome.")
   }

   const linkData = [
     {
     name: "Google",
     hyperlink: "https://www.google.com",
     description: "Search",
     arraySearchWords: [],
     linkID: "googlegoogle",
     type: "indexedDB"

   }];

   var db;
  //  var request = window.indexedDB.open("linkDatabase2", 1); // Old Database Testing
      var request = window.indexedDB.open("linkDatabase12", 1);

   request.onerror = function(event) {
      console.log("error: ");
   };

   request.onsuccess = function(event) {
      db = request.result;
      console.log("success: "+ db);

      // alert("About to add Data To Table");
      getLinkData(linkDataIndexed, function() {

        // console.log("Linked After Function: " +linkDataIndexed);

        console.log("linkded data looks like: ");
        console.log(linkDataIndexed);
        //  alert("Add Data To Table");
        //  addDataToTable(); // Make Table

        //  addLinksToHL(linkDataIndexed); // Make Hyperlink List
      buildCompleteListOfLinks(linkDataIndexed, false, true);
      addDataToListGroup(linkDataIndexed, "list-group", "indexedDBLinks"); // Make List Table



      });
   };

   request.onupgradeneeded = function(event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("linkObject", {keyPath: "id", autoIncrement: true});

      for (var i in linkData) {
        // alert("Upgrade");
         objectStore.add(linkData[i]);
      }
   };



   var linkDataIndexed = [
    //  {}];
     {
     name: "Experian",
     hyperlink: "https://www.edq.com",
     description: "EDQ",
     arraySearchWords: [],
     id: 2,
     linkID: "EDQEDQEDQEDQ",
     type: "indexedDB"
   } ];

    //https://portal.experianmarketingservices.com/


// function createArrayOfIndexedDBLinks(linkDataIndexed1) {
//   for (var key in linkDataIndexed1) {
//     // console.log(linkDataIndexed[key]);
//     linkDataIndexed.push(linkDataIndexed1[key]);
//
//     console.log("LDI");
//     console.log(linkDataIndexed);
//   }
// }



   function getLinkData(linkHolder, callback) {
    //  console.log("In Link Data" + linkHolder);
      // var objectStore = db.transaction("linkObject").objectStore("linkObject");

      var transaction = db.transaction(["linkObject"]);
      var objectStore = transaction.objectStore("linkObject");

      objectStore.openCursor().onsuccess = function(event) {
         var cursor = event.target.result;
         if (cursor) {
            var currentLinkObject = {id: cursor.key,
              name: cursor.value.name,
              hyperlink: cursor.value.hyperlink,
              description: cursor.value.description,
              arraySearchWords: cursor.value.arraySearchWords,
              // linkID: cursor.value.linkID
              type: cursor.value.type
            };
            // console.log(currentLinkObject);
            linkHolder.push(currentLinkObject);
            // console.log(linkHolder);
            cursor.continue();
         }

         else {
            console.log("No more entries");
            callback();
         }
      };
      for ( var obj in linkHolder) {
        console.log("Objs: " + obj);
      }
      // console.log(linkHolder);

    }
  //  }.then () {
  //    console.log(linkDataIndexed);
  //  }


  function readIndexedLinks() {
    // Iterate through object and print
    console.log("In Function: " );
    console.log(linkDataIndexed);
      for ( var key in linkDataIndexed) {
        if (!linkDataIndexed.hasOwnProperty(key)) continue;
        var linkObj = linkDataIndexed[key];
          // Interate through each Item in Obj
        // for (var link in linkObj) {
        //     // skip loop if the property is from prototype
        //     if(!linkObj.hasOwnProperty(link)) continue;
        //     alert(link + " = " + linkObj[link]);
        // }

        // console.log(linkObj);
        // alert(linkObj.name);
      }
  }

   function read() {
      var transaction = db.transaction(["linkObject"]);
      var objectStore = transaction.objectStore("linkObject");
      var request = objectStore.get("00-03");

      request.onerror = function(event) {
         alert("Unable to retrieve daa from database!");
      };

      request.onsuccess = function(event) {
         // Do something with the request.result!
         if(request.result) {
            alert("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
         }

         else {
            alert("Link couldn't be found in your database!");
         }
      };
   }


   function readAll() {
     var textToOutput = "";
      var objectStore = db.transaction("linkObject").objectStore("linkObject");

      objectStore.openCursor().onsuccess = function(event) {
         var cursor = event.target.result;

         if (cursor) {
            alert("Name for id " + cursor.key + " is " + cursor.value.name + ", link: " + cursor.value.hyperlink + ", description: " + cursor.value.description);


            textToOutput += cursor.key + " " + cursor.value.name + " " + cursor.value.hyperlink;
            console.log(textToOutput);

            document.getElementById("records").innerHTML = textToOutput;

            cursor.continue();

         }

         else {
            alert("No more entries!");
         }
      };

   }



   function checkTextFields() {
     if (document.getElementById("link-name").value === "" ||
     document.getElementById("hyperlink").value === "") {// ||
    //  document.getElementById("link-description").value === "") {
      //  alert("Empty Text Field");
       return false;
     }
     else {return true;}
   }

   function checkHyperlinkFirst4() {
     var hyper = (document.getElementById("hyperlink").value).substring(0,4);
     // alert(hyper.toLowerCase());
      if (hyper.toLowerCase() != 'http') {
        if (confirm('Your link is missing "http://".  Are you sure you want to add it?')) {
          // Save it
           $('#myModal').modal('hide');
           getLastID(addThis);
         } else {
             // Do nothing (User selected)
         }
       } else {
         // Hot Missing HTTP
         $('#myModal').modal('hide');
         getLastID(addThis);
       }
     }

    // Add This is used when submit is pressed
    // Before Calling addThis(), Must get last key

   function preAddThis() {
    //  var textExistsInFields = checkTextFields();
     if (checkTextFields()) {
        checkHyperlinkFirst4();
      //  }
      //  else {  // Link does have http
      //   $('#myModal').modal('hide');
      //   getLastID(addThis);
      // }
    } else { // Missing text field input
        alert("Please fill in a Name and Hyperlink");
     }
   }


function wordsToArray() {
  var linkName = document.getElementById("link-name").value;
  // var hyperlink = (document.getElementById("hyperlink").value).replace(/ /g,'');
  var linkDescription = document.getElementById("link-description").value;

  // var string = "0,1";
  var nameArray = linkName.split(" ");
  // alert(nameArray[0]);
  var descriptionArray = linkDescription.split(" ");

  // var combinedArray = nameArray.concat(descriptionArray);
  var combinedArrayNoDupes = mergeStringArrays(nameArray, descriptionArray);
  var combinedArrayNoDupesNoStops =  removeStopWords(combinedArrayNoDupes);

  // console.log("2 Combineds");
  // console.log(combinedArray);
  // console.log(combinedArrayNoDupes);
  // console.log(combinedArrayNoDupesNoStops);
  // alert("Check");

  return combinedArrayNoDupesNoStops;
}

function removePunctuation(str) {

  // str = str.replace(/(~|`|!|@|#|$|%|^|&|*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|+|=)/g,"")
  // str = str.replace(/(~|`|!|@|#|$|%|^|&|*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|+|=)/g,"");
  // document.getElementById("innerhtml").innerHTML = str;
  return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
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

function isInArray(stopWords, word) {
    return stopWords.indexOf(word.toLowerCase()) > -1;
}

function removeStopWords(arrayOfWords) {
  var stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];

  for (var key in arrayOfWords){
    if (isInArray(stopwords, arrayOfWords[key])) {
      // Remove

      arrayOfWords.splice(key, 1);
    }
  }
  return arrayOfWords;
}

   function addThis(lastID) {

     var arrayOfWords = wordsToArray();
    //  console.log(arrayOfWords);
    //  alert(arrayOfWords);
    //  document.getElementById("searchTxt").value;
     var linkName = document.getElementById("link-name").value;
     var hyperlink = (document.getElementById("hyperlink").value).replace(/ /g,'');
     var linkDescription = document.getElementById("link-description").value;
    //  alert(linkName + hyperlink + linkDescription);

// Nintendo World Championships 1990
      // var lastID = getLastID();


      // var newID = lastID + 1;
      //   console.log(newID);
      var rando = (Math.random()*1e32).toString(36)//Math.random().toString(36);
      // alert(rando);
      var myLinkData = { name: linkName,
        hyperlink: hyperlink,
        description: linkDescription,
        arraySearchWords: arrayOfWords,
        linkID: rando,
        type: "indexedDB"
      };
      //  postLink(myData);

      var request = db.transaction(["linkObject"], "readwrite")
      .objectStore("linkObject")
      .add(myLinkData);
      // .add({ name: linkName, hyperlink: hyperlink, description: linkDescription });
      // .add({ id: newID, name: linkName, hyperlink: hyperlink, description: linkDescription });

      request.onsuccess = function(event) {
        // var myData = {testData: "New one2"};
        //

        //  alert("A new link has been added to your database.");
        // Reload Page when complete
        myLinkData.type = "mongoDB"

        postLinkToDatabase(myLinkData, function() {  // Add to Database
          document.getElementById("link-name").value = "";
          document.getElementById("hyperlink").value = "";
          document.getElementById("link-description").value = "";

          location.reload();
        });

      };

      request.onerror = function(event) {
         alert("Unable to add data\r\n it aready exist in your database! ");
      }
   }



   function deleteThis(id) {
     if (confirm('Are you sure you want to remove this link?')) {
    // Delete!
        var idNum = Number(id);

        var request = db.transaction(["linkObject"], "readwrite")
        .objectStore("linkObject")
        .delete(id);
        //
        // var transaction = db.transaction(["linkObject"]);
        // var objectStore = transaction.objectStore("linkObject");
        // var request = objectStore.get("00-03");

        request.onsuccess = function(event) {
         //  linkDataIndexed = linkDataIndexed.slice(1);
         location.reload();
           // alert("Item has been removed from your database.");
        };
      } else {
          // Do nothing!
      }
   }




      function getLastID(callbackFunction) {
        var tempID;
        var trans = db.transaction("linkObject");
        var objectStore = trans.objectStore("linkObject");
        objectStore.openCursor().onsuccess = function(event) {
           var cursor = event.target.result;
           if (cursor) {
              // alert("Name for id " + cursor.key + " is " + cursor.value.name + ", link: " + cursor.value.hyperlink + ", description: " + cursor.value.description);
              tempID = cursor.key;
             //  alert(tempID);
              cursor.continue
           }
      }
      trans.oncomplete = function(e) {
        callbackFunction(tempID);
       }
    }


function addLinkToIndexedDB(thisID) {
  console.log(thisID);

  var selectedObject = {};

  for(var key in linkObjectsFromDBGlobal) {
    var dbObject = linkObjectsFromDBGlobal[key];
    // alert(dbObject.linkID + " " + thisID);
    if (thisID == dbObject.linkID) {
      // alert("Match");
      selectedObject = dbObject;
    }
  }

  var linkName = selectedObject.name;
  var hyperlink = selectedObject.hyperlink;
  var linkID = thisID;
  var linkDescription = "";
  var arrayOfWords = {};
  if(selectedObject.description) {
    linkDescription = selectedObject.description;
  };
  if(selectedObject.arrayOfWords){
    arrayOfWords = selectedObject.arrayOfWords;
  }
  // console.log(linkName + " " + hyperlink + " " + linkID + " " + linkDescription + " " + arrayOfWords);

  var myLinkData = { name: linkName,
    hyperlink: hyperlink,
    description: linkDescription,
    arraySearchWords: arrayOfWords,
    linkID: linkID,
    type: "indexedDB"
  };

  // Save to IndexedDB
  var request = db.transaction(["linkObject"], "readwrite")
  .objectStore("linkObject")
  .add(myLinkData);
  request.onsuccess = function(event) {
      location.reload();
  };
  request.onerror = function(event) {
     alert("Unable to add data\r\n it aready exist in your database! ");
  }
}






//////////////// --------------  Older Functions


function add() {
   var request = db.transaction(["linkObject"], "readwrite")
   .objectStore("linkObject")
   .add({ name: "Kenny", hyperlink: 19, description: "kenny@planet.org" });
   // .add({ id: 3, name: "Kenny", hyperlink: 19, description: "kenny@planet.org" });

   // .add({ id: newID, name: linkName, hyperlink: hyperlink, description: linkDescription });

   request.onsuccess = function(event) {
      alert("Link has been added to your database.");
   };

   request.onerror = function(event) {
      alert("Unable to add data\r\n It is aready exist in your database! ");
   }
}

  function remove() {
    var id = 3;
     // var request = db.transaction(["linkObject"], "readwrite")
     // .objectStore("linkObject")
     // .delete(id);
     //
     // request.onsuccess = function(event) {
     //    alert("Kenny's entry has been removed from your database.");
     // };
  }

function preRemove(){
  getLastID(removed);
}

function removed(lastID) {
  var id = lastID;
  var request = db.transaction(["linkObject"], "readwrite")
  .objectStore("linkObject")
  .delete(id);

  request.onsuccess = function(event) {
     alert("Link has been removed from your database.");
  };
}


  //  function finishDeleteThis(id) {
  //    var idNum = Number(id);
   //
  //    var request = db.transaction(["linkObject"], "readwrite")
  //    .objectStore("linkObject")
  //    .delete(idNum);
   //
  //    request.onsuccess = function(event) {
  //     //  linkDataIndexed = linkDataIndexed.slice(1);
  //     location.reload();
  //       // alert("Item has been removed from your database.");
  //    };
  //  }

  //  function removeThisOne(lastID) {
   //
  //    alert(lastID);
  //    var id = lastID;
  //    var request = db.transaction(["linkObject"], "readwrite")
  //    .objectStore("linkObject")
  //    .delete(id);
   //
  //    request.onsuccess = function(event) {
  //       alert("Item has been removed from your database.");
  //    };
  //  }
// </script>
