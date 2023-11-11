// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeDTO } from './models/document-type.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  documentTypes: DocumentTypeDTO[] = [];
  selectedDocumentTypeId: number=0;
  document: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService, 
    private documentTypeService: DocumentTypeService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.documentTypeService.getDocumentTypes().subscribe(
      data => this.documentTypes = data,
      error => console.error(error)
    );
  }

  onLogin(): void {
    this.loginService.login(this.selectedDocumentTypeId, this.document, this.password)
      .subscribe(response => {
        if (response.userId) {
          localStorage.setItem('userId', response.userId.toString());
          this.router.navigate(['/home']);
        } else {
          // Manejo de error de inicio de sesión
        }
      }, error => {
        console.error(error);
      });
  }
}