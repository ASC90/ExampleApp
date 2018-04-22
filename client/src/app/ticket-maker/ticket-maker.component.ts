import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MaterializeDirective } from "angular2-materialize";
import { MaterializeAction , toast} from 'angular2-materialize';

@Component({
  selector: 'app-ticket-maker',
  templateUrl: './ticket-maker.component.html',
  styleUrls: ['./ticket-maker.component.css']
})
export class TicketMakerComponent implements OnInit {
  form: FormGroup;
  materializeActions: EventEmitter<string| MaterializeAction>;
  today = new Date();
  future = new Date();
  hasSubmitted = false;
  constructor(private fb: FormBuilder) {
    this.materializeActions = new EventEmitter<string| MaterializeAction>();
    this.future.setFullYear(this.future.getFullYear() + 10);
   }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      date: new FormControl('', Validators.compose([Validators.required])),
      hour: new FormControl('', Validators.compose([Validators.required])),
      from: new FormControl('', Validators.compose([Validators.required])),
      to: new FormControl('', Validators.compose([Validators.required])),
      window: new FormControl(false, Validators.compose([Validators.required]))
    });
  }
  submmit() {
    this.hasSubmitted = true;
  }
}
