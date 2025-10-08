import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // initFlowbite();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false; // Close mobile menu after click
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
