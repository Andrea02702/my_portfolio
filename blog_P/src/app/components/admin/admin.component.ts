import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
   
  constructor(private service:ApiserviceService,private fb:FormBuilder, private router:Router) {}

  

 loginForm:FormGroup = this.fb.group({
  Nadmin:['',Validators.required],
 });


ngOnInit(): void {
  
}

login(){
  
  let User =this.service.login(
  this.loginForm.value.Nadmin
);

  if(!User){
    console.log(' TU NON PUOI PASSARE')
  }
  
    
  else
  {
  this.router.navigateByUrl('/adminpost');
  }

}

}
