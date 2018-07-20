import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {


  currencyList: string[] = ['INR', 'USD', 'AUD', 'YUAN']
  filteredOptions: Observable<string[]>;
  currencyControl: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.currencyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.currencyList.filter(option => option.toLowerCase().includes(filterValue));
  }

}
