import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [
    {
      Title: 'Blizzard [Clone] - Landing Page',
      Image: '../../../assets/projects/projeto blizzard.jpg',
      Github: 'https://github.com/barbaradamasdev/blizzard-clone',
      Live: 'https://blizzard-clone.vercel.app/',
      Description: {
        pt: 'Projeto Blizzard com o objetivo de criar um clone do site da Blizzard, seguindo o modelo de Gilberto Prado para o BRChallenges. Garanti responsividade para diversas resoluções e destaquei a interatividade com efeitos de hover no menu e imagens dos jogos exclusivos. Além disso, implementei um modal de login para criar experiências mais realista para o usuário.',
        en: 'Blizzard project with the aim of creating a clone of the Blizzard website, following the model by Gilberto Prado for BRChallenges. I ensured responsiveness for various resolutions and emphasized interactivity with hover effects on the menu and images of exclusive games. Additionally, I implemented a login modal, showcasing my ability to create engaging user experiences.',
      },
      Technologies: ['Typescript', 'Angular', 'HTML']
    },
    {
      Title: 'MilkBark - Task Manager',
      Image: '../../../assets/projects/projeto milkbark.jpg',
      Github: 'https://github.com/barbaradamasdev/to-do-list',
      Live: 'https://main--aquamarine-haupia-cbf593.netlify.app/',
      Description: {
        pt: 'Desenvolvimento de um sistema responsivo para gerenciamento de tarefas, aplicando conhecimentos nas linguagens básicas de front end e utilizando localStorage, seguindo diretrizes e wireframes propostos no desafio do curso. Consegui me tornar monitora do curso com a conclusão desse desafio.',
        en: 'Developed a responsive task management system by applying skills in basic front-end languages and utilizing localStorage, following guidelines and wireframes proposed in the course challenge. Achieved the position of course monitor upon successful completion of this project.',
      },
      Technologies: ['JavaScript', 'CSS', 'HTML']
    },
    {
      Title: 'Pandas Bárbaros - Confeitaria',
      Image: '../../../assets/projects/projeto pandas barbaros.jpg',
      Github: '',
      Live: 'https://www.pandasbarbaros.com.br/',
      Description: {
        pt: 'Desenvolvi o site da confeitaria Pandas Barbaros utilizando WordPress, onde foquei no design, na interface do usuário e na experiência do usuário. Criei um layout atrativo e funcional para exibir os produtos da confeitaria',
        en: "I developed the website for Pandas Barbaros Bakery using WordPress, focusing on design, user interface, and user experience. I created an attractive and functional layout to showcase the bakery's products."
      },
      Technologies: ['Wordpress', 'CSS']
    },
    {
      Title: 'Space Website',
      Image: '../../../assets/projects/projeto space.jpg',
      Github: 'https://github.com/barbaradamasdev/Space-Travel-Site',
      Live: 'https://marvelous-smakager-724351.netlify.app/',
      Description: {
        pt: 'Desenvolvi um site espacial, usando HTML, CSS e JavaScript vanilla para maior controle das ferramentas puras. Esse é um desafio do FrontEnd Mentor. Adoto sempre Mobile First e utilizei Flexbox, implementei animações e um menu "sanduíche" para facilitar a navegação na versão mobile. Priorizei a acessibilidade, enfatizando a hierarquia para garantir uma experiência inclusiva e acessível a todos os usuários.',
        en: 'I developed a space-themed website using HTML, CSS, and vanilla JavaScript for greater control over pure tools. This is a challenge from FrontEnd Mentor. I always adopt a Mobile First approach, utilizing Flexbox, implementing animations, and a "sandwich" menu to enhance navigation on the mobile version. I prioritized accessibility, emphasizing hierarchy to ensure an inclusive and accessible experience for all users.',
      },
      Technologies: ['JavaScript', 'CSS', 'HTML']
    },
    {
      Title: 'TecaFocus - Movie Database',
      Image: '../../../assets/projects/projeto tecafocus.jpg',
      Github: 'https://github.com/barbaradamasdev/db-tecafocus-angular',
      Live: 'https://tecafocus.vercel.app/home',
      Description: {
        pt: 'Curadoria para entusiastas de filmes e séries. Desenvolvido utilizando Angular v.17, o site integra uma API da OMDB para fornecer aos usuários recomendações personalizadas, avaliações e informações detalhadas sobre filmes e séries. Possui design responsivo para acessibilidade em diversos dispositivos.',
        en: 'Curated for film and series enthusiasts, this project was developed using Angular v.17. The site integrates the OMDB API to provide users with personalized recommendations, reviews, and detailed information about movies and series. It features responsive design for accessibility across various devices.',
      },
      Technologies: ['Typescript', 'Angular', 'API', 'HTML', 'CSS']
    },
    {
      Title: 'Capibank - Fintech',
      Image: '../../../assets/projects/projeto capibank.jpg',
      Github: 'https://github.com/barbaradamasdev/capibank-hackadev',
      Live: 'https://capibank.vercel.app/',
      Description: {
        pt: 'Como membro da equipe responsável pelo desenvolvimento do projeto Capibank, uma fintech criada pela equipe Sharp Troopers como parte do Bootcamp SharpCoders, desempenhei diversos papéis-chave. Além de contribuir com minhas habilidades em Angular e C#, fui responsável pela criação das telas do frontend, atuando como Product Owner, líder técnica e realizando revisão de código. Nosso objetivo era simular um ambiente de desenvolvimento do mundo real usando a metodologia Scrum, e trabalhamos arduamente para criar uma solução financeira completa, combinando nossas habilidades e experiências.',
        en: 'As a member of the team responsible for the development of the Capibank project, a fintech created by the Sharp Troopers team as part of the SharpCoders Bootcamp, I played several key roles. In addition to contributing my skills in Angular and C#, I was responsible for creating the frontend screens, acting as Product Owner, technical lead, and conducting code reviews. Our goal was to simulate a real-world development environment using the Scrum methodology, and we worked diligently to create a complete financial solution, combining our skills and experiences.'
      },
      Technologies: ['Typescript', 'Angular', 'API', 'C#', 'HTML', 'CSS']
    },
    {
      Title: 'ProcessTrack - Monitor de Processos',
      Image: '../../../assets/projects/projeto processtrack.jpg',
      Github: 'https://github.com/barbaradamasdev/DesafioMXM',
      Live: '',
      Description: {
        pt: 'Desenvolvi o projeto "Monitor de Processos" como um desafio técnico de seleção. O objetivo era criar um monitor de processos do sistema operacional, listando os processos, os recursos consumidos e utilizando gráficos para ilustrar o processamento. Implementei recursos como loading para indicar o carregamento, uma tabela de processos com ordenação e busca, armazenamento por drives existentes e detalhamento do gráfico com mouse, garantindo também a responsividade do aplicativo.',
        en: "I developed the 'Process Monitor' project as a technical challenge for selection. The goal was to create a system process monitor, listing processes, resource consumption, and using charts to illustrate processing. I implemented features such as loading indicators, a process table with sorting and search functionality, storage by existing drives, and detailed chart information on mouse hover, ensuring the application's responsiveness."
      },
      Technologies: ['Typescript', 'Angular', 'API', 'C#', 'HTML', 'CSS']
    },
    {
      Title: 'Pokedex - API Website',
      Image: '../../../assets/projects/projeto pokedex.jpg',
      Github: 'https://github.com/barbaradamasdev/js-pokedex',
      Live: 'https://zesty-taiyaki-849a2f.netlify.app/',
      Description: {
        pt: 'Desenvolvi uma biblioteca de Pokémon utilizando a API da Pokédex, empregando apenas HTML, CSS e JavaScript puro, sem a utilização de bibliotecas. Incluí uma barra de pesquisa para maior comodidade dos usuários. Dado o caráter comum do projeto, priorizei um estilo moderno, com cores suaves na estética.',
        en: 'A Pokémon library using the Pokédex API, using only HTML, CSS, and pure JavaScript without any libraries. I incorporated a search bar for user convenience. Given the commonplace nature of the project, I prioritized a modern aesthetic with gentle colors in the styling.',
      },
      Technologies:  ['JavaScript', 'CSS', 'HTML', 'API']
    },
    {
      Title: 'Tattoo Portfolio',
      Image: '../../../assets/projects/projeto tattoo.jpg',
      Github: 'https://github.com/barbaradamasdev/Landing-page-Tattoo',
      Live: 'https://barbaradamasdev.github.io/Landing-page-Tattoo/',
      Description: {
        pt: 'Criei um portfólio para um tatuador, empregando HTML, CSS e JavaScript puro para um controle mais preciso. O design adota Grid e Flexbox, garantindo responsividade e seguindo a abordagem "mobile first". Implementei um menu "sanduíche" para facilitar a navegação em dispositivos móveis. A escolha por um site estático, sem bibliotecas, visa proporcionar um maior domínio nas bases. O site foca nas imagens afim de mostrar o trabalho do artista.',
        en: 'I crafted a portfolio for a tattoo artist, utilizing HTML, CSS, and pure JavaScript for precise control. The design incorporates Grid and Flexbox, ensuring responsiveness and adhering to the "mobile-first" approach. I implemented a "sandwich" menu to enhance navigation on mobile devices. Opting for a static site without libraries aims to provide a deeper mastery of the fundamentals. The website emphasizes images to showcase the artist`s work.',
      },
      Technologies:  ['JavaScript', 'CSS', 'HTML']
    },
    {
      Title: 'Portfolio',
      Image: '../../../assets/projects/projeto portfolio.jpg',
      Github: 'https://github.com/barbaradamasdev/portfolio',
      Live: 'https://barbaradamasceno.vercel.app/',
      Description: {
        pt: 'Desenvolvi meu próprio portfólio seguindo a abordagem "mobile first" com foco em responsividade. Incluí um darkmode e a capacidade de alterar o idioma do site, além de animações e interações para proporcionar uma experiência visualmente agradável.',
        en: 'I crafted my own portfolio following a "mobile-first" approach with a focus on responsiveness. I included a dark mode, the ability to change the site`s language, along with animations and interactions to provide a visually pleasing experience.',
      },
      Technologies:  ['Typescript', 'Angular', 'HTML', 'CSS']
    }
  ]

  constructor() { }

  getProjectByTitle(title: string): any {
    return this.projects.find(project => project.Title === title) || {};
  }
}
