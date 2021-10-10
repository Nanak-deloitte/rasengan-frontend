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
    isAdmin: boolean = false;

    ngOnInit(): void {
        this.auth.isLoggedIn().subscribe((data) => {
            this.isLoggedIn = data;
            this.isAdmin = this.auth.isAdmin();
        });

        this.auth.checkLogin();
    }
    logout() {
        this.auth.logout();
    }
}
