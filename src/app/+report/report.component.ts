import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IAlien } from '../shared/models';
import { AlienService } from '../shared/services';
@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [AlienService]
})
export class ReportComponent implements OnInit {

  public aliens: IAlien[];

  constructor(
    private alienService: AlienService
  ) {}

  ngOnInit() {
    this.alienService.getAliens().then( alien => this.aliens = alien);
  }

}
