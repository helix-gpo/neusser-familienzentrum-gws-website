import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Icon } from './util/icon/icon';
import { MatDialog } from '@angular/material/dialog';
import { MenuModal } from './util/menu-modal/menu-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('neusser-familienzentrum-gws-website');

  private dialog: MatDialog = inject(MatDialog);
  private router: Router = inject(Router);

  showSocialToast = signal(false);

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
      this.scrollToElement('penis');
    });
  }

  handleMenuButtonClick() {
    let dialogRef = this.dialog.open(MenuModal, {
      panelClass: 'menu-modal',
    });

    if (dialogRef) {
      dialogRef.afterClosed().subscribe((element) => {
        this.scrollToElementByButton(element);
      });
    }
  }

  handleStiftungLinkClick() {
    window.open('https://gwstiftung.de/', '_blank');
  }

  handleSocialClick() {
    this.showSocialToast.set(true);
    setTimeout(() => {
      this.showSocialToast.set(false);
    }, 3500);
  }
}
