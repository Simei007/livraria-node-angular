import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent {

  livro: Livro = new Livro();
  autores: string = '';
  editoras: any[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService,
    private router: Router
  ) {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    const autoresArray = this.autores.split(',');

    const novoLivro = {
      codigo: '',
      codEditora: this.livro.codEditora,
      titulo: this.livro.titulo,
      resumo: this.livro.resumo,
      autores: autoresArray
    };

    this.servLivros.incluir(novoLivro)
      .then(() => this.router.navigateByUrl('/lista'));
  }
}
