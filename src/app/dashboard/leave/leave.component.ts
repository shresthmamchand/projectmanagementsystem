import { Component } from '@angular/core';

@Component({
  selector: 'app-leaves',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeavesComponent {
  leaveDetails = { name: '', department: '', reason: '', date: '' };

  
  applyLeave() {
    if (
      this.leaveDetails.name &&
      this.leaveDetails.department &&
      this.leaveDetails.reason &&
      this.leaveDetails.date
    ) {
      alert('Leave Applied Successfully!');
      this.leaveDetails = { name: '', department: '', reason: '', date: '' };
    }
  }
}
