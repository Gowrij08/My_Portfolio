import { Component } from '@angular/core';

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  template: `
    <section class="skills" id="skills">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Expertise across AI, Data Science, and modern technology stacks</p>
        
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let skill of skills">
            <h3>{{ skill.category }}</h3>
            <div class="skill-items">
              <span class="skill-item" *ngFor="let item of skill.items">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
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
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .skill-category {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 10px;
      border-top: 3px solid #4c1d95;
    }
    
    .skill-category h3 {
      margin: 0 0 1.5rem 0;
      color: #333;
      font-size: 1.2rem;
    }
    
    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    
    .skill-item {
      background: white;
      padding: 0.6rem 1.2rem;
      border-radius: 50px;
      border: 1px solid #ddd;
      font-size: 0.9rem;
      color: #555;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .skill-item:hover {
      background: #4c1d95;
      color: white;
      border-color: #4c1d95;
    }
    
    @media (max-width: 768px) {
      .skills {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: 'Gen AI',
      items: ['LangChain', 'LangGraph', 'LangSmith', 'CrewAI', 'RAG', 'AI Agents', 'MCP Servers', 'ChromaDB', 'Guardrails', 'Prompt Engineering']
    },
    {
      category: 'LLMs & NLP',
      items: ['HuggingFace', 'BERT', 'Transformers', 'Semantic Search', 'Re-Ranking', 'Embeddings']
    },
    {
      category: 'AI / ML',
      items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'XGBoost', 'Regression', 'Classification']
    },
    {
      category: 'MLOps',
      items: ['FastAPI', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'REST APIs']
    },
    {
      category: 'Databases',
      items: ['ChromaDB', 'Redis', 'MongoDB', 'SQL', 'Vector Databases']
    },
    {
      category: 'Others',
      items: ['Linux', 'Shell Scripting', 'RabbitMQ']
    }
  ];
}
