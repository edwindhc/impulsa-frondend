import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import {LoginService} from './services/login.service'
import {RegisterService} from './services/register.service';
import { TestComponent } from './test/test.component'
import { MaterializeModule } from 'ng2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataFilterPipe } from './data-filter.pipe';

// guard
import { RouteGuard } from './route.guard';
import { VerifySessionGuard } from './verify-session.guard';

// MenuService
import { MenuService } from './services/menu.service';
import { CategoryService } from './services/category.service';
import { TestService } from './services/test.service';
import { QuestionService } from './services/question.service';
import { TestingComponent } from './testing/testing.component';
import { QuestionComponent } from './question/question.component';
import { TestdetailComponent } from './testdetail/testdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    DataFilterPipe,
    TestingComponent,
    QuestionComponent,
    TestdetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserModule,
    HttpModule,
    MaterializeModule.forRoot(),
    DataTableModule,
    NgxPaginationModule
  ],
  providers: [appRoutingProviders,
              LoginService,
              RegisterService,
              RouteGuard,
              VerifySessionGuard,
              MenuService,
              CategoryService,
              TestService,
              QuestionService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
