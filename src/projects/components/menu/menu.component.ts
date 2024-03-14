import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Início',
        items: [{ label: 'Home', icon: 'pi pi-home', routerLink: ['home'] }],
      },
      {
        label: 'Agendamentos',
        items: [
          {
            label: 'Calendário',
            icon: 'pi pi-calendar',
            command: () => this.onClickCalendario()
          },
        ],
      },
    ];
  }

  private onClickCalendario() {
    console.log('pelo menos clicou')
    this.router.navigate(['/calendario'], {relativeTo: this.route});
  }
}
