import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;
  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.getCustomers().subscribe((res)=>{
      console.log(res);
      this.customers = res;
    });
  }

  delete(customer) {
    const id = customer.customerId;
    console.log("CUSTOMER ID : " + id);
    fetch("http://localhost:8080/deleteCustomer/"+id, {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: {
            "Content-Type": "application/json"
        }
    })
    this.router.navigate(['getAllCustomers']);
  }
}
