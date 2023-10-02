import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})


export class ReactiveformComponent {

  public formData : FormGroup  = new FormGroup({
      name : new FormControl(''),
      age : new FormControl()
  });

  public formData2 = this.formbiulder.group({
    name : ['', Validators.required],
    age : [ , Validators.required]

  });

  constructor(private comon : CommonService , private formbiulder : FormBuilder){}

  ngOnInit(): void {
  }

  onsubmit():void{
    // console.log('Submit form : name =', this.formData.value);
    this.comon.submitData(this.formData2.value)

  }
}
