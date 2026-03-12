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
    window.location.href = 'mailto:info@neusser-familienzentrum.de'; // todo: email changen!
  }
}
