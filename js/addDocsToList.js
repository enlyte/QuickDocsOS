function addDocsToList(docObjectsArray, elementID) {
  var HTMLOutput = "";
  // <h4><a target="_blank" href="Link">Name</a>&nbsp;</h4>
  console.log(docObjectsArray.length);

  for (var key in docObjectsArray) {
    if (!docObjectsArray.hasOwnProperty(key)) continue;
    var docObj = docObjectsArray[key];
    // console.log(docObj);
    if(!docObj.hasOwnProperty("hyperlink")) continue;
    if(!docObj.hasOwnProperty("title")) continue;
    if(!docObj.hasOwnProperty("information")) continue;

    var docInfoTrunk = docObj.information.substring(0,255);

    // if(!docObj.hasOwnProperty("description")) continue;

    // alert(docObj.hasOwnProperty("_id"));
    var addPlus = false;
      if (docObj.hasOwnProperty("_id")) {
          addPlus = true;
          // console.log(addPlus);
      }

      HTMLOutput += '<div class="list-group-item">';
      HTMLOutput += '<div>';

      // HTMLOutput += '<a target= "_blank" href="';
      // HTMLOutput += docObj.hyperlink; // ["hyperlink"];
      // HTMLOutput += "\" class=\"list-group-item-custom\">";

      HTMLOutput += '<h4 class="list-group-item-heading list-group-item-heading-custom ">';
      HTMLOutput += docObj.title; // ["name"];
      HTMLOutput += '</h4>';

      if(docObj.information !== "") { // ["description"] !== "") {
        HTMLOutput += '<p class="list-group-item-text list-group-item-text-custom" style="padding-bottom: 5px;">';
        HTMLOutput += docInfoTrunk; // ["description"];
        HTMLOutput += '</p>';
      }

      HTMLOutput += '<p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 2px;">';
      HTMLOutput += docObj.hyperlink; // ["hyperlink"];
      HTMLOutput += '</p>';

      // HTMLOutput +=  '</a>';
      HTMLOutput += '</div>';
      // Add Button
      if( addPlus === true) {  // Show only on Company Links
      //  Make Function to Add To IndexedDB
      // console.log(addPlus);
      // alert(addPlus);
        var addObjectID = "'" + docObj.docID + "'";

        HTMLOutput += '<div>';
        //HTMLOutput += '<div style="margin-left: 90%; position: absolute; bottom: 15px;>';

        HTMLOutput += '<button class="glyphicon glyphicon-plus" style="display:inline-block" id="';
        HTMLOutput += addObjectID; // docObj.id; // ["id"];
        HTMLOutput += '"onclick="';
        HTMLOutput += 'adddocToIndexedDB';
        HTMLOutput += '('+ addObjectID +')"></button>';
        HTMLOutput += '</div>';
      };


  HTMLOutput += '</div>';

      // HTMLOutput += '</li>';
    }

    // var listGroupItem = document.getElementById('list-group1');
    var listGroupItem = document.getElementById(elementID);
    listGroupItem.innerHTML = HTMLOutput;

    // addDocsToTable(docObjectsArray, 'doc-table');

  }


function addDocsToTable(docObjectsArray, elementID) {
  var HTMLOutput = "";

    for (var i = 0 ; i < docObjectsArray.length ; i++) {
      // for (var key in docObjectsArray) {
      if (!docObjectsArray.hasOwnProperty(i)) continue;
      var docObj = docObjectsArray[i];
      // console.log(docObj);
      if(!docObj.hasOwnProperty("hyperlink")) continue;
      if(!docObj.hasOwnProperty("title")) continue;
      if(!docObj.hasOwnProperty("information")) continue;

      var docInfoTrunk = docObj.information.substring(0,400)
      if(docObj.information.length > 400) {
          docInfoTrunk += "...";
        }


    HTMLOutput +='<tr id="'+ (i) + '"/>'+
								'<td>'+
                '<h4><b class="blueHeading">'+
                docObj.title +
                '</b></h4>'+
                '<p>'+
                docInfoTrunk +
                '</p>'+
								'<td>'+
						'</tr>'
    }


  var listGroupItem = document.getElementById(elementID);
  listGroupItem.innerHTML = HTMLOutput;
}

function addRowHandlers(currentList) {
    var table = document.getElementById("doc-table");
    var rows = table.getElementsByTagName("tr");

    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler =
        function(row){
          return function() {

            var rowId = row.id;
            var selectedRow = currentList[rowId];
            // alert("Row "+ rowId + " Clicked")
            var columns = addAllColumnHeaders(currentList);

            var docTitle = selectedRow[columns[1]];
            $("#selected-modal-title").html(docTitle);

            var quillText = JSON.parse(selectedRow[columns[6]]); // Quill
            console.log(quillText);

            quill2.setContents(quillText);

            $('#selected-modal').modal('show');
            // $('#myModal').modal('show');
          };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }
  }

function addDocsToTable1(docObjectsArray, elementID) {
  var columns = addAllColumnHeaders(docObjectsArray);
  for (var i = 0 ; i < docObjectsArray.length ; i++) {
      var row$ = $('<tr id="'+ (i + 1) + '"/>');
      for (var colIndex = 0 ; colIndex < 4 ; colIndex++) {//columns.length ; colIndex++) {
     //  for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
          var cellValue = docObjectsArray[i][columns[colIndex]];
          if (cellValue == null) { cellValue = ""; }
          row$.append($('<td/>').html(cellValue));
      }
      $(elementID).append(row$);
  }
}

function addAllColumnHeaders(theList) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0 ; i < theList.length ; i++) {
        var rowHash = theList[i]; //['products']
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1){
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
   //  $("#excelDataTable").append(headerTr$);

   // HEADERS

    return columnSet;
}

function addTableHeader() {

  var tr1 = document.getElementById('doc-table');
  thead1 = document.createElement('thead');
  tr1.appendChild(thead1);

  var tr2 = document.getElementById('doc-table').tHead;
  thead2 = document.createElement('tr');
  tr2.appendChild(thead2);

  var tr = document.getElementById('doc-table').tHead.children[0],
  th = document.createElement('th');
  th.innerHTML = "Product";
  tr.appendChild(th);

  th1 = document.createElement('th');
  th1.innerHTML = "Category";
  tr.appendChild(th1);

  th2 = document.createElement('th');
  th2.innerHTML = "Type";
  tr.appendChild(th2);

  th3 = document.createElement('th');
  th3.innerHTML = "Deployment";
  tr.appendChild(th3);
}
