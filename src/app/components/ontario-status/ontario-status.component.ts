import { Component, OnInit } from '@angular/core';
import { CanadaCovidService } from 'src/app/services/canada-covid.service';

@Component({
  selector: 'app-ontario-status',
  templateUrl: './ontario-status.component.html',
  styleUrls: ['./ontario-status.component.scss'],
  standalone: false
})
export class OntarioStatusComponent implements OnInit {
  canadaSummary: any;

  constructor(private canadaService: CanadaCovidService) {}

  ngOnInit(): void {
    this.canadaService.getCanadaSummary().subscribe((summary) => {
      this.canadaSummary = summary;
    });
  }
}
