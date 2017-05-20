import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() links: Array<Link>;

  constructor() { }

  ngOnInit() {
  }

}
