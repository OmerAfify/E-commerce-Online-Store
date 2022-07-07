import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {

  createAccountForm:FormGroup;

  constructor() {
    
  this.createAccountForm= new FormGroup({
    "firstName":new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)]),
    "lastName":new FormControl("",[Validators.required,Validators.minLength(2), Validators.pattern(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i)]),
    "email":new FormControl("",[Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    "password":new FormControl("",[Validators.required,Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/)]),
    "re-enterPassword":new FormControl("",[Validators.required
    ]),
  });
   }

  ngOnInit(): void {
  }



  OnCreateAccount(){
    console.log(this.createAccountForm.get("firstName")?.value)
  }


  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  isFormValid():boolean{
    if (this.createAccountForm.invalid==true)
    return false
    else
    return true
  }

  showError(Controller:string){
    if (this.createAccountForm.get(Controller)?.touched && this.createAccountForm.get(Controller)?.invalid == true)
         return "alert alert-danger"
    else
        return ""
  }

  showErrorMessage(Controller:string){
    if (this.createAccountForm.get(Controller)?.touched && this.createAccountForm.get(Controller)?.invalid == true)
         return true
    else
        return false
  }

  showErrorMessageText(Controller:string):string{
    switch(Controller){
      case 'firstName':
      return "invalid FirstName";
      break;
      case 'lastName':
      return "invalid lastName";
      break;
      case 'email':
      return "invalid E-mail";
      break;
      case 'password':
      return "invalid Password";
      break;
      case 're-enterPassword':
      return "invalid Password";
      break;
      default:
        return "error"
  }
}

validateName(str:any):string{
  if(str.value==="")
    return "Please do not leave this field empty."
    if(str.value,length<2)
    return "Name should be atleast 2 character."
  if(/^\s*$/.test(str.value)===true)
    return "White spaces are not allowed."
  else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str.value))
    return "Special charecters are not allowed."
  else if (/\d/.test(str.value))
  return "Digits are not allowed."
  else
  return ""
}

validatePassword(str:any):string{
  if(str.value==="")
    return "Please do not leave this field empty."
  if(str.value.length<9)
    return "PassWord should be atleast 9 characters."
  if(/^\s*$/.test(str.value)===true)
    return "White spaces are not allowed."
  else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str.value) == false)
    return "Password Should have atleast 1 Special charecter."
  else if (/\d/.test(str.value)==false)
  return "Password Should have atleast 1 Digit."
  else if(/[a-zA-Z]/.test(str.value)==false)
  return "Password Should have atleast 1 Character."
  else if(/[A-Z]/.test(str.value)==false)
  return "Password Should have atleast 1 Capitalized letter."
  else 
  return ""
}

get firstName(){
  return this.createAccountForm.get("firstName")
}

get lastName(){
  return this.createAccountForm.get("lastName")
}

get password(){
  return this.createAccountForm.get("password")
}

}
