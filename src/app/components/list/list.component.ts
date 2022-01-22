import { Component } from '@angular/core';
import { ProductSearchResponse } from 'src/app/models/product-search-response';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  productsWithLocationList: ProductSearchResponse[] = [];

  constructor(private warehouseService: WarehouseService) {
    this.warehouseService.search$.subscribe(data => {
      this.retrieveProductDetails(data);
    });
  }

  private retrieveProductDetails(searchString: string) {
    this.warehouseService.retrieveProductsList(searchString).subscribe(data => {
      this.productsWithLocationList = Object.assign([], data);
    });
  }
}
