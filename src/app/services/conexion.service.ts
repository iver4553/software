import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item 
{ 
  name: string; 
  category: string;
  price: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  quantity: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConexionService 
{
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsCollection2: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  products: Observable<Item[]>;
  
  private itemDoc: AngularFirestoreDocument<Item>;
  private itemDoc2: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) 
  {
    this.itemsCollection = afs.collection<Item>('items');
    //con esto estamos guardando todo lo que este dentro la coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    //codigo para agregar a carrito
   this.itemsCollection2 = afs.collection<Item>('products');
    this.products = this.itemsCollection2.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  mostrarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    //this.itemDoc.update(item);
  }
  ListaItem()
  {
    return this.items;
  }

  agregarItem(item: Item)
  {
    this.itemsCollection.add(item);
  }

  agregarCarrito(product: Item)
  {
    this.itemsCollection2.add(product);
  }

  eliminarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }
  eliminarItemCariito(product)
  {
    this.itemDoc2 = this.afs.doc<Item>(`products/${product.id}`);
    this.itemDoc2.delete();
  }
  editarItem(item)
  {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }

  getLaptops(): Observable <Item[]>{
    return this.afs.collection<Item>('items',ref=>ref.where('category','==','laptops')).valueChanges();
  }
  getAccesorios(): Observable <Item[]>{
    return this.afs.collection<Item>('items',ref=>ref.where('category','==','accesorios')).valueChanges();
  }
  getGamer(): Observable <Item[]>{
    return this.afs.collection<Item>('items',ref=>ref.where('category','==','gamer')).valueChanges();
  }
  getPerifericos(): Observable <Item[]>{
    return this.afs.collection<Item>('items',ref=>ref.where('category','==','perifericos')).valueChanges();
  }
  getPcs(): Observable <Item[]>{
    return this.afs.collection<Item>('items',ref=>ref.where('category','==','pc')).valueChanges();
  }

}
