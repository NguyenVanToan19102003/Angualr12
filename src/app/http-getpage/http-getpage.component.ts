import { Component } from '@angular/core';
import { HttpGetServiceService } from '../Services/http-get-service.service';


@Component({
  selector: 'app-http-getpage',
  templateUrl: './http-getpage.component.html',
  styleUrls: ['./http-getpage.component.scss']
})
export class HttpGetpageComponent {

  constructor(private httpgetService : HttpGetServiceService){

  }

  public ngOnInit(): void {
    this.httpgetService.getcomment().subscribe(data => {
      console.log('getDataComment :',data);
    });

    this.httpgetService.getRamdomcomment(5).subscribe(data => {
      console.log('getDataRandom :',data.results);
    })


  }


}
