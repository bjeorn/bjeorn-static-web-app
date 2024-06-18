import { Component } from '@angular/core';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { IconService } from './util/service/icons/icon.service';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
SocialMediaComponent, FooterComponent]
})
export class AppComponent {
  constructor(private iconService: IconService, private http: HttpClient) {
    this.iconService.registerIcons();
  }
}
