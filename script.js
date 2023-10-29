// Toggle menu
function toggleMenu () {
    document.getElementById('nav-secondary').classList.toggle('active');
    document.getElementById('close-menu').classList.toggle('active');
    document.getElementById('line1').classList.toggle('change');
    document.getElementById('line2').classList.toggle('change');
    document.getElementById('line3').classList.toggle('change');
}

// Scroll and change top button and change theme
window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("totop").style.display ='inherit';
      
    } else {
        document.getElementById("totop").style.display ='none';
        
    }
}

// Open and close card
function opencard(id) {
    const card = document.getElementById(id);
    card.classList.toggle('activecard')
    
    if (card.classList.contains('activecard')) {
        card.style.height = "390px";
    } else {
        card.style.height = "110px";
    }
    
}

// Dark mode
const changeMode = document.getElementById('change-theme');

function toogleDarkMode() {
    document.body.classList.toggle('dark')
    document.getElementById("pointer").classList.toggle('dark');
}

// Load dark or light mode

function loadTheme() {
    const darkmode = localStorage.getItem('dark')
    

    if (darkmode) {
        toogleDarkMode();
    }
}

loadTheme();

changeMode.addEventListener('change', function (){
    toogleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }

})



// Data language

let navabout = document.querySelector('.title-about'),
    navprojects = document.querySelector('.title-project'),
    navcontact = document.querySelector('.title-contact')
    introdescription1 = document.querySelector('.intro-description1'),
    introdescription2 = document.querySelector('.intro-description2'),
    introdescription3 = document.querySelector('.intro-description3'),
    introbtnprincipal = document.querySelector('.intro-btn-principal'),
    introbtnsecondary = document.querySelector('.intro-btn-secondary'),

    sectionabouttitle = document.querySelector('.sectionAboutTitle'),
    projectdescription1 = document.querySelector('.projectDescription1'),
    projectdescription2 = document.querySelector('.projectDescription2'),
    projectdescription3 = document.querySelector('.projectDescription3'),
    projectdescription4 = document.querySelector('.projectDescription4'),
    projectdescription5 = document.querySelector('.projectDescription5'),
    projectdescription6 = document.querySelector('.projectDescription6'),
    projectdescription7 = document.querySelector('.projectDescription7'),

    sectionskillstitle = document.querySelector('.sectionSkillsTitle'),
    cardtitle1 = document.querySelector('#card1 .cardtitle1'),
    cardtitle2 = document.querySelector('#card2 .cardtitle2'),
    cardtitle3 = document.querySelector('#card3 .cardtitle3'),
    cardtitle4 = document.querySelector('#card4 .cardtitle4'),
    
    cardsubtitle1 = document.querySelector('#card1 .cardSubtitle1'),
    cardsubtitle2 = document.querySelector('#card2 .cardSubtitle2'),
    cardsubtitle3 = document.querySelector('#card3 .cardSubtitle3'),
    cardsubtitle4 = document.querySelector('#card4 .cardSubtitle4'),
    
    carddescription1 = document.querySelector('#card1 .cardDescription1'),
    carddescription2 = document.querySelector('#card2 .cardDescription2'),
    carddescription3 = document.querySelector('#card3 .cardDescription3'),
    carddescription4 = document.querySelector('#card4 .cardDescription4'),

    sectioncontacttitle = document.querySelector('.sectionContactTitle'),
    inputname = document.querySelector('.inputname'),
    inputemail = document.querySelector('.inputemail'),
    inputmessage = document.querySelector('.inputmessage'),
    btnsend = document.querySelector('.btnsend'),
    
    footertext = document.querySelector('.footer-text');
    
    
// Toogle language option
function toggleLanguage () {
    document.getElementById('language2').classList.toggle('openSelection');
}


