// create.component.ts

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MemberServiceService } from "../../member-service.service";



@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: []
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  @ViewChild('alert') alert: ElementRef;


  constructor(
    private memberService: MemberServiceService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      contact: ["", Validators.required,Validators.maxLength(10)],
      email: ["", Validators.required,Validators.email],
      address: ["", Validators.required],
      about_member: ["", Validators.required]
    });
  }

  addNewMember(name, address, contact, email, about_member) {
    // this.memberService.addNewMember(
    //   name,
    //   address,
    //   contact,
    //   email,
    //   about_member
    // );
    // this.createForm();
  }
  ngOnInit() {
  }
}
