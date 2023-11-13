import { Component } from '@angular/core';
import { AdminMassiveService } from './admin-massive.service';

@Component({
  selector: 'app-admin-massive',
  templateUrl: './admin-massive.component.html',
  styleUrls: ['./admin-massive.component.css'],
})
export class AdminMassiveComponent {
  constructor(private adminMassiveService: AdminMassiveService) {}

  onDownloadClick() {
    this.adminMassiveService.downloadMassiveAgenda();
  }

  onFileSelected(event: any) {
    const fileInput = event.target;
    const file: File = fileInput.files[0];
    if (file) {
      this.adminMassiveService.uploadDoctorShifts(file);
      fileInput.value = '';
    }
  }
}
