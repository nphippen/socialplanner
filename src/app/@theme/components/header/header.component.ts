import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthService } from '../../../@core/auth.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';

  userMenu = [{ title: 'Profile', link: 'profile' }, { title: 'Log out', link: 'logout()' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private authService: AuthService,
    private userService: UserService,
    private analyticsService: AnalyticsService) {
  }


  ngOnInit() {
  }

  logOut(): void{
    this.authService.logOut;
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
