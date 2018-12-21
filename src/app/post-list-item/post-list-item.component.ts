import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() loveIts: number;
  @Input() postContent: string;
  @Input() postCreated: Date;

  constructor() { }

  ngOnInit() {
  }

  getColorTitle() {
    if(this.loveIts < 0){
      return 'red';
    } else if(this.loveIts > 0){
      return 'green';
    } else {
      return 'black';
    }
  }

  updatePostCreated(){
    this.postCreated = new Date();
  }

  getColorContent() {
    if(this.loveIts < 0){
      return '#FF2233';
    } else if(this.loveIts > 0){
      return 'green';
    } else {
      return 'black';
    }
  }

  getLoveIts(){
    this.loveIts;
  }

  setLoveIts(loveIts){
    this.loveIts += loveIts;
  }

  getPostTitle() {
    return this.postTitle;
  }

  getPostContent() {
    return this.postContent;
  }

  getPostCreated(){
    return new Date(this.postCreated);
  }

}
