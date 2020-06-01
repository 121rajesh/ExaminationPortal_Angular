import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
fid:number
userData:any
  constructor( private activatedRoute:ActivatedRoute, private service:DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.fid= params['FId']});

      this.service.GetFeedback()
      .subscribe((result:any)=>{
        // debugger
        console.log(result.data);
        
        this.userData = result.data;
        })   
  }

}
