import { Component } from '@angular/core';
import { Post } from './model/Post';
import { HackerNewService } from './services/HackerNewsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HackerNewsApp';
  public posts: Array<any> = [];
  filter: string = '';
  page: number = 0;

  constructor(private service: HackerNewService) {
    this.GetList();
  }

  GetList() {
    this.service.GetAllData('reactjs', 1).subscribe((dataFromAPI: any) => {
      this.posts.push(dataFromAPI.hits);
      console.log(dataFromAPI.hits);
    });

    console.log(this.posts);
  }
}
