import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListRoutingModule } from './list.routing.module'
import { ListComponent } from './list.component';
import { SearchPipe } from '../../shared/pipes/search.pipe';




@NgModule({
  declarations: [ListComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule    
  ],
  exports: [ListComponent]
})
export class ListModule { }
