import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConexionService } from './services/conexion.service';

import { HeaderComponent } from './components/header/header.component';
import { StoreComponent } from './components/store/store.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { FormularioregistroComponent } from './components/formularioregistro/formularioregistro.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { Login2Component } from './components/login2/login2.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LaptopsComponent } from './components/Category/laptops/laptops.component';
import { AccesoriosComponent } from './components/Category/accesorios/accesorios.component';
import { GamerComponent } from './components/Category/gamer/gamer.component';
import { PcComponent } from './components/Category/pc/pc.component';
import { PerifericosComponent } from './components/Category/perifericos/perifericos.component';
import { Login3Component } from './components/login3/login3/login3.component';
import { FilterPipe } from './components/pipes/filter.pipe';

const routes: Routes = [
  { path : '', component: StoreComponent},
  { path : 'detalles', component: DetallesComponent},
  { path : 'formularioregistro', component: FormularioregistroComponent},
  { path : 'lista', component: ListaComponent},
  { path : 'login', component: LoginComponent},
  { path : 'login2', component:Login2Component},
  { path : 'login3', component:Login3Component},
  { path : 'register', component: RegistrationComponent},
  { path : 'modificar', component: ModificarComponent},
  { path : 'laptops',component:LaptopsComponent},
  { path : 'accesorios',component:AccesoriosComponent},
  { path : 'gamer',component:GamerComponent},
  { path : 'pc',component:PcComponent},
  { path : 'perifericos',component:PerifericosComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    DetallesComponent,
    FormularioregistroComponent,
    ListaComponent,
    LoginComponent,
    Login2Component,
    RegistrationComponent,
    ModificarComponent,
    AccesoriosComponent, 
    LaptopsComponent,
    GamerComponent,
    PcComponent,
    PerifericosComponent,
    Login3Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
