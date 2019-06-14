import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    console.log(form.value);
    const Swal = require('sweetalert2')
    if(form.value.password == 'asd')
    {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['modificar']);
    }
    else
    {
      Swal.fire({
        type: 'error',
        title: 'Ups...',
        text: 'Error de Contraseña!',
      })
    }
  }
}
