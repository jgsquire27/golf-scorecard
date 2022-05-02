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
        tableInput.setAttribute('onblur', 'strokeSum()');
        tableInput.setAttribute('name', `total-${i}`);
      }
      
      tableRow.appendChild(tableData);

    }

  }

}

function strokeSum(){
  let arrZero = document.getElementsByName('total-0');
  let arrOne = document.getElementsByName('total-1');
  let arrTwo = document.getElementsByName('total-2');
  let arrThree = document.getElementsByName('total-3');
  let totalZero = 0;
  let totalOne = 0;
  let totalTwo = 0;
  let totalThree = 0;
  for(let k = 0; k < arrZero.length; k++){
    if(parseInt(arrZero[k].value))
    totalZero += parseInt(arrZero[k].value);
  }
  for(let l = 0; l < arrZero.length; l++){
    if(parseInt(arrOne[l].value))
    totalOne += parseInt(arrOne[l].value);
  }
  for(let m = 0; m < arrTwo.length; m++){
    if(parseInt(arrTwo[m].value))
    totalTwo += parseInt(arrTwo[m].value);

  for(let n = 0; n < arrThree.length; n++){
    if(parseInt(arrThree[n].value))
    totalThree += parseInt(arrThree[n].value);
  }
  document.getElementById('total-0').innerHTML = totalZero;
  document.getElementById('total-1').innerHTML = totalOne;
  document.getElementById('total-2').innerHTML = totalTwo;
  document.getElementById('total-3').innerHTML = totalThree;
}

function selectHoles(e){
  holesValue = parseInt(e.target.value);
  console.log(holesValue);

}
}
// let users = document.getElementById('users').value;
// const ten = 10;
// let yardage = [];
// let par = [];
// let handicap = [];
