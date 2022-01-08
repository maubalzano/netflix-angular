import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'netflix-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Output() navigateHome = new EventEmitter();

  toggleInput = false;
  searchInput = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged()
      )
        .subscribe(
            text => text.length == 0 ? this.navigateHome.emit() : (text.length > 3 && this.search.emit(text) )
        )
  }
}
