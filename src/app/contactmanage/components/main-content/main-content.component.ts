import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
    // ../../../../assets/
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id) id = 1;
      this.user = null;

      this.service.users.subscribe(users => {
        if (users.length == 0) return;

        setTimeout(() => {
          this.user = this.service.userById(id);
        }, 500)
      });
    });
  }
}
