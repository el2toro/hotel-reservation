import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
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