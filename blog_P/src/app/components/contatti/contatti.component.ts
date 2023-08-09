import { Component, OnInit, Host } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

 constructor() {}

 ngOnInit(): void {}

 onSubmit(form:NgForm){
  console.log(form)
 }

  
}





