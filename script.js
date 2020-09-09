


let a=document.getElementById('main_img');
  
var images=[
 "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img1.jpg"
];

var diss=[

  "HTML CSS EXPERT",
  "SMART THINKER",
  "JAVASCRIPT LEGEND",
  "GOOD HUMAN BEING",
  "SMART BUSINESS MAN"
];
var i=0;
function sliders(){
  
  a.src=images[i];


  if(i<images.length-1){
 
i++;

  }
  else{

    i=0;
  }

}

setInterval(sliders,4000);

//discription changer
function dis(){
document.getElementById('caption').innerHTML=diss[i];
if(i<diss.length-1){
 
i++;

  }
  else{

    i=0;
  }
}
  setInterval(dis,4200);

//set tan controller

let home=document.getElementById('HOME');
let about=document.getElementById('ABOUT');
let resume=document.getElementById('RESUME');
let portflio=document.getElementById('PORTFLIO');
let blog=document.getElementById('BLOG');
let contact=document.getElementById('CONTACT');



//content handler name
let homeTab=document.getElementById('homeTab');
let aboutTab=document.getElementById('aboutTab');
let resumeTab=document.getElementById('resumeTab');
let portflioTab=document.getElementById('portflioTab');
let blogTab=document.getElementById('blogTab');
let contactTab=document.getElementById('contactTab');
let active=document.getElementsByClassName('active');

function homeA(){



  homeTab.style.display="block";
  homeTab.classList.add('active');
 home.classList.add('active');

  aboutTab.style.display="none";
  about.classList.remove('active');

  resume.classList.remove('active');
  resumeTab.style.display="none";
 
 
  portflioTab.style.display="none";
  portflio.classList.remove('active');

  
  blogTab.style.display="none";
  blog.classList.remove('active');

  
  contactTab.style.display="none";
  contact.classList.remove('active');
 
}
function aboutA(){

 
  homeTab.style.display="none";
  homeTab.classList.remove('active');
 home.classList.remove('active');

  aboutTab.style.display="block";
  about.classList.add('active');
  about.classList.add('active');

  resume.classList.remove('active');
  resumeTab.style.display="none";
 
 
  portflioTab.style.display="none";
  portflio.classList.remove('active');

  
  blogTab.style.display="none";
  blog.classList.remove('active');

  
  contactTab.style.display="none";
  contact.classList.remove('active');
}

function resumeA(){

  homeTab.style.display="none";
  homeTab.classList.remove('active');
 home.classList.remove('active');

  aboutTab.style.display="none";
  about.classList.remove('active');
  about.classList.remove('active');

  resumeTab.style.display="block";
  resume.classList.add('active');
 
 
  portflioTab.style.display="none";
  portflio.classList.remove('active');

  
  blogTab.style.display="none";
  blog.classList.remove('active');

  
  contactTab.style.display="none";
  contact.classList.remove('active');
}

function portflioA(){
  homeTab.style.display="none";
  homeTab.classList.remove('active');
 home.classList.remove('active');

  aboutTab.style.display="none";
  about.classList.remove('active');
  

  resumeTab.style.display="none";
  resume.classList.remove('active');
 
 
  portflioTab.style.display="block";
  portflio.classList.add('active');

  
  blogTab.style.display="none";
  blog.classList.remove('active');

  
  contactTab.style.display="none";
  contact.classList.remove('active');
}
function blogA(){
  homeTab.style.display="none";
  homeTab.classList.remove('active');
 home.classList.remove('active');

  aboutTab.style.display="none";
  about.classList.remove('active');
  

  resumeTab.style.display="none";
  resume.classList.remove('active');
 
 
  portflioTab.style.display="none";
  portflio.classList.remove('active');

  
  blogTab.style.display="block";
  blog.classList.add('active');

  
  contactTab.style.display="none";
  contact.classList.remove('active');
}
function contactA(){
  homeTab.style.display="none";
  homeTab.classList.remove('active');
 home.classList.remove('active');

  aboutTab.style.display="none";
  about.classList.remove('active');
  

  resumeTab.style.display="none";
  resume.classList.remove('active');
 
 
  portflioTab.style.display="none";
  portflio.classList.remove('active');

  
  blogTab.style.display="none";
  blog.classList.remove('active');

  
  contactTab.style.display="block";
  contact.classList.add('active');
}

function ss(){
  alert('link will be added shortly');
}