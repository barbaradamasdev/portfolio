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
function changeLanguage() {
    let language = document.getElementById('language');
    let selected = language.options[language.selectedIndex].value;
    
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
    projectdescription2.textContent = data[selected].projectdescription2;
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
changeLanguage();

let data = {
    pt: {
        navabout: 'Sobre',
        navprojects: 'Projetos',
        navcontact:'Contato',

        introdescription1: 'Olá, sou Barbara, uma desenvolvedora fullstack com foco em frontend, atualmente moro em Recife, Brasil.',
        introdescription2: 'Desde a adolescência, a tecnologia sempre me fascinou. Inicialmente explorando o mundo do design web, acabei seguindo meu coração e me dedicando à música, tocando em orquestras e ensinando a arte a diversos públicos.',
        introdescription3: "Mais tarde, a vida me guiou para a faculdade de sistemas de informação, onde aprendi algoritmos, bancos de dados e Java. No meio da faculdade, fundei uma empresa de confeitaria, onde desenvolvi habilidades essenciais de ouvir e resolver problemas dos clientes. Em 2022, a vida me chamou de volta para a tecnologia. Desde então, tenho estudado intensamente, apaixonando-me por cada momento dessa jornada. ",
        introbtnprincipal: 'Fala comigo',
        introbtnsecondary: 'Veja meu portfolio',

        sectionabouttitle: 'Projetos',
        projectdescription1: 'Desenvolvi um site espacial, usando HTML, CSS e JavaScript vanilla para maior controle das ferramentas puras. Esse é um desafio do FrontEnd Mentor. Adoto sempre Mobile First e utilizei Flexbox, implementei animações e um menu "sanduíche" para facilitar a navegação na versão mobile. Priorizei a acessibilidade, enfatizando a hierarquia para garantir uma experiência inclusiva e acessível a todos os usuários.',
        projectdescription2: 'Desenvolvimento de um sistema responsivo para gerenciamento de tarefas, aplicando conhecimentos nas linguagens básicas de front end e utilizando localStorage, seguindo diretrizes e wireframes propostos no desafio do curso. Consegui me tornar monitora do curso com a conclusão desse desafio.',
        projectdescription3: 'Desafio de Landing Page do FrontEndMentor',
        projectdescription4: 'Clonei um site de notícias, GloboNews, uma renomada plataforma nacional. Priorizei a responsividade e otimização para interações aprimoradas em dispositivos móveis. Utilizei Angular e TypeScript para uma abordagem robusta e eficiente no desenvolvimento, garantindo uma experiência de usuário fluida e envolvente.',
        projectdescription5: 'Desenvolvi uma biblioteca de Pokémon utilizando a API da Pokédex, empregando apenas HTML, CSS e JavaScript puro, sem a utilização de bibliotecas. Incluí uma barra de pesquisa para maior comodidade dos usuários. Dado o caráter comum do projeto, priorizei um estilo moderno, com cores suaves na estética.',
        projectdescription6: 'Criei um portfólio para um tatuador, empregando HTML, CSS e JavaScript puro para um controle mais preciso. O design adota Grid e Flexbox, garantindo responsividade e seguindo a abordagem "mobile first". Implementei um menu "sanduíche" para facilitar a navegação em dispositivos móveis. A escolha por um site estático, sem bibliotecas, visa proporcionar um maior domínio nas bases. O site foca nas imagens afim de mostrar o trabalho do artista.',
        projectdescription7: 'Desenvolvi meu próprio portfólio seguindo a abordagem "mobile first" com foco em responsividade. Incluí um darkmode e a capacidade de alterar o idioma do site, além de animações e interações para proporcionar uma experiência visualmente agradável.',

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

        introdescription1: "Hello, I'm Barbara, a fullstack developer with a focus on frontend. based in Recife, Brazil.",
        introdescription2: "Technology has always fascinated me since adolescence. Initially exploring the world of web design, I eventually followed my heart and dedicated myself to music, playing in orchestras and teaching the art to diverse audiences. ",        
        introdescription3: "Later on, life led me to pursue a degree in Information Systems, where I learned algorithms, databases, and Java. In the midst of my college journey, I founded a confectionery business, honing essential skills in listening to and solving customers' problems.In 2022, life called me back to technology. Since then, I've been studying intensively and falling in love with every moment of this journey.",
        introbtnprincipal: 'Hire me',
        introbtnsecondary: 'View my portfolio',

        sectionabouttitle: 'Projects',
        projectdescription1: 'I developed a space-themed website using HTML, CSS, and vanilla JavaScript for greater control over pure tools. This is a challenge from FrontEnd Mentor. I always adopt a Mobile First approach, utilizing Flexbox, implementing animations, and a "sandwich" menu to enhance navigation on the mobile version. I prioritized accessibility, emphasizing hierarchy to ensure an inclusive and accessible experience for all users.',
        projectdescription2: 'Developed a responsive task management system by applying skills in basic front-end languages and utilizing localStorage, following guidelines and wireframes proposed in the course challenge. Achieved the position of course monitor upon successful completion of this project.',
        projectdescription3: 'Desafio de Landing Page do FrontEndMentor',
        projectdescription4: 'I crafted a news website, a clone of GloboNews, a prominent national platform. Emphasizing responsiveness and enhanced interactions for mobile devices, I employed Angular and TypeScript for a robust and efficient development approach, ensuring a seamless and engaging user experience.',
        projectdescription5: 'A Pokémon library using the Pokédex API, using only HTML, CSS, and pure JavaScript without any libraries. I incorporated a search bar for user convenience. Given the commonplace nature of the project, I prioritized a modern aesthetic with gentle colors in the styling',
        projectdescription6: 'I crafted a portfolio for a tattoo artist, utilizing HTML, CSS, and pure JavaScript for precise control. The design incorporates Grid and Flexbox, ensuring responsiveness and adhering to the "mobile-first" approach. I implemented a "sandwich" menu to enhance navigation on mobile devices. Opting for a static site without libraries aims to provide a deeper mastery of the fundamentals. The website emphasizes images to showcase the artist`s work.',
        projectdescription7: 'I crafted my own portfolio following a "mobile-first" approach with a focus on responsiveness. I included a dark mode, the ability to change the site`s language, along with animations and interactions to provide a visually pleasing experience.',

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
