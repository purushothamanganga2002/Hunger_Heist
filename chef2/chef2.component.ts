import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-chef2',
  templateUrl: './chef2.component.html',
  styleUrls: ['./chef2.component.css']
})
export class Chef2Component implements OnInit {
  title = 'hunger';
  ordered:any=[];
  order_count:any=[]
  checkcnt:any=[{}];
  static orders:any=[];
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
        this.checkcnt.push({tno:data[0].tno,len:data.length});
        console.log(this.checkcnt)
        let i:number=0;
        console.log(data.length)
        for(i=0;i<data.length;i++){
          this.ordered.push(data[i]);
        }
      }
    })
    },1000)
  }
  rmfood(j:string):void{
    let b:number=0;
    for(let k=0;k<this.ordered.length;k++)
    {
      if(this.ordered[k].name==j)
      {
        b=this.ordered[k].tno
        this.ordered.splice(k,1);
        break;
      }
    }
    for(let i=1;i<this.checkcnt.length;i++)
    {
      if(this.checkcnt[i].tno==b)
      {
        if(this.checkcnt[i].len!=0)
        {
          this.checkcnt[i].len-=1;
          if(this.checkcnt[i].len==0)
           this.db.settrue(this.checkcnt[i].tno);
        }
      }
      
    }
    
  }

  ngOnInit(): void {
  }
}
