import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUsersURL =    "http://localhost:8080/admin/users";
  private loginURl =       "http://localhost:8080/user/login"
  private userProfileURL = "http://localhost:8080/user/userdetails/"
  private registerURl =    "http://localhost:8080/user/register"
  private forgotPwdURL =   "http://localhost:8080/user/forgotpassword";
  private validateOTPURL=  "http://localhost:8080/user/validateotp";
  private changePwdURL=    "http://localhost:8080/user/changepassword";
  private subjectURL =     "http://localhost:8080/admin/subjects";
  private addQuesURL =     "http://localhost:8080/question";
  private getFdkbckURL =   "http://localhost:8080/admin/feedback";
  private getResultsURL =  "http://localhost:8080/result";
  private submitAnsURL =   "http://localhost:8080/exam/paper";
  private postfeedbkURL = "http://localhost:8080/user/feedback";
  
  constructor(public http:HttpClient) { }

  LoginUserData(userObj)
  {
    console.log(userObj);
    
    return this.http.post(this.loginURl,userObj);
  }

  RegisterData(userObj)
  {
    return this.http.post(this.registerURl,userObj);
  }

  //----------------- GETDATA ---------------------------------------------
  UserData(userId)
  {
    return this.http.get(this.userProfileURL + userId)
  }

  GetUsers()
  {
    return this.http.get(this.getUsersURL);
  }

  GetSubjects()
  {
    return this.http.get(this.subjectURL);
  }
  GetSubject(subId)
  {
    return this.http.get("http://localhost:8080/admin/subject/"+subId);
  }

  GetResults()
  {
    return this.http.get(this.getResultsURL);
  }
  GetResult(resId)
  {
    return this.http.get("http://localhost:8080/result/byuser/"+resId);
  }

  GetFeedback()
  {
    return this.http.get(this.getFdkbckURL);
  }

  GetQuestionBySubId(subId)
  {
    return this.http.get("http://localhost:8080/question/getquestionbysubj/"+subId);
  }
  GetQuestionByQId(qId)
  {
    return this.http.get("http://localhost:8080/Questions/"+qId);
  }

  GetPDF()
  {
    return this.http.get("http://localhost:54881/Subject/pdf");
  }

  //----------------- ADD MODIFY DATA ---------------------------------------------
  AddSubject(subObj)
  {
    return this.http.post(this.subjectURL,subObj);
  }

  AddQuestions(quesObj)
  {
    debugger
    return this.http.post(this.addQuesURL,quesObj);
  }

  EditQuestions(queId,quesObj)
  {
    debugger
    return this.http.put(this.addQuesURL+"/update/"+queId,quesObj);
  }
  UpdatePwd(userObj)
  {
    return this.http.put(this.forgotPwdURL,userObj);
  }
  ModifySubject(subId, subObj)
  {
    return this.http.put("http://localhost:8080/Subject/"+subId,subObj);
  }

  UpdateUser(userId,userObj)
  {
    console.log(userObj);
    
    return this.http.post("http://localhost:8080/user/updateuser/"+userId,userObj);
  }

  SubmitAns(obj:any)
  {
    return this.http.post(this.submitAnsURL,obj);
  }

  insertFeedback(obj)
  {
    return this.http.post(this.postfeedbkURL,obj);
  }

  SendScore(obj:any)
  {
    return this.http.post(this.getResultsURL,obj);
  }

  //----------------------REMOVE REQUESTS--------------------------------------------
  DeleteUser(userId)
  {
    return this.http.delete(this.userProfileURL+userId);
  }

  DeleteSubject(subId)
  {
    return this.http.delete("http://localhost:8080/Subject/"+subId);
  }
//---------------------------------------------------------------------------------
  OTPGenerate(email)
  {
    alert("inside OTPGenerate ");
    var RUser={
      "emailId":email,
      
     };

    return this.http.post(this.forgotPwdURL, RUser);
  }
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "emailId":email,
      "otp":otp
     };

   
     console.log(RUser);
    
    return this.http.post(this.validateOTPURL, RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "emailId":email,
      "password":password,
      
     };

      console.log(RUser);
     
    return this.http.post(this.changePwdURL, RUser);
  }
}

