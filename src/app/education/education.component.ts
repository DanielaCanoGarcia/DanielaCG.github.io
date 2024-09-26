import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})

export class EducationComponent {
  education : Array<any>=[];
  ngOnInit():void{
    let uni={
      fecha:"2022-2026",
      ubicacion:"Campus Ixtaczoquitlan",
      facultad:"Ciencias y Tecnologias",
      carrera:"ingenieria de software",
      /*Certificados: [
        {descripcion: ""},
        {descripcion: ""}
      ]*/
    };
    let prepa={
      fecha:"2017-2020",
      ubicacion:"Camino a chicola, Puerta grande",
      facultad:"CBTIS142",
      carrera:"Programacion",
      /*Certificados: [
        {descripcion: ""},
        {descripcion: ""}
      ]*/
    };
    this.education.push(uni);
    this.education.push(prepa);
    console.log(this.education);
  }
}
