import { Component, inject } from '@angular/core';

import { ToastService } from '../../state/toast/toast.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgStyle],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  toast = inject(ToastService);

}
