


// const senatArr = data.results[0].members;

// function buildTable(senatArr) {
//   document.getElementById("senate-data").innerHTML = "";

//   let table = document.getElementById("senate-data");
//   let tblBody = document.createElement("tbody");
//   let thead = document.createElement("thead");
// //HEADER
//     let th = document.createElement("th");
//     let th2 = document.createElement("th");
//     let th3 = document.createElement("th");
//     let th4 = document.createElement("th");
//     let th5 = document.createElement("th");


//     let textHeader = document.createTextNode("First Name");
//     let textHeader2 = document.createTextNode("Party");
//     let textHeader3 = document.createTextNode("State");
//     let textHeader4 = document.createTextNode("Seniority");
//     let textHeader5 = document.createTextNode("Percentage of votes with party");

//     th.appendChild(textHeader);
//     th2.appendChild(textHeader2);
//     th3.appendChild(textHeader3);
//     th4.appendChild(textHeader4);
//     th5.appendChild(textHeader5);

//     thead.appendChild(th)
//     thead.appendChild(th2)
//     thead.appendChild(th3)
//     thead.appendChild(th4)
//     thead.appendChild(th5)

//   //cells 
//     for (var i = 0; i < senatArr.length; i++) {
//       let link = document.createElement("a");
//       link.setAttribute("href", senatArr[i].url)


//       let tr = document.createElement("tr")
//       let td1 = document.createElement("td");
//       let td2 = document.createElement("td");
//       let td3 = document.createElement("td");
//       let td4 = document.createElement("td");
//       let td5 = document.createElement("td");

//       let text1 = document.createTextNode(senatArr[i].first_name + " " + (senatArr[i].middle_name || "") + " " + senatArr[i].last_name);
//       link.appendChild(text1);

//       let text2 = document.createTextNode(senatArr[i].party);
//       let text3 = document.createTextNode(senatArr[i].state);
//       let text4 = document.createTextNode(senatArr[i].seniority);
//       let text5 = document.createTextNode(senatArr[i].votes_with_party_pct + "%");
    
      
//       td1.appendChild(link);
//       td2.appendChild(text2);
//       td3.appendChild(text3);
//       td4.appendChild(text4);
//       td5.appendChild(text5);
    
      
//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       tr.appendChild(td3);
//       tr.appendChild(td4);
//       tr.appendChild(td5);
  
    
//     tblBody.appendChild(tr);

//     }
  
//   table.appendChild(thead);
//   table.appendChild(tblBody);
// }

// buildTable(senatArr);


//array US states inside the dropdown











// TABLE VUE


var app = new Vue(
  {  
  el: '#app',  
  data: {    
    senateArr: [],
    checkedParty: [],
    filterArr: [],
    checkedParty: [],
    checkedState: "ALL",
    filteredByPartyArr: [],
    filteredByStateArr: [],
    filteredTwice: [],
    selectedParty: [],
        
    },
  //objeto dentro de la instancia de vue
  methods :{

    fetchData: function (){
    fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
    headers:{
      'X-API-Key':'2K0CRlaQh1NOPgDCsDMXqa1DQXEhkVPCrrDWCVvK'
      }
    })
    .then((response)=>{
        console.log("funciona", response);
        return response.json();
      }).then(json =>{
        console.log(json);
        app.senateArr = json.results[0].members;
        console.log(app.senateArr)
        return app.senateArr
      }).catch((error)=>{
        console.log("no funciona", error);
      })
      }, 
      },
      computed :{
        //filters
          filterArr: function(){
            this.filteredByPartyArr= [...this.senateArr].filter(filter => this.checkedParty.includes(filter.party));
            this.filteredByStateArr= [...this.senateArr].filter(filter => this.checkedState.includes(filter.state));
            this.filteredTwice= [...this.filteredByPartyArr].filter(filter => this.checkedState.includes(filter.state));
      
      
            if ((this.checkedParty.length === 0) && (this.checkedState === "ALL")){
              return this.senateArr;
            }else if ((this.checkedParty.length === 0) && (this.checkedState !== "ALL")){
              return this.filteredByStateArr;
            }else if ((this.checkedParty.length !== 0) && (this.checkedState !== "ALL")){
              return this.filteredTwice;
            }else{
              return this.filteredByPartyArr;
            }
          },
        },
        created: function(){
          this.fetchData();
        
        },
      });




  // var select = document.getElementById("usstates"); 
  // let states = [
  // "All",
  // "AK",
  // "AL",
  // "AR",
  // "AS",
  // "AZ",
  // "CA",
  // "CO",
  // "CT",
  // "DC",
  // "DE",
  // "FL",
  // "GA",
  // "GU",
  // "HI",
  // "IA",
  // "ID",
  // "IL",
  // "IN",
  // "KS",
  // "KY",
  // "LA",
  // "MA",
  // "MD",
  // "ME",
  // "MI",
  // "MN",
  // "MO",
  // "MS",
  // "MT",
  // "NC",
  // "ND",
  // "NE",
  // "NH",
  // "NJ",
  // "NM",
  // "NV",
  // "NY",
  // "OH",
  // "OK",
  // "OR",
  // "PA",
  // "PR",
  // "RI",
  // "SC",
  // "SD",
  // "TN",
  // "TX",
  // "UT",
  // "VA",
  // "VI",
  // "VT",
  // "WA",
  // "WI",
  // "WV",
  // "WY"]

   // for(var i = 0; i < states.length; i++) {
    //   var opt = states[i];
    //   var el = document.createElement("option");
    //   el.textContent = opt;
    //   el.value = opt;
    //   select.add(el);
  // }

