import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit 
{
  item:any=
  {
    name:'',
    category:'',
    price:'',
    description:'',
    image:'',
    image1:'',
    image2:'',
    image3:'',
    quantity:''

  }
  constructor(private service: ConexionService) { }

  ngOnInit() {
  }
  agregar()
  {
    const Swal = require('sweetalert2')
    Swal.fire({
      title: 'Esta seguro de guardar estos datos?',
      text: "porque  se guardaran en la base de datos!",
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.agregarItem(this.item);
        Swal.fire(
          'Registro Exitoso!  ',
          'Muy Bien',
          'success'
        )
        this.item.name='';
        this.item.category='';
        this.item.description='';
        this.item.image='';
        this.item.image1='';
        this.item.image2='';
        this.item.image3='';
        this.item.price='';
        this.item.quantity='';
      }
    })
  }
}
