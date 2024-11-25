import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgForOf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
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
