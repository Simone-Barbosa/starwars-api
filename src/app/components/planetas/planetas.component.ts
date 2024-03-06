// planetas.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss'],
})
export class PlanetasComponent {
  photoPlanet: string =
    'https://th.bing.com/th/id/OIP.NvotKX8h_DvV55VNZcv0-wAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7';

  @Input()
  planeta: any | null = null;

  fecharPlaneta() {
    this.planeta = null;
  }
}
