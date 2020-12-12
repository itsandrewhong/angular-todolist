import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Andrew';

  constructor() {
    console.log(123);
    // this.title = "Brad";

    this.changeName("Brad");
  }
  
  changeName(title:string):void {
    this.title = title;
  }

}
