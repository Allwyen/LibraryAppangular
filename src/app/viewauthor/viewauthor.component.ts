import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewauthor',
  templateUrl: './viewauthor.component.html',
  styleUrls: ['./viewauthor.component.css']
})
export class ViewauthorComponent implements OnInit {

  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }

  authorsingle(authorid)
  {
    var aid = authorid;
    localStorage.setItem('authorid',aid);
    this.router.navigateByUrl('/authorsingle');
  }

  ngOnInit() {
    this.apiservice.viewauthordata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
