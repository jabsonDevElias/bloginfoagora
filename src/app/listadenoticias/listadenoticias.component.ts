import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listadenoticias',
  templateUrl: './listadenoticias.component.html',
  styleUrl: './listadenoticias.component.scss'
})
export class ListadenoticiasComponent {
   @Input({ required: true }) titulo:string = "";
   @Input({ required: true }) data:string = "";
   @Input({ required: true }) imagem:string = "";
}
