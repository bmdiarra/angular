import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { i } from '../post-list-item/post-list-item.component';
import { Post } from '../models/post.model';
import { from } from 'rxjs';
import { viewClassName } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-modifie-post',
  templateUrl: './modifie-post.component.html',
  styleUrls: ['./modifie-post.component.scss']
})
export class ModifiePostComponent implements OnInit {

  post : Post ;

  public index: number;
  
  constructor(private postService: PostService,
    private router: Router, private route:ActivatedRoute) {
      /*this.route.queryParams.subscribe(params => {
        this.index = params['i'];
      });*/
      
     }

  ngOnInit() {

    /*this.route.queryParams.subscribe(params => {
      this.index = +params.get('i');
    });*/
    
    //this.post = new Post('', '');
    //const id = this.route.snapshot.params['i'];
    //this.index = +id;
    this.index = +this.route.snapshot.paramMap.get('index');
    //this.index = +this.route.snapshot.params.index;
    alert(this.index);
  }

  onModifie(form: NgForm) {
    const id = form.value['id'];
    const titre = form.value['titre'];
    const post = form.value['post'];
    
    this.postService.modifiePost(titre, post, id);
    this.router.navigate(['/post']);
  }

}
