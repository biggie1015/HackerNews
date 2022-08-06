import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class HackerNewService {
  APIUrl: string = 'https://hn.algolia.com/api/v1/search_by_date?query=';

  constructor(private http: HttpClient) {}

  GetAllData(param: string, page: number) {
    return this.http.get(`${this.APIUrl}=${param}&page=${page}`);
  }
}
