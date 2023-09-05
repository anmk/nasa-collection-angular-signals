import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-period-selection',
  templateUrl: './gallery-period-selection.component.html',
  styleUrls: ['./gallery-period-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPeriodSelectionComponent implements OnInit, OnDestroy {
  public start?: string | null;
  public end?: string | null;
  public dateRangeGroup!: FormGroup;
  private startDate: string = "";
  private endDate: string = "";
  private readonly formBuilder = inject(FormBuilder);
  private readonly datepipe = inject(DatePipe);
  private startSubs!: Subscription;
  private endSubs!: Subscription;
  private date = new Date();
  private todayDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
  public minDate: Date;
  public maxDate: Date;

  constructor() {
    this.minDate = new Date('1995-06-20');
    this.maxDate = new Date(this.todayDate);
  }

  ngOnInit(): void {
    this.dateRangeForm();
    this.getFormValues();
  }

  dateRangeForm(): void {
    this.dateRangeGroup = this.formBuilder.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }

  getFormValues(): void {
    this.startSubs = this.dateRangeGroup.controls['start'].valueChanges.subscribe(value => {
      this.startDate = value ? value : "";
      this.start = this.datepipe.transform(value, 'yyyy-MM-dd');
    });

    this.endSubs = this.dateRangeGroup.controls['end'].valueChanges.subscribe(value => {
      this.endDate = value ? value : "";
      this.end = this.datepipe.transform(value, 'yyyy-MM-dd');
    })
  }

  ngOnDestroy(): void {
    if (this.startSubs) {
      this.startSubs.unsubscribe();
    }
    if (this.endSubs) {
      this.endSubs.unsubscribe();
    }
  }

}