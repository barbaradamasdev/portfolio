import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      Course: 'Bootcamp FullStack SharpCoders 2023',
      Title: 'Íma Tech',
      Description: {
        pt:'Bootcamp de 6 meses, concluído em 2024. Aprimorei habilidades técnicas e soft skills por meio de projetos práticos. Atuei como monitora, auxiliando colegas no desenvolvimento técnico e liderando projetos colaborativos.',
        en:'6-month Bootcamp, completed in 2024. Enhanced technical and soft skills through hands-on projects. Served as a mentor, assisting peers in technical development and leading collaborative projects.',
      },
      Curriculum: ['JavaScript, CSS, Bootstrap, TypeScript, HTML5, C#, Angular (Framework), Comunicação, Trabalho em equipe, Liderança']
    },
    // {
    //   Course: 'Bootcamp FullStack Java+Angular 2023',
    //   Title: 'DIO + Santancer',
    //   Description: {
    //     pt:'Bootcamp na trilha de Fullstack Java + Angular, com duração de 2 meses, finalizado em 2023.',
    //     en:"Bootcamp on the Fullstack Java + Angular track, lasting 2 months, ending in 2023."
    //   },
    //   Curriculum: ['Javascript, Typescript, Angular, DataBase SQL and NoSQL, Spring Framework, API Rest']
    // },
    {
      Course: 'Full Stack JavaScript',
      Title: 'The Odin Project',
      Description: {
        pt: 'Um curso open-source focado em programação fullstackcom duração de 6 meses projetado para fornecer treinamento de nível industrial de alta qualidade com ênfase em projetos práticos.',
        en:'An 6-month open-source full stack coding curriculum designed to provide high-quality industry level training with an emphasis on hands-on projects.',
      },
      Curriculum: ['HTML, CSS, JavaScript, Node.js, SQL, Git, Acessibility, Responsivity']
    },
    {
      Course: 'Computer Science (Sistema de Informação)',
      Title: 'UFPE - Federal University of Pernambuco (Brazil)',
      Description: {
        pt: "Cursei metade do curso de Sistema de Informação como cadeiras complementares em de 2014 a 2016, chegando a mais de 240h de carga horária.",
        en: 'I attended half of the Information System course as complementary classes from 2014 to 2016, reaching more than 240 hours of workload.',
      },
      Curriculum: ['Java e python - 60h, Algorithms and data structure - 60h, Logic programming - 60h, Database - 60h']
    },
  ]

  constructor() { }

  getCourseByTitle(title: string): any {
    return this.courses.find(course => course.Title === title) || {};
  }

}
