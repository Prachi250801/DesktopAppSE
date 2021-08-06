document.querySelector("form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  let input2 = {};
  input2.data = new Array();
  const courses = document.getElementById("courses").value;
  let cdata = courses.split(',');

  const enroll = document.getElementById("enroll").value;
  let cenroll = enroll.split(',');

  const prefer = document.getElementById("prefer").value;
  let cprefer = prefer.split(',');

  //JSON

  for(let i=0;i<cdata.length;i++)
  {
	let temp = {};
	temp.course = cdata[i];
	temp.enrollment = cenroll[i];
	temp.preference = cprefer[i];
	input2.data.push(temp);
  }
  const input3=JSON.stringify(input2.data)
  console.log(input3);
}