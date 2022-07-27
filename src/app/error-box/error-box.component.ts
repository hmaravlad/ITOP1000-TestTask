import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.css'],
})
export default class ErrorBoxComponent {
  @Output() retry = new EventEmitter();

  emitRetry() {
    this.retry.emit();
  }
}
