import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface OntarioData {
  id: number;
  'Reported Date': string;
  'Total Cases': number | null;
  'Resolved': number | null;
  'Deaths': number | null;
  'Number of patients hospitalized with COVID-19': number | null;
  'Number of patients in ICU due to COVID-19': number | null;
  'Number of patients in ICU on a ventilator due to COVID-19': number | null;
}

@Injectable({
  providedIn: 'root'
})
export class OntarioCovidService {
  private dataUrl = 'assets/data/cases_ontario.json';

  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  private dateSource = new BehaviorSubject<string>('');
  currentDate = this.dateSource.asObservable();

  constructor(private http: HttpClient) {}

  getOntarioData(): Observable<OntarioData[]> {
    return this.http.get<OntarioData[]>(this.dataUrl);
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  sendDate(date: string) {
    this.dateSource.next(date);
  }
}
