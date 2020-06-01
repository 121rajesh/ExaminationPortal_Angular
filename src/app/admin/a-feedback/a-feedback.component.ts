import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-a-feedback',
  templateUrl: './a-feedback.component.html',
  styleUrls: ['./a-feedback.component.css']
})
export class AFeedbackComponent implements OnInit {

  userData:any;
  constructor( private authService:AuthService, private service:DataService) { }

  ngOnInit() {
    this.service.GetFeedback()
    .subscribe((result:any)=>{
      // debugger
      console.log(result.data);
      
      this.userData = result.data;
      console.log(this.userData.fdbkId);
      
      });  
      
  }
}
