



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




