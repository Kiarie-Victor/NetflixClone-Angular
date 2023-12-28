import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit{
    reactiveForm: FormGroup;

 
ngOnInit(){
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('China'),
      hobbies: new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.reactiveForm)
    //this.reactiveForm.reset()
  }
}
