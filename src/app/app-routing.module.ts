import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';

const routes: Routes = [
  { path: 'viewpost',
  children:[
    { path: '', component: ViewpostComponent },
    { path: 'createpost', component: CreatepostComponent },
    { path: 'edit', component: EditpostComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
