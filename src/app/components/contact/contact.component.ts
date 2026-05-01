import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title">Let's Work Together</h2>
        <p class="section-subtitle">Got a project or proposal? I'd love to hear from you.</p>
        
        <div class="contact-wrapper">
          <div class="contact-info">
            <div class="info-item">
              <h4>Email</h4>
              <a href="mailto:gowrij0801&#64;gmail.com">gowrij0801&#64;gmail.com</a>
            </div>
            
            <div class="info-item">
              <h4>Phone</h4>
              <p>+91 6369952485</p>
            </div>
            
            <div class="info-item">
              <h4>Location</h4>
              <p>Bangalore, India</p>
            </div>
            
            <div class="info-item">
              <h4>Social Links</h4>
              <div class="social-links">
                <a href="https://linkedin.com/in/g08/" target="_blank" class="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-group">
              <label>Name</label>
              <input type="text" formControlName="name" required>
              <span class="error" *ngIf="contactForm.get('name')?.hasError('required')">Name is required</span>
            </div>
            
            <div class="form-group">
              <label>Email</label>
              <input type="email" formControlName="email" required>
              <span class="error" *ngIf="contactForm.get('email')?.hasError('email')">Valid email required</span>
            </div>
            
            <div class="form-group">
              <label>Subject</label>
              <input type="text" formControlName="subject" required>
            </div>
            
            <div class="form-group">
              <label>Message</label>
              <textarea formControlName="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">
              Send Message
            </button>
            
            <p class="form-notice" *ngIf="submitMessage">{{ submitMessage }}</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      background: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      text-align: center;
      margin: 0 0 1rem 0;
      color: #333;
    }
    
    .section-subtitle {
      text-align: center;
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }
    
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 10px;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-item h4 {
      margin: 0 0 0.5rem 0;
      color: #4c1d95;
      font-size: 1rem;
      font-weight: 700;
    }
    
    .info-item p, .info-item a {
      margin: 0;
      color: #555;
      line-height: 1.6;
    }
    
    .info-item a {
      color: #4c1d95;
      text-decoration: none;
      font-weight: 500;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .social-link {
      background: white;
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      border: 1px solid #ddd;
      text-decoration: none;
      color: #4c1d95;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .social-link:hover {
      background: #4c1d95;
      color: white;
      border-color: #4c1d95;
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
      font-size: 0.95rem;
    }
    
    .form-group input,
    .form-group textarea {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-family: inherit;
      font-size: 0.95rem;
      transition: border-color 0.3s;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #4c1d95;
      box-shadow: 0 0 0 3px rgba(76, 29, 149, 0.1);
    }
    
    .error {
      color: #e74c3c;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
    
    .btn {
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #4c1d95 0%, #581c87 100%);
      color: white;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(76, 29, 149, 0.4);
    }
    
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .form-notice {
      text-align: center;
      padding: 1rem;
      background: #e8f5e9;
      color: #2e7d32;
      border-radius: 5px;
      margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
      .contact {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitMessage = '';
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      // Here you would typically send the data to a backend API
      console.log('Form submitted:', formData);
      
      // Simulate successful submission
      this.submitMessage = '✓ Message sent! I\'ll get back to you soon.';
      this.contactForm.reset();
      
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }
  }
}
