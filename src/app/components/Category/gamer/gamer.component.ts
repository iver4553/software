import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConexionService, Item } from 'src/app/services/conexion.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  gamer$  : Observable<Item[]>;
  mostrarItem:any;
  items: Observable<any[]>;
  constructor(db: AngularFirestore, private router: Router, private conexion:ConexionService)
  {
    this.items = db.collection('items').valueChanges();
    //this.conexion.ListaItem().subscribe(item=>
      //{
        //this.items = item;
        console.log(this.items)
      //})
  }

  ngOnInit() : void{

    this.gamer$=this.conexion.getGamer();
  }
  detalles(product)
  {
    this.mostrarItem = product
  }
  carrito(product: Item){
    this.conexion.agregarCarrito(product);
    //this.carritoService.agregarCarrito(product);no funciona no puedo inyectar el servicio
  }

}
