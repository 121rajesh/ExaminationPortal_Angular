import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-managesubjects',
  templateUrl: './managesubjects.component.html',
  styleUrls: ['./managesubjects.component.css']
})
export class ManagesubjectsComponent implements OnInit {
  subjects:any
  constructor(private service:DataService) {  }
  //subId:number;
  // noOfQues:any;
  questions:any;
  ngOnInit() {
    
    this.service.GetSubjects().subscribe((subjectData:any)=>{
      this.subjects = subjectData.data;
      console.log(this.subjects);
      //after completion
      // for (let i = 0; i < this.subjects.length; i++) {
      //    this.subId = this.subjects[i].SubId;
        
      // }
      // this.subId = this.subjects[0].SubId;
      // console.log(this.subId);
      // this.service.GetQuestionBySubId(this.subjects[i].SubId).subscribe((questionData:any)=>{
      //   if(questionData.Data !=null || questionData.Data!=undefined)
      //   this.questions = questionData.Data;
      //   this.noOfQues[i]= this.questions.length;
        
    //   });
    // }
      
    });
    //after compeletion
    // this.service.GetQuestionBySubId(this.subId).subscribe((questionData:any)=>{
    //   if(questionData.Data !=null || questionData.Data!=undefined)
    //   this.questions = questionData.Data;
    //   console.log(this.questions);
      
    // });
    
    
  }

  deleteSub(subId)
  {
    this.service.DeleteSubject(subId)
    .subscribe((result:any)=>{
      console.log(result.status);
      this.ngOnInit()
    })
  }
}
