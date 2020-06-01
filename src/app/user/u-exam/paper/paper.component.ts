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
  button:any;
  // scorearray: { "UserId": string; "SubId": any; "CntCorrectAns": any; };
  constructor(public service:DataService,public route:ActivatedRoute,public router:Router ,public elementRef:ElementRef) {
    
    var countDownTime = 10*60*1000;
    
    this.time=this.elementRef.nativeElement.querySelector('#timer');  
    this.button=this.elementRef.nativeElement.querySelector('#btnSubmit');
    const interval = setInterval( function(){

        var min = Math.floor((countDownTime%(1000*60*60))/(60*1000));
        var sec = Math.floor((countDownTime)%(1000*60)/(1000));
        countDownTime-=1000;
        if(this.time!==undefined)
        this.time.textContent="Time remaining : "+min+" m "+sec+" s";  
      
        if(countDownTime<0)
        {
            clearInterval(interval);
            this.time.textContent="Time remaining : "+" 00 m 00s";
            alert("Your exam is auto submitted !!")
            this.button.click();
        }
    },1000);
   }

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
