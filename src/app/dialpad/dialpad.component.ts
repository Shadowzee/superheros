import { Component, OnInit } from '@angular/core';
import { DialpadserviceService } from '../dialpadservice.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.scss']
})
export class DialpadComponent implements OnInit {

  dialpadinput= new FormControl('');
  outputhero:any=false;
 
  constructor(private dialpadser: DialpadserviceService) { }

  ngOnInit(): void {
  }
  submit(){
this.dialpadser.addHero({"input":this.dialpadinput.value}).subscribe((data)=>{
  this.outputhero=data['result'];
  console.log(data);
});
  }
  
  add(i){
    if(i=='#'){
    this.dialpadinput.setValue(this.dialpadinput.value+" ");
    }
    else{
    this.dialpadinput.setValue(this.dialpadinput.value+i);
    }
    console.log(this.dialpadinput);
  }
clear(){
  this.dialpadinput.reset();
}
}
