import { Component, OnDestroy, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bugdet-list',
  templateUrl: './bugdet-list.component.html',
  styleUrls: ['./bugdet-list.component.scss']
})
export class BugdetListComponent implements OnInit, OnDestroy {

  budgets: Budget[];
  budgetsSubscription: Subscription;

  constructor(private budgetsService: BudgetService, private router: Router) {}

  ngOnInit() {
    this.budgetsSubscription = this.budgetsService.budgetsSubject.subscribe(
      (budgets: Budget[]) => {
        this.budgets = budgets;
      }
    );
    this.budgetsService.emitBudgets();
  }

  onNewBudget() {
    this.router.navigate(['/budgets', 'new']);
  }

  onDeleteBudget(book: Budget) {
    this.budgetsService.removeBook(book);
  }

  onViewBudget(id: number) {
    this.router.navigate(['/budgets', 'view', id]);
  }
  
  ngOnDestroy() {
    this.budgetsSubscription.unsubscribe();
  }
}