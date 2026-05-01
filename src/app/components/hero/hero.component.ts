import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="hero">
      <div class="hero-content">
        <h1 class="hero-title">Gowri Jothibasu</h1>
        <p class="hero-subtitle">AI Engineer & Applied Data Scientist</p>
        <p class="hero-description">
          Building production-grade AI systems that actually work in the real world — from Agentic RAG pipelines to Computer Vision at scale.
          <br><br>
          2+ years of experience designing and deploying intelligent AI systems at Mu Sigma Inc. I specialize in Agentic AI, LLMs, RAG pipelines, and end-to-end MLOps — delivering measurable impact across healthcare, CPG, and retail domains.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary" (click)="scrollTo('projects')">View My Work</button>
          <button class="btn btn-secondary" (click)="scrollTo('contact')">Contact Me</button>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>
          <div class="stat">
            <h3>100%</h3>
            <p>Production Ready</p>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <img src="assets/images/hero-banner.png" alt="AI Engineer working on laptop" class="hero-banner">
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #332074 0%, #5a29c2 100%);
      color: white;
      padding: 6rem 2rem;
      min-height: 90vh;
      display: flex;
      align-items: center;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-content {
      flex: 1;
      z-index: 1;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 0 0 1rem 0;
      line-height: 1.1;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      opacity: 0.95;
    }
    
    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 600px;
    }
    
    .hero-cta {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    
    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .btn-primary {
      background: white;
      color: #4c1d95;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(76, 29, 149, 0.4);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background: rgba(255,255,255,0.1);
    }
    
    .hero-stats {
      display: flex;
      gap: 3rem;
    }
    
    .stat {
      flex: 1;
    }
    
    .stat h3 {
      font-size: 2.5rem;
      margin: 0;
    }
    
    .stat p {
      font-size: 0.9rem;
      margin: 0.5rem 0 0 0;
      opacity: 0.8;
    }
    
    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    
    .hero-banner {
      max-width: 100%;
      height: auto;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      transition: transform 0.3s ease;
    }
    
    .hero-banner:hover {
      transform: scale(1.05);
    }
    
    .comment { color: #a0d995; }
    .keyword { color: #ff79c6; }
    .variable { color: #8be9fd; }
    .function { color: #50fa7b; }
    .string { color: #f1fa8c; }
    
    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
        padding: 3rem 1rem;
        gap: 2rem;
        min-height: auto;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .hero-cta {
        flex-direction: column;
      }
      
      .hero-stats {
        flex-direction: column;
        gap: 1.5rem;
      }
      
      .hero-visual {
        display: none;
      }
    }
  `]
})
export class HeroComponent {
  scrollTo(section: string) {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
