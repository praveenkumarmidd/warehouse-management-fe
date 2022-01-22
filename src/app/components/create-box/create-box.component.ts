import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { Box } from 'src/app/models/box';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
})
export class CreateBoxComponent {
  private box: Box = new Box();
  showSuccessMessage: boolean = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private warehouseService: WarehouseService
    ) { }

  onChange(event, fieldName) {
    if (!!event && !!event.target && !!event.target.value) {
      this.box[fieldName] = event.target.value;
    }
  }

  saveBoxDetails() {
    if (this.box.boxName && this.box.boxCapacity) {
      this.warehouseService.createBox(this.box).pipe(takeUntil(this.unsubscribe)).subscribe(data => {
        if (data && data.warehouseServiceResponse && data.warehouseServiceResponse.status && data.warehouseServiceResponse.status === 'ok') {
          this.showSuccessMessage = true;
          window.alert('Box created successfully')
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
