
let approot = document.querySelector(".app-root");


//Event listerners




fetch("./classroom.json", {})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach((subject) => {
        let subjectButton = document.createElement("button");
        subjectButton.classList.add("class-button");
        let subjectName = document.createElement("h2");
        subjectName.innerText = subject.class;
        subjectButton.append(subjectName);
        let subjectIcon = document.createElement("img");
        subjectIcon.setAttribute("src", "./img/" + subject.icon);
        subjectButton.append(subjectIcon);
        approot.append(subjectButton);
        
    });
});




function buttonSlide(){
    
    approot.classList.toggle("slider");
};










