import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { initNgModule } from '@angular/core/src/view/ng_module';
import { Product } from 'src/app/models/product/product';
import { Router } from '@angular/router';
import { ConexionService, Item } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit 
{
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
  filterPost = '';
  ngOnInit() 
  {
  }

  detalles(item): void
  {
    this.mostrarItem = item;
  }

  carrito(product: Item)
  {
    this.conexion.agregarCarrito(product);
  }
}
