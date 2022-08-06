import { Component } from '@angular/core';
import { Post } from './model/Post';
import { HackerNewService } from './services/HackerNewsService';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
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
  selectedFramework: string = 'angular';

  framework = [
    { id: 'reactjs', name: 'ReactJs', img: '../assets/images/react.png' },
    { id: 'angular', name: 'Angular', img: '../assets/images/angular.png' },
    { id: 'vuejs', name: 'VueJs', img: '../assets/images/vuejs.png' },
  ];
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
