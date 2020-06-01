import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  constructor(public router:Router) { }
UserData:any
  isLoggedIn()
  {
    return (sessionStorage.getItem("isLoggedIn") == "1");
  }
  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.isLoggedIn)
    {
      return true;
    } else 
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isAdmin()
  {
    return (sessionStorage.getItem("Role")=="ADMIN");
  }

  Login(data:any)
  {
    debugger
    sessionStorage.setItem("isLoggedIn", "1");
    sessionStorage.setItem("EmailId",data.data.emailId);
    console.log(data.data.userId);
    
    sessionStorage.setItem("UserId", data.data.userId);
    sessionStorage.setItem("Role", data.data.role);
    sessionStorage.setItem("userData", JSON.stringify(data));
    this.UserData = data;
    //this.router.navigate(['/user/dashboard']);
   
  }

  Logout()
  { 
    sessionStorage.setItem("isLoggedIn", "0");
    delete sessionStorage["EmailId"];
    delete sessionStorage["UserId"];
    delete sessionStorage["userData"];
    delete sessionStorage["Role"];
    delete sessionStorage["isLoggedIn"];
    this.router.navigate(['/login']);
  }
}
