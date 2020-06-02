import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';
import { ansSheet } from 'src/app/Interface/ansSheet';
import { quesAns } from 'src/app/Interface/quesAns';




@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent implements OnInit {
  subId:any
  SubPaper:any
  timer:any=10;
  time:any;
  // button:any;
  // scorearray: { "UserId": string; "SubId": any; "CntCorrectAns": any; };
  constructor(public service:DataService,public route:ActivatedRoute,public router:Router ,public elementRef:ElementRef) {
   
   }

   //-------------------------------
   startTimer() {
    let vm = this;
    function countdown(minutes) {
      // alert(minutes)
      var seconds = 60;
      var mins = minutes;
      function tick() {
        var counter = document.getElementById("timer");
        var button = document.getElementById("btnSubmit");
        var currentMinutes = mins - 1;
        seconds--;
        counter.innerHTML =
          "Exam will END in " +
          currentMinutes.toString() +
          ":" +
          (seconds < 10 ? "0" : "") +
          String(seconds);
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          if (mins > 1) {
            // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
            setTimeout(function() {
              countdown(mins - 1);
            }, 1000);
          } else {
            
          alert("Your exam is auto submitted !!")
          button.click();
          }
        }
      }
      tick();
    }
    countdown(10);// minutes value to be for countdown
  }
//-----------------------------
  ngOnInit() 
  {

    
    
    // debugger
    this.route.params.subscribe(params=>
      {
        // debugger
      this.subId= params.SubId;
    
      console.log(this.subId);
    
      });
    this.service.GetQuestionBySubId(this.subId)
    .subscribe((questionpaper:any)=>
    {
      // debugger
     console.log(questionpaper);
     
      this.SubPaper = questionpaper.data
      console.log("==========================");
      console.log(this.SubPaper);
      
        
      console.log(this.SubPaper[0])   
    });
    this.startTimer();
    

  }  

  answers(datafromUI:any)
  {
    debugger
      console.log(datafromUI.value);
      let data = datafromUI.value;

      console.log(data);
      
      let formData = data;

      let uid = parseInt(sessionStorage.getItem("UserId"));

      var subjectId = parseInt(this.subId)
      const array:quesAns[] = Object.keys(formData).map( qid=>({queId:qid, ans:formData[qid]}));
      console.log(array);
      
      //const UID = {userId:uid,subId:this.subId}
      // var examData:ansSheet;
      // examData.ansData = array?array:null;
      // examData.userId =uid;
      // examData.subId =subjectId;

      const examData:ansSheet ={
        userId :uid,
        subId:subjectId,
        ansData:array
      }

      this.service.SubmitAns(examData)
      .subscribe((reply:any)=>{
        debugger
        
        
        if(reply.status == "Success")
        {
          alert("Your Score is "+reply.data+".\nYou can go through our Sample paper Series.\nclick Ok")
          // this.scorearray = 
          //   {"UserId":uid.toString(),"SubId":subjectId.toString(),"CntCorrectAns":(reply.data).toString()}
            
          //   this.service.SendScore(this.scorearray)
          //   .subscribe((replyfromserver:any)=>{
          //     console.log(replyfromserver.status);
          //   })
            
            this.router.navigate(["user/samplepapers"])
        }
        console.log(reply.status)
      })
  }


  }
