import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'a teacher scolds a person ';
  oddNumbers = [1,3,5,7];
  evenNumbers = [2,4,6,8];
  onlyOdd = false;
}
