import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanadaCovidService {
  private dataUrl = 'assets/data/covid19-download.json';

  constructor(private http: HttpClient) {}

  getCanadaSummary(): Observable<any> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map(data => {
        // Filter for Canada data by prnameFR
        const canadaRows = data.filter(d => d.prnameFR === 'Canada' && d.date === '2024-05-11');

  // Since filtering by exact date, just get the first (and only) item
  const latestData = canadaRows.length > 0 ? canadaRows[0] : null;


        if (!latestData) {
          return null;
        }

        return {
          casesLast7Days: parseInt(latestData.numtotal_last7?.toString().replace(/,/g, '') ?? '0', 10),
          totalCases: parseInt(latestData.totalcases.replace(/,/g, ''), 10),
          activeCases: 0,        // fixed as requested
          recovered: 0,          // fixed as requested
          deathsLast7Days: parseInt(latestData.numdeaths_last7?.toString().replace(/,/g, '') ?? '0', 10),
          totalDeaths: parseInt(latestData.numdeaths.toString().replace(/,/g, ''), 10),
          testedToday: 0,        // fixed as requested
          totalTested: 0,        // fixed as requested
          percentPositive: '0.00%', // fixed as requested
          peopleTestedPerMillion: 0 // fixed as requested
        };
      })
    );
  }
}
