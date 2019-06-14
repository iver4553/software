import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Item 
{ 
  name: string; 
}

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;
  //eds: Observable<any[]>;
  editarItem:any =
  {
    name:''
  }
  //itemss:any;
  //private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore, private service: ConexionService) 
  {
    //this.items = db.collection('items').valueChanges();
    //this.service.ListaItem().subscribe(item=>
      //{
        //this.items = item;
      //})
      this.itemsCollection = afs.collection<Item>('items');
    //con esto estamos guardando todo lo que este dentro la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
      console.log(this.items);
  }

  ngOnInit() {
  }
  eliminar(item)
  {
    const Swal = require('sweetalert2')
    Swal.fire({
      title: 'Esta seguro de Borrar este Producto?',
      text: "porque  se Borraran de la base de datos!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.eliminarItem(item);
        Swal.fire(
          'Eliminación Exitosa!  ',
          'Muy Bien',
          'success'
        )
      }
    })
  }
  editar(item)
  {
    this.editarItem = item;
  }
  agregarItemEditado()
  {
    this.service.editarItem(this.editarItem);
  }
}
