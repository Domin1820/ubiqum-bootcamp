let url = 'https://api.propublica.org/congress/v1/113/house/members.json';
fetch(url,
  {
  method: "GET", headers: {"X-API-Key": "2K0CRlaQh1NOPgDCsDMXqa1DQXEhkVPCrrDWCVvK",}
  })
  .then(response => response.json())
  .then(function(data)
  {
 

 

//task-3

//number of democrats, republicans and independents. 2 ways to find the number of members of every party
  let houseArr = data.results[0].members;
                            ////////
// var partyMembers = [];

// for (i=0;i<houseArr.length; i++){
//   partyMembers.push(houseArr[i].party); 
//   }

//   var count = {};
//   partyMembers.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
//   console.log(count);
                            //////////
var democrats = [];
var republicans = [];
var independents = [];

for (i=0;i<houseArr.length;i++){
    if (houseArr[i].party == "D"){
        democrats++;
    }
    if (houseArr[i].party == "R"){
        republicans++;
    }
    if (houseArr[i].party == "ID"){
        independents++;
      }
    }
    
    console.log(independents);

    //add num of rep to the table
let demRep = document.getElementById("demNum");
demRep.textContent = democrats;

let repRep = document.getElementById("repNum");
repRep.textContent = republicans;

let idRep = document.getElementById("idNum");
idRep.textContent = independents;


    //Pcn of votes with party
var vwpD = [];
var vwpR = [];
var vwpI = [];

for (i=0;i<houseArr.length;i++){
  if (houseArr[i].party === "D"){
    vwpD.push(houseArr[i].votes_with_party_pct);
  }
  if (houseArr[i].party === "R"){
    vwpR.push(houseArr[i].votes_with_party_pct);
  }
  if (houseArr[i].party === "ID"){
    vwpI.push(houseArr[i].votes_with_party_pct);
  }

}
console.log(vwpD);

var pcnVotedD = 0;
var pcnVotedR = 0;
var pcnVotedI = 0;

for (let i = 0; i < vwpD.length; i++) {
  pcnVotedD += vwpD[i]/vwpD.length;
}

for (let i = 0; i < vwpR.length; i++) {
  pcnVotedR += vwpR[i]/vwpR.length;
}

for (let i = 0; i < vwpI.length; i++) {
  pcnVotedI += vwpI[i]/vwpI.length;
}

    //add Percent to the table
document.getElementById("demPcn").textContent = pcnVotedD;
document.getElementById("repPcn").textContent = pcnVotedR;
document.getElementById("idPcn").textContent = pcnVotedI;






    // 10 lowest percents



houseArr.sort(function (x,y){return x.votes_with_party_pct - y.votes_with_party_pct; });
 console.log(houseArr)

var l = (houseArr.length*0.1);
var attLow10 = houseArr.slice(0,10);


console.log(attLow10);

  

houseArr.sort(function (x,y){return y.votes_with_party_pct - x.votes_with_party_pct; });
 console.log(houseArr)

var l = (houseArr.length*0.1);
var houseAttHigh10 = houseArr.slice(0,10);


console.log(houseAttHigh10);



// Most and less engaged
var loyaltyMembers = [...houseArr];

loyaltyMembers.sort(function (x,y){return y.missed_votes - x.missed_votes; });
 console.log(loyaltyMembers)

var l = (loyaltyMembers.length*0.1);
var attLow10 = loyaltyMembers.slice(0,l);



  

loyaltyMembers.sort(function (x,y){return x.missed_votes - y.missed_votes; });
 console.log(loyaltyMembers)

var l = (loyaltyMembers.length*0.1);
var attHigh10 = loyaltyMembers.slice(0,l);


console.log(attHigh10);





//Bottom 10 attendance table
 
 function houseAttTable(attLow10) {

  let table = document.getElementById("house-attendance");
  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");
//HEADER
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");


    let textHeader = document.createTextNode("Name");
    let textHeader2 = document.createTextNode("No of Missed Votes");
    let textHeader3 = document.createTextNode("% of Missed Votes");

    th.appendChild(textHeader);
    th2.appendChild(textHeader2);
    th3.appendChild(textHeader3);

    thead.appendChild(th)
    thead.appendChild(th2)
    thead.appendChild(th3)



 for (var i = 0; i < attLow10.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", attLow10[i].url)

  let tr = document.createElement("tr")
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  let text1 = document.createTextNode(attLow10[i].first_name + " " + (attLow10[i].middle_name || "") + " " + attLow10[i].last_name);
  link.appendChild(text1);

  let text2 = document.createTextNode(attLow10[i].missed_votes);
  let text3 = document.createTextNode(attLow10[i].missed_votes_pct);

  
  td1.appendChild(link);
  td2.appendChild(text2);
  td3.appendChild(text3);

  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);


  tblBody.appendChild(tr);

  }

  table.appendChild(thead);
  table.appendChild(tblBody);
}

houseAttTable(attLow10);





//top 10 loyalty table

function houseAttTableHigh(attHigh10) {

  let table = document.getElementById("house-attendance2");
  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");
//HEADER
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");


    let textHeader = document.createTextNode("Name");
    let textHeader2 = document.createTextNode("No of Missed Votes");
    let textHeader3 = document.createTextNode("% of Missed Votes");

    th.appendChild(textHeader);
    th2.appendChild(textHeader2);
    th3.appendChild(textHeader3);

    thead.appendChild(th)
    thead.appendChild(th2)
    thead.appendChild(th3)



 for (var i = 0; i < attHigh10.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", attHigh10[i].url)

  let tr = document.createElement("tr")
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  let text1 = document.createTextNode(attHigh10[i].first_name + " " + (attHigh10[i].middle_name || "") + " " + attHigh10[i].last_name);
  link.appendChild(text1);

  let text2 = document.createTextNode(attHigh10[i].missed_votes);
  let text3 = document.createTextNode(attHigh10[i].missed_votes_pct);

  
  td1.appendChild(link);
  td2.appendChild(text2);
  td3.appendChild(text3);

  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);


tblBody.appendChild(tr);

  }

  table.appendChild(thead);
  table.appendChild(tblBody);
}

houseAttTableHigh(attHigh10);


  })