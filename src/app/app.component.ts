import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApplicationConfig } from './conf/config';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private titleService: Title
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + ' : ' + ApplicationConfig.appTitle);
  }
}
