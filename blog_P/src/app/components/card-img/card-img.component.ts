import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit{



  imageUrls: string[] = []; 

  constructor(private http: HttpClient, private service:ApiserviceService) { }

  ngOnInit(): void {
    this.loadImageUrls();
  }

  loadImageUrls(): void {
    
    this.http.get<any>('http://localhost:3000/galleria').subscribe(
      (res) => {
        this.imageUrls = res.imageUrls;
      },
    );
   
  }

 
}
