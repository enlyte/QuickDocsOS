// var linkObjectsFromDB = [];

// var rando = Math.random().toString(36).slice(2);
// alert(rando);



//                    Get links from DB

// $.get("http://localhost:8080/api/links", function(response) {
//   console.log("Ajax Worked");
//   console.log(response);
//
// });

var linkObjectsFromDBGlobal = [];

console.log("in Database");
var hostName = "http://localhost:8080/api/links"; // Where index.js is running
// var hostName = "http://localhost:8080/api/links";

var jqxhr = $.ajax({
    url: hostName,
    dataType: "json",
    type: 'GET',
    success: function(response) {
          console.log(response);
          var linkObjectsFromDB = [];
          for (var key in response) {
            linkObjectsFromDB.push(response[key]);
          }
          linkObjectsFromDBGlobal = linkObjectsFromDB;

            addDataToListGroup(linkObjectsFromDB, "db-group", "databaseLinks");
            buildCompleteListOfLinks(linkObjectsFromDB, true, false);
            //  $.fn.addDataToListGroup(linkObjectsFromDB, "db-group");
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log('POST failed.');
            console.log(responseData);
            // console.log(textStatus);
            // console.log(errorThrown);
            // callback();
        }
});
jqxhr.done(function(response) {
  // for (var key in response) {
  //   linkObjectsFromDB.push(response[key]);
  // }
  // addDataToListGroup(linkObjectsFromDB, "db-group");
});
jqxhr.done(function(catalog) {
    // use catalog again
});


// var test = [{'id' : '234', 'name' : 'fdas', 'hyperlink': 'adsf', 'description': 'asdf'}];
// addDataToListGroup(test, "db-group");


//
//
// $.ajax({
//     url: 'http://localhost:8080/api/links',
//     // data: myData,
//     type: 'GET',
//     dataType: 'json',
//     success: function(response) {
//       console.log(response);
//
//       for (var key in response) {
//         linkObjectsFromDB.push(response[key]);
//       }
//
//       console.log("linke objects db: ");
//       console.log(linkObjectsFromDB);
//       // buildCompleteListOfLinks(linkObjectsFromDB);
//       console.log(linkObjectsFromDB.length);
//       addDataToListGroup(linkObjectsFromDB, "db-group");
//
//       // linkObjectsFromDB = response;
//       // linkObjectsFromDB = jQuery.parseJSON(response);
//
//     },
//     error: function() { console.log('Get Failed!'); },
//     complete: function() {console.log("Get Complete");}
// });
//
// console.log("outside call");
// console.log(linkObjectsFromDB);
// addDataToListGroup(linkObjectsFromDB, "db-group");






// var myData = {testData: "New one2"};
// $.post("http://localhost:8080/api/links", myData);
// // , function() {
// //   console.log("Post worked");
// // });

// var myData = {testData: "New one2"};
// postLink(myData);

function postLinkToDatabase(myData, callback) {
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
          // console.log(errorThrown);
          callback();
      }
  });

}





// var urlToDelete = 'http://localhost:8080/api/links/5947fbca001e6857d40e019c';
// $.ajax({
//     url: urlToDelete,
//     type: 'DELETE',
//     crossDomain: true,
//     success: function() {
//       console.log("Delete Worked");
//     },
//     error: function() { console.log('Delete Failed!'); },
//     complete: function() {
//       console.log("Delete Complete");}
// });



function deleteThisDBObject(id) {
  if (confirm('Are you sure you want to remove this link?')) {
 // Delete!
    //  var idNum = id; // Number(id);

    // $.get("http://localhost:8080/api/links/" + id, function(response) {
    //   console.log("Ajax Worked");
    //   console.log(response);
    //
    // });

    var deleteURL = hostName + '/' + id;
    console.log(deleteURL);

     $.ajax({
         url: deleteURL,
         type: 'DELETE',
         crossDomain: true,
         success: function() {
          //  console.log(a);
           console.log("Delete Worked");
         },
         error: function() { console.log('Delete Failed!'); },
         complete: function() {
           location.reload();
           console.log("Delete Complete");}
     });


    //  var request = db.transaction(["linkObject"], "readwrite")
    //  .objectStore("linkObject")
    //  .delete(idNum);
     //
    //  request.onsuccess = function(event) {
    //   //  linkDataIndexed = linkDataIndexed.slice(1);
      // location.reload();
        // alert("Item has been removed from your database.");
  //    };
   } else {
       // Do nothing!
   }
}




