import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
message:string
  constructor(private service: DataService) { }

  ngOnInit() {

  }
  addSubjects(subDataFromUI)
  {
       
    let result = this.service.AddSubject(subDataFromUI)
    .subscribe((subData:any)=>{
      if (subData.status == "Success")
      {
        this.message = subData.status;
        console.log(subData);
        
      }
    })
  }

}
