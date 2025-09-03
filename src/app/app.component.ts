import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mercadata';

  ngOnInit(): void {
    initFlowbite();
  }
}
