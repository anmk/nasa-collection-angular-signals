import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { NasaApiService } from 'src/app/services/nasa-api.service';
import { TYPE } from 'src/app/models/card-type.model';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryDetailComponent {
  public type = TYPE.GALLERY_DETAIL;
  private readonly nasaApiService = inject(NasaApiService);
  private readonly router = inject(ActivatedRoute);
  private date = this.router.snapshot.paramMap.get('id');
  readonly getImage = toSignal(this.nasaApiService.getNasaImage(this.date));
}
