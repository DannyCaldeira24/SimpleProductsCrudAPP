import {Component} from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: '../views/error.html'
})

export class ErrorComponent{
	public title: string;
	constructor(){
		this.title = 'Error!! Página no encontrada.';
	}
	ngOnInit(){
		console.log('Componente error.component.ts cargado');
	}
}