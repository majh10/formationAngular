import { Component } from '@angular/core';
import {Link} from './models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleApp = 'app works!';
  linksApp: Array<Link> = [
    {path: '', name: 'Home'},
    {path: 'about', name: 'About'}
  ] ;
}
