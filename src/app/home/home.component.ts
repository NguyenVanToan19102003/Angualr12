import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public name = 'Toản Nguyễn'
    public age = 18;

    public resetName() :void {
         console.log('resetName123');
         this.name = '';
    }
}
