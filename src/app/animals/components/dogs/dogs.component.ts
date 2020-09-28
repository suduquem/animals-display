import { Component, OnInit } from '@angular/core';

// Model
import { IAnimalList } from '../../models/animal';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogList: Array<IAnimalList>;

  constructor() {
    this.dogList = [
      {
        imageUrl:
          'https://nypost.com/wp-content/uploads/sites/2/2020/04/pugs-coronavirus.jpg',
        breed: 'Pug',
        description: 'medium size',
      },
      {
        imageUrl:
          'https://www.zooplus.es/magazine/wp-content/uploads/2019/04/labrador-3-Farben-1024x683.jpg',
        breed: 'Labrador',
        description: 'large size',
      },
    ];
  }

  ngOnInit(): void {}
}
