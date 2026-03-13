import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';

@Component({
  selector: 'app-digital',
  imports: [Icon],
  templateUrl: './digital.html',
  styleUrl: './digital.scss',
})
export class Digital {
  handleContactClick() {
    window.location.href = 'mailto:gws.familienzentrum@yahoo.com';
  }
}
