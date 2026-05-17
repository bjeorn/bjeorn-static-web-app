import { Component, inject } from '@angular/core';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { IconService } from './util/service/icons/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [SocialMediaComponent]
})
export class AppComponent {
  private iconService = inject(IconService);

  constructor() {
    this.iconService.registerIcons();
  }
}
