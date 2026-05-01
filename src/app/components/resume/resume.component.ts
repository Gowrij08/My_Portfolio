import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <section class="resume" id="resume">
      <div class="container">
        <h2 class="section-title">Experience & Education</h2>
        
        <div class="content-wrapper">
          <div class="column">
            <h3 class="column-title">Professional Experience</h3>
            
            <div class="item">
              <div class="item-header">
                <h4>AI Engineer (R&D)</h4>
                <span class="date">July 2023 – July 2025</span>
              </div>
              <p class="company">Mu Sigma Inc, Bangalore</p>
              <ul class="highlights">
                <li>Built an Agentic RAG system with hybrid retrieval, reasoning loops, and safety guardrails</li>
                <li>Developed a real-time lobby analytics system for human detection and movement insights</li>
                <li>Deployed solutions across multiple client environments and adapted them to meet evolving needs</li>
                <li>Worked across Healthcare, CPG, and Retail domains delivering measurable business impact</li>
              </ul>
            </div>
            
            <div class="item">
              <div class="item-header">
                <h4>Data Scientist</h4>
                <span class="date">2021 - 2023</span>
              </div>
              <p class="company">AI Solutions</p>
              <ul class="highlights">
                <li>Developed predictive models improving business metrics by 25%</li>
                <li>Created data analytics dashboards for C-level executives</li>
                <li>Optimized data processes reducing runtime by 40%</li>
              </ul>
            </div>
          </div>
          
          <div class="column">
            <h3 class="column-title">Education</h3>
            
            <div class="item">
              <div class="item-header">
                <h4>B.E., Computer Science and Engineering</h4>
                <span class="date">2019 – 2023</span>
              </div>
              <p class="company">M. Kumarasamy College of Engineering, Karur, Tamil Nadu</p>
              <p class="description"></p>
            </div>
          </div>
        </div>
        
        <div class="resume-download">
          <a href="/assets/resume.pdf" class="btn btn-primary" target="_blank">
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .resume {
      padding: 6rem 2rem;
      background: #f8f9fa;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      text-align: center;
      margin: 0 0 3rem 0;
      color: #333;
    }
    
    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    
    .column-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
      margin: 0 0 2rem 0;
      padding-bottom: 1rem;
      border-bottom: 2px solid #4c1d95;
    }
    
    .column-title.certificates {
      margin-top: 2rem;
    }
    
    .item {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      border-left: 3px solid #8b5cf6;
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    .item-header h4 {
      margin: 0;
      color: #333;
      font-size: 1.1rem;
    }
    
    .date {
      background: #4c1d95;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .company {
      color: #667eea;
      font-weight: 600;
      margin: 0.3rem 0;
      font-size: 0.95rem;
    }
    
    .description {
      color: #666;
      font-size: 0.95rem;
      margin: 0.5rem 0;
      font-style: italic;
    }
    
    .highlights {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;
    }
    
    .highlights li {
      color: #555;
      padding: 0.4rem 0 0.4rem 1.5rem;
      position: relative;
      line-height: 1.5;
    }
    
    .highlights li:before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #4c1d95;
      font-weight: bold;
    }
    
    .certificates-list {
      list-style: none;
      padding: 0;
    }
    
    .certificates-list li {
      background: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-bottom: 0.8rem;
      border-left: 3px solid #764ba2;
      color: #555;
    }
    
    .resume-download {
      text-align: center;
      margin-top: 3rem;
    }
    
    .btn {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, #4c1d95 0%, #581c87 100%);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(76, 29, 149, 0.4);
    }
    
    @media (max-width: 768px) {
      .resume {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class ResumeComponent {}
