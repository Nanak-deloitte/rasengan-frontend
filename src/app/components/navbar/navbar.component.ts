import { AuthService } from "./../../services/auth-service/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    isLoggedIn = false;
    constructor(private auth: AuthService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.auth.isLoggedIn();
    }
}
