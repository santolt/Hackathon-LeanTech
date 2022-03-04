import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  form!: FormGroup;
  nameRegex = /^[a-zA-Z]*\s?$/
  constructor(private formBuilder: FormBuilder) {
    this.maxDate = new Date();
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.createFormInstance();
    this.buildForm();
    this.minDateRange();
  }

  minDateRange() {
    if (!this.minDate) {
      return;
    }
    this.minDate.setMonth(this.minDate.getMonth() - 1200);
  }

  createFormInstance() {
    this.form = new FormGroup({
      employ: new FormControl([]),
      lastName: new FormControl([]),
      birthPlace: new FormControl([]),
      birthDay: new FormControl([]),
      Phone: new FormControl([]),
      bossName: new FormControl([]),
      workPlace: new FormControl([]),
    });
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      employ: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.nameRegex)]],
      lastName: ['', [Validators.required,  Validators.minLength(3)]],
      birthPlace: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      Phone: ['', [Validators.required, Validators.min(10)]],
      bossName: ['', [Validators.required, Validators.minLength(3)]],
      workPlace: ['', [Validators.required]],
      StartDayWork: ['', [Validators.required]],
      EndDayWork: ['', [Validators.required]],
    });
  }
}
