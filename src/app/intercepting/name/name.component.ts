import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  private $name = "";
  @Input() set name(name: string) {
    this.$name = "Your name: " + (name.trim().toUpperCase() || '<name empty>');
  }

  get name(): string {
    return this.$name;
  }

  constructor() { }

  ngOnInit() {
  }

}
