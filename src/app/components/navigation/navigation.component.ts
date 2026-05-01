import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <h1>Gowri Jothibasu</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact" class="cta-button">Contact</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #332074 0%, #5a29c2 100%);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.18);
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo h1 {
      color: white;
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.3s;
    }
    
    .nav-links a:hover {
      opacity: 0.8;
    }
    
    .cta-button {
      background: white !important;
      color: #667eea !important;
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
      }
      
      .logo h1 {
        font-size: 1.2rem;
      }
      
      .cta-button {
        padding: 0.4rem 1rem !important;
      }
    }
  `]
})
export class NavigationComponent {}
