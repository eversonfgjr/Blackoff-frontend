import { Component } from '@angular/core';
import { Item } from '../modelos/item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: Item[]; 

  constructor() {
    this.carregaItens();
  }

  carregaItens(){
    this.items =  [
      {
        titulo: 'Tênis Nike',
        preco: 500.00,
        imageUrl: 'https://static.zattini.com.br/produtos/tenis-nike-air-max-oketo-feminino/06/HZM-0646-306/HZM-0646-306_zoom1.jpg'
      },
      {
        titulo: 'Tênis Adidas',
        preco: 350.00,
        imageUrl: 'https://www.todamulher.com.br/wp-content/uploads/2018/06/52-1.jpg'
      },
      {
        titulo: 'Tênis Oxer',
        preco: 150.00,
        imageUrl: 'https://imgcentauro-a.akamaihd.net/900x900/9281762Y/tenis-oxer-velocity-masculino-img.jpg'
      },
      {
        titulo: 'Tênis Mizuno Atlas Masculino - Cinza e Branco',
        preco: 129.99,
        // tslint:disable-next-line: max-line-length
        imageUrl: 'http://t0.gstatic.com/images?q=tbn%3AANd9GcRElNTgHbXs-AaReUyFMvnLxKz3uDbl0C_8AAaDgfAQ90962zhgDPdU00kkI24QSaL5RZUHRhmxfw&usqp=CAc'
      }
    ];
  }

}
