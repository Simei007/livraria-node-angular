import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Pearson' },
    { codEditora: 2, nome: 'Novatec' },
    { codEditora: 3, nome: 'Alta Books' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const resultado = this.editoras.filter(
      e => e.codEditora === codEditora
    );
    return resultado.length > 0 ? resultado[0].nome : '';
  }
}
