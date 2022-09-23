import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent

    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {}

//PASOS PARA CREAR UN NUEVO MODULO
//1.- CREAMOS UN TS LLAMADO "NOMBRE.MODULE.TS"
//2.- DENTRO DE ESE COMPONENTE LLAMAR LA NOTACION 
//@NGMODULE({DECLARATIONS:[LOS COMPONENTES],EXPORTS:[SOLO LOS QUE SE VAN A MOSTRAR],IMPORTS:[COMMONMODULE]})
//3.- DENTRO DE ESE COMPONENTE EXPORTAR LA CLASE (ContadorModule) PARA LLAMARLO AL APPMODULE
//4.- VAS AL APP.MODULE.TS Y EN IMPORTS AÑADIMOS EL NUEVO MODULO ContadorModule