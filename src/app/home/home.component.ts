import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public name = 'Toản Nguyễn'
    public age = 18;
    public traiCay = ['Táo', 'Cam', 'Nho', 'Xoài', 'Ổi'];
    public traiCay2 = [
      {name : 'Táo', price : 12 , giamGia : false},
      {name : 'Cam', price : 2 , giamGia : true},
      {name : 'Ổi', price : -1 , giamGia : true}
    ];

    public resetName() :void {
         console.log('resetName123');
         this.name = '';
    }
    public ngOnInit(): void {
      console.log(' trai cay =', this.traiCay);
    }
}

