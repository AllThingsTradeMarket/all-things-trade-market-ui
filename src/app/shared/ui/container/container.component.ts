import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() text!: string;
  @Input() fontSize: string = '1em';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter();

  constructor() {}

  btnOnClick() {
    this.onClick.emit();
  }
}
