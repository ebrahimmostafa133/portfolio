import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'Python', 'Django']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'REST APIs', 'GraphQL']
    }
  ];

  ngOnInit(): void {
    // initFlowbite();
  }
}

