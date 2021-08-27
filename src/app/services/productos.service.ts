import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  principales: Producto[] = [
    {
      nombre: "producto1",
      imagen: "../assets/img/productos/1.jpg",
      descripcion: "Producto chido 1"
    },
    {
      nombre: "producto2",
      imagen: "../assets/img/productos/2.jpg",
      descripcion: "Producto chido 2"
    },
    {
      nombre: "producto3",
      imagen: "../assets/img/productos/3.jpg",
      descripcion: "Producto chido 3"
    },
    {
      nombre: "producto3",
      imagen: "../assets/img/productos/3.jpg",
      descripcion: "Producto chido 3"
    }
  ]

  constructor() { }
}
