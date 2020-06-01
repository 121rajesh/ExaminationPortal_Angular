import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string
  constructor(public service:DataService, public router: Router) { }

  ngOnInit() {
  }

  register(DataFromUI:any)
  {
    let formData =DataFromUI.form.value;
    console.log(formData);
    if(formData.password == formData.cnfPassword)
    {
      debugger
      if (sessionStorage.getItem("Role") == "ADMIN")
      {
        formData.role = "ADMIN";
      }
      else
      {
        formData.role = "USER";
      }
      let result = this.service.RegisterData(formData);

      result.subscribe((data:any)=>{
      if(data.status == "Success")
        {
          this.message = data.status;
          console.log(data.data.userId);
          if (data.role == "ADMIN") 
          {
            this.router.navigate(['home']);
            alert("Admin registered Successfully!!")
          }
          else 
          {
            alert(" Registered Successfully!!")
            this.router.navigate(['login']);  
          }
          
        }
        else
        {
          console.log(data);
          this.message = data.status;
          console.log(data.data);
        }
      })
    }
    else
    {
      this.message = "Password should match!"
    }
    
  }

}