function changeLanguage(answer) {
    let language = document.getElementById('language');
    let selected = language.options[language.selectedIndex].value;
    
    
    /* let selected = answer; */
    /* if (answer === 'en') {
        document.getElementById('select').style.top ='0px'
        console.log('Idioma: EN')
    } else if (answer === 'pt') {
        document.getElementById('select').style.top ='-45px'
        console.log('Idioma: PT')
    } */


    navabout.textContent = data[selected].navabout;
    navprojects.textContent = data[selected].navprojects;
    navcontact.textContent = data[selected].navcontact;
;
    introdescription1.textContent = data[selected].introdescription1;
    introdescription2.textContent = data[selected].introdescription2;
    introdescription3.textContent = data[selected].introdescription3;
    introbtnprincipal.textContent = data[selected].introbtnprincipal;
    introbtnsecondary.textContent = data[selected].introbtnsecondary;

    sectionabouttitle.textContent = data[selected].sectionabouttitle;
    projectdescription1.textContent = data[selected].projectdescription1;
    //projectdescription2.textContent = data[selected].projectdescription2;
    //projectdescription3.textContent = data[selected].projectdescription3;
    projectdescription4.textContent = data[selected].projectdescription4;
    projectdescription5.textContent = data[selected].projectdescription5;
    projectdescription6.textContent = data[selected].projectdescription6;
    projectdescription7.textContent = data[selected].projectdescription7;

    sectionskillstitle.textContent = data[selected].sectionskillstitle;

    //cardtitle1.textContent = data[selected].cardtitle1;
    //cardtitle2.textContent = data[selected].cardtitle2;
    //cardtitle3.textContent = data[selected].cardtitle3;
    cardtitle4.textContent = data[selected].cardtitle4;
    
    //cardsubtitle1.textContent = data[selected].cardsubtitle1;
    //cardsubtitle2.textContent = data[selected].cardsubtitle2;
    //cardsubtitle3.textContent = data[selected].cardsubtitle3;
    cardsubtitle4.textContent = data[selected].cardsubtitle4;

    
    //carddescription1.textContent = data[selected].carddescription1;
    //carddescription2.textContent = data[selected].carddescription2;
    //carddescription3.textContent = data[selected].carddescription3;
    carddescription4.textContent = data[selected].carddescription4;
    
    sectioncontacttitle.textContent = data[selected].sectioncontacttitle;
    //inputname.textContent = data[selected].inputname;
    //inputemail.textContent = data[selected].inputemail;
    //inputmessage.textContent = data[selected].inputmessage;
    //btnsend.textContent = data[selected].btnsend;

    footertext.textContent = data[selected].footertext;
}

