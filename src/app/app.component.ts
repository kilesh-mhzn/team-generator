import {Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TeamComponent} from "./team/team.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('memberInput') memberInput!: ElementRef;

  title = 'team-generator';
  memberName='';
  members:string[] = [];
  error: null|string=null;
  numberOfTeams: undefined | number= undefined;
  teams:string[][]=[]

  onInputChange(value: string) {
    this.error=null;
    this.memberName=value;
  }

  addMember() {
    if(this.memberName === "") {
      this.error='Member name cannot be empty'
      return
    }
    this.error=null;

    this.members.push(this.memberName);
    this.memberName='';
    this.memberInput.nativeElement.focus();
  }
  onNumberOfTeamChange(value: number) {
    this.numberOfTeams=value;
  }

  generate() {
    if(!this.numberOfTeams || this.numberOfTeams===0) {
      return
    }

    if(this.members.length<this.numberOfTeams) {
      this.error='not enough members'
      return;
    }
    const allMembers = [...this.members]
    while(allMembers.length) {
      for(let i=0; i < this.numberOfTeams; i++) {
        const randIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randIndex,1)[0]

        if(!member) break;
        if(this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }
    console.log(this.teams)
    this.members = [];
    this.numberOfTeams = undefined;
  }


}
