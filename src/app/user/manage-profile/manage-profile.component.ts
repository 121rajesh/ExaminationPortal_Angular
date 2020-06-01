import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  UserId:any
  userObj:any
  message:any
  constructor(private service:DataService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // this.activatedRoute.params
    // .subscribe((params:any)=>{
      this.UserId = sessionStorage.getItem("UserId");
      console.log(this.UserId);
    //   console.log(params);
      
      
      this.service.UserData(this.UserId)
      .subscribe((result:any)=>{
        this.userObj = result.data;
        console.log(this.userObj);
        
      })
    // })

  }

  update(UIData:any)
  {
    debugger
    if(UIData.password == this.userObj.password)
    {
      console.log("UIData.Password = "+UIData.password+" userObj.Password = "+this.userObj.password);
      
      if (UIData.NewPassword == UIData.CnfPassword) 
      {
        console.log("UIData.Password = "+UIData.NewPassword+" userObj.Password = "+UIData.CnfPassword);
        this.userObj.password = UIData.NewPassword;
        this.service.UpdateUser(this.UserId,this.userObj)
    .subscribe((result:any)=>{
      if(result.status == "Success")
      {
        alert("Profile updated successfully!!")
        this.router.navigate(['home']);
      }
      },error=>{
        console.log("something went wrong !!!");
        
      })
      }
      else
      {
        this.message="Password mis-match!!";
      }
    }
    else
    {
      this.message = "Incorrect password!!!";
    }
  }
}

