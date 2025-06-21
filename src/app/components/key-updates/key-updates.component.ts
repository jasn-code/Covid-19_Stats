import { Component, OnInit } from '@angular/core';
import { CanadaCovidService } from 'src/app/services/canada-covid.service';

@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.scss'],
  standalone: false
})
export class KeyUpdatesComponent implements OnInit {
  canadaSummary: any;

  constructor(private canadaService: CanadaCovidService) {}

  ngOnInit() {
    this.canadaService.getCanadaSummary().subscribe(res => {
      this.canadaSummary = res;
    });
  }
}
