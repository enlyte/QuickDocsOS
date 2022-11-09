
                      //////////////////
 // -------------------- Search Filter
                      //////////////////

function clearSearchField() {
  //  $("search").value = "";
   document.getElementById("search").value = "";
   var noObjects = {};
   var searchListGroup2 = document.getElementById('search-list-group');
   addInitialLinksToList(noObjects, searchListGroup2);

   var searchLegend2 = document.getElementById('search-legend');
   searchLegend2.style.display = 'none';
}


var allLinksArray = [];
var allLinksArrayIndex = {};
var allLinksArrayDB = {};
var dbLinksAdded = false;
var indexLinksAdded = false;


function buildCompleteListOfLinksOld(linkDataIndexed) {
  allLinksArray = resourcesObjectsArray.concat(gettingStartedObjectsArray.concat(SELinkObjectsArray.concat(linkDataIndexed)));
}

function buildCompleteListOfLinks(linkDataIndexed, dbLinkBool, indexLinkBool) {
  if(dbLinkBool) {
    dbLinksAdded = true;
    allLinksArrayDB = resourcesObjectsArray.concat(gettingStartedObjectsArray.concat(SELinkObjectsArray.concat(linkDataIndexed)));
  }
  if(indexLinkBool) {
    indexLinksAdded = true;
    allLinksArrayIndex = resourcesObjectsArray.concat(gettingStartedObjectsArray.concat(SELinkObjectsArray.concat(linkDataIndexed)));
  }

  if(dbLinksAdded && indexLinksAdded) {
    buildCompleteListOfLinksReal(allLinksArrayIndex, allLinksArrayDB);
  //   allLinksArrayPre = allLinksArrayIndex.concat(allLinksArrayDB);
  //     var shouldAdd = true;
  //   for(var key1 in allLinksArrayPre) {
  //     for(var key2 in allLinksArray) {
  //
  //       if (allLinksArrayPre[key1].name === allLinksArray[key2].name) {
  //         shouldAdd = false;
  //       }
  //     }
  //      if (shouldAdd === true) {
  //       allLinksArray.push(allLinksArrayPre[key1]);
  //     }
  //     shouldAdd = true;
  //   }
   }
}

function buildCompleteListOfLinksReal(allLinksArrayIndex, allLinksArrayDB) {
  allLinksArrayPre = allLinksArrayIndex.concat(allLinksArrayDB);
    var shouldAdd = true;
  for(var key1 in allLinksArrayPre) {
    for(var key2 in allLinksArray) {

      if (allLinksArrayPre[key1].name === allLinksArray[key2].name) {
        shouldAdd = false;
      }
    }
     if (shouldAdd === true) {
      allLinksArray.push(allLinksArrayPre[key1]);
    }
    shouldAdd = true;
  }
}



$(".search-input").on("input", function(event) {

  //  resetRadioButtons();

   var $searchElem = $(event.currentTarget);
   var searchVal = $searchElem.val().toLowerCase();
   if (searchVal === "") {
    //  $(".table tr").remove();
    //  addTableHeader();
    //  buildHtmlTable(myList);
    //  addRowHandlers(myList);
    var emptyArray = {};
    var searchListGroup = document.getElementById('search-list-group');
    addInitialLinksToList(emptyArray, searchListGroup);

    var searchLegend = document.getElementById('search-legend');
    searchLegend.style.display = 'none';

   } else {
     var linkObjects = getLinksToDisplay(searchVal);
      console.log(linkObjects);

    //  $(".table tr").remove();
    //  addTableHeader();
    //  buildHtmlTable(products);
    //  addRowHandlers(products);
    // Add SE Array to List
    var searchListGroup1 = document.getElementById('search-list-group');
    addInitialLinksToList(linkObjects, searchListGroup1);

    var searchLegend1 = document.getElementById('search-legend');
    searchLegend1.style.display = 'block';
 }

 });

 function stringContainsString (containerString, innerString) {
   if (innerString === "") {
     return false;}
   return containerString.indexOf(innerString) >= 0;
 }

 function getLinksToDisplay (searchVal) {
   return allLinksArray.filter(function (linkObject) {
     var linkName = linkObject.name.toLowerCase();
     var hyperLinkText = linkObject.hyperlink.toLowerCase();
     var descriptionText = linkObject.description.toLowerCase();


     return stringContainsString(linkName, searchVal)
     || stringContainsString(hyperLinkText, searchVal)
     || stringContainsString(descriptionText, searchVal)
   });
 }

 // function displayProducts (products) {
 //   var productNames = products.map(function (product) {
 //     return product.productname;
 //   });
 //
 //   $(".product-name").text(productNames.join(", "));
 // }













// Make sure in jsFiddle you have selected option onLoad
// (function() {
//   var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
//   var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
//   gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
//       '//www.google.com/cse/cse.js?cx=' + cx;
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
// })();
