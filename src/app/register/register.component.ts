import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm= new FormGroup({
  way:new FormControl(''),
  fname:new FormControl(''),
  lname:new FormControl(''),
  phno:new FormControl(''),
  email:new FormControl(''),
  gender:new FormControl(''),
  deptDate:new FormControl(''),
  from:new FormControl(''),
  arrDate:new FormControl(''),
  to:new FormControl(''),
  ticket:new FormControl(''),
  passNo:new FormControl('')


})
displayData(){
  console.warn(this.registerForm.value);
}
  constructor() { }

  ngOnInit(): void {
  }

}
