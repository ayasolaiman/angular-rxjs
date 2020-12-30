import { Component, VERSION, OnInit } from "@angular/core";
import { of, from } from "rxjs";
import { map, take, tap } from "rxjs/operators";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  ngOnInit() {
    of("World", "Hello")
      .pipe(
        tap(item => console.log(item)),
        map(item => item + "!"),
        tap(item => console.log(item)),
        map(item => item.toUpperCase()),
        tap(item => console.log(item))
      )
      .subscribe(
        item => {
          console.log("emitting item:", item);
        },
        err => {
          console.log("error occurred:", err);
        },
        () => console.log("complete")
      );

    from([2, 1, 3, 4, 5])
      .pipe(
        tap(item => console.log("emitted item: ", item)),
        take(1),
        map(item => item * 2),
        tap(item => console.log(item)),
        map(item => item - 2),
        map(item => {
          if (item === 0) {
            throw new Error("Zero Detected!");
          }
          return item;
        })
      )
      .subscribe(
        item => {
          console.log("resulting item:", item);
        },
        err => {
          console.log("error occurred:", err);
        },
        () => console.log("complete")
      );
  }
}
