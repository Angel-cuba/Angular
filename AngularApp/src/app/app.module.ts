import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Esta es la clase de SEVICIOS.....de donde se puede
//importar archivos o data.....(.json,[PYTHON], java)
import{ MyServiceService } from './my-service.service';

//A partir de aqui se importan todos los COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ShowComponent } from './show/show.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ShowComponent,
    InicioComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
