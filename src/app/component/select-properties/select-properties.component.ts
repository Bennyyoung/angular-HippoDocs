import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-select-properties',
  templateUrl: './select-properties.component.html',
  styleUrls: ['./select-properties.component.css']
})
export class SelectPropertiesComponent implements OnInit {

  myForm = this.fb.group({
    password:[''],
    text: [''],
    font:[''],
    angle:[''],
    upload:['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  @Input() stepperAccess: any;

}
