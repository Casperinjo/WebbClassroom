let approot = document.querySelector(".app-root");
let subject;
let subjectObjects = [];
let subjectButton;


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





class subjects{
    
    constructor(subject){
        
        this.subject = subject;
    }
    GetSubjectName(){
        
        return this.subject;
    }
    
    
    
    GoToSubject(){
        console.log("hje");
        approot.classList.toggle("invisible");
        subjectContainer.classList.toggle("invisible");
        
    }
    
}






function addSubject() {
    let subjectName = prompt("Skriv in vilket ämne: ");
    subjectButton = document.createElement("button");
    subjectButton.classList.add("subject");
    let subjectHeader = document.createElement("h3");
    subjectHeader.classList.add("subject-header");
    subjectHeader.innerText = subjectName;
    subjectButton.append(subjectHeader);
    approot.append(subjectButton);
    
    
    


    subjectObjects.push(new subjects(subjectName));
    
    subjectButton.addEventListener("click", checkSubject);
}


function checkSubject(e) {
  
    
    let target = e.target;
    
    
    
    for(let i = 0; i < subjectObjects.length; i++){
        
        if(subjectObjects[i].GetSubjectName() == target.lastChild.innerText){
            
            
            subjectObjects[i].GoToSubject();
        }
    }
    
}






function buttonSlide() {
  approot.classList.toggle("slider");
}
