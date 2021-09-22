import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TestComponent } from './test/test.component';

const router: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TestComponent
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
