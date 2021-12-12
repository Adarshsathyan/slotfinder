import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataservicesService } from '../dataservices.service';

@Component({
  selector: 'app-search-pin',
  templateUrl: './search-pin.component.html',
  styleUrls: ['./search-pin.component.css']
})
export class SearchPinComponent implements OnInit {

  findyByPinForm = this.fb.group({
    pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
    date:['', [Validators.required]]
  })

  sessions:any
  constructor(private fb: FormBuilder, private http: HttpClient, private ds: DataservicesService) {
    this.ds.verifyLogin('search-pin')
   }

  ngOnInit(): void {
  }

  searchPin() {
    if (this.findyByPinForm.valid) {
      let input_date = new Date(this.findyByPinForm.value.date);
      let day = input_date.getDate();
      let month = input_date.getMonth()+1;
      let year  = input_date.getFullYear();
      let date = `${day}-${month}-${year}`; 
      this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.findyByPinForm.value.pincode}&date=${date}`).subscribe((data) => {
        if (data.sessions[0]) {
          this.sessions = data.sessions;
        } else {
          this.sessions=false
      }
        
     })

    } else {
      alert("Invalid entries..")
    }
    
  }
}
