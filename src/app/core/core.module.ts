import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ShellComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }