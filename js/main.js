/* tasks im working on
get all courses
grab data for each course (yardage, par, course)
add each hole for each course as a row

*/

async function getDataFromURL(url) {
  return fetch(url).then(
    function (response) {
      return response.json();
    }
  ).then(function (dataPiece) {
    return dataPiece;

  });
}

async function getAvailableCourses() {
  const data = await getDataFromURL('https://golf-courses-api.herokuapp.com/courses');
  return data.courses;
 }

async function getSingleCourseData(id){ 
 const url = `https://golf-courses-api.herokuapp.com/courses/${id}`;
 const data = await getDataFromURL(url);
  return data.data;
}

 (async function getInitialData() {
  let courses = await getAvailableCourses();
  let coursesWithAllData = [];
  //this is where my
  for(const courseItem of courses) {
    const additionalCourseData = await getSingleCourseData(courseItem.id);
    const courseItemWithAllData = {
      ...courseItem, 
      ...additionalCourseData
    }
    coursesWithAllData.push(courseItemWithAllData)
  }
  populateYardParArray();
  console.log(coursesWithAllData);
 }()/*immediately invokes function after declaration*/)

 function populateYardParArray() {
   let parArray = [];
   let yardArray = [];
   let courseNumber = document.getElementById('course').value;
   
   
 }



let scorecardTable = document.getElementById('scorecard-table');
let tableBody = document.getElementById('parentElement');
var holesValue = document.getElementById('holes-select-element').value;

 function userSelect() {
  let x = document.getElementById("player-select-element").value;
  tableBody.innerHTML = '';

  //This assigns the selected option value to x
  for (let i = 0; i < x; i++) {
    console.log(x);
    let tableRow = document.createElement("tr");
    let tableHead = document.createElement("th");
    let tableNameInput = document.createElement("input");
    //This creates elements and assigns them to vaiables
    tableRow.setAttribute('id', `table-row-${i}`);
    tableHead.setAttribute('id', `table-head-${i}`);
    tableNameInput.setAttribute('id', `table-name-input-${i}`);
    //This creates dynamic ID's for created elements
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableHead);
    tableHead.appendChild(tableNameInput);
    //This tells the created elements where to go

    for (let j = 0; j < holesValue; j++){
      let tableData = document.createElement("td");
      if(j === holesValue-1){
        tableData.setAttribute('id', `total-${i}`)

      }else{
        let tableInput = document.createElement("input");
        tableInput.setAttribute('id', `table-input-${i}-${j}`);
        tableData.appendChild(tableInput);      
        tableInput.setAttribute('type', `number`);
        tableInput.setAttribute('onblur', `strokeSum(${i})`);
        tableInput.setAttribute('name', `total-${i}`);
      }
      
      tableRow.appendChild(tableData);

    }

  }

}

function strokeSum(i){
  try {
    let arr = document.getElementsByName(`total-${i}`);
    let total = 0;
    for(let k = 0; k < arr.length; k++){
      if(parseInt(arr[k].value))
        total += parseInt(arr[k].value);
    }
      document.getElementById(`total-${i}`).innerHTML = total;
    } catch (error) {
      console.log(error);
  } 
}

function selectHoles(e){
  holesValue = parseInt(e.target.value);
  console.log(holesValue);

}

// let users = document.getElementById('users').value;
// const ten = 10;
// let yardage = [];
// let par = [];
// let handicap = [];
