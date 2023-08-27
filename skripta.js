const translations = {
    bs: {
      "home-heading": "Zašto trošiti vrijeme? Prepustite to profesionalcima!",
       "home-content": "Sa više od 15 godina iskustva, u mogućnosti smo da izađemo u susret najkompleksnijim zahtjevima, kako malih tako i velikih klijenata. Kontinuiranom edukacijom naših uposlenika ostajemo u mogućnosti da pratimo trendove u ICT svijetu, te da izađemo u susret najnovijim izazovima.",
       "about-heading": "Ko smo mi?",
       "about-content": "Access Solution je obrtničko društvo koje se bavi pružanjem usluga iz domena savjetovanja i implementacije rješenja iz domena sistemskih i mrežnih integracija, cybersecurity rješenja, kao i unified communication and collaboration sistema. Pored toga, bavimo se i projektovanjem infrastrukutralnih rješenja, te optimizacijom postojećih IT sistema, uz greenfield i brownfield implementacije.",
       "service-heading": "Naše Usluge",
        "service1": "ICT Consulting",
        "service2": "Sistemske i mrežne integracije",
        "service3": "Cybersecurity",
        "service4": "Unified Communication And Collaboration Sistema",
        "service5": "Infrastrukturna rješenja",
        "service6": "Optimizacija postojećih IT sistema",
        "contact-heading": "Kontaktirajte nas",
        "contact-content": "Kontaktirajte nas",
        "quick-links": "Quick links",
        "contact-info": "Contact info",
        "home": "Home",
        "about":"About",
        "services":"Service",
        "contact":"Contact",
        "phone-link": "<i class='fas fa-phone'></i> +123-456-7890",
    "email-link": "<i class='fas fa-envelope'></i> email",
    "location-link": "<i class='fas fa-map'></i> location",
    "home-btn": "Ko smo mi",
    "about-btn": "Naše Usluge",
    "home-link": "Home",
    "about-link": "O nama",
    "service-link": "Usluge",
    "contact-link": "Kontakt",
    },
    en: {
       "home-heading": "Why Waste Time? Leave It to Professionals!",
       "home-content": "With more than 15 years of experience, we are able to meet the most complex requirements of both small and large clients. Through the continuous education of our employees, we remain able to follow the trends in the ICT world and meet the latest challenges.",
       "about-heading": "Who Are We?",
       "about-content": "Access Solution is a trade company that provides services in the domain of consulting and implementation of solutions in the domain of system and network integration, cybersecurity solutions, as well as unified communication and collaboration systems. In addition, we also design infrastructural solutions and optimize existing IT systems, along with greenfield and brownfield implementations.",
       "service-heading": "Our Services",
        "service1": "ICT Consulting",
        "service2": "System and network integrations",
        "service3": "Cybersecurity",
        "service4": "Unified communication and collaboration sistema",
        "service5": "Infrastructure solutions",
        "service6": "Optimization of existing IT systems",
        "contact-heading": "Contact us",
        "contact-content": "Get in touch",
        "quick-links": "Quick links",
        "contact-info": "Contact info",
        "home": "Home",
        "about":"About",
        "services":"Service",
        "contact":"Contact",
        "phone-link": "<i class='fas fa-phone'></i> +123-456-7890",
    "email-link": "<i class='fas fa-envelope'></i> email",
    "location-link": "<i class='fas fa-map'></i> location",
    "home-btn": "Who we are",
    "about-btn": "Our services",
    "home-link": "Home",
    "about-link": "About",
    "service-link": "Service",
    "contact-link": "Contact",
      
    }
 };

 function changeLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
       const translationKey = element.getAttribute('data-translate');
       element.textContent = translations[lang][translationKey];
       element.innerHTML = translations[lang][translationKey];
    });
 }

 const bsButton = document.getElementById('bs');
 const enButton = document.getElementById('en');

 bsButton.addEventListener('click', () => {
    changeLanguage('bs');
    
 });

 enButton.addEventListener('click', () => {
    changeLanguage('en');
   
 });






let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
