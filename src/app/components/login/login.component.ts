import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
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
      this.router.navigate(['formularioregistro']);
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
