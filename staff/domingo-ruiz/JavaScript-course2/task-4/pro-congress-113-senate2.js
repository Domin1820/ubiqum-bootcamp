let url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
fetch(url,
  {
  method: "GET", headers: {"X-API-Key": "2K0CRlaQh1NOPgDCsDMXqa1DQXEhkVPCrrDWCVvK",}
  })
  .then(response => response.json())
  .then(function(data)
  {
  let senatArr=data.results[0].members;






//task-3

//number of democrats, republicans and independents. 2 ways to find the number of members of every party
                            ////////
// var partyMembers = [];

// for (i=0;i<senatArr.length; i++){
//   partyMembers.push(senatArr[i].party); 
//   }

//   var count = {};
//   partyMembers.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
//   console.log(count);
                            //////////
var democrats = [];
var republicans = [];
var independents = [];

for (i=0;i<senatArr.length;i++){
    if (senatArr[i].party == "D"){
        democrats++;
    }
    if (senatArr[i].party == "R"){
        republicans++;
    }
    if (senatArr[i].party == "ID"){
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

for (i=0;i<senatArr.length;i++){
  if (senatArr[i].party === "D"){
    vwpD.push(senatArr[i].votes_with_party_pct);
  }
  if (senatArr[i].party === "R"){
    vwpR.push(senatArr[i].votes_with_party_pct);
  }
  if (senatArr[i].party === "ID"){
    vwpI.push(senatArr[i].votes_with_party_pct);
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

var loyaltyMembers = [...senatArr];


loyaltyMembers.sort(function (x,y){return x.votes_with_party_pct - y.votes_with_party_pct; });
 console.log(loyaltyMembers)

var l = (loyaltyMembers.length*0.1);
var low10 = loyaltyMembers.slice(0,l);


console.log(low10);

  

loyaltyMembers.sort(function (x,y){return y.votes_with_party_pct - x.votes_with_party_pct; });
 console.log(loyaltyMembers)

var l = (loyaltyMembers.length*0.1);
var high10 = loyaltyMembers.slice(0,l);


console.log(high10);



//Number of party votes which is: given the total votes and the percent of votes to the party, get the total number of votes to the party

function calculateTotal() {
  let ans = [];

  for (i=0;i<low10.length;i++) {
    ans.push((low10[i].total_votes/100) * (low10[i].votes_with_party_pct)
    )}
  console.log(ans);

  return ans;
}


let totalVotes = calculateTotal(low10);

for (i=0;i<low10.length;i++){
  totalVotes[i]= Math.round(parseFloat(totalVotes[i]));
  console.log(totalVotes[i]);
}

//same with high loyalty
function calculateTotal2() {
  let ansH = [];

  for (i=0;i<high10.length;i++) {
    ansH.push((high10[i].total_votes/100) * (high10[i].votes_with_party_pct)
    )}
  console.log(ansH);

  return ansH;
}


let totalVotesHigh = calculateTotal2(high10);

for (i=0;i<high10.length;i++){
  totalVotesHigh[i]= Math.round(parseFloat(totalVotesHigh[i]));
  console.log(totalVotesHigh[i]);
}





//Bottom 10 loyalty table
 
 function buildTable(low10) {

  let table = document.getElementById("bottom10");
  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");
//HEADER
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");


    let textHeader = document.createTextNode("Name");
    let textHeader2 = document.createTextNode("No of Party Votes");
    let textHeader3 = document.createTextNode("% of Party Votes");

    th.appendChild(textHeader);
    th2.appendChild(textHeader2);
    th3.appendChild(textHeader3);

    thead.appendChild(th)
    thead.appendChild(th2)
    thead.appendChild(th3)



 for (var i = 0; i < low10.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", low10[i].url)

  let tr = document.createElement("tr")
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  let text1 = document.createTextNode(low10[i].first_name + " " + (low10[i].middle_name || "") + " " + low10[i].last_name);
  link.appendChild(text1);

  let text2 = document.createTextNode(totalVotes[i]);
  let text3 = document.createTextNode(low10[i].missed_votes_pct);

  
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

buildTable(low10);





//top 10 loyalty table

function buildTable2(high10) {

  let table = document.getElementById("higher10");
  let tblBody = document.createElement("tbody");
  let thead = document.createElement("thead");
//HEADER
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");


    let textHeader = document.createTextNode("Name");
    let textHeader2 = document.createTextNode("No of Party Votes");
    let textHeader3 = document.createTextNode("& of Party Votes");

    th.appendChild(textHeader);
    th2.appendChild(textHeader2);
    th3.appendChild(textHeader3);

    thead.appendChild(th)
    thead.appendChild(th2)
    thead.appendChild(th3)



 for (var i = 0; i < high10.length; i++) {
  let link = document.createElement("a");
  link.setAttribute("href", high10[i].url)

  let tr = document.createElement("tr")
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  let text1 = document.createTextNode(high10[i].first_name + " " + (high10[i].middle_name || "") + " " + high10[i].last_name);
  link.appendChild(text1);

  let text2 = document.createTextNode(totalVotesHigh[i]);
  let text3 = document.createTextNode(high10[i].missed_votes_pct);

  
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

buildTable2(high10);


  })