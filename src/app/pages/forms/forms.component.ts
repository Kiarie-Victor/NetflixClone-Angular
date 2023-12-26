import { NgFor } from '@angular/common';
import { Component, DoCheck, ViewChild } from '@angular/core';
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
  email?:string;
  gen?:string;
  country?:string;

  @ViewChild('myForm') form!: NgForm

  gender = [
    {id:'1', value:'male'},
    {id:'2', value:'female'},
    {id:'3', value:'other'},
  ]
  defaultGender = 'male'

  onSubmit(){
    console.log(this.form)
    this.firstName = this.form.value.personaLDetails.firstname;
    this.secondName = this.form.value.personaLDetails.lasttname;
    this.email = this.form.value.personaLDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset()
  }
  setDefaultValue(){
    // this.form.value.personaLDetails.firstname = 'John'
    // this.form.value.personaLDetails.secondname = 'Doe'
    // this.form.value.personaLDetails.email = 'johndoe@gmail.com'

    // this.form.setValue({
    //   country:'',
    //   gender:'',
    //   movies:'',
    //   music: '',
    //   personaLDetails:{
    //     firstname:'john',
    //     lastname:'doe',
    //     email:'johndoe@gmail.com'
    //   },
    //   sport:''
    // })

    this.form.form.patchValue({
      personaLDetails:{
        firstname:'john',
        lastname:'doe',
        email:'johndoe@gmail.com'
      }
    })

  }
}
