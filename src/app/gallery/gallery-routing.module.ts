import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryPeriodSelectionComponent } from './gallery-period-selection/gallery-period-selection.component';
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryPeriodSelectionComponent },
  { path: 'gallery/:id', component: GalleryDetailComponent },
  { path: 'apod', component: ApodComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })
  
  export class GalleryRoutingModule {}