// var myData = {testData: "Hey"};


// var myData = { name: "linkName", hyperlink: "hyperlink", description: "linkDescription" };
//  postLink(myData);





// var myData = {testData: "Hey"};
// $.ajax({
//     url: 'http://localhost:8080/api/links',
//     data: myData,
//     type: 'POST',
//     crossDomain: true,
//     // dataType: 'json',
//     success: function() {
//       console.log("Post Worked");
//     },
//     error: function() { console.log('Post Failed!'); },
//     complete: function() {console.log("Post Complete");}
// });


// $.ajax({
//
//     url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
//     data: myData,
//     type: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp',
//     success: function() { alert("Success"); },
//     error: function() { alert('Failed!'); },
//     beforeSend: setHeader
// });





























// var cors = require('cors')
// var app = express()
// app.use(cors())

// // var databaseLinks =
// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", "http://localhost:8080/api/links", true);
// // xhttp.open("http://localhost:8080/api/links", false);
// xhttp.setRequestHeader("Content-type", "application/json");
// xhttp.send();
// var response = JSON.parse(xhttp.responseText);
// console.log(response);

// $.getJSON("http://localhost:8080/api/links?callback=?", function(result){
//    //response data are now in the result variable
//    alert(result);
// });

// $.ajax({
//
//     url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
//     data: myData,
//     type: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp',
//     success: function() { alert("Success"); },
//     error: function() { alert('Failed!'); },
//     beforeSend: setHeader
// });




//
// var results = {};
// $(document).ready(function(){
//   console.log("Inside On ready");
//                 $.ajax({
//                     // url: 'http://boskb.qas.com/api/links',
//                     url: 'http://localhost:8080/api/links',
//                     // crossDomain: true,
//                     dataType: 'jsonp',
//                     success: function(response){
//                       // results = JSON.parse(response);
//                       if (window.console) console.log('foo');
//                       console.log(response);
//                         // var text = '';
//                         // var len = dataWeGotViaJsonp.length;
//                         // for(var i=0;i<len;i++){
//                         //     twitterEntry = dataWeGotViaJsonp[i];
//                         //     text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
//                       },
//             error: function(XMLHttpRequest, textStatus, errorThrown) {
//                 alert("Status: " + textStatus); alert("Error: " + errorThrown);
//             },
//             // beforeSend: setHeader
//                         // $('#twitterFeed').html(text);
//
//                 });
//             });


// var results = {};
// $(document).ready(function(){
//   console.log("Inside On ready");
//                 $.ajax({
//                     // url: 'http://boskb.qas.com/api/links',
//                     url: 'http://localhost:8080/api/links',
//                     dataType: 'jsonp',
//                     success: function(response){
//                       results = JSON.parse(response);
//                       if (window.console) console.log('foo');
//                       // window.console&&console.log('foo');
//                       // window.console&&console.log(data);
//                       // console.log("Inside Success");
//                       // console.log(data);
//                         // var text = '';
//                         // var len = dataWeGotViaJsonp.length;
//                         // for(var i=0;i<len;i++){
//                         //     twitterEntry = dataWeGotViaJsonp[i];
//                         //     text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
//                       }
//                         // $('#twitterFeed').html(text);
//
//                 });
//             });

// $.ajax({
//        headers:{
//           // "key":"your key",
//     // "Accept":"application/json",//depends on your api
//     // "Origin": "file:///C:/Users/c18704a/Documents/Websites/Directory/DirectoryliveNMDB/index.html",
//      "Content-type":"application/json"//depends on your api
//
//       //  },   url:"http://localhost:8080/api/links",
//     },   dataType: 'jsonp',
//     url:"http://boskb.qas.com/api/links",
//        success:function(response){
//          var results = JSON.parse(response);
//         //  $("#main").html(r.base);
//         console.log(results);
//        }
//      });



//     // Empty Call
// var xhttp = new XMLHttpRequest();
// xhttp.open("POST", "Your Rest URL Here", false);
// xhttp.setRequestHeader("Content-type", "application/json");
// xhttp.send();
// var response = JSON.parse(xhttp.responseText);
