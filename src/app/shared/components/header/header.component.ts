import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  ngOnInit(): void {
  }

  [x: string]: any;
  lang: string = sessionStorage.getItem('X-Localization') || 'en';

  constructor(private translate: TranslateService,private renderer: Renderer2) {
    this.switchPagesDirection(this.lang);

  }
  switchLanguage(lang: string) {
    sessionStorage.setItem('X-Localization', lang);
    this.translate.use(lang);
    this.switchPagesDirection(lang);
    window.location.reload();
  }
  switchPagesDirection(lang: any) {
    if (lang == 'en'){
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
     }
    else if (lang == 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    }
  }

}
