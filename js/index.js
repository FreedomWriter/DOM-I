const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//adding links
let links = document.querySelectorAll("a");

links.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]
  link.style.color = 'green';
});

//prepending and appending a child
let prependNav = document.createElement("a").textContent = 'Prepend';
let appendNav = document.createElement("a");
let appendNavChild = document.createTextNode("AppendChild");
appendNav.appendChild(appendNavChild);
let navTag = document.querySelector("nav");
navTag.style.color = 'green';
navTag.prepend(prependNav);
navTag.appendChild(appendNav).style.color = 'green';

//h1 adding and formatting
let ctaText = document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
let breaks = "DOM\nIs\nAwesome!";
document.querySelector(".cta-text h1").innerText = breaks;

//adding button
let ctaBttn = document.querySelector(".cta-text button");
ctaBttn.textContent = siteContent.cta.button;

//adding event to button (stretch)
let bttnClick = document.querySelector(".cta-text button").addEventListener('click', function(eventObject){
  function change (){
    let newBreaks = "<h1>But Not<br>As Awesome<br>As You Are!"
    document.querySelector(".cta-text h1").style.color = 'hotpink';
    document.querySelector(".cta-text h1").innerHTML = newBreaks;
    setTimeout ( "reset()", 3000 );
   }
   change();
 });
 function reset (){
  let breaks = "DOM\nIs\nAwesome!";
  document.querySelector(".cta-text h1").style.color = 'black';
  document.querySelector(".cta-text h1").innerText = breaks;
 }

//adding image to top part of page
let codeSnipTop = document.getElementById("cta-img").setAttribute('src', siteContent.cta["img-src"]);

//adding text and formatting to h4's
let contentHeaders = document.querySelectorAll("h4");
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

//adding text and formatting to <p> tags
let contentText = document.querySelectorAll(".text-content p");
contentText[0].textContent = siteContent["main-content"]["features-content"];
contentText[1].textContent = siteContent["main-content"]["about-content"];
contentText[2].textContent = siteContent["main-content"]["services-content"];
contentText[3].textContent = siteContent["main-content"]["product-content"];
contentText[4].textContent = siteContent["main-content"]["vision-content"];


//adding image in middle content
let codeSnipBtm = document.getElementById("middle-img");
codeSnipBtm.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//adding contact informtion
let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];


//adding copyright
let copyright = document.querySelector("footer p").textContent = siteContent.footer.copyright;

//updating styles stretch

//change background color
let container = document.querySelector('.container');
container.style.backgroundColor = '#e9f7f5';
container.style.padding = '2%';
ctaBttn.style.backgroundColor = '#d5dff2';
codeSnipBtm.style.width = '100%';




