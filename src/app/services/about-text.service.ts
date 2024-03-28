import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutTextService {
  aboutText = [
    {
      Desc1: {
        pt: 'Olá, sou Barbara, uma desenvolvedora fullstack com foco em frontend, atualmente moro em Recife, Brasil.',
        en: "Hello, I'm Barbara, a fullstack developer with a focus on frontend. Based in Recife, Brazil.",
      },
      Desc2: {
        pt: 'Desde a adolescência, a tecnologia sempre me fascinou. Inicialmente explorando o mundo do design web, acabei seguindo meu coração e me dedicando à música, tocando em orquestras e ensinando a arte a diversos públicos.',
        en: 'Technology has always fascinated me since adolescence. Initially exploring the world of web design, I eventually followed my heart and dedicated myself to music, playing in orchestras and teaching the art to diverse audiences.',
      },
      Desc3: {
        "pt": "Mais tarde, a vida me guiou para a faculdade de sistemas de informação, onde aprendi algoritmos, bancos de dados e Java. No meio da faculdade, fundei uma empresa de confeitaria, onde desenvolvi habilidades essenciais de ouvir e resolver problemas dos clientes. Em seguida, retornei à área de desenvolvimento, onde tenho estudado intensamente, apaixonando-me por cada momento dessa jornada.",
        "en": "Later on, life led me to pursue a degree in Information Systems, where I learned algorithms, databases, and Java. In the midst of my college journey, I founded a confectionery business, honing essential skills in listening to and solving customers' problems. Following that, I returned to the development field, where I've been studying intensively and falling in love with every moment of this journey."
      },
      ButtonHire: {
        pt: 'Fala comigo',
        en: 'Contact me',
      },
      ButtonView: {
        pt: 'Veja meu portfolio',
        en: 'View my portfolio',
      },
    },
  ];

  getAboutText(): any {
    return this.aboutText;
  }
}
