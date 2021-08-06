
document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
  
  e.preventDefault();
//Course data
  const courses = document.getElementById("courses").value;
  let cdata = courses.split(",");

  //Room and cap
  const map1 = new Map();
  const rooms = document.getElementById("room").value;
  let croom = rooms.split(",");
  let temp;
  croom.forEach((data) => {
     temp = data.split(":");
    map1.set(temp[0], temp[1]);
  
  });

//   let room=[],capacity=[];
//   for (let room1 of map1.keys()) {
//      room.push(room1);
//   }
//   for (let cap of map1.values()) {
//     capacity.push(cap);
//  }

  const times = document.getElementById("time").value;
  let ctime = times.split(",");
  
  //JSON FORMAT
  var input1= {};
  input1.courses = cdata;
  input1.rooms = room;
  input1.rcapac = capacity;
  input1.time = ctime;
//  console.log(input1)
const input2=JSON.stringify(input1);
 console.log(input2);

 }


