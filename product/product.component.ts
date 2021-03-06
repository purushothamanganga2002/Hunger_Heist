import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Db } from 'mongodb';
import { DbutilityService } from '../dbutility.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ans:string="show3"
  show1:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  show4:boolean=false;
  show5:boolean=false;
  show6:boolean=false;
  show7:boolean=false;
  show8:boolean=false;
  show9:boolean=false;
  show10:boolean=false;
  show11:boolean=false;
  show12:boolean=false;
  cnt:number=0;
  cnt1:number=0;
  cnt2:number=0;
  cnt3:number=0;
  cnt4:number=0;
  cnt5:number=0;
  cnt6:number=0;
  cnt7:number=0;
  cnt8:number=0;
  cnt9:number=0;
  cnt10:number=0;
  cnt11:number=0;
  cnt12:number=0;
  output:any;
  tcnt:any;
  food=[{name:"",ra:0,foodcnt:0,tno:0}];
  ans1:string="";
  constructor(private mydb:DbutilityService,private router : Router) { 
      this.mydb.getFood().subscribe(data=>{
      this.output=data["result"];
      console.log(this.output[1].food_name);
      });
  }
  ngOnInit(): void {
  }
  fooddetails():void{
    let i:number;
     for(i=1;i<=this.cnt;i++)
     {    
          console.log(this.food[i].foodcnt);
          // alert(this.food[i].name+"  "+this.food[i].ra);
          if(!this.insertone(this.food[i].name,this.food[i].ra,this.food[i].foodcnt,this.tcnt))  
          {
              alert("order submission failed try again!");
              break;
          }
      }
      this.mydb.bool(this.tcnt);
      window.location.reload();
      var time= setInterval(()=>{
        this.mydb.enquire(this.tcnt).subscribe((data:any)=>
        {
          alert("hiii");
          if(data["message"])
            {
            alert("Your food is on the way");
            clearInterval(time);
            }
        })
      });
      
  }
  insertone(n:string,a:number,b:number,t:number):boolean{
    let bool:boolean=true;
    this.mydb.insertone(n,a,b,t).subscribe((data:any)=>{
      bool=data["message"];
      });
      return bool;
  }
  addclass1():void{
    this.show1=true;
    this.cnt+=1;
    this.cnt1+=1;
    this.food.push({name:this.output[0].food_name,ra:this.output[0].rate,foodcnt:this.cnt1,tno:this.tcnt});
  }
  removeclass1():void{
    this.show1=false;
    this.food.splice(this.cnt,1);
    this.cnt1=0;
    this.cnt-=1;
  }
  addclass2():void{
    this.show2=true;
    this.cnt+=1;
    this.cnt2+=1;
    this.food.push({name:this.output[1].food_name,ra:this.output[1].rate,foodcnt:this.cnt2,tno:this.tcnt});
  }
  removeclass2():void{
    this.show2=false;
    this.food.splice(this.cnt,1);
    this.cnt2=0;
    this.cnt-=1;
  }
  addclass3():void{
    this.show3=true;
    this.cnt+=1;
    this.cnt3+=1;
    this.food.push({name:this.output[2].food_name,ra:this.output[2].rate,foodcnt:this.cnt3,tno:this.tcnt});
  }
  removeclass3():void{
    this.show3=false;
    this.food.splice(this.cnt,1);
    this.cnt3=0;
    this.cnt-=1;
  }
  addclass4():void{
    this.show4=true;
    this.cnt+=1;
    this.cnt4+=1;
    this.food.push({name:this.output[3].food_name,ra:this.output[3].rate,foodcnt:this.cnt4,tno:this.tcnt});
  }
  removeclass4():void{
    this.show4=false;
    this.food.splice(this.cnt,1);
    this.cnt4=0;
    this.cnt-=1;
  }
  addclass5():void{
    this.show5=true;
    this.cnt+=1;
    this.cnt5+=1;
    this.food.push({name:this.output[4].food_name,ra:this.output[4].rate,foodcnt:this.cnt5,tno:this.tcnt});
  }
  removeclass5():void{
    this.show5=false;
    this.food.splice(this.cnt,1);
    this.cnt5=0;
    this.cnt-=1;
  }
  addclass6():void{
    this.show6=true;
    this.cnt+=1;
    this.cnt6+=1;
    this.food.push({name:this.output[5].food_name,ra:this.output[5].rate,foodcnt:this.cnt6,tno:this.tcnt});
  }
  removeclass6():void{
    this.show6=false;
    this.food.splice(this.cnt,1);
    this.cnt6=0;
    this.cnt-=1;
  }
  addclass7():void{
    this.show7=true;
    this.cnt+=1;
    this.cnt7+=1;
    this.food.push({name:this.output[6].food_name,ra:this.output[6].rate,foodcnt:this.cnt7,tno:this.tcnt});
  }
  removeclass7():void{
    this.show7=false;
    this.food.splice(this.cnt,1);
    this.cnt7=0;
    this.cnt-=1;
  }
  addclass8():void{
    this.show8=true;
    this.cnt+=1;
    this.cnt8+=1;
    this.food.push({name:this.output[7].food_name,ra:this.output[7].rate,foodcnt:this.cnt8,tno:this.tcnt});
  }
  removeclass8():void{
    this.show8=false;
    this.food.splice(this.cnt,1);
    this.cnt8=0;
    this.cnt-=1;
  }
  addclass9():void{
    this.show9=true;
    this.cnt+=1;
    this.cnt9+=1;
    this.food.push({name:this.output[8].food_name,ra:this.output[8].rate,foodcnt:this.cnt9,tno:this.tcnt});
  }
  removeclass9():void{
    this.show9=false;
    this.food.splice(this.cnt,1);
    this.cnt9=0;
    this.cnt-=1;
  }
  addclass10():void{
    this.show10=true;
    this.cnt+=1;
    this.cnt10+=1;
    this.food.push({name:this.output[9].food_name,ra:this.output[9].rate,foodcnt:this.cnt10,tno:this.tcnt});
  }
  removeclass10():void{
    this.show10=false;
    this.food.splice(this.cnt,1);
    this.cnt10=0;
    this.cnt-=1;
  }
  addclass11():void{
    this.show11=true;
    this.cnt+=1;
    this.cnt11+=1;
    this.food.push({name:this.output[10].food_name,ra:this.output[10].rate,foodcnt:this.cnt11,tno:this.tcnt});
  }
  removeclass11():void{
    this.show11=false;
    this.food.splice(this.cnt,1);
    this.cnt11=0;
    this.cnt-=1;
  }
  addclass12():void{
    this.show12=true;
    this.cnt+=1;
    this.cnt12+=1;
    this.food.push({name:this.output[11].food_name,ra:this.output[11].rate,foodcnt:this.cnt12,tno:this.tcnt});
  }
  removeclass12():void{
    this.show12=false;
    this.food.splice(this.cnt,1);
    this.cnt12=0;
    this.cnt-=1;
  }
  cntinc1():void{
    this.cnt1+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[0].food_name,ra:this.output[0].rate,foodcnt:this.cnt1,tno:this.tcnt});
  }
  cntdec1():void{
    this.cnt1-=1;
    if(this.cnt1==0)
    {
      this.show1=false;
      this.cnt-=1;
    }
  }
  cntinc2():void{
    this.cnt2+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[1].food_name,ra:this.output[1].rate,foodcnt:this.cnt2,tno:this.tcnt});
  }
  cntdec2():void{
    this.cnt2-=1;
    if(this.cnt2==0)
    {
      this.show2=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc3():void{
    this.cnt3+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[2].food_name,ra:this.output[2].rate,foodcnt:this.cnt3,tno:this.tcnt});
  }
  cntdec3():void{
    this.cnt3-=1;
    if(this.cnt3==0)
    {
      this.show3=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc4():void{
    this.cnt4+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[3].food_name,ra:this.output[3].rate,foodcnt:this.cnt4,tno:this.tcnt});
  }
  cntdec4():void{
    this.cnt4-=1;
    if(this.cnt4==0)
    {
      this.show4=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc5():void{
    this.cnt5+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[4].food_name,ra:this.output[4].rate,foodcnt:this.cnt5,tno:this.tcnt});
  }
  cntdec5():void{
    this.cnt5-=1;
    if(this.cnt5==0)
    {
      this.show5=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc6():void{
    this.cnt6+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[5].food_name,ra:this.output[5].rate,foodcnt:this.cnt6,tno:this.tcnt});
  }
  cntdec6():void{
    this.cnt6-=1;
    if(this.cnt6==0)
    {
      this.show6=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc7():void{
    this.cnt7+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[6].food_name,ra:this.output[6].rate,foodcnt:this.cnt7,tno:this.tcnt});
  }
  cntdec7():void{
    this.cnt7-=1;
    if(this.cnt7==0)
    {
      this.show7=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc8():void{
    this.cnt8+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[7].food_name,ra:this.output[7].rate,foodcnt:this.cnt8,tno:this.tcnt});
  }
  cntdec8():void{
    this.cnt8-=1;
    if(this.cnt8==0)
    {
      this.show8=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc9():void{
    this.cnt9+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[8].food_name,ra:this.output[8].rate,foodcnt:this.cnt9,tno:this.tcnt});
  }
  cntdec9():void{
    this.cnt9-=1;
    if(this.cnt9==0)
    {
      this.show9=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc10():void{
    this.cnt10+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[9].food_name,ra:this.output[9].rate,foodcnt:this.cnt10,tno:this.tcnt});
  }
  cntdec10():void{
    this.cnt10-=1;
    if(this.cnt10==0)
    {
      this.show10=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc11():void{
    this.cnt11+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[10].food_name,ra:this.output[10].rate,foodcnt:this.cnt11,tno:this.tcnt});
  }
  cntdec11():void{
    this.cnt11-=1;
    if(this.cnt11==0)
    {
      this.show11=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }
  cntinc12():void{
    this.cnt12+=1;
    this.food.splice(this.cnt,1);
    this.food.push({name:this.output[11].food_name,ra:this.output[11].rate,foodcnt:this.cnt12,tno:this.tcnt});
  }
  cntdec12():void{
    this.cnt12-=1;
    if(this.cnt12==0)
    {
      this.show12=false;
      this.food.splice(this.cnt,1);
      this.cnt-=1;
    }
  }

}