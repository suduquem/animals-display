import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsComponent } from './animals/components/dogs/dogs.component';
import { CatsComponent } from './animals/components/cats/cats.component';
import { BirdsComponent } from './animals/components/birds/birds.component';

const routes: Routes = [
  {path: '', component: DogsComponent },
  {path: 'cats', component: CatsComponent },
  {path: 'birds', component: BirdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
