import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { IEventResponse } from 'src/app/shared/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  searchText: string;
  loading: boolean;
  list: IEventResponse[] = [];

  constructor(private dataService: DataService, private router: Router) { 
    this.loading = true;
    this.loadData();
  }

  loadData(): void {
    this.dataService.getEventsList().pipe(
      tap(result => {
        this.list = result;
        this.loading = false;
      })
    ).subscribe();
  }

  editEvent(id: string) {
    this.router.navigate(['event', id]);
  }

  deleteEvent(id: string, index: number) {
    this.dataService.deleteEvent(id).subscribe();
    this.list.splice(index, 1);
  }

}
