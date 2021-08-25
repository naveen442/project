import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
const routes: Routes = [{path:"child1",component:FirstchildComponent},
{path:"child2",component:SecondchildComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
