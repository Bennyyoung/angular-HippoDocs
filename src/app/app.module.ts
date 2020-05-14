import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProcessesComponent } from './component/processes/processes.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ApiKeyComponent } from './component/api-key/api-key.component';
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { SelectPropertiesComponent } from './component/select-properties/select-properties.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcessesComponent,
    StepperComponent,
    UploadFileComponent,
    ApiKeyComponent,
    DownloadFileComponent,
    SelectPropertiesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
