import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConexionService, Item } from 'src/app/services/conexion.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  pc$  : Observable<Item[]>;
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

    this.pc$=this.conexion.getPcs();
  }
  detalles(Item)
  {
    this.mostrarItem = Item
  }
  carrito(Item: Item){
    this.conexion.agregarCarrito(Item);
    //this.carritoService.agregarCarrito(Item);no funciona no puedo inyectar el servicio
  }

}