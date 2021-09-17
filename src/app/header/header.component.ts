import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  edad: number;

  constructor() {
    this.edad = 18;
   }

  ngOnInit(): void {
  }

  aumentar(){
    this.edad++;
  }

  disminuir (){
    this.edad--;
  }

}