// //selecting checkboxes



//checkboxes 
// function partyFilter(){
//   let senatArr = data.results[0].members;
//   let partyselected = [];

//   for ( i=0; i < senatArr.length; i++) {
//     if ((document.getElementById("dem").checked && senatArr[i].party === "D") && (statesdrop === senatArr[i].state || statesdrop === states[0] || statesdrop === "Select an State")){
//        partyselected.push(senatArr[i]);     
//     }
//        if ((document.getElementById("rep").checked && senatArr[i].party === "R") && (statesdrop === senatArr[i].state || statesdrop === states[0] || statesdrop === "Select an State")){
//         partyselected.push(senatArr[i]);
//        }
//          if ((document.getElementById("ind").checked && senatArr[i].party === "ID") && (statesdrop === senatArr[i].state || statesdrop === states[0] || statesdrop === "Select an State")){
//           partyselected.push(senatArr[i]);
//         }
//           if (((document.getElementById("dem").checked===false) && (document.getElementById("rep").checked===false) && (document.getElementById("ind").checked === false)) && (statesdrop === senatArr[i].state || statesdrop === states[0] || statesdrop === "Select an State")){
//             partyselected.push(senatArr[i]);
//           }
//     }
//     console.log(partyselected)
    
//     buildTable(partyselected);
// }


// document.getElementById("dem").addEventListener("click", function () {
//   if (document.getElementById("dem").checked === true){
//     console.log(document.getElementById("dem").value);
//     partyFilter(senatArr);
//   }
// });
// document.getElementById("rep").addEventListener("click", function () {
//    if (document.getElementById("rep").checked === true){
//     console.log(document.getElementById("rep").value );
//     partyFilter(senatArr);
//     }
// });
//   document.getElementById("ind").addEventListener("click", function () {
//     if (document.getElementById("ind").checked === true){
//     console.log(document.getElementById("ind").value );
//     partyFilter(senatArr);
//     }
// });

// document.getElementById("dem").addEventListener("click", function () {
//   if (document.getElementById("dem").checked === false){
//     console.log(document.getElementById("dem").value);
//     partyFilter(senatArr);
//   }
// });
// document.getElementById("rep").addEventListener("click", function () {
//    if (document.getElementById("rep").checked === false){
//     console.log(document.getElementById("rep").value );
//     partyFilter(senatArr);
//     }
// });
//   document.getElementById("ind").addEventListener("click", function () {
//     if (document.getElementById("ind").checked === false){
//     console.log(document.getElementById("ind").value );
//     partyFilter(senatArr);
//     }
// });

// let statesdrop = document.getElementById("usstates").value;
// document.getElementById("usstates").addEventListener("change", function () {
// statesdrop = document.getElementById("usstates").value;
// partyFilter(senatArr);
//   });


//   document.getElementById('usstates').addEventListener('change', function() {
//    return partyFilter(senatArr);
  
// });



