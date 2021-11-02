let iniUrl = 'https://v3.openstates.org/people?jurisdiction=';
let url = 'https://v3.openstates.org/people?jurisdiction=Alabama'

function fetch1(){
  fetch(url,{
      headers:{
        'x-api-key': 'db6cd001-6a93-470e-bbd8-5a8b6b652808'
      }
    })
    .then((response)=>{
      return response.json();
    }).then(json =>{
      legislatorsNy = json.results
      console.log(legislatorsNy);
    tableB();
    });
  }
  fetch1();


function tableB(){
  document.getElementById('coolTable').innerHTML='';
  $.each(legislatorsNy, function (index, item) {

      var rows = '' 
          + '<tr><td><b><a href={{openstates_url}}>{{name}}</a></b></td>' 
          + '<td>{{party}}</td>'         
          + '<td>{{current_role.title}}</td></tr>' 


      $('.table').append(Mustache.render(rows, item));
  
  })


let selectedState ='';
document.getElementById('stateDropDown').addEventListener("change", () => {
    selectedState = document.getElementById('stateDropDown').value
    url = `https://v3.openstates.org/people?jurisdiction=${selectedState.toString()}`
    fetch1();

})
}

