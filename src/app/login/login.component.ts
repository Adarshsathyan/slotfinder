import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataservicesService } from "../dataservices.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  registerForm = this.fb.group({
    mobile: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataservicesService,
    private router: Router,
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {}

  async login() {
    if (this.registerForm.valid) {
      const headers = { "content-type": "application/json" };
      const body = this.registerForm.value;

      this.http
        .post<any>(
          "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
          body,
          { headers: headers }
        )
        .subscribe((data) => {
          if (data) {
            console.log(data);

            sessionStorage.setItem("txnId", data.txnId);
            this.router.navigateByUrl("register");
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("Please enter valid mobile");
    }
  }
}
