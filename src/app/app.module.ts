import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";

import { PagesModule } from "./pages/pages.module";

import { StorageServiceModule } from "ngx-webstorage-service";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { SectiondetailsComponent } from './components/sectiondetails/sectiondetails.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    // MemberComponent,
    // ContactUsComponent,
    // FooterComponent,
    // SectiondetailsComponent,
    // IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        // BsDropdownModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        // TabsModule.forRoot(),
        PagesModule,
        StorageServiceModule,
        NgxSpinnerModule
        // PaginationModule.forRoot(),
        // AlertModule.forRoot(),
        // BsDatepickerModule.forRoot(),
        // CarouselModule.forRoot(),
        // ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
