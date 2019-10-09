import { Component } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  ngOnInit() {
    of(2,4,6,8).subscribe(console.log);
  }
}
