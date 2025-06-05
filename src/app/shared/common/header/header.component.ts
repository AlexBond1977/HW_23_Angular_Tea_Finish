import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTerm$ = new BehaviorSubject<string>('');
  searchTerm: string = '';

  constructor(private router: Router) {}

  onFindClick(term: string) {
    term = term.trim();
    if (!term) return;

    this.searchTerm = term;
    this.searchTerm$.next(term);
    this.router.navigate(['/catalog'], { queryParams: { search: term } });
  }

  clearSearch(inputElement: HTMLInputElement) {
    this.searchTerm = '';
    this.searchTerm$.next('');
    inputElement.value = '';
    this.router.navigate(['/catalog']);
  }
}
