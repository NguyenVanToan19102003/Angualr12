import { Component, OnInit } from '@angular/core';
import { HttpGetServiceService } from '../Services/http-get-service.service';

@Component({
  selector: 'app-httppost',
  templateUrl: './httppost.component.html',
  styleUrls: ['./httppost.component.scss']
})
export class HttppostComponent implements OnInit{

  constructor(private httppost : HttpGetServiceService){

  }
  ngOnInit(): void {
    const payload =  {"body" :"8 múi", "postId" : 4};
    this.httppost.postcomment(payload).subscribe(data => {
      console.log('Post data :', data);
    });
  }

}
