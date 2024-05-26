import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    MatIconModule,
    RouterModule
  ],
  providers: [],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }