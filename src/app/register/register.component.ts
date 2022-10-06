import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm : FormGroup

  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      "name" : new FormControl("Storm", Validators.required),
      "email" : new FormControl("Storm@gmail.com", [Validators.email,Validators.required]),
      "password" : new FormControl("vivek123", Validators.required),
      "repeatpass" : new FormControl("vivek123", Validators.required),
      "check" : new FormControl(true, Validators.requiredTrue),

    })
  }
  setValue(){
    this.userForm.setValue({
      name : "vignesh",
      email : "vignesh@gmail.com",
      password : "vignesh123",
      repeatpass : "vignesh123",
      check : true
    })
  }
  patchValue(){
    this.userForm.patchValue({
      name : "vignesh",
      email : "vignesh@gmail.com"
    })
  }

  setvalue(){

  }

  onSubmit(){
    console.log(this.userForm)
  }


}
