import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  @Input() stepperAccess: any;
  constructor() { }

  ngOnInit(): void {
  }

}
