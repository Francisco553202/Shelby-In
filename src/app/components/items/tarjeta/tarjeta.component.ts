import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() producto: Producto = {
    nombre:"",
    imagen:"",
    descripcion: ""
  };
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
