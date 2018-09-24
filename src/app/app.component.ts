import { Component } from '@angular/core';
import {GLOBAL} from './services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  public header_color:string;
  public producto: Product;
  public post: Product;
  public name:string;

  constructor(
  		private _productoService: ProductService,
		private _route: ActivatedRoute,
		private _router: Router
  ){
  	this.header_color = GLOBAL.header_color;
  	this.post = new Product(0,'','',0,'');
  }

  onSubmit(){
  	console.log(this.name);
  	this.getProducto();
  }

  	getProducto(){
		
		this._productoService.searchProducto(this.post).subscribe(
			response => {
				if(response.code == 200){
					this.producto = response.data;
					this._router.navigate(['/producto',this.producto.id]);
				}else{
					this._router.navigate(['/productos']);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
		
	}
}
