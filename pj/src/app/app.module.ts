import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCompComponent } from './name-comp/name-comp.component';
import { AsideComponent } from './aside/aside.component';
import { BasictableComponent } from './basictable/basictable.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { FooterComponent } from './footer/footer.component';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TopbarComponent } from './topbar/topbar.component';
//Servicios
import { DashboardService } from './servicios/dashboard.service';
import { BasictableService } from './servicios/basictable.service';
import { EMPLEADOSComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { LoteMateriaPrimaComponent } from './lote-materia-prima/lote-materia-prima.component';
import { CLIENTESComponent } from './clientes/clientes.component';
import { TRANSPORTISTASComponent } from './transportistas/transportistas.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCompComponent,
    AsideComponent,
    BasictableComponent,
    BlankComponent,
    DashboardComponent,
    Error404Component,
    FontawesomeComponent,
    FooterComponent,
    MapgoogleComponent,
    ProfileComponent,
    ServiciosComponent,
    TopbarComponent,
    EMPLEADOSComponent,
    LoteMateriaPrimaComponent,
    CLIENTESComponent,
    TRANSPORTISTASComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DashboardService,
    BasictableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
