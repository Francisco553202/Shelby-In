import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  listProducts : Producto[]= []
  
  constructor(private productosService: ProductosService ) { 
    this.listProducts = productosService.getAllProductos()
  }
  
  ngOnInit(): void {
  }

}
