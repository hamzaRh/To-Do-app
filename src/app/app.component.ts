import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-app';
  @ViewChild("siedeNav") sideNav: ElementRef;

  openNav() {
    this.sideNav.nativeElement.style.width = "250px";
  }
  
  closeNav() {
    this.sideNav.nativeElement.style.width = "0";
  }
}
