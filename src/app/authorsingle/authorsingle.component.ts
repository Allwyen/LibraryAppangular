import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-authorsingle',
  templateUrl: './authorsingle.component.html',
  styleUrls: ['./authorsingle.component.css']
})
export class AuthorsingleComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  author:Array<object>;
  mydata:Array<object>;
  ngOnInit() {
    const authorid = localStorage.getItem('authorid');

    this.author = [{authorid:authorid}]

    this.apiservice.viewauthorsingle(this.author[0]).subscribe((response:any)=>{
      this.mydata=[response];
      console.log(this.mydata);
    });
  }

}
