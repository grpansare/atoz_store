import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatLabel, MatOption, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
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
import {MatCardModule} from '@angular/material/card';

import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './homepage/products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductcategoryComponent } from './homepage/productcategory/productcategory.component';
import { FiltersComponent } from './homepage/filters/filters.component';
import { UpdateprofileComponent } from './homepage/updateprofile/updateprofile.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './theme.service';




@NgModule({
  declarations: [
    AppComponent,

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
HttpClientModule,
FormsModule,





  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
