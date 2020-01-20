import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BugdetListComponent } from './bugdet-list/bugdet-list.component';
import { BudgetFormComponent } from './bugdet-list/budget-form/budget-form.component';
import { SingleBudgetComponent } from './bugdet-list/single-budget/single-budget.component';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BudgetService } from './services/budget.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MonbudgetComponent } from './monbudget/monbudget.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'budgets',canActivate: [AuthGuardService], component: BugdetListComponent },
  { path: 'monbudget',canActivate: [AuthGuardService], component: MonbudgetComponent },
  { path: 'budgets/new', canActivate: [AuthGuardService], component: BudgetFormComponent },
  { path: 'budgets/view/:id', canActivate: [AuthGuardService], component: SingleBudgetComponent },
  { path: '', redirectTo: 'budgets', pathMatch: 'full' },
  { path: '**', redirectTo: 'budgets' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BugdetListComponent,
    BudgetFormComponent,
    SingleBudgetComponent,
    HeaderComponent,
    MonbudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
