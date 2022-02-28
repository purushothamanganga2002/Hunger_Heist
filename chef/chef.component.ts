import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  title = 'hunger';
  ordered:any=[];
  reload():void
  {
  }
  constructor(private db:DbutilityService)
  {
    let id:any=setInterval(()=>{
    db.observeChange().subscribe((data:any)=>
    {
      if(!data["message"])
      {
        let i:number=0;
        for(i=0;i<data.length;i++){
          this.ordered.push(data[i]);
        }
      }
    })
    },1000)
  }

  ngOnInit(): void {
    
  }

}
