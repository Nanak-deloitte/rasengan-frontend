import { IUser } from "./../../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable } from "rxjs";
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
    
    

    private loginAPI(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this.loginURL, {
            email:email,
            password:password,
        });
    }

    login(email: string, password: string) {
        this.spinner.show();
        this.loginAPI(email, password).subscribe((data) => {
            this.userDetails = data;
            this.storage.set("userId", data.userId);
            this.storage.set("name", data.name);
            this.storage.set("email", data.email);
            this.storage.set("batch", data.batch);
            this.storage.set("team", data.team);
            this.storage.set("admin", data.admin);
            this.storage.set("isSectionLead", data.isSectionLead);
            this.spinner.hide();
        });
    }

    logout() {
        this.storage.clear();
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

    isLoggedIn(): boolean {
        return this.getUserId() != null;
    }
}
