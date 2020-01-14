    var myDataArr = data;
            console.log("Normal JSON:","\n",  myDataArr);
            /*var childArray = [];
            childArray = repetiveFunction(data,0);
            //console.log(childArray);

          function repetiveFunction(dataObject) {
            let locJSONArr = [];
            let subJSONArr = [];
            let locJSONArrSub1 = [];
            let locJSONArrSub2 = [];
            if(dataObject.length) {
              $(dataObject).each(function(ind,obj) { //Iterating object and merge arrays of object as a single object array
                  if(typeof obj[0] === "object") {
                      locJSONArr.push(obj[0]); //JSON object
                      
                  }
                  $(locJSONArr[ind].child).each(function(index,subOject) {
                    if(typeof subOject[0] === "object") {
                      locJSONArrSub1.push(subOject[0]); //JSON object
                    }
                  });

                  
                  //locJSONArr[0].child.length = null;
                  locJSONArr[ind].child = locJSONArrSub1;
              });
              
              console.log("Parsed JSON: ", locJSONArr);
            }
          }*/
