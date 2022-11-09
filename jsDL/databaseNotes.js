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
function setHeader(xhr) {

  xhr.setRequestHeader('Authorization', token);
}


$.get("http://localhost:8080/api/links", function(response) {
  console.log("Ajax Worked");
  console.log(response);
});


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
