import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewauthor',
  templateUrl: './viewauthor.component.html',
  styleUrls: ['./viewauthor.component.css']
})
export class ViewauthorComponent implements OnInit {

  mydata:Array<object>=[];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.viewauthordata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
