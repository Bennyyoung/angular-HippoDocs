import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {

  constructor() { }
  @Input() stepperAccess: any;
  
  ngOnInit(): void {
  }

}
