/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    for(let i=0;i<arr.length;i++){
        if((arr[i].profession).isEqual(developer)){
            console.log(arr[i].name);
        }
    }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    for(let i=0;i<arr.length;i++){
        if((arr[i].profession).isEqual(developer)){
            console.log(arr[i].name);
        }
    }
  }
  
  function addData() {
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }