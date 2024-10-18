import { Component, ViewEncapsulation } from '@angular/core';
import { HeadComponent } from "./head/head.component";
import { InicioComponent } from "./inicio/inicio.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeadComponent, InicioComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',


})
export class PrincipalComponent {

}
