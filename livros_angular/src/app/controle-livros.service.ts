import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const dados: LivroMongo[] = await response.json();

    return dados.map(
      l => new Livro(l._id ?? '', l.codEditora, l.titulo, l.resumo, l.autores)
    );
  }

  async incluir(livro: Livro): Promise<boolean> {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        codEditora: livro.codEditora,
        titulo: livro.titulo,
        resumo: livro.resumo,
        autores: livro.autores
      })
    });

    return response.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });

    return response.ok;
  }
}
