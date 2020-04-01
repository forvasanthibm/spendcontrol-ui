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
    return this.http.get(`${API_URL}/spend/get`);
  }

  getDataById(id: String): Observable<any> {
    return this.http.get(`${API_URL}/user/get/${id}`);
  }

  saveData(spend: SpendDetails): Observable<any> {
    return this.http.post(`${API_URL}/user/create`, spend);
  }

  updateData(id: String, spend: SpendDetails): Observable<any> {
    return this.http.put(`${API_URL}/user/update/${id}`, spend);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/user/delete/${id}`);
  }
}