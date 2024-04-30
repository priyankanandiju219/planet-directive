import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanetDetailsService } from '../planet-details.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-typography-demo',
  templateUrl: './typography-demo.component.html',
  styleUrls: ['./typography-demo.component.scss']
})
export class TypographyDemoComponent implements OnInit {
  planets: any = [];
  length: any;
  pageUrl: any;
  totalItems: any;
  pageSize = 5;
  pageSizeOptions = [5,10, 15];


  constructor(private planetDetailsService: PlanetDetailsService) { }

  ngOnInit(): void {
    this.loadPlanets();

  }
  onPageChange(event: any) {
    const pageIndex = event.pageIndex;
    this.loadPlanets(pageIndex + 1);
    console.log("event", event,pageIndex)

  }



  loadPlanets(pageNumber: number = 1) {
    console.log("pageNumber", pageNumber)
    this.planetDetailsService.getDataList(pageNumber, this.pageSize).subscribe((data: any[]) => {
      this.planets = data;
      this.totalItems = this.planets.length;
      const mockedPlanets = [];

      const startIndex = (pageNumber - 1) * this.pageSize;
      console.log("startIndex", startIndex)
      const endIndex = startIndex + this.pageSize;
      console.log(endIndex);
      for (let i = startIndex; i < endIndex; i++) {
        mockedPlanets.push({ name: `Planet ${i + 1}` });
      }
      this.planets = mockedPlanets;
      console.log("!!", this.planets);
    });
  }
}
