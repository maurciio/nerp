import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { ChatComponent } from "../chat/chat.component";
import { ChartComponent } from '../chart/chart.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationComponent, ChatComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
