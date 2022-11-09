var currentIDToUpdate = '';

function updateLink(id) {
  currentIDToUpdate = id;

  // console.log("Hello");
  // console.log(id);
  // alert(id);
  // alert("Update");

  var stringID = "" + id;
  // alert(id);

  if (id.length < 10000) { // If link is for DB, not INDEXED

    var updateURL = hostName + '/' + id;
    var linkObjectToUpdate = {};
    $.ajax({
        url: updateURL,
        dataType: "json",
        type: 'GET',
        success: function(response) {
              console.log(response);
              linkObjectToUpdate = response;

              document.getElementById("update-link-name").value = response.name;
              document.getElementById("update-hyperlink").value = response.hyperlink;
              document.getElementById("update-link-description").value = response.description;
              // var linkObjectsFromDB = [];
              // for (var key in response) {
              //   linkObjectsFromDB.push(response[key]);
              // }
              // console.log(linkObjectsFromDB);

                // addDataToListGroup(linkObjectsFromDB, "db-group", "databaseLinks");
                // buildCompleteListOfLinks(linkObjectsFromDB, true, false);
                //  $.fn.addDataToListGroup(linkObjectsFromDB, "db-group");
            }
    });
    // console.log("outside");
    // console.log(linkObjectToUpdate);

    // document.getElementById("update-link-name").value = "abc";
    // document.getElementById("update-hyperlink").value = "v";
    // document.getElementById("update-link-description").value = "Des";
  }
};

function preUpdateThis() {
  // alert("About to update");
var updateName = document.getElementById("update-link-name").value;
var updateLink =  document.getElementById("update-hyperlink").value;
var updateDescription =  document.getElementById("update-link-description").value;

// var updateURL = hostName; // + '/' + id;
var updateURL = hostName + '/' + currentIDToUpdate;
console.log("Before Update, Location: ");
console.log(updateURL);
console.log(currentIDToUpdate);
// currentIDToUpdate
// Change this to a PUT
  $.ajax({
      url: updateURL,
      dataType: "json",
      type: 'PUT',
      crossDomain: true,
      // data: '{"_id": "' + currentIDToUpdate + '", "name": "TEST", "hyperlink": "httphypertest.com", "description" : "DESC", "arraySearchWords[]" : []}',
      data: '{_id: "' + currentIDToUpdate + '", name: "TEST", hyperlink: "httphypertest.com", description : "DESC", arraySearchWords[] : []}',
      success: function(response) {
            console.log(response);
            console.log("Success");
            // linkObjectToUpdate = response;
          }
  });

  // function postLinkToDatabase(myData, callback) {
  //   $.ajax({
  //       type: 'POST',
  //       url: hostName,
  //       crossDomain: true,
  //       data: myData,
  //       dataType: 'json',
  //       success: function(responseData, textStatus, jqXHR) {
  //         console.log("Post Worked");
  //         console.log(responseData);
  //         var value = responseData._id;
  //         console.log(value);
  //         var value1 = responseData.testData;
  //         console.log(value1);
  //         callback();
  //       },
  //       error: function (responseData, textStatus, errorThrown) {
  //           console.log('POST failed.');
  //           console.log(responseData);
  //           console.log(textStatus);
  //           // console.log(errorThrown);
  //           callback();
  //       }
  //   });
  //
  // }

}
