import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  activeRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

}
