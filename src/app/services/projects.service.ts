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
      Technologies: ['Typescript', 'Angular', 'HTML5']
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
      Technologies: ['JavaScript', 'CSS', 'HTML5']
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
      Technologies: ['JavaScript', 'CSS', 'HTML5']
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
      Technologies: ['Typescript', 'Angular', 'API', 'Html', 'CSS']
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
      Technologies:  ['JavaScript', 'CSS', 'HTML5']
    },
    {
      Title: 'Tattoo Portfolio',
      Image: '../../../assets/projects/projeto tattoo.jpg',
      Github: 'https://github.com/barbaradamasdev/Landing-page-Tattoo',
      Live: 'https://barbaradamasdev.github.io/Landing-page-Tattoo/"',
      Description: {
        pt: 'Criei um portfólio para um tatuador, empregando HTML, CSS e JavaScript puro para um controle mais preciso. O design adota Grid e Flexbox, garantindo responsividade e seguindo a abordagem "mobile first". Implementei um menu "sanduíche" para facilitar a navegação em dispositivos móveis. A escolha por um site estático, sem bibliotecas, visa proporcionar um maior domínio nas bases. O site foca nas imagens afim de mostrar o trabalho do artista.',
        en: 'I crafted a portfolio for a tattoo artist, utilizing HTML, CSS, and pure JavaScript for precise control. The design incorporates Grid and Flexbox, ensuring responsiveness and adhering to the "mobile-first" approach. I implemented a "sandwich" menu to enhance navigation on mobile devices. Opting for a static site without libraries aims to provide a deeper mastery of the fundamentals. The website emphasizes images to showcase the artist`s work.',
      },
      Technologies:  ['JavaScript', 'CSS', 'HTML5']
    },
    {
      Title: 'Portfolio',
      Image: '../../../assets/projects/projeto portfolio.jpg',
      Github: 'https://github.com/barbaradamasdev/portfolio',
      Live: 'https://barbaradamasdev.github.io/portfolio/',
      Description: {
        pt: 'Desenvolvi meu próprio portfólio seguindo a abordagem "mobile first" com foco em responsividade. Incluí um darkmode e a capacidade de alterar o idioma do site, além de animações e interações para proporcionar uma experiência visualmente agradável.',
        en: 'I crafted my own portfolio following a "mobile-first" approach with a focus on responsiveness. I included a dark mode, the ability to change the site`s language, along with animations and interactions to provide a visually pleasing experience.',
      },
      Technologies:  ['Typescript', 'Angular', 'Html', 'CSS']
    }
  ]

  constructor() { }

  getProjectByTitle(title: string): any {
    return this.projects.find(project => project.Title === title) || {};
  }
}
