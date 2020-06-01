import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  flag:Number = 0; 
  email:string = "";
  password:string = "";
  password2:string = "";
  otp:string = "";
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
  }
  generateOTP()
  {
    alert("In generate otp");
    let resultstate=this.service.OTPGenerate(this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.status);
      console.log(data);
      
      if(data.status=="Success")
      {
        this.flag=1;
      }
    });
  }
  validateOTP()
  {
    alert("In validate otp");
    let resultstate=this.service.OTPValidate(this.otp,this.email);
    
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.data);
      if(data.status=="Success")
      {
       
        this.flag=2;
 
      }
      
    }); 
    
  }

  resetPassword()
  {
    let resultstate=this.service.Passwordreset(this.password,this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.data);
      if(data.status=="Success")
      {
        this.router.navigate(['/login'])
 
      }
      
    }); 
    
    
  }
}