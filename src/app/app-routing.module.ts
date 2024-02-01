import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { CurrentComponent } from './components/current/current.component';

const routes: Routes = [
  {path: '', redirectTo: 'common', pathMatch: 'full'},
  {path: 'common', component: CommonComponent},
  {path: 'current', component: CurrentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
