import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-managequestions',
  templateUrl: './managequestions.component.html',
  styleUrls: ['./managequestions.component.css']
})
export class ManagequestionsComponent implements OnInit {
  subject:any
  subId:any  
  message:string
  quesAdded:any
  questions: any;
  editQues:boolean
  specificQues: any;
  // Question:any
  // Opt1:any
  // Opt2:any
  // Opt3:any
  // Opt4:any
  // CorrectAns:any
  // // cnt:number
  constructor(public service:DataService, public route:ActivatedRoute) { }
  queId:any
  ngOnInit() {
    this.route.params.subscribe(params=>{
       this.subId= params['SubId']});
    
    this.service.GetSubject(this.subId).subscribe((subjectData:any)=>{
      if(subjectData.data !=null || subjectData.data!=undefined)
      this.subject = subjectData.data;
      //console.log(this.subject);
    })

    this.service.GetQuestionBySubId(this.subId).subscribe((questionData:any)=>{
      if(questionData.data !=null || questionData.data!=undefined)
      this.questions = questionData.data;
      console.log("check qid");
      this.queId = this.questions.queId;
      console.log(this.questions);
      console.log(this.queId);
    });
  }
  addQues(quesObj)
  {
    // console.log(quesObj.value);
    // const array = Object.keys(quesObj.value).map(key => ({type: key, value: quesObj[key]}));
    // console.log(array);
    
  //  this.Question=quesObj.Question
  //  this.Opt1=quesObj.Opt1
  //  this.Opt2=quesObj.Opt2
  //  this.Opt3=quesObj.Opt3
  //   debugger
  //   //this.cnt = 0;
  debugger
    quesObj.value.subId = this.subId;
    this.service.AddQuestions(quesObj.value)
    .subscribe((result:any)=>{
      console.log(result.status);
      console.log(result.data);
      
      if (result.status == "Success") {
        this.message = "Question added"
        alert(this.message)
        this.ngOnInit();
        //++this.cnt
        //this.quesAdded = ("Question "+this.cnt);
        quesObj.resetForm()

      }
      else
      {
        this.message = "Failed"
        
      }
    })
  }
  editQuestion(ques)
  {
    debugger
    this.editQues = true 
    this.specificQues = ques;
    console.log("====================");
    console.log(ques);

    this.queId = ques.queId;
    console.log("qid");
    console.log(this.queId);
    
     
  }

  updateQues(questions)
  {
    debugger
    console.log(questions.value);
    questions.subId = this.subId;
    this.service.EditQuestions(this.queId,questions)
    .subscribe((result:any)=>{
      console.log(result.status);
      console.log(result.data);
      
      if (result.status == "success") {
        this.message = "Question Updated"
        alert(this.message)
        this.cancel();
        //++this.cnt
        //this.quesAdded = ("Question "+this.cnt);
       
      }
      else
      {
        this.message = "Failed"
        
      }
    })
  }
  cancel()
  {
    this.editQues =false;
  }

}
