import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: 'todo', component: ListComponent, data: {isActive: true}},
  {path: 'done', component: ListComponent, data: {isActive: false}},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: '**', redirectTo: '/todo'},
  {path: 'todo/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
