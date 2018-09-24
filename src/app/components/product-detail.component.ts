import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
	selector: 'producto-detail',
	templateUrl: '../views/product-detail.html',
	providers: [ProductService]
})
export class ProductDetailComponent{
	public producto: Product;

	constructor(
		private _productoService: ProductService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		console.log('producto-detail.Component.ts cargado...');

		this.getProducto();
	}

	getProducto(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._productoService.getProducto(id).subscribe(
				response => {
					if(response.code == 200){
						this.producto = response.data;
					}else{
						this._router.navigate(['/productos']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

}