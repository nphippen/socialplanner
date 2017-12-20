import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../@core/auth.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


import { ThemeModule } from '../../@theme/theme.module';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  url: String;
  safePic: SafeStyle;

  constructor(private authService: AuthService,
    private userService: UserService, private domSanitizer: DomSanitizer) {
      this.url = authService.photoURL;
      this.safePic =
      domSanitizer.bypassSecurityTrustStyle('url(' + authService.photoURL + ')');
  }


  ngOnInit() {
  }
}

