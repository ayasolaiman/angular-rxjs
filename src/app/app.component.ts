import { Component, VERSION, OnInit } from "@angular/core";
import { of, from } from "rxjs";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  ngOnInit() {
    of("World", "Hello").subscribe(
      item => {
        console.log("emitting item:", item);
      },
      err => {
        console.log("error occurred:", err);
      },
      () => console.log("complete")
    );

    from([1, 2, 3, 4, 5]).subscribe(
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
