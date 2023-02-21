import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

// customer = new FormControl("");

myForm = new FormGroup({
  name: new FormControl(''),
  Carselection: new FormControl(''),
});
printingValue(){
  console.log(this.myForm.value);
}
}
