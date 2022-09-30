import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exerice3",
  templateUrl: "./exerice3.component.html",
  styleUrls: ["./exerice3.component.css"],
})
export class Exerice3Component implements OnInit {
  constructor() {}

  public status: boolean = true;

  public updatedStatus() {
    this.status = !this.status;
    console.log(this.status);
  }

  ngOnInit(): void {}
}
