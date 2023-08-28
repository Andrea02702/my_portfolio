import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpEvent,HttpResponse } from '@angular/common/http';
import { ApiserviceService  } from 'src/app/apiservice.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-post-img',
  templateUrl: './post-img.component.html',
  styleUrls: ['./post-img.component.css']
})
export class PostImgComponent implements OnInit {

  
 name:string=""
 file:any;

  constructor(private http:HttpClient, private service:ApiserviceService){}

  ngOnInit(): void {}


  uploadFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
  
    this.service.postImg(formData).subscribe((res)=>{
      console.log(res,'res==>');});
      
    
  }
  

}



  
 




