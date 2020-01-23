import { Component, OnInit } from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  /*post: {  
    title: string,  
    content: string,  
    loveIts: number,  
    created_at: Date
  }*/ 

  Posts : any [
    /*{
      id:0 ,
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      loveIts: 1
    },{
      id:1 ,
      title: "Mon deuxieme post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      loveIts: -1
    },{
      id:2 ,
      title: "Autre post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      loveIts: 0
    }*/
  ];

  constructor(private postService: PostService){}

  ngOnInit() {
    this.Posts = this.postService.Posts;
  }



}
