import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public name ='';
  public age = 12;
  constructor(private common : CommonService){}

  public submitForm():void{
    // console.log('Submit form : name =', this.name);
    this.common.submitData({Name : this.name, Age : this.age});

  }
}
