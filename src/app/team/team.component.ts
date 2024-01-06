import {Component, OnInit, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-team',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  @Input() team:string[] = []
  @Input() index = 0
  ngOnInit(): void {
  }
}
