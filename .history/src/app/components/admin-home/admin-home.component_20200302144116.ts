import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from 'src/app/member-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  name: string;
  age: number;
  party: string;
  constitutionId: number
  state: string;
  district: string
  constitutions: Object;
  candidates: Object;
  citizens: { "name": string; "mail": string; "constitution": string }[];

  constructor(private memberService: MemberServiceService) {
    this.getCandidates();
    this.getConstitution();
  }

  getConstitution() {
    this.memberService.getConstitutions().subscribe(
      res => {
        this.constitutions = res;
      }
    )

  }

  getCandidates() {
    this.memberService.getCandidates().subscribe(
      res => {
        this.candidates = res;
      }
    )
  }

  ngOnInit() {
    this.citizens = [
      { "name": "Uma", "mail": "prabhu18101996@gmail.com", "constitution": "Vellore" },
      { "name": "vaishnavi", "mail": "vaishnavi25nov@gmail.com", "constitution": "Kanchipuram" }]
  }

  makeNewcandidate(name, age, party, constitutionId) {
    this.memberService.addNewCandidate(name, age, party, constitutionId);
    // $('#add_constitution').hide();
    document.getElementById("add_constitution").hidden = true;
    this.getCandidates();
  }

  makeNewconstitution(constitutionId, state, district) {
    this.memberService.addNewConstitution(constitutionId, state, district);
    // $('#add_candidate').hide();
    document.getElementById("add_candidate").hidden = true;
    this.getConstitution();
  }

  deleteConstitution(con) {
    this.memberService.deleteConstitution(con);
  }

  deleteCandidate(can) {
    this.memberService.deleteCandidate(can);
  }

  mailToCitizens(con) {
    this.citizens.forEach((item) => {
      if (con.constitutionId == item.constitution) {
        //SEND MAIL
        this.memberService.sendMailToCitizen(item.mail).subscribe(() => { alert("Mail sent to all citizens successfully") })
      }
    })
  }


}
