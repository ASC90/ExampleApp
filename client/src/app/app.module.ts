import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode'; // QR
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'; // Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TicketMakerComponent } from './ticket-maker/ticket-maker.component';
import { TicketQrComponent } from './ticket-qr/ticket-qr.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'your-ticket',
    children: [
      {
        path: '',
        component: TicketMakerComponent
      },
      {
        path: 'qr',
        component: TicketQrComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TicketMakerComponent,
    TicketQrComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    QRCodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
