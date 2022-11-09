
var resourcesObjectsArray =
[
 {
   "name": "Product Finder",
   "hyperlink": "http://boskb.qas.com/productfinder/",
   "description": ""
 },
 {
   "name": "EDQ Technical Documentation",
   "hyperlink": "https://www.edq.com/documentation/",
   "description": ""
 },
 {
   "name": "Marketing Directory / Product Docs",
   "hyperlink": "http://zoomglobal/departments/EDQGLobalProductManagment/SitePages/Global%20Product%20Marketing%20Home.aspx",
   "description": ""
 },
 {
   "name": "Product Demonstrations",
   "hyperlink": "http://bossalesdemo.qas.com/",
   "description": ""
 },
 {
   "name": "Sales Self Help Portal",
   "hyperlink": "http://boskb.qas.com/presales/",
   "description": ""
 },
 {
   "name": "SaaS Self Service Portal",
   "hyperlink": "https://portal.experianmarketingservices.com/content/",
   "description": ""
 },
 {
   "name": "WebEx: Shared Meetings",
   "hyperlink": "https://qas.webex.com",
   "description": ""
 },
 {
   "name": "Salesforce",
   "hyperlink": "https://experian.my.salesforce.com",
   "description": ""
 },
 {
   "name": "Seismic",
   "hyperlink": "https://experian.seismic.com",
   "description": "Document Management / Resource Collab"
 },
 {
   "name": "Cerebro / Confluence",
   "hyperlink": "http://cerebro.qas.com/spacedirectory/view.action",
   "description": "Knowledge Base "
 },
 {
   "name": "BT Conferencing",
   "hyperlink": "http://www.btconferencing.com/experian/default.jsp?return-path=/experian/globalaccess/",
   "description": "Connect with colleagues around the world quickly and easily"
 },
 {
   "name": "Power BI",
   "hyperlink": "https://app.powerbi.com",
   "description": "Data Visualization Tool"
 }
 ];

 var gettingStartedObjectsArray = [
 {
   "name": "Engagedly",
   "hyperlink": "https://experian.engagedly.com",
   "description": "The Quad\" - Goal Tracking"
 },
 {
   "name": "YBR / UPoint",
   "hyperlink": "http://www.ybr.com/benefits/experian",
   "description": "Benefits Setup"
 },
 {
   "name": "Corporate Training",
   "hyperlink": "https://experian.sumtotalsystems.com",
   "description": "ID: Lan / PW: Training1"
 },
 {
   "name": "Corporate Training after initial login",
   "hyperlink": "https://lc.experian.com",
   "description": ""
 },
 {
   "name": "Zoom Global",
   "hyperlink": "http://zoomglobal/company/Pages/global-home.aspx",
   "description": "Experian Share Point - Also: Handling Expenses / Autopay"
 },
 {
   "name": "EDQ Blog",
   "hyperlink": "https://www.edq.com/blog/",
   "description": ""
 },
 {
   "name": "Perks at work",
   "hyperlink": "https://www.perksatwork.com/welcome/index/guid/1D8712CC-EC88-47CF-81FC-6008D50F7EBB",
   "description": ""
 }
];

// function hello() {
//   console.log("Hello");
// }
// hello();



var SELinkObjectsArray = [
  {
    'name' : 'Client Solutions - SE Self Help',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/',
    'description' : 'Coaches share their secrets to success so you can rock 2015. Join us for this inspiring '
    //  + 'rejuvenating, motivating look at what secret sauce these coaches use to succeed in their business. This is for coaches of any level that are committed to changing the world. You will be elevated both in your life and your coaching business. Check out the topics below, there is something for everyone  '
  }, {
    'name' : 'SE Login Credentials',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/sales-engineering/credentials-licenses-registrations-library/',
    'description' : ''
  }, {
    'name' : 'Capture Sample Code',
    'hyperlink' : 'https://www.edq.com/documentation/applications/capture-sample-code/',
    'description' : ''
  }, {
    'name' : 'Clean: Address Data Test',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/data-tests/address/clean/',
    'description' : ''
  }, {
    'name' : 'Email Validation Data Test',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/data-tests/email/email-validation/',
    'description' : ''
  }, {
    'name' : 'SE Onboarding',
    'hyperlink' : 'http://cerebro.qas.com/display/PRES/SE+Onboarding',
    'description' : ''
  }, {
    'name' : 'Data Tests - Sales',
    'hyperlink' : 'http://boskb.qas.com/presales/docs/client-solutions/data-tests/',
    'description' : ''
  }, {
    'name' : 'Data Tests - Processing',
    'hyperlink' : 'http://bosevportal.qas.com/accounts/login/',
    'description' : ''
  }, {
    'name' : 'Data Tests - Address (Clean) Walk Through',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/data-tests/address/clean/',
    'description' : ''
  }, {
    'name' : 'Data Tests - Address Walk Through',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/data-tests/address/',
    'description' : ''
  }, {
    'name' : 'Data Tests - Email Walk Through',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/data-tests/email/email-validation/',
    'description' : ''
  }, {
    'name' : 'Data Tests - Credentials',
    'hyperlink' : 'http://boskb.qas.com/clientsolutions/docs/sales-engineering/credentials-licenses-registrations-library/',
    'description' : ''
  }, {
    'name' : 'Example Addresses for Demos',
    'hyperlink' : 'http://boskb.qas.com/presales/docs/sales-tools-2/sample-addresses/ ',
    'description' : ''
  }

  // , {
  //   'name' : '',
  //   'hyperlink' : '',
  //   'description' : ''
  // }, {
  //   'name' : '',
  //   'hyperlink' : '',
  //   'description' : ''
  // }

];

