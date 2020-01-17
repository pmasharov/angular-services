import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {
  @Input() curForm: Object = {}
  @Input() curFormIndex: number = null

  constructor() { }

  ngOnInit() {
  }

}
