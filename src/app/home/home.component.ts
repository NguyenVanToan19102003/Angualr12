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
    { name: 'Táo', price: 12, giamGia: false },
    { name: 'Cam', price: 2, giamGia: true },
    { name: 'Ổi', price: -1, giamGia: true }
  ];

  public resetName(): void {
    console.log('resetName123');
    this.name = '';
  }



  public quanHuyens : any[] = ['Chọn quận huyện'];
  public vietnamdata = [
    {thanhPho : 'Chọn thành phố', quanHuyen : ['Chọn quận huyện']},
    {
    thanhPho: 'An Giang', quanHuyen: [
      "Thành phố Long Xuyên",
      "Thành phố Châu Đốc",
      "Thị xã Tân Châu",
      "Huyện An Phú",
      "Huyện Châu Phú",
      "Huyện Châu Thành",
      "Huyện Chợ Mới",
      "Huyện Phú Tân",
      "Huyện Thoại Sơn",
      "Huyện Tịnh Biên",
      "Huyện Tri Tôn"
    ]
  },
  {
    thanhPho: 'Hà Nội', quanHuyen: [
      "Quận Ba Đình",
      "Huyện Ba Vì",
      "Quận Bắc Từ Liêm",
      "Quận Cầu Giấy",
      "Huyện Chương Mỹ",
      "Huyện Đan Phượng",
      "Huyện Đông Anh",
      "Quận Đống Đa",
      "Huyện Gia Lâm",
      "Quận Hà Đông",
      "Quận Hai Bà Trưng",
      "Huyện Hoài Đức",
      "Quận Hoàn Kiếm",
      "Quận Hoàng Mai",
      "Quận Long Biên",
      "Huyện Mê Linh",
      "Huyện Mỹ Đức",
      "Quận Nam Từ Liêm",
      "Huyện Phú Xuyên",
      "Huyện Phúc Thọ",
      "Huyện Quốc Oai",
      "Huyện Sóc Sơn",
      "Thị xã Sơn Tây",
      "Quận Tây Hồ",
      "Huyện Thạch Thất",
      "Huyện Thanh Oai",
      "Huyện Thanh Trì",
      "Quận Thanh Xuân",
      "Huyện Thường Tín",
      "Huyện Ứng Hòa"
    ]
  }
];

  public ngOnInit(): void {
    console.log(' Việt Nam =', this.vietnamdata);
  }

  public changeThanhPho(event : any){
    const tp = event.target.value;
    if(!tp){
      return;
    }
    console.log('event', tp);

    // Cách 1
    // const search = this.vietnamdata.filter( data => data.thanhPho === tp)
    // console.log('search', search);

    // if( search && search.length > 0){
    //   this.quanHuyens = search[0].quanHuyen;
    // }

    // Cách 2
    this.quanHuyens = this.vietnamdata.find( data => data.thanhPho === tp)?.quanHuyen || [];
  }

}

