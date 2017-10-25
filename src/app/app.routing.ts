import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifySessionGuard } from './verify-session.guard';
import { RouteGuard } from './route.guard';

// Componentes
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TestdetailComponent } from './testdetail/testdetail.component';

const appRoutes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent,canActivate: [VerifySessionGuard]},
  {path: 'register', component: RegisterComponent,canActivate: [VerifySessionGuard]},
  {path: 'test', component: TestComponent},
  {path: 'test/:id', component: TestdetailComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
