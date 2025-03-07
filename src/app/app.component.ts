import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { initFlowbite } from 'flowbite';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  title = 'IDRD Frontend';

  ngOnInit(): void {
    initFlowbite();
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
