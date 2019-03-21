import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot
      ([
        { path: "store", component: StoreComponent },
        { path: "cart", component: CartDetailComponent },
        { path: "checkout", component: CheckoutComponent },
        { //ne radi ako stavin na kraj 
          path: "admin",
          loadChildren: "./admin/admin.module#AdminModule",
        },
        { path: "**", redirectTo: "/store" },
      ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
