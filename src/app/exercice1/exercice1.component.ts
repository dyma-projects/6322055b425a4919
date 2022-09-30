import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  constructor() {}

  public titre: string = "Mon 1er exercice";

  public numberOfLike: number = 0;

  public isSubmit: string = "cliquez pour liker";

  public addLike() {
    // incrémentation de +1 du nombre de like
    this.numberOfLike++;
  }

  ngOnInit(): void {}
}
