let approot = document.querySelector(".app-root");
let subject;
let subjectObjects = [];


//Event listerners

/*
fetch("./classroom.json", {})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach((subject) => {
        let subjectHeader = document.createElement("button");
        subjectHeader.classList.add("class-button");
        let subjectName = document.createElement("h2");
        subjectName.innerText = subject.class;
        subjectHeader.append(subjectName);
        let subjectIcon = document.createElement("img");
        subjectIcon.setAttribute("src", "./img/" + subject.icon);
        subjectHeader.append(subjectIcon);
        approot.append(subjectHeader);
        
    });
});
*/




//Eventlisteners
subjectButton = addEventListener("click", checkSubject);


function checkSubject(e) {
    let target = e.target.children;
    for(i = 0; i < subjectObjects.length; i++){
        if(subjectObjects[i].GetSubjectName() === target){
            subjectObjects[i].GoToSubject();
        }
    }
}


class subjects{
    constructor(subject){
        this.subject = subject;
    }
    GetSubjectName(){
        return subject;
    }



    GoToSubject(){
        approot.classList.addSubject("invisible");
        subjectContainer.classList.toggle("invisible");
                
    }

}




function addSubject() {
  let subjectName = prompt("Skriv in vilket ämne: ");
  let subjectButton = document.createElement("subject");
  subjectButton.classList.add("subject");
  let subjectHeader = document.createElement("h3");
  subjectHeader.classList.add("subject-header");
  subjectHeader.innerText = subjectName;
  subjectButton.append(subjectHeader);
  approot.append(subjectButton);

    let subjectContainer = document.createElement("div");
    subjectContainer.classList.add("subject.container")
    subjectContainer.classList.toggle("invisible");
    //subjectContainer.append(subjectPage);
    subjectObjects.Push = new subjects(subjectName);
    
    


}





function buttonSlide() {
  approot.classList.toggle("slider");
}
