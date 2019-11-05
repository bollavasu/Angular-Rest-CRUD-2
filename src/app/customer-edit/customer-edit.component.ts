import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  data: Customer

  constructor(public activatedRoute: ActivatedRoute, public router: Router, public http: HttpClient) { 
    this.data = new Customer();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    console.log("ID : "+id);
  }

}
