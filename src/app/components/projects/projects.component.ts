import { Component } from '@angular/core';

interface Project {
  title: string;
  tagline: string;
  description: string;
  interesting: string[];
  technologies: string[];
  link?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects" id="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Showcasing real-world AI and data science solutions</p>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <p class="project-tagline">{{ project.tagline }}</p>
            </div>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="interesting">
              <strong>What makes it interesting:</strong>
              <ul>
                <li *ngFor="let point of project.interesting">{{ point }}</li>
              </ul>
            </div>
            
            <div class="technologies">
              <span *ngFor="let tech of project.technologies" class="tech-badge">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
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
      margin: 0 0 1rem 0;
      color: #333;
    }
    
    .section-subtitle {
      text-align: center;
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: all 0.3s;
      border-left: 4px solid #4c1d95;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .project-header h3 {
      margin: 0;
      color: #333;
      font-size: 1.3rem;
    }
    
    .project-tagline {
      margin: 0.5rem 0 0 0;
      color: #667eea;
      font-style: italic;
      font-size: 1rem;
    }
    
    .project-link {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .project-description {
      color: #555;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .interesting {
      background: #faf5ff;
      padding: 1rem;
      border-radius: 5px;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      color: #555;
    }
    
    .interesting ul {
      margin: 0.5rem 0 0 0;
      padding-left: 1.5rem;
    }
    
    .interesting li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
    
    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .tech-badge {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .projects {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Agentic RAG: Internal Knowledge Assistant',
      tagline: 'An intelligent enterprise knowledge assistant powered by autonomous agents',
      description: 'Built an end-to-end Agentic RAG pipeline designed to answer complex enterprise queries with accuracy and reliability. The system goes beyond basic RAG by incorporating autonomous reasoning, query planning, and self-validation loops.',
      interesting: [
        'Hybrid retrieval combining semantic search, BM25, and re-ranking for maximum accuracy',
        'A reasoning + reflection agent loop that autonomously plans queries and validates answers before responding',
        'Built-in guardrails — prompt injection detection, hallucination checks, and similarity filtering — making it production-safe',
        'Exposed via REST APIs and a Streamlit UI for real-time enterprise use'
      ],
      technologies: ['LangGraph', 'LangChain', 'FastAPI', 'ChromaDB', 'BM25', 'Streamlit', 'Python'],
      link: '#'
    },
    {
      title: 'Smart Lobby Analytics',
      tagline: 'Real-time human detection and movement intelligence for physical spaces',
      description: 'Designed a computer vision system that turns lobby camera feeds into actionable operational insights — footfall counts, movement heatmaps, and behavioral patterns — deployed across live client environments.',
      interesting: [
        'YOLOv8 for real-time human detection with BYTETrack for robust multi-person tracking',
        'Spatial heatmaps that visualize movement patterns to support facility and operational decisions',
        'Deployed across two client locations and re-engineered to meet evolving requirements',
        'Full production setup with Docker, Kubernetes, and CI/CD pipelines'
      ],
      technologies: ['YOLOv8', 'BYTETrack', 'OpenCV', 'Docker', 'Kubernetes', 'CI/CD', 'Python'],
      link: '#'
    },
    {
      title: 'Domain Analytics: Healthcare, CPG & Retail',
      tagline: 'Data-driven decision making across three high-impact industries',
      description: 'Worked across multiple business domains applying ML and statistical techniques to solve real business problems — from disease assessment to promotional strategy.',
      interesting: [
        'Disease assessment using real-world Pharmetrics claims data (Healthcare)',
        'Promotion effectiveness modeling using ML + causal inference (CPG)',
        'SKU-level cannibalization analysis to guide pricing and marketing strategy (Retail)'
      ],
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Causal Inference', 'SQL'],
      link: '#'
    }
  ];
}
