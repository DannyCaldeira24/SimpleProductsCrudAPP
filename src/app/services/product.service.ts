import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../models/product';
import { GLOBAL } from './global';

@Injectable()
export class ProductService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getProductos(){
		return this._http.get(this.url+'productos').pipe(map(res => res.json()));
	}

	getProducto(id){
		return this._http.get(this.url+'producto/'+id).pipe(map(res => res.json()));
	}

	searchProducto(producto: Product){
		let json = JSON.stringify(producto);
		let params = 'json='+json;
		console.log(params);
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(this.url+'search',params, {headers: headers})
						 .pipe(map(res => res.json()));
	}

	addProducto(producto: Product){
		let json = JSON.stringify(producto);
		let params = 'json='+json;
		console.log(params);
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'productos', params, {headers: headers})
						 .pipe(map(res => res.json()));
	}

	editProducto(id, producto: Product){
		let json = JSON.stringify(producto);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'update-producto/'+id, params, {headers: headers})
						 .pipe(map(res => res.json()));
	}

	deleteProducto(id){
		return this._http.post(this.url+'delete-producto/'+id,[])
						 .pipe(map(res => res.json()));
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}