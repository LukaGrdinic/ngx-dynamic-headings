import { Component } from '@angular/core';
import { NgxDynamicHeadingDirective } from 'ngx-dynamic-headings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxDynamicHeadingDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';
}