function addInitialLinksToList(linkObjectsArray, listGroupItem) {
  var HTMLOutput = "";
  // <h4><a target="_blank" href="Link">Name</a>&nbsp;</h4>
  console.log(linkObjectsArray.length);

  for (var key in linkObjectsArray) {
    if (!linkObjectsArray.hasOwnProperty(key)) continue;
    var linkObj = linkObjectsArray[key];
    // console.log(linkObj);
    if(!linkObj.hasOwnProperty("hyperlink")) continue;
    if(!linkObj.hasOwnProperty("name")) continue;
    // if(!linkObj.hasOwnProperty("description")) continue;

    // alert(linkObj.hasOwnProperty("_id"));
    var addPlus = false;
      if (linkObj.hasOwnProperty("_id")) {
          addPlus = true;
          // console.log(addPlus);
      }

// <a target= "_blank" href="#" class="list-group-item list-group-item-custom">
// <h4 class="list-group-item-heading list-group-item-heading-custom"> Link Name</h4>
// <p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 4px;">http:// </p>
// <p class="list-group-item-text list-group-item-text-custom"> Description </p></a>

    // HTMLOutput += '<li style="padding-bottom: 4px;">';
    HTMLOutput += '<div class="list-group-item">';
    HTMLOutput += '<div>';

    HTMLOutput += '<a target= "_blank" href="';
    HTMLOutput += linkObj.hyperlink; // ["hyperlink"];
    HTMLOutput += "\" class=\"list-group-item-custom\">";



    HTMLOutput += '<h4 class="list-group-item-heading list-group-item-heading-custom ">';
    HTMLOutput += linkObj.name; // ["name"];
    HTMLOutput += '</h4>';

    if(linkObj.description !== "") { // ["description"] !== "") {
      HTMLOutput += '<p class="list-group-item-text list-group-item-text-custom" style="padding-bottom: 5px;">';
      HTMLOutput += linkObj.description; // ["description"];
      HTMLOutput += '</p>';
    }

    HTMLOutput += '<p class="list-group-item-text list-group-item-link-custom" style="padding-bottom: 2px;">';
    HTMLOutput += linkObj.hyperlink; // ["hyperlink"];
    HTMLOutput += '</p>';



    HTMLOutput +=  '</a>';
    HTMLOutput += '</div>';
    // Add Button
    if( addPlus === true) {  // Show only on Company Links
    //  Make Function to Add To IndexedDB
    console.log(addPlus);
    // alert(addPlus);
      var addObjectID = "'" + linkObj.linkID + "'";

      HTMLOutput += '<div>';
      //HTMLOutput += '<div style="margin-left: 90%; position: absolute; bottom: 15px;>';

      HTMLOutput += '<button class="glyphicon glyphicon-plus" style="display:inline-block" id="';
      HTMLOutput += addObjectID; // linkObj.id; // ["id"];
      HTMLOutput += '"onclick="';
      HTMLOutput += 'addLinkToIndexedDB';
      HTMLOutput += '('+ addObjectID +')"></button>';
      HTMLOutput += '</div>';
    };


HTMLOutput += '</div>';
    // HTMLOutput += '</li>';
  }

  // var listGroupItem = document.getElementById('list-group1');
  listGroupItem.innerHTML = HTMLOutput;
}

// Add SE Array to List
var listGroupItem1 = document.getElementById('se-list-group');
addInitialLinksToList(SELinkObjectsArray, listGroupItem1);

var listGroupItem2 = document.getElementById('resources-list-group');
addInitialLinksToList(resourcesObjectsArray, listGroupItem2);

var listGroupItem3 = document.getElementById('getting-started-list-group');
addInitialLinksToList(gettingStartedObjectsArray, listGroupItem3);
