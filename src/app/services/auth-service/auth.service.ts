import { IUser } from "./../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable, Subject } from "rxjs";
import { NgxSpinnerService } from "ngx-bootstrap-spinner";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(
        @Inject(SESSION_STORAGE) private storage: StorageService,
        private http: HttpClient,
        private spinner: NgxSpinnerService
    ) {}
    loginURL = "http://localhost:8080/api/user/login";

    private userDetails: IUser;
    loginStatus = new Subject<boolean>();

    private loginAPI(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this.loginURL, {
            email: email,
            password: password,
        });
    }

    login(email: string, password: string) {
        this.spinner.show();
        this.loginAPI(email, password).subscribe((data) => {
            this.userDetails = data;
            console.log(this.userDetails);
            this.storage.set("userId", data.userId);
            this.storage.set("name", data.username);
            this.storage.set("email", data.email);
            this.storage.set("batch", data.batch);
            this.storage.set("team", data.team);
            this.storage.set("admin", data.admin);
            this.storage.set("isSectionLead", data.isSectionLead);
            this.loginStatus.next(true);
            this.spinner.hide();
        });
    }

    logout() {
        this.storage.clear();
        this.loginStatus.next(false);
    }

    getUserId(): string {
        return this.storage.get("userId");
    }

    isAdmin() {
        return this.storage.get("admin");
    }

    isSectionLead() {
        return this.storage.get("isSectionLead");
    }

    getUserDetails() {
        return this.userDetails;
    }

    isLoggedIn(): Observable<boolean> {
        return this.loginStatus.asObservable();
    }

    checkLogin() {
        if (this.storage.get("userId")) {
            this.loginStatus.next(true);
        } else {
            this.loginStatus.next(false);
        }
    }
}
