import { Component } from '@angular/core';

@Component({
  selector: 'app-company-policy',
  templateUrl: './company-policy.component.html',
  styleUrls: ['./company-policy.component.css']
})
export class CompanyPolicyComponent {

  viewPolicy(policy: string): void {
    
    alert(`You selected: ${policy}`);
    
  }

}
