import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, NavigationComponent, WelcomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, HeaderComponent, NavigationComponent, WelcomeComponent],
})
export class SharedModule {}
