import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2024 Gowri Jothibasu. All rights reserved.</p>
          <p>Built with <span class="heart">❤</span> using Angular</p>
        </div>
        <div class="footer-links">
          <a href="#hero">Back to Top</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2d1b69 0%, #4c1d95 100%);
      color: white;
      padding: 2rem;
      text-align: center;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footer-content {
      margin-bottom: 1rem;
    }
    
    .footer-content p {
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }
    
    .heart {
      color: #ff6b6b;
      animation: heartbeat 0.6s ease-in-out infinite;
    }
    
    .footer-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    
    .footer-links a {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s;
    }
    
    .footer-links a:hover {
      opacity: 0.8;
    }
    
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `]
})
export class FooterComponent {}
