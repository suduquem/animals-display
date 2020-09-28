import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, NavigationComponent],
  imports: [CommonModule],
  exports: [CardComponent, HeaderComponent, NavigationComponent],
})
export class SharedModule {}
