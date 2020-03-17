import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  title = "Hospital List";
  hospitalList = [
    {
      idHospital: 1,
      nameHospital: 'Dong Phuong Hospital',
      imgHospital: 'https://benhvienphuongdong.vn/wp-content/uploads/2019/02/TRB_0811-e1555501290280.jpg',
      nameManager: 'Duy Khanh',
      address:'Quang Ngai',
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
    },
    {
      idHospital: 2,
      nameHospital: 'Healthy Life Hospital',
      imgHospital: 'https://znews-gif.zadn.vn/Uploaded/mtfuc/2014_09_23/trung_tam_1_QGSDgif.gif',
      nameManager: 'Tuan Kiet',
      address:'Malibu',
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
    },
    {
      idHospital: 3,
      nameHospital: 'Facial jaw correction',
      imgHospital: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3a19hlhx9RhFcRyHHFanJxXEtEXB2pKrgKYVoq5H-uxhifqjO',
      nameManager: 'Minh Khương',
      address:'Son Tay',
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
    },
    {
      idHospital: 4,
      nameHospital: '108 Hosptital',
      imgHospital: 'https://znews-photo.zadn.vn/Uploaded/ayhunwx/2018_12_16/benh_vien_108_zing_11.jpg',
      nameManager: 'Minh Tuan',
      address:'Phu Tho',
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
    }
  ];

  customerHospital = {
      idHospital: null,
      nameHospital: null,
      imgHospital: null,
      nameManager: null,
      address:null,
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
  }

  saveHospital(){
    if(this.customerHospital.idHospital == null){
      // 1. tìm đc cái id lớn nhất trong mảng hospitalList
      let maxId = 0;
      this.hospitalList.forEach(function(item){
        if(item.idHospital >= maxId){
          maxId = item.idHospital;
        }
      });
      // 2. gán lại giá trị của customerHospital.idHospital = giá trị lớn nhất+ 1 
      this.customerHospital.idHospital = ++maxId;
      // 3. push customerHospital vào trong hospitalList
      this.hospitalList.push(this.customerHospital);
    }
    
    // 4. Trả lại giá trị gốc cho customerHospital
    this.cancel();
  }

  cancel(){
    this.customerHospital = {
      idHospital: null,
      nameHospital: null,
      imgHospital: null,
      nameManager: null,
      address:null,
      numberOfInfections:0,
      numberOfCases:0,
      numberOfDeaths:0
    }
  }

  removeHospital(hospital){
    this.hospitalList = this.hospitalList.filter(function(item){
      return item != hospital;
    });
  }

  editHospital(hospital){
    this.customerHospital = hospital;
  }
  constructor() { }

  ngOnInit(): void {
  }

}