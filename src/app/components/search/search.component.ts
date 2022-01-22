import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private searchString: string = '';

  constructor(private warehouseService: WarehouseService) { }

  updateSearchString(event) {
    this.searchString = '';
    if (event && event.target && event.target.value) {
      this.searchString = event.target.value;
    }
  }

  onSearchClicked() {
    this.warehouseService.emitSearch(this.searchString);
  }
}
