import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Box } from 'src/app/models/box';
import { Product } from 'src/app/models/product';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent implements OnDestroy{

  private product: Product = new Product();
  private unsubscribe: Subject<void> = new Subject();
  showSuccessMessage: boolean = false;
  boxList: string[];
  constructor(
    private router: Router,
    private warehouseService: WarehouseService
    ) {
    this.warehouseService.retrieveBoxDetails().pipe(takeUntil(this.unsubscribe)).subscribe(boxList => {
      this.boxList = boxList;
    
    });
  }

  onChange(event, fieldName) {
    if (!!event && !!event.target && !!event.target.value) {
      this.product[fieldName] = event.target.value;
    }
  }

  saveProductDetails() {
    if (this.product.productName && this.product.boxName) {
      this.warehouseService.addProduct(this.product).pipe(takeUntil(this.unsubscribe)).subscribe(data => {
        if (data && data.warehouseSearchProductList && data.warehouseSearchProductList.status && data.warehouseSearchProductList.status === 'ok') {
          window.alert('Product created successfully')
          this.router.navigateByUrl('/')
        }
      }, error => {window.alert(error.error.message)});
    }
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
