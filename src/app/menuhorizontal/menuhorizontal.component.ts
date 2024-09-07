import { Component } from '@angular/core';
import { CategoriasComponent } from '../categorias/categorias.component';
@Component({
  selector: 'app-menuhorizontal',
  templateUrl: './menuhorizontal.component.html',
  styleUrl: './menuhorizontal.component.scss'
})
export class MenuhorizontalComponent {
   icategorias = new CategoriasComponent();
   categorias = this.icategorias.categorias;
}
