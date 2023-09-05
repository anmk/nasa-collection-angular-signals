import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NasaApiParams } from '../../models/nasa-api-params.model';
import { TYPE } from 'src/app/models/card-type.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input({required: true}) image?: NasaApiParams;
  @Input() type!: string;
  public galleryDetail = TYPE.GALLERY_DETAIL;
  public apod = TYPE.APOD;
  public imageWidth = false;
}
