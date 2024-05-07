import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  icons = [
    {Icon: 'angularjs/angularjs-original.svg', Title: 'Angular'},
    {Icon: 'typescript/typescript-original.svg', Title: 'TypeScript'},
    {Icon: 'javascript/javascript-original.svg', Title: 'JavaScript'},
    {Icon: 'html5/html5-original-wordmark.svg', Title: 'HTML'},
    {Icon: 'css3/css3-original-wordmark.svg', Title: 'CSS'},
    {Icon: 'csharp/csharp-original.svg', Title: 'C#'},
    {Icon: 'java/java-original.svg', Title: 'Java'},
    {Icon: 'nodejs/nodejs-original.svg', Title: 'Node Js'},
  ]

  constructor() { }

  getIconByTitle(title: string): any {
    return this.icons.find(icons => icons.Title === title) || {};
  }

}
