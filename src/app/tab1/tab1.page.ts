import { Component, OnInit } from '@angular/core';
import { OntarioCovidService, OntarioData } from 'src/app/services/ontario-covid.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  latestOntarioData?: OntarioData;

  constructor(private ontarioService: OntarioCovidService) {}

  ngOnInit() {
    this.ontarioService.getOntarioData().subscribe(data => {
      if (data && data.length > 0) {
        this.latestOntarioData = data[data.length - 1]; // latest record
      }
    });
  }
}
