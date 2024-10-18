import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from "./head/head.component";
import { InicioComponent } from "./inicio/inicio.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeadComponent, InicioComponent, RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',


})
export class PrincipalComponent {

}
