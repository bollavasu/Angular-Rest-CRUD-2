import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  data: Customer

  constructor(public apiService: ApiService, public router: Router) {
    this.data = new Customer();
   }

  ngOnInit() {
  }

  submitCustomer() {
    fetch("http://localhost:8080/addCustomer", {
      method: "POST",
      body: JSON.stringify(this.data),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(res => {
      console.log("CREATE RESULT : " + res);
      return res;
  })
  .then(data => {
      console.log(data);
  });
  this.router.navigate(['getAllCustomers']);
  }

}
