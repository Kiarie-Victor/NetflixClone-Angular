import { NgFor } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  defaultCountry = 'Kenya'
  firstName?:string;
  secondName?:string;

  gender = [
    {id:'1', value:'male'},
    {id:'2', value:'female'},
    {id:'3', value:'other'},
  ]
  defaultGender = 'male'

  onSubmit(form: NgForm){
    console.log(form)

  }
}
