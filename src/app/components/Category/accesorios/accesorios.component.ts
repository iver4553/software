import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConexionService, Item } from 'src/app/services/conexion.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  accesorios$  : Observable<Item[]>;
  mostrarItem:any;
  items: Observable<any[]>;
  constructor(db: AngularFirestore, private router: Router, private conexion:ConexionService) {
    this.items = db.collection('items').valueChanges();
    //this.conexion.ListaItem().subscribe(item=>
      //{
        //this.items = item;
        console.log(this.items)
      //})
   }

  ngOnInit() : void{

    this.accesorios$=this.conexion.getAccesorios();
  }
  detalles(item): void
  {
    this.mostrarItem = item;
  }
  carrito(product: Item){
    this.conexion.agregarCarrito(product);
    //this.carritoService.agregarCarrito(product);no funciona no puedo inyectar el servicio
  }

}