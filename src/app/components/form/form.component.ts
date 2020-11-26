import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IEventResponse } from 'src/app/shared/models/models';

enum ButtonText {
  EDITMODE = 'UPDATE',
  ADDMODE = 'ADD'

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form : FormGroup;
  id: string;
  buttonText: string;
  editMode = false;
  date = new Date();

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {     
    this.route.params.subscribe( params => this.id = params.id );
    this.createForm();
  }

  ngOnInit() {
    this.loadForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  loadForm(): void {
    const id = Number(this.id);
    if(!Number.isNaN(id)) {
      this.editMode = true;
      this.buttonText = ButtonText.EDITMODE;
      this.dataService.getEvent(this.id).subscribe((result: IEventResponse) => {
        const {title, description, date} = result;
        this.form.patchValue({
          title: title,
          description: description,
          date: date
        })
      });
    } else {
      this.buttonText = ButtonText.ADDMODE;
      this.editMode = false;
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.dataService.updateEvent(this.id, this.form.value).subscribe();
    } else {
      this.dataService.addEvent(this.form.value).subscribe();
    }
    this.router.navigate(['/']);   
  }

}
