import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
      { title: 'Lista de convidados', url: '/folder/Lista', icon: 'List' },

  ];
  public labels = ['Familia', 'Amigos', 'Comissão', 'Trabalho', 'Outros'];
  constructor() {}
}
