import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {
  
  constructor(private http: HttpClient, private router: Router) {
    
   }
  
  verifyLogin(route:any) {
    if ('token' in sessionStorage) {
      this.router.navigateByUrl(route)
    } else {
      this.router.navigateByUrl('')
    }
   }
}
