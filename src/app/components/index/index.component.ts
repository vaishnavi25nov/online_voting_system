import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from 'src/app/member-service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public members: any;
  headerRow : any[] = [];
  p: number = 1;
  totalItems: number;

  constructor(private memberService: MemberServiceService) {
    // this.memberService.getMembers().subscribe(
    //   res => {
    //     this.members = res;
    //   }
    // )
  }

  ngOnInit() {
    this.headerRow = ["Id","Name","Contact","Email","Address","About Member"];
   }
}
