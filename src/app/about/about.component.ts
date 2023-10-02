import { Component, OnInit } from '@angular/core';
import { HighLightDirective } from '../Directives/high-light.directive';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public loginName = 'user';
    public myColor = 'red';

    constructor(){}

    ngOnInit(): void {}
}
