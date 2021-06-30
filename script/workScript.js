const workData = [
    {
        id : 1,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        heading:'Keeping track of hundreds of components'
    },
    {
        id : 2,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project'
    },
    {
        id : 3,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project'
    },
    {
        id : 4,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project'
    },
    {
        id : 5,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project'
    },
    {
        id : 6,
        name : 'Multi-Post Stories Gain+Glory',
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript','Html'],
        btn_text :'See Project'
    },   
]

function languages(languages){
    return `${languages.map(function(language){
        return `<li>${language}</li>`
    }).join('')}`
}

function workTemplate(work) {
    return `
    <li class="flex-box">
    <ul class="firstList">
      <li><img src=${work.photo} alt="My-Work"></li>
      <li><h1>${work.name}</h1></li>
    </ul>
  
  <div class="list-box">
 <ul>
 ${languages(work.languages_list)}
 </ul>
 </div>
  <ul class="See-btn">
    <li><button type="button" class="see-project" id=${work.id}>${work.btn_text}</button></li>
  </ul>
</li>
    `
}


document.getElementById('dynamicWork').innerHTML = `${workData.map(workTemplate).join('')}`;

//Work Popup

const workPopUp = [
    {
        id : 1,
        photo : './Images/SecondPortfolio.svg',
        languages_list : ['Ruby on rails','CSS','Javascript'],
        desktoplist:['Codekit','Github','Javascript','Bootstrap','Terminal'],
        btn_text :'See Project',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        heading:'Keeping track of hundreds of components',
        firstBtn:'See Live',
        secondBtn : 'See Source',
        liveLink: 'https://ridaarif98.github.io/NewPortfolio/',
        sourceLink: 'https://github.com/ridaarif98/NewPortfolio'
    }
]

function languagesPopup(languages){
    return `${languages.map(function(language){
        return `<li>${language}</li>`
    }).join('')}`
}


function languagesPopupDesktop(languages){
    return `${languages.map(function(language){
        return `<li>${language}</li>`
    }).join('')}`
}


function workPopup(works){
    return `
    <ul>
  <li class="flex-box1">
  
    <ul class="firstListPop">
      <li> <span class="cl-tag fa fa-close" id="firstClose"></span><img src=${works.photo} alt="My-Work" id="closeTab"></li>
      <li><h1>${works.heading}</h1></li>
    </ul>
    <div class="list-boxPop">
    <ul>
    ${(window.innerWidth<768) ? languagesPopup(works.languages_list): languagesPopupDesktop(works.desktoplist)}
    </ul>
    </div>
    <p>${works.description}</p>
  <ul class="See-btn1">
    <li><a href=${works.liveLink}><button type="button" class="see-project">${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
    <li><a href=${works.sourceLink}><button type="button" class="see-project">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
  </ul>
</li>
</ul>`
}

document.getElementById('firstPopup').innerHTML =`${workPopUp.map(workPopup).join('')}`


var modal = document.getElementById("firstPopup");

// Get the button that opens the modal
var btn=[];
for(let i=0 ; i<=5 ; i++){
   btn[i]  = document.getElementsByClassName("see-project")[i];
}


// Get the <span> element that closes the modal
var span = document.getElementById("firstClose");

// When the user clicks the button, open the modal 
for(let i=0 ; i<=5 ;i++){
btn[i].onclick = function() {
  modal.style.display = "block";
}}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}