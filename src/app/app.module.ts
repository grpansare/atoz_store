import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomepageComponent } from './WelcomePage/welcomepage.component';
import { SigninComponent } from './SignIn/signin.component';
import { LoginComponent } from './Login/login.component';

import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatOption, MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { FiltersComponent } from './homepage/filters/filters.component';
import { ProductcategoryComponent } from './homepage/productcategory/productcategory.component';
import { ProductsComponent } from './homepage/products/products.component';
import { UpdateprofileComponent } from './homepage/updateprofile/updateprofile.component';
import { ProfileComponent } from './profile/profile.component';



import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MAT_NAV_LIST, MatListModule, MatNavList } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";


import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './theme.service';



@NgModule({
  declarations: [
    AppComponent,
   
    WelcomepageComponent,
    SigninComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    CategoriesComponent,
    FiltersComponent,
    ProductcategoryComponent,
    ProductsComponent,
    UpdateprofileComponent,
    ProfileComponent,

    HomepageComponent,
   CategoriesComponent,
   ProductsComponent,
   ProfileComponent,
   ProductcategoryComponent,
   FiltersComponent,
   UpdateprofileComponent,
   ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
   MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,


    MdbAccordionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatLabel,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,




MatOption,
MdbAccordionModule,
MdbCarouselModule,
MdbCheckboxModule,
MdbCollapseModule,
MdbDropdownModule,
MdbFormsModule,
MdbModalModule,
MdbPopoverModule,
MdbRadioModule,
MdbRangeModule,
MdbRippleModule,
MdbScrollspyModule,
MdbTabsModule,
MdbTooltipModule,

MdbValidationModule,
MdbValidationModule,
HttpClientModule,
FormsModule,





  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
