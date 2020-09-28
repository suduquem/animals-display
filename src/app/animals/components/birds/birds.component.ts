import { Component, OnInit } from '@angular/core';

// Model
import { IAnimalList } from '../../models/animal';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  birdList: Array<IAnimalList>;

  constructor() {
    this.birdList = [
      {
        imageUrl:
          'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5d137e105cafe826be509e41/buho0.jpg',
        description: 'nocturnal',
        breed: 'Owl',
      },
      {
        imageUrl: 'https://t2.ea.ltmcdn.com/es/images/1/4/8/tipos_de_canarios_y_sus_nombres_23841_600.jpg',
        description: 'diurnal',
        breed: 'Canary',
      },
    ];
  }

  ngOnInit(): void {
  }

}
