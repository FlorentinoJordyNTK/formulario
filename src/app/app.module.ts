import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

const router: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TestComponent,
    LoginComponent,
    GalleryComponent,
    RegisterComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
