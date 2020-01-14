<!DOCTYPE html>
<html>
<head>
                <title></title>
                <script type="text/javascript" src="jquery.min.js"></script>
                 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.js"></script>
   <link rel="stylesheet" href ="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
   <script type="text/javascript" src="https://cdn.datatables.net/rowgroup/1.0.0/js/dataTables.rowGroup.js"></script>
   <script type="text/javascript" src="https://gyrocode.github.io/jquery-datatables-checkboxes/1.2.9/js/dataTables.checkboxes.min.js"></script>
   <link rel="stylesheet" type="text/css" href="https://gyrocode.github.io/jquery-datatables-checkboxes/1.2.9/css/dataTables.checkboxes.css">
</head>
<body>

<script type="text/javascript">
                var data = [
   [
      {
         "id":"1",
         "hide_primary_nav":"false",
         "isClickable":"yes",
         "linkType":"link",
         "title":"Level 1 QA_Pages",
         "url":"/content/Testing/Home",
         "newTab":"yes",
         "parent":"0",
         "child":[
            [
               {
                  "id":"3",
                  "hide_primary_nav":"false",
                  "title":"Level 2 Hero Boot Strap",
                  "url":"/content/wholesale/qa_pages/hero_boot_strap_carousel",
                  "parent":"1",
                  "child":[
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 menu1",
                           "url":"/content/wholesale/qa_pages/hero_boot_strap_carousel1/header",
                           "parent":"2"
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 menu2",
                           "url":"/content/wholesale/qa_pages/hero_boot_strap_carousel2/header",
                           "parent":"2"
                        }
                     ]
                  ]
               }
            ],
            [
               {
                  "id":"4",
                  "hide_primary_nav":"false",
                  "title":"Level 2 search_component",
                  "url":"/content/wholesale/qa_pages/search_component",
                  "parent":"1"
               }
            ],
            [
               {
                  "id":"5",
                  "hide_primary_nav":"false",
                  "title":"Level 2 Text Component",
                  "url":"/content/wholesale/qa_pages/text_component",
                  "parent":"1"
               }
            ]
         ]
      }
   ],
   [
      {
         "id":"2",
         "hide_primary_nav":"false",
         "isClickable":"yes",
         "linkType":"link",
         "title":"Level 1 DCM-POC ",
         "url":"/content/financial/careers",
         "newTab":"yes",
         "parent":"0",
         "child":[
            [
               {
                  "id":"6",
                  "hide_primary_nav":"false",
                  "title":"Level 2 Who We Are",
                  "url":"/content/wholesale/dcm-poc/who-we-are",
                  "parent":"1",
                  "child":[
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 About Us",
                           "url":"/content/wholesale/ dcm-poc /who-we-are/about-us",
                           "parent":"2"
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Leadership",
                           "url":"/content/wholesale/ dcm-poc /who-we-are/leadership",
                           "parent":"2",
                           "child":[
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Manny A. Brown",
                                    "url":"/content/wholesale/ dcm-poc /who-we-are/leadership/manny-a-brown",
                                    "parent":"3"
                                 }
                              ],
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Eric Rosen",
                                    "url":"/content/wholesale/ dcm-poc /who-we-are/leadership/eric-rosen",
                                    "parent":"3"
                                 }
                              ]
                           ]
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Representative Transactions",
                           "url":"/content/wholesale/ dcm-poc /who-we-are/representative-transactions",
                           "parent":"1"
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Contacts & Locations",
                           "url":"/content/wholesale/dcm-poc/who-we-are/contacts-locations",
                           "parent":"1"
                        }
                     ]
                  ]
               },
               {
                  "id":"7",
                  "hide_primary_nav":"false",
                  "title":"Level 2 Representative Transactions",
                  "url":"/content/wholesale/ dcm-poc /who-we-are/leadership",
                  "parent":"1"
               },
               {
                  "id":"8",
                  "hide_primary_nav":"false",
                  "title":"Level 2 Manny A. Brown",
                  "url":"/content/wholesale/ dcm-poc /who-we-are/leadership",
                  "parent":"1"
               }
            ],
            [
               {
                  "id":"9",
                  "hide_primary_nav":"true",
                  "title":"Level 2 Services & Solutions",
                  "url":"/content/wholesale/dcm-poc-cohen/services-solutions",
                  "parent":"1",
                  "child":[
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Capital Markets",
                           "url":"/content/wholesale/dcm-poc/services-solutions/capital-markets",
                           "parent":"2",
                           "child":[
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Debt Advisory",
                                    "url":"/content/wholesale/dcm-poc/services-solutions/capital-markets/advisory",
                                    "parent":"3"
                                 }
                              ],
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Debt Placement",
                                    "url":"/content/wholesale/dcm-poc/services-solutions/capital-markets/debt-placement",
                                    "parent":"3"
                                 }
                              ]
                           ]
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Investor Services",
                           "url":"/content/wholesale/dcm-poc/services-solutions/investor-services",
                           "parent":"2",
                           "child":[
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Primary Servicing Asset Management",
                                    "url":"/content/wholesale/dcm-poc /services-solutions/investor-services/primary-servicing-asset-management",
                                    "parent":"3"
                                 }
                              ],
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Special Servicing",
                                    "url":"/content/wholesale/dcm-poc /services-solutions/investor-services/special-servicing",
                                    "parent":"3"
                                 }
                              ],
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Construction Loan Administration",
                                    "url":"/content/wholesale/dcm-poc /services-solutions/investor-services/construction-loan-administration",
                                    "parent":"3"
                                 }
                              ],
                              [
                                 {
                                    "hide_primary_nav":"false",
                                    "title":"Level 4 Asset Advisory Services",
                                    "url":"/content/wholesale/dcm-poc /services-solutions/investor-services/asset-advisory-services",
                                    "parent":"3"
                                 }
                              ]
                           ]
                        }
                     ]
                  ]
               }
            ],
            [
               {
                  "id":"10",
                  "hide_primary_nav":"true",
                  "title":"Level 2 Insights & Resources",
                  "url":"/content/wholesale/dcm-poc /insights-resources",
                  "parent":"1",
                  "child":[
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 In The News",
                           "url":"/content/wholesale/dcm-poc /insights-resources/in-the-news",
                           "parent":"2"
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Insights PAGE WILL BE REMOVED AS NO LONGER NEEDED",
                           "url":"/content/wholesale/dcm-poc /insights-resources/insights",
                           "parent":"2"
                        }
                     ],
                     [
                        {
                           "hide_primary_nav":"false",
                           "title":"Level 3 Industry Resources",
                           "url":"/content/wholesale/dcm-poc /insights-resources/industry-resources",
                           "parent":"2"
                        }
                     ]
                  ]
               }
            ]
         ]
      }
   ]
];
</script>
<script type="text/javascript">
  console.log("Normal JSON: ",  data);
  var childArray = [];
  childArray = repetiveFunction(data,0);
  //console.log(childArray);

  function repetiveFunction(dataObject,arrIdx) {
    let myIdx = arrIdx;
    let locJSONArr = [];
    let subJSONArr = [];
    let locJSONArrSub1 = [];
    let locJSONArrSub2 = [];
    if(dataObject.length) {
      $(dataObject).each(function(ind,obj) { //Iterating object and merge arrays of object as a single object array
          if(typeof obj[0] === "object") {
              locJSONArr.push(obj[0]); //JSON object
              
          }
      });
      //console.log(locJSONArr);

      //console.log(locJSONArr[0].child);

      $(locJSONArr[0].child).each(function(index,subOject) {
        if(typeof subOject[0] === "object") {
          locJSONArrSub1.push(subOject[0]); //JSON object
        }
      });

      
      locJSONArr[0].child.length = null;
      locJSONArr[0].child = locJSONArrSub1;
      console.log("Parsed JSON: ", locJSONArr);
     /* $(locJSONArrSub1[0].child).each(function(index,subOject2) {
        if(typeof subOject2[0] === "object") {
          locJSONArrSub2.push(subOject2[0]); //JSON object
        }
      });

      console.log(locJSONArrSub2);*/
      /*if(locJSONArr.length) {
          $(locJSONArr).each(function(index,subOject) {
              if(locJSONArr[0].hide_primary_nav == "false") {
                //childArray[arrIdx] = [];
                if(locJSONArr[0].hasOwnProperty("child") && typeof locJSONArr[0] == "object") {
                subJSONArr[myIdx] = repetiveFunction(locJSONArr[0],index);
                } else {
                                subJSONArr[myIdx] = locJSONArr[0];
                }
              }
          });
      }

      return subJSONArr;*/
    }
    //return locJSONArr;
  }

</script>
</body>
</html>


