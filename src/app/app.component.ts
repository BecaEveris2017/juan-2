import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'juan hernandez';
  colores: string[];
  showcolors: boolean;

  constructor(){

    this.colores =['negro', 'rojo', 'blanco'];
    this.showcolors = false;
  }
  togglecolors(){
    this.showcolors = !this.showcolors;
  }
}