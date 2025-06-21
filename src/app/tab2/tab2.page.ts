import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OntarioCovidService, OntarioData } from '../services/ontario-covid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page implements OnInit {
  ontarioData: OntarioData[] = [];
  selectedRecord?: OntarioData;
  message: string = '';
  selectedDate: string = '';

  constructor(private ontarioService: OntarioCovidService, private router: Router) {}

  ngOnInit() {
    this.ontarioService.getOntarioData().subscribe(data => {
      this.ontarioData = data;
      this.selectedRecord = data[data.length - 1];
    });

    this.ontarioService.currentMessage.subscribe(msg => {
      this.message = msg;
    });

    this.ontarioService.currentDate.subscribe(date => {
      this.selectedDate = date;
    });
  }

  goToDetail(record: OntarioData) {
    this.router.navigate(['/detail'], { state: { item: record } });
  }
}
