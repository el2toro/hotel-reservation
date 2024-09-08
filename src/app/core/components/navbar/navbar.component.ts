import { Component, inject, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showDialog = false;
  readonly animal: any // signal('');
  readonly name: any //model('');
  readonly dialog = inject(MatDialog);
  
  constructor(private router: Router
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToTours() {
    this.router.navigate(['/tours']);
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  goToContacts() {
    this.router.navigate(['/contact']);
  }

  login(){
   this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      //data: {name: this.name(), animal: this.animal()},
      panelClass: 'dialog-custom-panel'
    });

    dialogRef.afterClosed().subscribe(( )=> {
      console.log('The dialog was closed');
      // if (1 !== undefined) {
      //   this.animal.set(1);
      // }
    });
  }
}
