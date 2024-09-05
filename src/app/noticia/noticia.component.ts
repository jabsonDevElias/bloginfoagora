import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss'
})
export class NoticiaComponent {
  constructor(private route: ActivatedRoute) { }

  titulo:any= "";
  paramCategoria:string="";

  ngOnInit(): void {
    this.titulo = this.route.snapshot.paramMap.get('categoria');
    this.paramCategoria = this.titulo;
  }

  

    noticia:any= [
      {
        data: '2024-09-01',
        titulo: 'Lançamento do Novo Smartphone',
        texto: 'A empresa XYZ anunciou o lançamento do seu mais novo smartphone, que promete revolucionar o mercado com suas novas tecnologias.',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqDK8H8SfzkaI4qCglpfZUVzCq0IJ24GWX9QHNajowR9k2RwB4ul7kxmZrmvcRUsGMGQ&usqp=CAU'
      },
      {
        data: '2024-08-28',
        titulo: 'Avanços na Inteligência Artificial',
        texto: 'Pesquisadores fizeram um grande avanço no desenvolvimento de IA, criando um algoritmo capaz de aprender de forma autônoma em velocidades recordes.',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s'
      },
      {
        data: '2024-08-25',
        titulo: 'Conferência de Desenvolvedores 2024',
        texto: 'A conferência anual para desenvolvedores foi realizada com grande sucesso, apresentando novas ferramentas e técnicas para a comunidade.',
        imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/wwdc-2024-apple.jpg?w=420&h=240&crop=1&quality=85'
      },
      {
        data: '2024-08-20',
        titulo: 'Nova Atualização de Software Disponível',
        texto: 'A versão mais recente do software ABC foi lançada, trazendo melhorias significativas de desempenho e novas funcionalidades.',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxmsenWB7da4PN8v5OKs9GKdP_AnQHVD6cA&s'
      }
  ];
  
  
}
