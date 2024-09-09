import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any>=[];
  ngOnInit():void{
    let work1={
      fecha:"2018-2022",
      ubicacion:"Ixtac, Ver.",
      puesto:"CEO",
      empresa:"Waves Lab",
      logros: [
        {descripcion: "Construccion de un ERP en la nube de google"},
        {descripcion: "Creacion de un cluster de hadoop y spark"}
      ]
    };
    let work2={
      fecha:"2022-2024",
      ubicacion:"Ixtac, Ver.",
      puesto:"CEO",
      empresa:"Waves Lab",
      logros: [
        {descripcion: "Construccion de un ERP en la nube de google"},
        {descripcion: "Creacion de un cluster de hadoop y spark"}
      ]
    };
    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
