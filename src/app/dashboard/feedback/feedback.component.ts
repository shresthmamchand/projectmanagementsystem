import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  feedbackSubmitted: boolean = false; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.feedbackForm = this.fb.group({
      feedback: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get feedbackControl() {
    return this.feedbackForm.get('feedback');
  }

  submitFeedback(): void {
    if (this.feedbackForm.valid) {
      
      console.log('Feedback submitted:', this.feedbackForm.value);

      
      this.feedbackForm.reset();

      
      this.feedbackSubmitted = true;

      
      setTimeout(() => {
        this.feedbackSubmitted = false;
      }, 3000);
    }
  }
}
