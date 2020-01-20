import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Budget } from '../models/budget.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BudgetService {

  budgets: Budget[] = [];
  budgetsSubject = new Subject<Budget[]>();

  constructor() {
    this.getBudgets();
    }

  emitBudgets() {
    this.budgetsSubject.next(this.budgets);
  }

  saveBudgets() {
    firebase.database().ref('/budgets').set(this.budgets);
    }

    getBudgets() {
        firebase.database().ref('/budgets')
          .on('value', (data: DataSnapshot) => {
              this.budgets = data.val() ? data.val() : [];
              this.emitBudgets();
            }
          );
      }
    
      getSingleBook(id: number) {
        return new Promise(
          (resolve, reject) => {
            firebase.database().ref('/budgets/' + id).once('value').then(
              (data: DataSnapshot) => {
                resolve(data.val());
              }, (error) => {
                reject(error);
              }
            );
          }
        );
      }


      createNewBudget(newBudget: Budget) {
        this.budgets.push(newBudget);
        this.saveBudgets();
        this.emitBudgets();
      }
    
      removeBook(budget: Budget) {
        const budgetIndexToRemove = this.budgets.findIndex(
          (budgetEl) => {
            if(budgetEl === budget) {
              return true;
            }
          }
        );
        this.budgets.splice(budgetIndexToRemove, 1);
        this.saveBudgets();
        this.emitBudgets();
      }

}