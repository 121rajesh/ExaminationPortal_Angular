import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//message:string
loginUserData ={}
  msg: string;
  constructor(public service:DataService, public auth_service:AuthService, public router:Router) { }

  ngOnInit() {
  }
  
  Validation(credentials:any)
  {
    // debugger
    // this.service.LoginUserData(this.loginUserData)
    // .subscribe((data:any)=>{
    //   debugger
    //   if (data.Error !=null) 
    //   {
    //     console.log(data);
          
    //   }
    //   else
    //   {
    //     console.log(data.error);
        
    //   }
    // })
    // console.log(credentials.EmailId);
    // console.log(credentials.Password);
    
    if( credentials.emailId ==null || credentials.password ==null )
      {
        debugger
          this.msg = "Username/Password is required!!";
          console.log(this.msg);
          
      }
      else
      {
        this.Login(credentials);
      }

  }
  Login(credentials: {emailId:any; password:any;})
  {
    debugger
     // throw new Error("Method not implemented.");
    let isLoggedIn:any;
    let result=this.service.LoginUserData(credentials)
    result.subscribe((result1:any)=>{
      debugger
      // console.log(result1);
      // if(credentials.EmailId == result1.Data.EmailId && credentials.Password == result1.Data.Password)
      // {
      //   isLoggedIn = true;
      // }
      if(result1.status == "Success")
      {
        isLoggedIn = true;
      }
      else 
      {
        this.msg =" Username / Password is invalid";  
        console.log(this.msg);
        
      }

      if (isLoggedIn)
     {
      //  debugger
        this.auth_service.Login(result1);
        this.msg ="";
        debugger
        if(result1.data.role == "USER")
        {
        this.router.navigate(['/user/home'])
        }
        else
        {
          this.router.navigate(['/admin/home']);
        }
      } 
      else 
      {
        this.msg =" Username / Password is invalid";  
      }
    },(error)=>{
        this.msg = "Username / Password is wrong!!";   
});
  }

}
