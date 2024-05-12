import { NgModule } from "@angular/core";
// import { LoginComponent } from "./login/login.component";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./services/auth/login.service";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
    ],
    providers: [
        LoginService,
    ],
    bootstrap: []
}) 

export class AppModule { }