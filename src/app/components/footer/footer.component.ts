import { Component, OnInit } from '@angular/core';
import {faFacebookF, faLinkedin} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin;
  faFacebook = faFacebookF;
  constructor() { }

  ngOnInit(): void {
  }

}
