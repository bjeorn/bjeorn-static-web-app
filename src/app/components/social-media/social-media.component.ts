import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'bjeorn-app-social-media',
    imports: [MatIconModule],
    templateUrl: './social-media.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {}
