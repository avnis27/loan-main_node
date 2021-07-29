import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConformFormComponent } from './loan/pages/conform-form/conform-form.component';

const routes: Routes = [
  {path:'',component: ConformFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
