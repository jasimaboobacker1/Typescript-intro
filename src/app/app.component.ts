import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'typescript-intro';
  constructor() {
    // const
    const numbers: number[] = [1, 2, 3, 4, 5];
    console.log("Numbers:", numbers);

    numbers[5] = 10; 
    console.log('Updated Numbers:', numbers);

    // let
    let sum: number = 0;

    if (true) {
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      console.log("Sumbefore:", sum);
    } 

    if (true) {
      let sum: number = 10; 
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      console.log("Sumafter:", sum);
    } 

    // var
    function exampleforVar() {
      var message: string = "Hello, world!";
      console.log("Message:", message);
    }
    exampleforVar();
  }
}
