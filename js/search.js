
                      //////////////////
 // -------------------- Search Filter
                      //////////////////

function clearSearchField() {
  //  $("search").value = "";
   document.getElementById("search").value = "";
   var noObjects = {};

   addDocsToTable(docObjects, 'search-list-group');

   var searchLegend2 = document.getElementById('search-legend');
   searchLegend2.style.display = 'none';
}


var allDocsArray = [];
var allDocsArrayIndex = {};
var allDocsArrayDB = {};
var dbDocsAdded = false;
var indexDocsAdded = false;


function buildCompleteListOfDocs(docDataDB) {
  allDocsArray = docDataDB;
}


$(".search-input").on("input", function(event) {
  //  resetRadioButtons();

   var $searchElem = $(event.currentTarget);
   var searchVal = $searchElem.val().toLowerCase();
   if (searchVal === "") {

    var emptyArray = {};
    addDocsToTable(emptyArray, 'search-list-group');

    var searchLegend = document.getElementById('search-legend');
    searchLegend.style.display = 'none';

    var emptySearchTable = document.getElementById('search-table-panel');
    emptySearchTable.style.display = 'none';

   } else {


     var docObjects = getDocsToDisplay(searchVal);
      console.log(docObjects);

    var fullSearchTable = document.getElementById('search-table-panel');
    fullSearchTable.style.display = 'block';
    addDocsToTable(docObjects, 'search-list-group');

    var searchLegend1 = document.getElementById('search-legend');
    searchLegend1.style.display = 'block';
 }

 });

 function stringContainsString (containerString, innerString) {
   if (innerString === "") {
     return false;}
   return containerString.indexOf(innerString) >= 0;
 }

 function getDocsToDisplay (searchVal) {
   return allDocsArray.filter(function (docObject) {
     var docTitle = docObject.title.toLowerCase();
     var informationText = docObject.information.toLowerCase();


     return stringContainsString(docTitle, searchVal)
     || stringContainsString(informationText, searchVal)
   });
 }
