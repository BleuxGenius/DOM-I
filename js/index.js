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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav links 
let Links = document.getElementsByTagName('a');
Links[0].innerText = "Services"; 
Links[0].style.color = 'green';
Links[1].innerText = "Product";
Links[1].style.color = 'green';
Links[2].innerText = "Vision";
Links[2].style.color = 'green';
Links[3].innerText = "Features";
Links[3].style.color = 'green';
Links[4].innerText = 'About';
Links[4].style.color = 'green';
Links[4].innerText = 'Contact';
Links[4].style.color = 'green';
// end of nav links 

// header button, image , text
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent.cta.button;

// end of header button, image , text

// header of the CTA format
let ctaText = document.querySelector('h1');
ctaText.innerText = "Dom Is Awesome";
// End of header format

// top content
let topContentheader = document.querySelectorAll('.top-content .text-content h4');
topContentheader[0].innerText = siteContent["main-content"] ["features-h4"];
topContentheader[1].innerText = siteContent["main-content"] ["about-h4"];

let topContentText = document.querySelectorAll(".top-content .text-content p");
topContentText[0].innerText = siteContent['main-content'] ['features-content'];
topContentText[1].innerText = siteContent['main-content'] ['about-content'];
// end of top content

// bottom content
let bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeader[0].innerText = siteContent ['main-content'] ['services-h4'];
bottomContentHeader[1].innerText = siteContent ['main-content'] ['product-h4'];
bottomContentHeader[2].innerText = siteContent ['main-content'] ['vision-h4'];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].innerText = siteContent['main-content'] ['services-content'];
bottomContentText[1].innerText = siteContent['main-content'] ['product-content'];
bottomContentText[2].innerText = siteContent['main-content'] ['vision-content'];
// end of bottom content

// contactInformation 
let contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent ['contact'] ['contact-h4']
 
let contactText = document.querySelectorAll('.contact p');

contactText[0].innerText = '123 Way 456 Street';
contactText[1].innerText = '1 (888) 888-8888';
contactText[2].innerText = 'siteContent.contact.email';
// contactInformation 

// footer

let footerText = document.querySelector('footer p')
footerText.innerText = 'Copyright Great Idea! 2018';


