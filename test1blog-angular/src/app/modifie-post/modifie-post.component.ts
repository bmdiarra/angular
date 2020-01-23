import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { i } from '../post-list-item/post-list-item.component';

import { from } from 'rxjs';
import { viewClassName } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-modifie-post',
  templateUrl: './modifie-post.component.html',
  styleUrls: ['./modifie-post.component.scss']
})
export class ModifiePostComponent implements OnInit {

  //@Input() index: number;
  
  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
  }

  onModifie(form: NgForm) {
    
    const titre = form.value['titre'];
    const post = form.value['post'];
    
    this.postService.modifiePost(titre, post, i);
    this.router.navigate(['/post']);
  }

}
