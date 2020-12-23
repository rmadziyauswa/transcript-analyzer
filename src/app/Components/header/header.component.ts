import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() headerText = "TRANSCRIPT ANALYZER";
  @Input() imageSource = "../../../assets/images/Ellipse1.png";
}
