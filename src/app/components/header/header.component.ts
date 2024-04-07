import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscribable, Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ButtonComponent, CommonModule],
})
export class HeaderComponent {
  title: string;
  showAddTask: boolean;
  subscripton: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.title = 'Task Tracker';
    this.showAddTask = false;
    this.subscripton = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    console.log('Toggle called from the child component (button)...');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
