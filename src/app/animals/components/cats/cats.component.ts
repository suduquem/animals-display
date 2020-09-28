import { Component, OnInit } from '@angular/core';

// Model
import { IAnimalList } from '../../models/animal';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  catList: Array<IAnimalList>;

  constructor() {
    this.catList = [
      {
        imageUrl:
          'https://i.pinimg.com/originals/50/0d/35/500d35b01b0f8f678eae726c222ca15b.jpg',
        breed: 'British Shorthair',
        description: 'short hair and grey color',
      },
      {
        imageUrl: 'https://www.catster.com/wp-content/uploads/2018/11/persian-cat-face.jpg',
        breed: 'Persian',
        description: 'long hair and brown color',
      },
    ];
  }

  ngOnInit(): void {
  }

}
