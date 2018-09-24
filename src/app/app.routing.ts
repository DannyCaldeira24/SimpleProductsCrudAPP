import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component';

const appRoutes: Routes = [
	{path:'', component:HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductsListComponent},
	{path: 'añadir-producto', component: ProductAddComponent},
	{path: 'producto/:id', component: ProductDetailComponent},
	{path: 'editar-producto/:id', component: ProductEditComponent},
	{path: '**', component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);