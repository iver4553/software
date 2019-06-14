import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConexionService, Item } from 'src/app/services/conexion.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops$  : Observable<Item[]>;
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

    this.laptops$=this.conexion.getLaptops();
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
