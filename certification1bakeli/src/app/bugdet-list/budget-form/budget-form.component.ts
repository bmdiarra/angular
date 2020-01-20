import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {

  budgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private budgetsService: BudgetService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.budgetForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      montant: '',
      description:''
    });
  }
  
  onSaveBudget() {
    const date = this.budgetForm.get('date').value;
    const type = this.budgetForm.get('type').value;
    const montant = this.budgetForm.get('montant').value;
    const description = this.budgetForm.get('description').value;
    const newBudget = new Budget(date, type, montant, description);
    console.log(newBudget);
    this.budgetsService.createNewBudget(newBudget);
    this.router.navigate(['/budgets']);
  }
}

