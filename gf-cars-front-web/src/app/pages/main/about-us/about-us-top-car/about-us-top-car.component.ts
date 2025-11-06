import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-top-car',
  templateUrl: './about-us-top-car.component.html',
  styleUrls: ['./about-us-top-car.component.scss']
})
export class AboutUsTopCarComponent {
  openIndex: number = 0; // First item is open by default

  toggleAccordion(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = -1; // Close if already open
    } else {
      this.openIndex = index; // Open the clicked item
    }
  }
}
