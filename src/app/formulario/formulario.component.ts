import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form;
  constructor(
    formBuilder: FormBuilder
  ) { 

    this.form = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value)
    }

    else{
      alert("Faltan campos por llenar")
    }
  }

  ngOnInit(): void {
  }

  seleccionarPais: String = "Seleccionar Pais";
  
	Paises: Array<any> = [
		{ name: 'Alemania', estados: [  {name: 'A', ciudades: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'España', estados: [ {name: 'B', ciudades: ['Barcelona', 'Madrid', 'Sevilla', 'Murcia', '']} ] },
		{ name: 'USA', estados: [ {name: 'C', ciudades: ['Downers Grove', 'Washington D.C', 'California']} ] },
		{ name: 'México', estados: [ {name: 'D', ciudades: ['CDMX', 'Queretaro', 'Toluca', 'Puebla', 'Monterrey']} ] },
	];
  
	estados: Array<any> = []; //Angular 11

	ciudades: Array<any> = []; //Angular 11
	
	cambiarPais(pais: any) { //Angular 11
		this.estados = this.Paises.find((cntry: any) => cntry.name == pais.target.value).estados; //Angular 11
	}

	cambiarEstado(state: any) { //Angular 11
		this.ciudades = this.Paises.find((cntry: any) => cntry.name == this.seleccionarPais).estados.find((stat: any) => stat.name == state.target.value).ciudades; //Angular 11
	}

}
