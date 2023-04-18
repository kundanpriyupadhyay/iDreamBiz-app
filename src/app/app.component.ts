import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iDreamBiz-app';
  datalist:any;
constructor(private api: ApiService, private http: HttpClient){

}
  ngOnInit(): void {
    this.api.getAll().subscribe(res   => {
      this.datalist = res.data;
      console.log(this.datalist);
    });

  }

}

