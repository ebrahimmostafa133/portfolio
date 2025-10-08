import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    // initFlowbite();
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}