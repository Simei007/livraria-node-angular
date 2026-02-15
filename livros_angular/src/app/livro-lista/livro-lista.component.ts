import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {

  livros: Livro[] = [];
  editoras: any[] = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) { }

  ngOnInit(): void {
    this.servLivros.obterLivros()
      .then(livros => this.livros = livros);

    this.editoras = this.servEditora.getEditoras();
  }
  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
  excluir(codigo: string): void {
    this.servLivros.excluir(codigo)
      .then(() => this.servLivros.obterLivros()
        .then(l => this.livros = l));
  }
}
