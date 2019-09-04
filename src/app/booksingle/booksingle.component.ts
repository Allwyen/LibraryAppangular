import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-booksingle',
  templateUrl: './booksingle.component.html',
  styleUrls: ['./booksingle.component.css']
})
export class BooksingleComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  book:Array<object>;
  mydata:Array<object>;
  ngOnInit() {
    const bookid = localStorage.getItem('bookid');

    this.book = [{bookid:bookid}]

    this.apiservice.viewbooksingle(this.book[0]).subscribe((response:any)=>{
      this.mydata=response;
      console.log(this.mydata);
    });
  }


}
