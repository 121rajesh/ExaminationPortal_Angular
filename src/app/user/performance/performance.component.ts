import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  result:any
  id:any
constructor(public service:DataService, public router:Router) { }

ngOnInit() {
  console.log("inside performance TS");
  
  debugger
  this.id = parseInt(sessionStorage.getItem("UserId"))
  this.service.GetResult(this.id)
  .subscribe((resultdata:any)=>{
    
    if(resultdata.data != null)
    {
      this.result = resultdata.data
    console.log(this.result);
    }
    else
    {
      console.log(resultdata.status);
      alert(resultdata.status)
    }
    
  })
}

}
