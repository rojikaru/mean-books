import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Books',
      path: '/books',
    },
    {
      name: 'Create a Book',
      path: '/books/create',
    },
  ];
}
