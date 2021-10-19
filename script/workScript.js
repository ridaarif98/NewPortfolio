const workData = [
  {
    id: 1,
    name: 'Capstone',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['CSS', 'Javascript', 'Html'],
    btn_text: 'See Project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    heading: 'Keeping track of hundreds of components',
  },
  {
    id: 2,
    name: 'Multi-Post',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['Python', 'Javascript', 'CodeKit', 'Html'],
    btn_text: 'See Project',
  },
  {
    id: 3,
    name: 'Stories',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['CSS', 'Javascript', 'Html'],
    btn_text: 'See Project',
  },
  {
    id: 4,
    name: 'Gain+Glory',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['React', 'CSS', 'Html', 'Codekit'],
    btn_text: 'See Project',
  },
  {
    id: 5,
    name: 'Capston',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['Ruby on rails', 'CSS', 'Javascript', 'Html'],
    btn_text: 'See Project',
  },
  {
    id: 6,
    name: 'My Portfolio',
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['Ruby on rails', 'CSS', 'Bootstrap', 'Html'],
    btn_text: 'See Project',
  },
];

function languages(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')} `;
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
  <ul class="See-btn" id="seeBtn-List">
    <li><button type="button" class="see-project" id=${work.id}>${work.btn_text}</button></li>
  </ul>
</li>
    `;
}

document.getElementById('dynamicWork').innerHTML = `${workData.map(workTemplate).join('')}`;

// Work Popup

const workPopUp = [
  {
    id: 1,
    photo: './Images/SecondPortfolio.svg',
    languages_list: ['Ruby on rails', 'CSS', 'Javascript'],
    desktoplist: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    heading: 'Keeping track of hundreds of components',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://ridaarif98.github.io/NewPortfolio/',
    sourceLink: 'https://github.com/ridaarif98/NewPortfolio',
  },
  {
    id: 2,
    photo: './Images/capstone.png',
    languages_list: ['HTML', 'CSS', 'JavaScript'],
    desktoplist: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: "Capstone is conference website for 'Women Summit' which is build using HTML, CSS, and JavaScript. It is desktop and mobile responsive. In mobile version it has pop-up menu",
    heading: 'Women Summit Conference',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://ridaarif98.github.io/capston/',
    sourceLink: 'https://github.com/ridaarif98/capston',
  },
];

function languagesPopup(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function languagesPopupDesktop(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}


{/* <ul class="popupList">
     <li class="flex-box1">
       <ul class="firstListPop">
        <li>
         
        <span class="cl-tag fa fa-close" id="firstClose"></span>
       <img src=${works.photo} alt="My-Work" id="closeTab">
        </li>
        <li><h1>${works.heading}</h1></li>
       </ul>
      
       <div class="list-boxPop">
         <ul>
          ${(window.innerWidth < 768) ? languagesPopup(works.languages_list) : languagesPopupDesktop(works.desktoplist)}
         </ul>
        </div>
        <p>${works.description}</p>
      <ul class="See-btn1">
        <li><a href=${works.liveLink}><button type="button" class="see-project">${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink}><button type="button" class="see-project">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
    </li>
  </ul> */}


function workPopup(works) {
  return `
  <div class="workMainDiv">
    <span class="cl-tag fa fa-close" id="firstClose"></span>
    <div class="workImgDiv">
      <img src=${works.photo} alt="My-Work" id="closeTab">
    </div>
  <div class="workContentDiv">
    <div class="workHeadingDiv">
      <h1>${works.heading}</h1>
      <ul class="workButtonDiv">
        <li><a href=${works.liveLink}><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink}><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
    </div>
    <div class="list-boxPop">
      <ul>
          ${(window.innerWidth < 768) ? languagesPopup(works.languages_list) : languagesPopupDesktop(works.desktoplist)}
      </ul>
    </div>
    <p>${works.description}</p>
    <div class="mobileButtonDiv">
    <ul class="workButtonDiv">
        <li><a href=${works.liveLink}><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink}><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
    </div>

  </div>
  </div>
    `;
}

const modal = document.getElementById('firstPopup');

if (document.getElementById('1')) {
  document.getElementById('1').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[1]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}


if (document.getElementById('2')) {
  document.getElementById('2').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('3')) {
  document.getElementById('3').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('4')) {
  document.getElementById('4').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('5')) {
  document.getElementById('5').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('6')) {
  document.getElementById('6').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};