let approot = document.querySelector(".app-root");
let subjectContainer = document.querySelector(".subject-container");
subjectContainer.classList.toggle("invisible");
let documentContainer = document.querySelector(".document-container");
documentContainer.classList.toggle("invisible");
let docP = document.createElement("p");
documentContainer.append(docP);

let subjectName = "";
let subjectSpec = [];
let subject;
let subjectObjects = [];
let documentObjects = [];
let subjectButton;
let target1;
let docArr = [];

function buttonSlide() {
  approot.classList.toggle("slider");
}

class subjects {
  constructor(subject) {
    this.subject = subject;
  }
  GetSubjectName() {
    return this.subject;
  }

  GoToSubject() {
    subjectContainer.classList.toggle("invisible");
    
    for(let i = 0; i < docArr.length; i++){
      console.log(docArr[i].classList  + " " + this.subject);
      if(!(docArr[i].classList =="document " + this.subject)){
        
        docArr[i].classList.toggle("invisible");
      }
     
    }
    approot.classList.toggle("apptrans");
    approot.addEventListener("animationend", function () {
      approot.classList.add("invisible");
      subjectContainer.classList.add("subject-slider");
    });
  }
}

class documents {
  constructor(name) {
    this.name = name;
  }
  GetDocName() {
    return this.name;
  }
  GoToDoc() {
    document.querySelector(".document").classList.add("scaler");
    subjectContainer.classList.add("subject-container-trans");
    subjectContainer.addEventListener("transitionend", function () {
      subjectContainer.classList.toggle("invisible");
      documentContainer.classList.toggle("invisible");
    });
  }
}

function addSubject() {
  subjectName = prompt("Skriv in vilket ämne: ");
  subjectButton = document.createElement("button");
  subjectButton.classList.add("subject");
  let subjectHeader = document.createElement("h3");
  subjectHeader.classList.add("subject-header");
  subjectHeader.innerText = subjectName;
  subjectButton.append(subjectHeader);
  approot.append(subjectButton);
  subjectObjects.push(new subjects(subjectName));
}
approot.addEventListener("click", checkSubject);

function checkSubject(e) {
  target1 = e.target.lastChild.innerText;

  for (let i = 0; i < subjectObjects.length; i++) {
    if (subjectObjects[i].GetSubjectName() == target1) {
      subjectObjects[i].GoToSubject();
    }
  }
}