let data = {
    pt: {
        navabout: 'Sobre',
        navprojects: 'Projetos',
        navcontact:'Contato',

        introdescription1: 'Olá, sou Babi, uma desenvolvedora fullstack com foco em frontend, atualmente moro em Recife, Brasil.',
        introdescription2: 'Technology has always fascinated me since adolescence. Initially exploring the world of web design, I eventually followed my heart and dedicated myself to music, playing in orchestras and teaching the art to diverse audiences.',
        introdescription3: 'Later on, life led me to pursue a degree in Information Systems, where I learned algorithms, databases, and Java. In the midst of my college journey, I founded a confectionery business, honing essential skills in listening to and solving customers' problems.In 2022, life called me back to technology. Since then, I've been studying intensively and falling in love with every moment of this journey.',
        introbtnprincipal: 'Fala comigo',
        introbtnsecondary: 'Veja meu portfolio',

        sectionabouttitle: 'Projetos',
        projectdescription1: 'Website com temática espacial, desafio criado pelo FrontEnd Mentor',
        projectdescription2: 'Projeto de conclusão de curso de Javascript do Odin Project. Utilizei JS, HTML e CSS para fazer um jogo de pedra, papel e tesoura',
        projectdescription3: 'Desafio de Landing Page do FrontEndMentor',
        projectdescription4: 'Clone do blog da Globo News para conclusão do curso de Angular do Santander Bootcamp 2023 - Fullstack Java+Angular',
        projectdescription5: 'Pokedex utilizando uma API, projeto de conclusão do curso de Javascript do Santander Bootcamp 2023 - Fullstack Java+Angular',
        projectdescription6: 'Portfolio de um tatuador utilizando front end basico, landing page estática, mobile-first',
        projectdescription7: 'Esse portfolio foi feito pensando em mobile-first e usando vanilla javascript.',

        sectionskillstitle: 'Tecnologias e experiências',
        cardtitle1: 'Full Stack JavaScript',
        cardsubtitle1: 'The Odin Project',
        carddescription1: 'Um curso open-source focado em programação fullstackcom duração de 6 meses projetado para fornecer treinamento de nível industrial de alta qualidade com ênfase em projetos práticos.',
        cardtitle2: 'Conquistando Layouts Responsivos',
        cardsubtitle2: 'Kevil Powell',
        carddescription2: 'Um desafio de 21 dias, por Kevin Powell.',
        cardtitle3: 'Santander Bootcamp 2023 - Fullstack Java+Angular',
        cardsubtitle3: 'DIO',
        carddescription3: 'Bootcamp na trilha de Fullstack Java + Angular, com duração de 2 meses, finalizado em 2023.',
        cardtitle4: 'Sistema de Informação',
        cardsubtitle4: 'UFPE',
        carddescription4: 'Cursei metade do curso de Sistema de Informação como cadeiras complementares em de 2014 a 2016, chegando a mais de 240h de carga horária.',

        sectioncontacttitle: 'Contato',
        inputname: 'Seu nome',
        inputemail: 'Seu email',
        inputmessage: 'Sua mensagem',
        btnsend: 'Enviar mensagem',

        footertext: 'Criado e desenvolvido por Barbara Damasceno'
    },
    en: {
        navabout: 'About',
        navprojects: 'Projects',
        navcontact:'Contact',

        introdescription1: "Hello, I'm Babi, a fullstack developer with a focus on frontend. based in Recife, Brazil.",
        introdescription2: "Technology has always fascinated me since adolescence. Initially exploring the world of web design, I eventually followed my heart and dedicated myself to music, playing in orchestras and teaching the art to diverse audiences. ",        
        introdescription3: "Later on, life led me to pursue a degree in Information Systems, where I learned algorithms, databases, and Java. In the midst of my college journey, I founded a confectionery business, honing essential skills in listening to and solving customers' problems.In 2022, life called me back to technology. Since then, I've been studying intensively and falling in love with every moment of this journey.",
        introbtnprincipal: 'Hire me',
        introbtnsecondary: 'View my portfolio',

        sectionabouttitle: 'Projects',
        projectdescription1: 'Space-themed website, challenge created by FrontEnd Mentor',
        projectdescription2: 'Odin Project Javascript course completion project. I used JS, HTML and CSS to make a game of rock, paper, scissors',
        projectdescription3: 'FrontEndMentor Landing Page Challenge',
        projectdescription4: 'Clone of the Globo News blog to complete the Santander Bootcamp 2023 Angular course - Fullstack Java+Angular',
        projectdescription5: 'Pokedex using an API, completion project for the Santander Bootcamp 2023 Javascript course - Fullstack Java+Angular',
        projectdescription6: 'Portfolio of a tattoo artist using basic front end, static landing page, mobile-first',
        projectdescription7: 'This portfolio was made with mobile-first, vanilla javascript.',

        sectionskillstitle: 'Skills and Experiences ',
        cardtitle1: 'Full Stack JavaScript',
        cardsubtitle1: 'The Odin Project',
        carddescription1: 'An 6-month open-source full stack coding curriculum designed to provide high-quality industry level training with an emphasis on hands-on projects.',
        cardtitle2: 'Conquering Responsive Layouts',
        cardsubtitle2: 'Kevil Powell',
        carddescription2: 'An 21-day challenge, by Kevin Powell.',
        cardtitle3: "Santander Bootcamp 2023 - Fullstack Java+Angular",
        cardsubtitle3: 'DIO',
        carddescription3: 'Bootcamp on the Fullstack Java + Angular track, lasting 2 months, ending in 2023.',
        cardtitle4: 'Computer Science',
        cardsubtitle4: 'UFPE - Federal University of Pernambuco (Brazil)',
        carddescription4:  'I attended half of the Information System course as complementary classes from 2014 to 2016, reaching more than 240 hours of workload.',


        sectioncontacttitle: 'Contact',
        inputname: 'Your name',
        inputemail: 'Your email',
        inputmessage: 'Your message',
        btnsend: 'Send message',

        footertext: 'Designed and Developed by Barbara Damasceno'
    }

}