import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DockerapiService {

  constructor(private http: HttpClient) {
  }

  getAllContainers() {
    return null
  }
}
