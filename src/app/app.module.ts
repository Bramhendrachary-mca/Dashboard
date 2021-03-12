import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    SearchComponent,
    HistoryComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
