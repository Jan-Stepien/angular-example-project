import { Component, OnInit } from '@angular/core';
import {faFacebookF, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin;
  faFacebook = faFacebookF;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
