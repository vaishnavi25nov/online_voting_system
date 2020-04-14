import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MemberServiceService {
  
  constructor(private http: HttpClient) { }

  addNewConstitution(constitutionId, state, district) {
    const obj = {
      constitutionId: constitutionId,
      state: state,
      district: district
    };
    this.http
      .post('http://localhost:4000/eVoting/add/constitution', obj)
      .subscribe(res => {
        alert(name + " has been added successfully");
      });
  }

  getConstitutions() {
    return this.http.get('http://localhost:4000/eVoting/get/constitutions/');
  }

  sendMailToCitizen(mail: string) {
    this.http.post('http://localhost:4000/eVoting/send/mailtocitizen',mail);
  }

  // Candidates
  addNewCandidate(name, age, party, constitutionId) {
    const obj = {
      name: name,
      age: age,
      party: party,
      constitutionId: constitutionId
    };
    this.http
      .post(`http://localhost:4000/eVoting/add/candidate`, obj)
      .subscribe(res => {
        alert(name + " has been added successfully");
      });
  }

  getCandidates() {
    return this.http.get('http://localhost:4000/eVoting/get/candidates');
  }

  deleteConstitution(con) {
    this.http.post('http://localhost:4000/eVoting/delete/constitution',con).subscribe(res => {
      alert(con.district + " has been deleted");
    });
  }

  deleteCandidate(can) {
    this.http.post('http://localhost:4000/eVoting/delete/candidate',can).subscribe(res => {
      alert(can.name + " has been deleted");
    });
  }

}
