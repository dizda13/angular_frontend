import { Component } from '@angular/core';
import { MyHederLink } from './my-heder-link.component';
import { MYHEDERLINKS } from './my-heder.mocks';

@Component({
  selector: 'my-heder',
  templateUrl: `app/my-heder/my-heder.component.html`,
  styleUrls: [`app/my-heder/my-heder.component.css`]
})

export class MyHederComponent {
  myHederLinks: MyHederLink[];
  ngOnInit(){
    this.myHederLinks=MYHEDERLINKS;
  }

  changeActive(myHederLink){
    let j=0;
    for(let i of this.myHederLinks){
      MYHEDERLINKS[j].active="";
      j++;
    }
    MYHEDERLINKS[myHederLink.id].active="active";
  }
}
