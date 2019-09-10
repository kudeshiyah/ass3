import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HttpClient}    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './service/weather.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule } from '@angular/material'  
import {DatePipe} from '@angular/common';
import {
  ButtonModule,
  ChartModule,
  DialogModule,
  InputTextModule,
  PanelModule,
  SharedModule,
  SidebarModule,
  TreeModule
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    ButtonModule,
    ChartModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    SharedModule,
    SidebarModule,
    TreeModule
  ],
  providers: [HttpClientModule,WeatherService,HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
