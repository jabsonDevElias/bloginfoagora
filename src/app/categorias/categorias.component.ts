import { Component } from '@angular/core';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {
    removerAcentos(texto:string) {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    categorias:string[] = [
      "Política",
      "Esportes",
      "Economia",
      "Tecnologia",
      "Saúde",
      "Entretenimento",
      "Educação"
     ]
}

