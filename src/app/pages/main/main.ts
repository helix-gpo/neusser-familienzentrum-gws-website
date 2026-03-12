import { Component, inject, signal } from '@angular/core';
import { Icon } from '../../util/icon/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Icon, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  private router: Router = inject(Router);

  showToast = signal(false);

  scrollToElementByButton(elementId: string) {
    const currentUrl = this.router.url;
    if (currentUrl !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToElement(elementId), 100);
      });
    } else {
      this.scrollToElement(elementId);
    }
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  routing(url: string) {
    this.router.navigate([url]).then(() => {
      this.scrollToElement('header');
    });
  }

  handleProjekteClick() {
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
    }, 3500);
  }

  handleContactClick() {
    window.location.href = 'mailto:info@neusser-familienzentrum.de'; // todo: email changen
  }
}
