import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { PiePaginaComponent } from './shared/pie-pagina/pie-pagina.component';
import { AcercaDeComponent } from './components/pages/acerca-de/acerca-de.component';
import { TarjetaComponent } from './components/items/tarjeta/tarjeta.component';
import { QuienesSomosComponent } from './components/pages/quienes-somos/quienes-somos.component';
import { BannerComponent } from './components/items/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    PiePaginaComponent,
    AcercaDeComponent,
    TarjetaComponent,
    QuienesSomosComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
