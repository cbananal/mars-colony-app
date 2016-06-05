import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IAlien, Encounter } from '../shared/models';
import { AlienService, EncounterService } from '../shared/services';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [AlienService, EncounterService]
})
export class ReportComponent implements OnInit {

  public NO_ALIENS_SELECTED: string;
  public aliens: IAlien[];
  public encounter: Encounter;

  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
    this.NO_ALIENS_SELECTED = '(none)';
  }

  ngOnInit() {
    this.encounter = new Encounter(this.NO_ALIENS_SELECTED,"date here",null,7);
    this.alienService.getAliens().then( alien => this.aliens = alien);
  }

  onSubmit(event): void {
    this.encounterService.createEncounter(this.encounter)
      .then(encounter => this.router.navigate(['/encounters']) )
  }

  get noAliens(): boolean {
    return this.encounter.atype === this.NO_ALIENS_SELECTED;
  }

}
