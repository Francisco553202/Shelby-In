import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http'; 
import productosJson from '../../assets/bd/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  principales: Producto[] = []

  
  constructor() {
    this.principales = productosJson;
  }
  

  getAllProductos(){
    return this.principales;
  }
}
