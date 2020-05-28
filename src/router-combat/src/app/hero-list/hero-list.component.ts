import { Component, OnInit } from '@angular/core';


class Hero {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroList: Hero[];

  hero: Hero;

  constructor() {
    this.heroList = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }

  ngOnInit(): void {
  }

  /**
   * 根据主键获取英雄信息
   * @param id 英雄主键
   */
  getHero(id: number) {
    let data = this.heroList.find(hero => hero.id === id);
    this.hero = new Hero(data.id, data.name);
  }

  saveHero(hero: Hero) {

  }
}
