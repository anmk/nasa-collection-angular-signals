import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { finalize, first } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

import { environment } from "../../environments/environment";
import { NasaApiParams } from "../models/nasa-api-params.model";

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
  private readonly apiKey = environment.NASA_KEY;
  private readonly httpClient = inject(HttpClient);
  public spinnerSignal: WritableSignal<boolean> = signal(false);

  public getNasaImage(date: string | null): Observable<NasaApiParams> {
    this.showSpinner();
    const apodUrl = `${this.apiUrl}?date=${date}&api_key=${this.apiKey}&hd=true`;
    return this.httpClient.get<NasaApiParams>(apodUrl).pipe(first(), finalize(() => this.hideSpinner()));
  }

  async getNasaImages(startDate?: string | null, endDate?: string | null): Promise<NasaApiParams[]> {
    return firstValueFrom(this.search(startDate, endDate));
  }

  private search(startDate: string | null = '2023-01-02', endDate: string | null = '2023-01-02'): Observable<NasaApiParams[]> {
    this.showSpinner();
    const url = `${this.apiUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}&hd=false`;
    const images$ = this.httpClient.get<NasaApiParams[]>(url).pipe(finalize(() => this.hideSpinner()));
    return images$;
  }

  private showSpinner(): void {
    Promise.resolve().then(() => this.spinnerSignal.set(true));
  }

  private hideSpinner(): void {
    Promise.resolve().then(() => this.spinnerSignal.set(false));
  }

}
