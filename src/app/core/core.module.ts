import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";


@NgModule({
  declarations: [
    ShellComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [],
  providers: [],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }