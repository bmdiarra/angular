import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Budget } from '../models/budget.model';
import { Monbudget } from '../models/monbudget.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BudgetService {

  budgets: Budget[] = [];
  monbudget: Monbudget[] = [];
  budgetsSubject = new Subject<Budget[]>();
  monbudgetsSubject = new Subject<Monbudget[]>();

  constructor() {
    this.getBudgets();
    this.getMonbudget();
    
    }

  emitBudgets() {
    this.budgetsSubject.next(this.budgets);
  }

  emitMonbudget() {
    this.monbudgetsSubject.next(this.monbudget);

  }

  saveBudgets() {
    firebase.database().ref('/budgets').set(this.budgets);
    }

    saveMonbudget() {
      firebase.database().ref('/monbudget').set(this.monbudget);
      }

    getBudgets() {
        firebase.database().ref('/budgets')
          .on('value', (data: DataSnapshot) => {
              this.budgets = data.val() ? data.val() : [];
              this.emitBudgets();
            }
          );
          
      }

      getMonbudget() {
        firebase.database().ref('/monbudget')
          .on('value', (data: DataSnapshot) => {
              this.monbudget = data.val() ? data.val() : [];
              this.emitMonbudget();
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

      createNewMonBudget(newBudget: Monbudget) {
        this.monbudget.push(newBudget);
        this.saveMonbudget();
        this.emitMonbudget();
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