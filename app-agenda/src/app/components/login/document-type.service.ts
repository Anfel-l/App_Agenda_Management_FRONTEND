import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentTypeDTO } from './models/document-type.dto';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService {
  private apiUrl = 'http://localhost:8080/v1/api/detail/document-type/';

  constructor(private http: HttpClient) {}

  getDocumentTypes(): Observable<DocumentTypeDTO[]> {
    return this.http.get<DocumentTypeDTO[]>(this.apiUrl);
  }
}
