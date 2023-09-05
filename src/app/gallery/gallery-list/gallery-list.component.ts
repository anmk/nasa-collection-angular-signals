import { ChangeDetectionStrategy, Component, Input, effect, inject, signal } from '@angular/core';
import { NasaApiService } from 'src/app/services/nasa-api.service';
import { NasaApiParams } from 'src/app/models/nasa-api-params.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListComponent {
  @Input({required: true}) start?: string | null;
  @Input({required: true}) end?: string | null;
  private readonly nasaApiService = inject(NasaApiService);

  private startDate = signal('2023-01-02');
  private endDate = signal('2023-01-02');
  public getImages = signal<NasaApiParams[]>([]);

  constructor() {
    effect(async () => {
      const images = await this.nasaApiService.getNasaImages(this.startDate(), this.endDate());
      this.getImages.set(images);
    });
  }

  async search(): Promise<void> {
    if (!this.startDate() || !this.endDate()) {
      return;
    }
    const images = await this.nasaApiService.getNasaImages(this.start, this.end);
    this.getImages.set(images);
  }

}