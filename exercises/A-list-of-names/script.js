function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  console.log(content); //
}
function listOfNames(arrayOfPeople) {
  const content = document.querySelector("#content");
  console.log("content", content);

  arrayOfPeople.forEach((element) => {
    console.log(element);

    let nameHeading = document.createElement("h1");
    nameHeading.innerText = element.name;

    let jobHeading = document.createElement("h2");
    jobHeading.innerText = element.job;

    content.appendChild(nameHeading);
    content.appendChild(jobHeading);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
