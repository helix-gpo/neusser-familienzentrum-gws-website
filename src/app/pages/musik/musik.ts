import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';

@Component({
  selector: 'app-musik',
  imports: [Icon],
  templateUrl: './musik.html',
  styleUrl: './musik.scss',
})
export class Musik {
  handleContactClick() {
    window.location.href = 'mailto:gws.familienzentrum@yahoo.com';
  }
}
