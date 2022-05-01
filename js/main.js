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
  console.log(coursesWithAllData);
 }()/*immediately invokes function after declaration*/)

 function updateYardage(e){
  console.log(e.target.value);
  
}

let scorecardTable = document.getElementById('scorecard-table');
let tableBody = document.getElementById('parentElement');
let holesValue = document.getElementById('holes-select-element').value;

 function userSelect() {
  let x = document.getElementById("player-select-element").value;
  
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

    for (let j = 0; j < 10; j++){
      let tableData = document.createElement("td");
      let tableInput = document.createElement("input");

      tableData.setAttribute('id', `table-data-${i}-${j}`);
      tableInput.setAttribute('id', `table-input-${i}-${j}`);
      
      tableRow.appendChild(tableData);
      tableData.appendChild(tableInput);
      //this creates unique elements for each created td element

      //I need to add create td elements

      //I need to append child (td elements) to created tr elements
    }
  }

}

function selectHoles(){
  console.log(holesValue);

}

// let users = document.getElementById('users').value;
// const ten = 10;
// let yardage = [];
// let par = [];
// let handicap = [];



