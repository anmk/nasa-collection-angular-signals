import { Component, Injector, effect, inject, runInInjectionContext } from '@angular/core';

import { NasaApiService } from './services/nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly nasaApiService = inject(NasaApiService);
  readonly injector = inject(Injector);
  public spinner = false;

  public ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.spinner = this.nasaApiService.spinnerSignal();
      });
    });
  }

}
