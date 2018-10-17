import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ClauseComponent } from './clause/clause.component';
import { HealthComponent } from './health/health.component';
import { DocTemplateComponent } from './doc-template/doc-template.component';
import {TemplateListComponent} from './template-list/template-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'clause',
    component: ClauseComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'doc-template',
    component: DocTemplateComponent
  },
  {
    path: 'template-list',
    component: TemplateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
