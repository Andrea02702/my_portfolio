import { Component, OnInit, Host } from '@angular/core';
import { from } from 'rxjs';
import { Form, FormControl, MaxLengthValidator, NgForm, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
 



 constructor(private service:ApiserviceService){}



 confmsg:any;
 nonconf:any
 confmsgshow = true;
 nonconfdd = false;




 ngOnInit(): void {
   
 }

 userForm = new FormGroup({

  'name': new FormControl('',Validators.required),
  'email': new FormControl('',Validators.required),
  'text': new FormControl('',Validators.required)

});



    onSubmit()
    {
      if(this.userForm.valid)
      {
        console.log(this.userForm.value);
       this.confmsgshow=true;
       this.confmsg = 'inviato';
       this.service.createData(this.userForm.value).subscribe((res)=>{
       console.log(res,'res==>');});
       this.userForm.reset()
     
       
      }
      else
      {
        this.nonconfdd=false;
       this.nonconf = 'non inviato';
  
      }

  
   }
}





