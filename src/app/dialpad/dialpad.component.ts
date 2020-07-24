import { Component, OnInit } from '@angular/core';
import { DialpadserviceService } from '../dialpadservice.service';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.scss']
})
export class DialpadComponent implements OnInit {

  constructor(private dialpadser: DialpadserviceService) { }

  ngOnInit(): void {
  }
  submit(){
this.dialpadser.addHero({"k":"kk"}).subscribe((data)=>{
  console.log(data);
});
  }
}
