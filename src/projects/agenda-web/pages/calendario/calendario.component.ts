import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss',
})
export class CalendarioComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('ESTÁ ENTRANDOOO');
  }
}
