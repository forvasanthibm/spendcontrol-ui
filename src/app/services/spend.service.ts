import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constant';
import { SpendDetails } from '../model/spend_details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpendService {

  //url = 'http://localhost:4000';
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
    console.log(`${API_URL}/spend/get`);
    return this.http.get(`${API_URL}/spend/get/spend`);
  }

  getDataById(id: String): Observable<any> {
    return this.http.get(`${API_URL}/spend/get/spend/${id}`);
  }

  saveData(spend: SpendDetails): Observable<any> {
    return this.http.post(`${API_URL}/spend/create/spend`, spend);
  }

  updateData(id: String, spend: SpendDetails): Observable<any> {
    return this.http.put(`${API_URL}/spend/update/spend/${id}`, spend);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/spend/delete/spend/${id}`);
  }
}