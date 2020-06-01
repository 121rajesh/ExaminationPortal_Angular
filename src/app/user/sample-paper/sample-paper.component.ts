import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sample-paper',
  templateUrl: './sample-paper.component.html',
  styleUrls: ['./sample-paper.component.css']
})
export class SamplePaperComponent implements OnInit {

  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  }

  pdf()
  {
    debugger
    this.service.GetPDF()
    .subscribe((fetchpdf)=>{
      debugger
      console.log("pdf fetched")
    })
  }
}
