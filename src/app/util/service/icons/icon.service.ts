import { Injectable, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Icons } from "./icons.enum";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);


  registerIcons(): void {
    this.load(Icons, 'assets/icons');
  }

  private load(icons: typeof Icons, url: string): void {
    (Object.keys(icons) as (keyof typeof Icons)[]).forEach(key => {
      this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${icons[key]}.svg`));
    });
  }
}

