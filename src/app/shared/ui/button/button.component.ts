import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() fontSize: string = '1em';
  @Output() onClick = new EventEmitter();

  constructor() {}

  btnOnClick() {
    this.onClick.emit();
  }
}
