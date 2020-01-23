import { Component, OnInit, Input, Output } from '@angular/core';
import {PostService} from '../services/post.service';
import { Post } from '../models/post.model';
//export let i: number ;
export const i = 0 ;



@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: any[]; 
  @Input() postName: string ;
  @Input() postContent: string ;
  @Input() postLove: number ;
  @Input() index: number;
  i = this.index;
  
  //@Output()  i = this.index ;  
  Post: any[]; 
  posts: Post[];

  constructor(private postService: PostService) {  }

  console(){
    alert(i); 
  }

  
  
  ngOnInit() {
    this.Post = this.postService.Posts;
  }

  onLoveClick() {
        //this.postLove = this.postLove + 1 ;
      this.postService.onLoveit(this.index);
  }

  offLoveClick() {
    this.postService.offLoveit(this.index);
  }

  
  

  onDeletePost(/*post: Post*/) {
    //console.log(this.post);
    this.postService.removePost(this.post);
  }




}

