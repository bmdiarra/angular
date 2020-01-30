import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  //PostsSubject = new Subject<any[]>();
   
    //x1=0;
  /*  x2=0 ;
    x3=0;
*/
posts: any[];


    Posts = [
        {
          id:0 ,
          title: "Mon premier post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          loveIts: 10
        },{
          id:1 ,
          title: "Mon deuxieme post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          loveIts: 2
        },{
          id:2 ,
          title: "Autre post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          loveIts: -3
        }
      ];

      emitPostSubject() {
     //   this.PostsSubject.next(this.Posts.slice());
      }

    onLoveit(i: number) {
        this.Posts[i].loveIts = this.Posts[i].loveIts + 1;
    }
    
    offLoveit(i: number) {
        this.Posts[i].loveIts = this.Posts[i].loveIts - 1;
    }

    addPost(name: string, post: string) {
      const postObject = {
        id: 0,
        title: '',
        content: '',
        loveIts:0
      };
      postObject.title = name;
      postObject.content = post;
      postObject.id = this.Posts[(this.Posts.length - 1)].id + 1;
      this.Posts.push(postObject);
      this.emitPostSubject();
  }

  modifiePost(name: string, post: string, i: number){
   /* const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts:0
    };*/
    
     this.Posts[i].title = name;
      this.Posts[i].content = post;
      this.Posts[i].id = i;
     // this.Posts.push(this.Posts);
      //this.emitPostSubject();
  }


  removePost( posts) {
    
    const postIndexToRemove = this.Posts.findIndex(
      (postEl) => {
        if(postEl === posts) {
          return true;
        }
      }
    );
    this.Posts.splice(postIndexToRemove, 1);
    //this.savePosts();
    //this.emitPosts();
  }


}