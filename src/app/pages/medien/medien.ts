import { Component } from '@angular/core';
import { Icon } from '../../util/icon/icon';

@Component({
  selector: 'app-medien',
  imports: [Icon],
  templateUrl: './medien.html',
  styleUrl: './medien.scss',
})
export class Medien {
  handleContactClick() {
    window.location.href = 'mailto:info@neusser-familienzentrum.de'; // todo: email changen!
  }
}
