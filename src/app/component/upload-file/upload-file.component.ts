import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Input() stepperAccess: any;


  constructor() { }
  
  ngOnInit(): void {
  }
  
  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles)
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1)
  }
  
  selectTab(selectedTab) {
    $("#myTab").find("a").removeClass("active");
    $(`[href='${selectedTab}']`).addClass('active');
    $('#nav-tabContent').find('[role="tabpanel"]').removeClass('active').removeClass("show")
    $(selectedTab).addClass("active").addClass("show");
  
    return false;
  }
}
