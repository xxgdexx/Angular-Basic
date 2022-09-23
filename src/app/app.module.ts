import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';

//tarea
//crear modulo llamado ContadorModule
//declaraciones y exportaciones

import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//PASOS PARA CREAR UN NUEVO MODULO
//1.- CREAMOS UN TS LLAMADO "NOMBRE.MODULE.TS"
//2.- DENTRO DE ESE COMPONENTE LLAMAR LA NOTACION 
//@NGMODULE({DECLARATIONS:[LOS COMPONENTES],EXPORTS:[SOLO LOS QUE SE VAN A MOSTRAR],IMPORTS:[COMMONMODULE]})
//3.- DENTRO DE ESE COMPONENTE EXPORTAR LA CLASE (ContadorModule) PARA LLAMARLO AL APPMODULE
//4.- VAS AL APP.MODULE.TS Y EN IMPORTS AÑADIMOS EL NUEVO MODULO ContadorModule
