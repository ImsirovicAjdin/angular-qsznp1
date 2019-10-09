import { Component } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  ngOnInit() {
    of(2,4,6,8).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item... ${item}`),
      err => console.log(`error occured... ${err}`),
      () => console.log(`complete`)
    );

    of('Pineapple', 'Appricot', 'Dragonfruit').subscribe(
      item => console.warn(`${item}`),
      err => console.info(`${err}`),
      () => console.log(`complete`),
    )

  }
}
/*

Task to complete:
Define an observable that emits three strings and subscribe with method for next(), error(), and complete()

*/