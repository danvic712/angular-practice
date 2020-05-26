import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crisisList: any[];

  constructor() {
    this.crisisList = [{ id: 1, name: 'Dragon Burning Cities' },
    { id: 2, name: 'Sky Rains Great White Sharks' },
    { id: 3, name: 'Giant Asteroid Heading For Earth' },
    { id: 4, name: 'Procrastinators Meeting Delayed Again' }];
  }

  ngOnInit(): void {
  }

}
