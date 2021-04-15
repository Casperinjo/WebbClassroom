

fetch("./classroom.json", {})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach(subject => {
        let subjectDiv = document.createElement("div");
        subjectDiv.classList.add("class-item");
        let subjectName = document.createElement("h2");
        subjectName.innerText = subject.class;
        subjectDiv.append(subjectName);
        let subjectIcon = document.createElement("img");
        subjectIcon.setAttribute("src", "./img" + subject.icon)
        subjectDiv.append(subjectIcon);
        
    });
})











