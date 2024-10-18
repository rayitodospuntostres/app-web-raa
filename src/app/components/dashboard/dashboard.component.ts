import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class DashboardComponent {

}
