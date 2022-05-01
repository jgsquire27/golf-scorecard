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
  for(const courseItem of courses) {
    const additionalCourseData = await getSingleCourseData(courseItem.id);
    const courseItemWithAllData = {
      ...courseItem, 
      ...additionalCourseData
    }
    coursesWithAllData.push(courseItemWithAllData)
  }
  console.log(coursesWithAllData);
 }())

let users = document.getElementById('users').value;
const ten = 10;
let yardage = [];
let par = [];
let handicap = [];

function addUsers(){
  for(i = 0; i++; i = users){
    let userRow = document.createElement('tr');
    parentElement.appendChild(userRow);
    let userHead = document.createElement('th');
    userRow.appendChild(userHead);
    for(i = 0; i++; i = ten){
      let userScore = document.createElement('td');
      userRow.appendChild(userScore);
    }
  }
};

