import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { ClauseComponent } from './clause/clause.component';
import { DetailsComponent } from './details/details.component';
import { HealthComponent } from './health/health.component';
import { DocTemplateComponent } from './doc-template/doc-template.component';
import { DocFragmentComponent } from './doc-fragment/doc-fragment.component';
import { TemplateListComponent } from './template-list/template-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    ClauseComponent,
    DetailsComponent,
    HealthComponent,
    DocTemplateComponent,
    DocFragmentComponent,
    TemplateListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
