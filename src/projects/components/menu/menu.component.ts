import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor() {}

  ngOnInit() {
    this.model = [
      {
        label: 'Início',
        children: [{ label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] }],
      },
      {
        label: 'Agendamentos',
        children: [
          {
            label: 'Calendário',
            icon: 'pi pi-calendar',
            routerLink: ['/calendario']
          },
        ],
      },
    ];
  }
}
