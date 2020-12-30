import { Component, VERSION, OnInit } from "@angular/core";
import { of, from } from "rxjs";
import { map } from "rxjs/operators";
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
        map(item => item + "!"),
        map(item => item.toUpperCase())
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

    from([1, 2, 3, 4, 5])
      .pipe(
        map(item => item * 2),
        map(item => item - 2)
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
  }
}
