import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { NasaApiService } from '../../services/nasa-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TYPE } from 'src/app/models/card-type.model';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApodComponent {
  public readonly type = TYPE.APOD;
  private readonly nasaApiService = inject(NasaApiService);
  private readonly date = new Date();
  private readonly todayDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
  public readonly getImage = toSignal(this.nasaApiService.getNasaImage(this.todayDate));
}
