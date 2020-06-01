import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultData:any
  constructor(private service:DataService) { }

  ngOnInit() 
  {
    this.service.GetResults()
    .subscribe((result:any)=>{
      console.log(result);
      this.resultData = result.data;
      //console.log(this.resultData[3]);
      
    })
  }
  sortByName()
  {
    this.resultData.Name.sort();  
  }

}
