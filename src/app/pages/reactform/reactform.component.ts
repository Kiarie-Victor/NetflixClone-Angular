import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
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
      firstname: new FormControl(null, [ Validators.required, this.noSpaceValidator]),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email],this.emailControlValidator),
      }),
      gender: new FormControl('male'),
      country: new FormControl('China'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    });
  }
  onSubmit(){
    console.log(this.reactiveForm)
    //this.reactiveForm.reset()
  }
  addNew():void{
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  noSpaceValidator(control:FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed:true}
    }else
      return null
  }
  emailControlValidator(control: FormControl): Promise<any>{
    const asyncValidator = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'victorkiariem@gmail.com'){
          resolve({emailControlValidator:true})
        }
        else
          resolve(null)
      }, 5000);
    })
    return asyncValidator
  }
}
