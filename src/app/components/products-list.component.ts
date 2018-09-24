import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';

@Component({
	selector: 'products-list',
	templateUrl: '../views/products-list.html',
	providers: [ProductService]
})

export class ProductsListComponent{
	public title: string;
	public products: Product[];
	constructor(
		private _route:ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
	){
		this.title = 'Listado de productos';
	}
	ngOnInit(){
		console.log('Se ha cargado el componente products-list.component.ts');
		this.getProductos();
	}

	getProductos(){
		this._productService.getProductos().subscribe(
			result => {
				if(result.code != 200){
					console.log(result);
				}else{
					this.products = result.data; 
				}
			},
			error =>{
				console.log(<any> error);
			}
		);	
	}

	public confirm;

	deleteConfirm(id){
		this.confirm = id;
	}

	cancellConfirm(){
		this.confirm = null;
	}

	onDeleteProducto(id){
		this._productService.deleteProducto(id).subscribe(
			response => {
				if(response.code == 200){
					this.getProductos();
				}else{
					alert('Error al borrar el producto');
				}
			},
			error =>{
				console.log(<any>error);
			}
		);
	}
}