function AddDoc() {
  let docName = prompt("Skriv in vad ditt dokument ska heta: ");
  let doc = document.createElement("button");
  doc.classList.add("document");
  doc.classList.add(target1);

  let docTitle = document.createElement("h5");
  docTitle.classList.add("docname");

  docTitle.innerText = docName;
  doc.append(docTitle);
  subjectContainer.append(doc);

  docArr.push(doc);
  documentObjects.push(new documents(docName));
  documentContainer.innerHTML =
    "<p> Välkommen till ditt dokument !!!!!                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Netus et malesuada fames ac turpis egestas. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Vitae ultricies leo integer malesuada nunc vel risus commodo. Pretium viverra suspendisse potenti nullam ac tortor. Est placerat in egestas erat imperdiet sed euismod nisi. Varius duis at consectetur lorem. Sed viverra ipsum nunc aliquet bibendum enim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Tristique senectus et netus et. Amet mattis vulputate enim nulla aliquet porttitor lacus. Ut tellus elementum sagittis vitae et leo duis ut diam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Aliquam etiam erat velit scelerisque in dictum non. Sed arcu non odio euismod. Lectus nulla at volutpat diam ut venenatis tellus in. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Justo eget magna fermentum iaculis. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Volutpat odio facilisis mauris sit amet massa vitae tortor. Orci porta non pulvinar neque laoreet suspendisse interdum. Pellentesque pulvinar pellentesque habitant morbi. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Semper eget duis at tellus at urna condimentum mattis pellentesque. In hac habitasse platea dictumst. Ultricies integer quis auctor elit sed vulputate mi sit. Ut venenatis tellus in metus. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Pellentesque habitant morbi tristique senectus et netus et. Metus dictum at tempor commodo. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Elementum integer enim neque volutpat. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Semper risus in hendrerit gravida rutrum quisque. Quis commodo odio aenean sed adipiscing diam. Vitae nunc sed velit dignissim sodales. Sit amet cursus sit amet dictum sit amet justo donec. Tincidunt dui ut ornare lectus sit amet. Sed libero enim sed faucibus turpis. Posuere morbi leo urna molestie at elementum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Mi bibendum neque egestas congue quisque. Et leo duis ut diam quam nulla porttitor massa. Leo vel fringilla est ullamcorper eget nulla. Libero enim sed faucibus turpis. Quis lectus nulla at volutpat diam. Praesent elementum facilisis leo vel fringilla. Lacus sed viverra tellus in hac habitasse platea dictumst. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Tristique nulla aliquet enim tortor at auctor. Morbi tristique senectus et netus et malesuada fames. Mauris ultrices eros in cursus turpis massa tincidunt. Felis eget velit aliquet sagittis id. Libero justo laoreet sit amet cursus. Bibendum arcu vitae elementum curabitur vitae. Libero enim sed faucibus turpis in eu. Rhoncus dolor purus non enim praesent elementum. Sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit dignissim sodales. Id ornare arcu odio ut sem. Diam sollicitudin tempor id eu. Vivamus at augue eget arcu dictum. Egestas diam in arcu cursus. Nulla aliquet enim tortor at auctor urna nunc id. Nascetur ridiculus mus mauris vitae. Augue neque gravida in fermentum et sollicitudin ac orci. Orci eu lobortis elementum nibh tellus molestie nunc. Tristique senectus et netus et malesuada fames ac. Risus nec feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sapien et ligula ullamcorper malesuada proin libero nunc. Vel facilisis volutpat est velit egestas dui. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Netus et malesuada fames ac turpis egestas maecenas pharetra. Cursus mattis molestie a iaculis at erat pellentesque. Ultrices eros in cursus turpis massa tincidunt. Elementum sagittis vitae et leo duis ut diam. Volutpat diam ut venenatis tellus. Facilisi morbi tempus iaculis urna id. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Semper viverra nam libero justo laoreet sit amet cursus. Risus in hendrerit gravida rutrum quisque. Suspendisse interdum consectetur libero id faucibus nisl. Urna duis convallis convallis tellus. Cursus eget nunc scelerisque viverra. Volutpat consequat mauris nunc congue. Mattis vulputate enim nulla aliquet porttitor lacus. Eget nunc lobortis mattis aliquam faucibus. Libero id faucibus nisl tincidunt eget nullam non. Tincidunt augue interdum velit euismod in pellentesque massa. Sollicitudin nibh sit amet commodo nulla. Id venenatis a condimentum vitae sapien. Ultricies mi quis hendrerit dolor magna eget est. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Interdum velit laoreet id donec. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Elit sed vulputate mi sit amet mauris. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Pharetra et ultrices neque ornare. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Egestas erat imperdiet sed euismod nisi porta lorem. Morbi tristique senectus et netus et. Id consectetur purus ut faucibus pulvinar elementum integer enim. Turpis massa sed elementum tempus egestas sed sed risus pretium. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Non odio euismod lacinia at quis risus sed. Convallis aenean et tortor at risus viverra. Praesent elementum facilisis leo vel fringilla est ullamcorper. Enim ut sem viverra aliquet eget. Tellus in hac habitasse platea dictumst vestibulum. Varius quam quisque id diam vel quam elementum. Pharetra pharetra massa massa ultricies mi. Neque aliquam vestibulum morbi blandit cursus risus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. At imperdiet dui accumsan sit. Nunc non blandit massa enim. Sed augue lacus viverra vitae congue eu consequat ac. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Porta non pulvinar neque laoreet suspendisse. Est placerat in egestas erat imperdiet. Non arcu risus quis varius quam. Nec nam aliquam sem et tortor consequat. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Et netus et malesuada fames ac turpis egestas sed. Imperdiet proin fermentum leo vel. Scelerisque purus semper eget duis at tellus at urna. Neque volutpat ac tincidunt vitae semper. Non consectetur a erat nam at lectus urna duis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Nunc sed velit dignissim sodales ut eu sem. Id aliquet risus feugiat in. Fermentum posuere urna nec tincidunt praesent. Aenean pharetra magna ac placerat vestibulum lectus mauris. Interdum varius sit amet mattis vulputate enim. Purus semper eget duis at tellus at urna condimentum mattis. Volutpat blandit aliquam etiam erat velit scelerisque. Lectus nulla at volutpat diam ut venenatis. Egestas purus viverra accumsan in nisl nisi. Duis convallis convallis tellus id interdum velit laoreet id. Feugiat sed lectus vestibulum mattis ullamcorper velit. Urna neque viverra justo nec ultrices dui. Sociis natoque penatibus et magnis dis. Adipiscing bibendum est ultricies integer quis auctor elit. Vulputate ut pharetra sit amet aliquam id diam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Aliquam ut porttitor leo a. Purus semper eget duis at tellus at urna condimentum mattis. Ut lectus arcu bibendum at varius. Purus ut faucibus pulvinar elementum integer enim neque. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Vestibulum lorem sed risus ultricies. Sed turpis tincidunt id aliquet risus feugiat in ante. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. </p>";

  doc.addEventListener("click", checkDoc);
}
function checkDoc(e) {
  target1 = e.target.lastChild.innerText;

  for (let i = 0; i < documentObjects.length; i++) {
    if (documentObjects[i].GetDocName() == target1) {
      documentObjects[i].GoToDoc();
    }
  }
}

function Approot() {
  subjectContainer.classList.toggle("subject-slider");
  for(let i = 0; i < docArr.length; i++){
    console.log(docArr[i].classList[2])
    if(docArr[i].classList[2] == "invisible"){
      docArr[i].classList.toggle("invisible");
    }
  }
  subjectContainer.classList.toggle("invisible");

  subjectContainer.addEventListener("transitionend", function () {});
  approot.classList.toggle("invisible");
  approot.classList.toggle("apptrans");
}

let menu = document.querySelector(".button-holder");
menu.addEventListener("click", Dropdown);

function Dropdown() {
  let item1 = document.querySelector(".navbut1");
  let item2 = document.querySelector(".navbut2");
  menu.classList.toggle("active");
  item1.classList.toggle("navbut-vis");
  item2.classList.toggle("navbut-vis");
}
