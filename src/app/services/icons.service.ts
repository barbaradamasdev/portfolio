import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  icons = [
    {Icon: 'html5/html5-original-wordmark.svg', Title: 'HTML'},
    {Icon: 'css3/css3-original-wordmark.svg', Title: 'CSS'},
    {Icon: 'javascript/javascript-original.svg', Title: 'JavaScript'},
    {Icon: 'nodejs/nodejs-original.svg', Title: 'Node Js'},
    {Icon: 'typescript/typescript-original.svg', Title: 'TypeScript'},
    {Icon: 'java/java-original.svg', Title: 'Java'},
    {Icon: 'csharp/csharp-original.svg', Title: 'C#'},
    {Icon: 'angularjs/angularjs-original.svg', Title: 'Angular'},
  ]

  constructor() { }

  getIconByTitle(title: string): any {
    return this.icons.find(icons => icons.Title === title) || {};
  }

}
