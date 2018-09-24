import {Component} from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent{
	public title: string;
	constructor(){
		this.title = 'Página principal';
	}
	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}