import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Monbudget } from './../models/monbudget.model';
import { Subscription } from 'rxjs/Subscription';
import { BudgetService } from './../services/budget.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
  selector: 'app-monbudget',
  templateUrl: './monbudget.component.html',
  styleUrls: ['./monbudget.component.scss']
})
export class MonbudgetComponent implements OnInit {

  monbudgetForm: FormGroup;
  monbudgetSubscription: Subscription;
  monbudget : Monbudget[] = [];
  //@Input() b: number;

  constructor(private formBuilder: FormBuilder, private budgetsService: BudgetService,
              private router: Router) { }

ngOnInit() {
  this.initForm();
  this.monbudgetSubscription = this.budgetsService.monbudgetsSubject.subscribe(
    (monbudget: Monbudget[]) => {
      this.monbudget = monbudget;
    }
  );

  this.budgetsService.emitMonbudget();
}



initForm() {
  this.monbudgetForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    montant: ['', Validators.required],
    email: ['', Validators.required]
  });

  
}

onSaveMonbudget() {
  const nom = this.monbudgetForm.get('nom').value;
  const prenom = this.monbudgetForm.get('prenom').value;
  const montant = this.monbudgetForm.get('montant').value;
  const email = this.monbudgetForm.get('email').value;
  
  const newBudget = new Monbudget(nom, prenom, montant, email);
  
  this.budgetsService.createNewMonBudget(newBudget);
  
  this.router.navigate(['/monbudget']);


}





/*getBudgets() {
  firebase.database().ref('/monbudget')
    .on('value', (data: DataSnapshot) => {
        this.monbudget = data.val() ? data.val() : [];
        this.budgetsService.emitMonbudget();
      }
    );
}*/


ngOnDestroy() {
  this.monbudgetSubscription.unsubscribe();
}


  

}
