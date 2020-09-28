import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { BirdsComponent } from './components/birds/birds.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DogsComponent, CatsComponent, BirdsComponent],
  imports: [CommonModule, SharedModule],
  exports: [DogsComponent, CatsComponent, BirdsComponent]
})
export class AnimalsModule {}
