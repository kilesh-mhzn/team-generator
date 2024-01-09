import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonVariant} from "./button-types.model";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary'
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  buttonVariantMap:Record<ButtonVariant, string> = {
    primary: 'bg-pink-500',
    secondary: 'bg-yellow-500'
  }
}
