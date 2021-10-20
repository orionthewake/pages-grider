import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY=',
    },
    {
      title: 'At the City',
      url: 'https://media.istockphoto.com/photos/tokyo-cityscape-aerial-view-picture-id1278304139?b=1&k=20&m=1278304139&s=170667a&w=0&h=Zj3AqlA67R9saNsuJGXHuj6ROqSn0gc_mtiVbd5BBAo=',
    },
    {
      title: 'At the Snow',
      url: 'https://media.istockphoto.com/photos/christmas-snow-background-with-snow-drifts-and-snowcovered-blur-picture-id1281448663?b=1&k=20&m=1281448663&s=170667a&w=0&h=zy-4qIcna_HqubyST-uiH4GnbxcBXz9TrqviZwbHcDw=',
    },
  ];
}
