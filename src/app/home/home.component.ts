import { Component, OnInit } from '@angular/core';
import { Actors } from './../class/actors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  actors = Actors;

  ngOnInit() {}
}
