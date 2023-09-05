import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MaterialModule } from '../material.module';
import { GalleryPeriodSelectionComponent } from './gallery-period-selection/gallery-period-selection.component';
import { CardComponent } from './card/card.component';
import { ApodComponent } from './apod/apod.component';
import { DataNotAvailableComponent } from './data-not-available/data-not-available.component';

@NgModule({
  declarations: [
    GalleryListComponent,
    GalleryDetailComponent,
    GalleryPeriodSelectionComponent,
    ApodComponent,
    CardComponent,
    DataNotAvailableComponent
  ],
  imports: [
    GalleryRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule { }
