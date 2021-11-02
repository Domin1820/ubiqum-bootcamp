//loading spinner

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}

function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

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
    bothFilters: [],
    selectedParty: [],
        
    },
  //objeto dentro de la instancia de vue
  methods :{

    fetchData: function (){
      showSpinner()
      fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
      headers:{
        'X-API-Key':'2K0CRlaQh1NOPgDCsDMXqa1DQXEhkVPCrrDWCVvK'
        }
      })
      .then((response)=>{
        return response.json();
          
        }).then(json =>{
          console.log(json);
          app.senateArr = json.results[0].members;
          console.log(app.senateArr)
          hideSpinner()
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
              this.bothFilters= [...this.filteredByPartyArr].filter(filter => this.checkedState.includes(filter.state));
        
        
              if ((this.checkedParty.length === 0) && (this.checkedState === "ALL")){
                return this.senateArr;
              }else if ((this.checkedParty.length === 0) && (this.checkedState !== "ALL")){
                return this.filteredByStateArr;
              }else if ((this.checkedParty.length !== 0) && (this.checkedState !== "ALL")){
                return this.bothFilters;
              }else{
                return this.filteredByPartyArr;
              }
            },
          },
          created: function(){
            this.fetchData();
          
          },
        });




