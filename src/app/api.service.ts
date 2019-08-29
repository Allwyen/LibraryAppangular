import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertbookdata(data)
  {
    return this.http.post("https://libraryapp-allwyen.herokuapp.com/addbookAPI",data);
  }
  viewbookdata()
  {
    return this.http.get("https://libraryapp-allwyen.herokuapp.com/bookall");
  }
  insertauthordata(data)
  {
    return this.http.post("https://libraryapp-allwyen.herokuapp.com/addauthorAPI",data);
  }
  viewauthordata()
  {
    return this.http.get("https://libraryapp-allwyen.herokuapp.com/authorall");
  }
  userregisterdata(data)
  {
    return this.http.post("https://libraryapp-allwyen.herokuapp.com/employeeregister1",data);
  }
  userlogindata(data)
  {
    return this.http.post("https://libraryapp-allwyen.herokuapp.com/employeelogin1",data);
  }

}

