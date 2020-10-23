import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ShowComponent } from './show/show.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
 
  { path: 'product-details' , component: ProductDetailsComponent },
  { path: 'header' , component: HeaderComponent},
  { path: 'body' , component: BodyComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'show' , component: ShowComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
