import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  productos: Producto[] = []
  constructor( private _productoServ: ProductosService ) {
    this.productos = _productoServ.principales
  }

  ngOnInit(): void {
  }

}
