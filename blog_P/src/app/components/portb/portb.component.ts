import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portb',
  templateUrl: './portb.component.html',
  styleUrls: ['./portb.component.css']
})
export class PortbComponent implements OnInit {
  readData: any;



  constructor(private service:ApiserviceService, private http:HttpClient){}

  


  ngOnInit(): void {
    this.service.getALLdata().subscribe((res)=>{
      console.log(res,'res=>>');

      this.readData = res.data
     
    });

  }

  deleteID(id:any){

    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'delete data ')

      this.service.getALLdata().subscribe((res)=>{
        console.log(res,'res=>>');
  
        this.readData = res.data
       
      });
  

      
    });
  }


}
