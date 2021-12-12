import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
const shajs = require('sha.js');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  txnId: any = sessionStorage.getItem('txnId')
  
  registerForm = this.fb.group({
    otp:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      let hashedOtp = shajs('sha256').update(this.registerForm.value.otp).digest('hex');
      let headers = {"content-type":"application/json"}
      let body = { "otp": hashedOtp, "txnId": this.txnId }
  
      
      this.http.post<any>('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', body, { headers: headers }).subscribe((token) => {
        if (token) {
          sessionStorage.setItem("token", token)
          this.router.navigateByUrl('home')
          
        }
        else {
          alert("Something went wrong")
       }

      })
    } else {
      alert("Invalid entries")
    }
  }
  
}
