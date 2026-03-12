import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-modal',
  imports: [],
  templateUrl: './menu-modal.html',
  styleUrl: './menu-modal.scss',
})
export class MenuModal {
  private dialogRef: MatDialogRef<MenuModal> = inject(MatDialogRef);

  closeModal(element: string) {
    this.dialogRef.close(element);
  }
}
