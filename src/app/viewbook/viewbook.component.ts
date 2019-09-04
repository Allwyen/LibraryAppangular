import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {


  mydata:Array<object>=[];

  constructor(private apiservice:ApiService,private router:Router) { }

  booksingle(bookid)
  {
    var bid = bookid;
    localStorage.setItem('bookid',bid);
    this.router.navigateByUrl('/booksingle');
  }

  ngOnInit() {
    this.apiservice.viewbookdata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
