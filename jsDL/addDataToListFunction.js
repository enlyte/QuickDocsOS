// function addDataToListGroup() {
//   doMore(linkDataIndexed);
// }

// "indexedDBLinks" and "databaseLinks"
function addDataToListGroup(linkDataIndexed, objectID, linkType) {
  var HTMLOutput = "";
  // <h4><a target="_blank" href="Link">Name</a>&nbsp;</h4>
  for ( var key in linkDataIndexed) {
    if (!linkDataIndexed.hasOwnProperty(key)) continue;
    var linkObj = linkDataIndexed[key];
    if(!linkObj.hasOwnProperty("hyperlink")) continue;
    if(!linkObj.hasOwnProperty("name")) continue;
    if(!linkObj.hasOwnProperty("description")) continue;



// <a target= "_blank" href="#" class="list-group-item list-group-item-custom">
// <h4 class="list-group-item-heading list-group-item-heading-custom"> Link Name</h4>
// <p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 4px;">http:// </p>
// <p class="list-group-item-text list-group-item-text-custom"> Description </p></a>


// HTMLOutput += '<li style="padding-bottom: 4px;">';
HTMLOutput += '<div class="list-group-item">';
// HTMLOutput += '<div class=""  style="display:inline-block; width: 90%">';
HTMLOutput += '<div>';

HTMLOutput += '<a target= "_blank" href="';
HTMLOutput += linkObj.hyperlink; // ["hyperlink"];
HTMLOutput += "\" class=\" list-group-item-custom\">";

HTMLOutput += '<h4 class="list-group-item-heading list-group-item-heading-custom ">';
HTMLOutput += linkObj.name; // ["name"];
HTMLOutput += '</h4>';

if(linkObj.description !== "") {
  HTMLOutput += '<p class="list-group-item-text list-group-item-text-custom" style="padding-bottom: 5px;">';
  HTMLOutput += linkObj.description; // ["description"];
  HTMLOutput += '</p>';
}

HTMLOutput += '<p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 2px;">';
HTMLOutput += linkObj.hyperlink; // ["hyperlink"];
HTMLOutput += '</p>';

HTMLOutput +=  '</a>';


HTMLOutput += "</div>";
    // alert(linkObj["id"]);
    // HTMLOutput += '<div>';

// HTMLOutput += '<div class= "div" style="display:inline-block">';

                    // BUTTONS

HTMLOutput += '<div style="margin-left: 90%; position: absolute; bottom: 15px; ">'; // Buttons Div // left:50px;


var deleteFunctionName = '';
var deleteObjectID = '';
if(linkType === "indexedDBLinks") {
  deleteFunctionName = 'deleteThis';
  // deleteObjectID = linkObj.linkID;
  deleteObjectID = linkObj.id;   ////////////////////////////// GOOD ONE
} else {
  deleteFunctionName = 'deleteThisDBObject'; // Name of Delete Function from DB
    // deleteObjectID = "'" + linkObj._id + "'";
    deleteObjectID = "'" + linkObj.linkID + "'";
}

// "indexedDBLinks" and "databaseLinks"

// if(linkType === "indexedDBLinks") {    // Use this to HIDE DELETE BUTTON on DB Files
if(linkType === "indexedDBLinks" || linkType === "databaseLinks") {  // Show Delete Buttons

// Button
  HTMLOutput += '<button class="glyphicon glyphicon-remove-sign" style="display:inline-block" id="';
  HTMLOutput += deleteObjectID; // linkObj.id; // ["id"];
  HTMLOutput += '"onclick="';
  HTMLOutput += deleteFunctionName;
  HTMLOutput += '('+ deleteObjectID +')"></button>';
};

// Update Button
// HTMLOutput += '<button class="glyphicon glyphicon-cog" data-toggle="modal" href="#myModalUpdate" style="display:inline-block" id="';
// HTMLOutput += deleteObjectID; // linkObj.id; // ["id"];
// HTMLOutput += '"onclick="';
// HTMLOutput += 'updateLink';
// HTMLOutput += '('+ deleteObjectID +')"></button>';

// Add Button
if( linkType === "databaseLinks") {  // Show only on Company Links
//  Make Function to Add To IndexedDB
  HTMLOutput += '<button class="glyphicon glyphicon-plus" style="display:inline-block" id="';
  HTMLOutput += deleteObjectID; // linkObj.id; // ["id"];
  HTMLOutput += '"onclick="';
  HTMLOutput += 'addLinkToIndexedDB';
  HTMLOutput += '('+ deleteObjectID +')"></button>';
};

HTMLOutput += '</div>';
HTMLOutput += '</div>';
    // HTMLOutput += '<a target= "_blank" href="';
    // HTMLOutput += linkObj["hyperlink"];
    // HTMLOutput += "\" class=\" list-group-item list-group-item-custom\">";
    // HTMLOutput += '<button class="pull-right glyphicon glyphicon-remove" id="';
    // HTMLOutput += linkObj["id"];
    // HTMLOutput += '"onclick="deleteThis(this.id)"></button>';
    // // HTMLOutput += '"onclick="removed(this.id)"></button>';
    // HTMLOutput += '<h4 class="list-group-item-heading list-group-item-heading-custom">';
    // HTMLOutput += linkObj["name"];
    // HTMLOutput += '</h4>';
    //
    // HTMLOutput += '<p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 4px;">';
    // HTMLOutput += linkObj["hyperlink"];
    // HTMLOutput += '</p></';
    //
    // HTMLOutput += '<p class="list-group-item-text list-group-item-text-custom style="padding-bottom: 4px;">';
    // HTMLOutput += linkObj["description"];
    // HTMLOutput += '</p>';
    //
    // HTMLOutput +=  '</a>';



    // HTMLOutput += '<input class="newtab-control newtab-control-block" type="button" title="Remove this site"/>';
    // HTMLOutput += '</div>';


	// '<a href="#" class="list-group-item">'+
	// 		'<h4 class="list-group-item-heading">Link Name</h4>'+
	// 		'<p class="list-group-item-text">Link Description</p>'+
	// '</a>'

  }

  var listGroupItem = document.getElementById(objectID);
  listGroupItem.innerHTML = HTMLOutput;
  // listGroupItem.innerHTML = "HTMLOutput";
}

// function deleteThis(id) {
//   // var thisOnesID = id;
//   // alert(thisOnesID);
//   var transaction = db.transaction(["linkObject"]);
//   var objectStore = transaction.objectStore("linkObject");
//   var request1 = objectStore.get(id);
//   // alert(request1);
//
//   var request = db.transaction(["linkObject"], "readwrite")
//   .objectStore("linkObject")
//   .delete(id);
//
//   request.onsuccess = function(event) {
//      alert("Item has been removed from your database.");
//   };
// }

//   removeThisOne(thisOnesID);
// }
//
// function removeThisOne(lastID) {
//   // alert(lastID);
//   var id = lastID;
//   var request = db.transaction(["linkObject"], "readwrite")
//   .objectStore("linkObject")
//   .delete(id);
//
//   request.onsuccess = function(event) {
//      alert("Item has been removed from your database.");
//   };
// }
