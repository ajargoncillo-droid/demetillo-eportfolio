import profilePhoto from './profile.jpg'

// EDIT THIS FILE: replace the placeholders with your real information.
export const profile = {
  name: 'Aira Joy Demetillo',
  title: 'BS Information Technology Student, 3rd Year',
  school: 'Cavite State University – Tanza Campus',
  email: 'ajargoncillo@gmail.com',
  photo: profilePhoto,
  location: 'Tanza, Cavite, Philippines',
  intro:
    'I am an IT student who enjoys turning ideas into working apps. I build with React and Tailwind CSS, and I am learning how to design systems that solve real problems for real people.',
  background:
    'I am a third-year Information Technology student at Cavite State University, Tanza Campus. I want to grow into a developer who designs systems that make everyday work easier.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/ajargoncillo-droid' },
  ],
}

export const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'UI Wireframing', 'Vercel Deployment']
export const interests = ['Web development', 'Mobile app design', 'Problem solving', 'Food and cooking']

export const projects = [
  {
    id: 1, title: 'React Calculator', category: 'Web', tech: ['React', 'Tailwind CSS'],
    summary: 'A responsive calculator built for DCIT 26 Laboratory 1.',
    details: 'Handles basic arithmetic with useState, supports button clicks, and adapts to phone and desktop screens.',
    link: 'https://github.com/ajargoncillo-droid/Demetillo---Calculator-', image: '',
  },
  {
    id: 2, title: 'To-Do List Website', category: 'Web', tech: ['React', 'Tailwind CSS'],
    summary: 'A task manager built for DCIT 26 Laboratory 2.',
    details: 'Add tasks, mark them Done or Not Done, delete them, and read a built-in user guide. State is managed with useState.',
    link: '', image: '',
  },
  {
    id: 3, title: 'Student ID Tracking Kiosk', category: 'System design', tech: ['QR code', 'SMS', 'Wireframe'],
    summary: 'A proposed QR-based kiosk that shows a student\u2019s info when the ID is tapped.',
    details: 'Displays the student\u2019s photo, name, address, and grade level, and sends an SMS to the parent. Currently at the low-fidelity wireframe stage.',
    link: '', image: '',
  },
  {
    id: 4, title: 'NuocCham Food Center App', category: 'Mobile', tech: ['Mobile app', 'Inventory', 'Ordering'],
    summary: 'My thesis: a mobile app for a solo-owned Vietnamese food store.',
    details: 'Covers inventory tracking, a sales dashboard, automatic discount computation, a recipe book, employee training, and online ordering with delivery status.',
    link: '', image: '',
  },
]

export const education = [
  { school: 'Cavite State University – Tanza Campus', detail: 'BS Information Technology (3rd Year)', years: '2024 – Present' },
]

export const experience = [
  { role: 'Thesis Developer', place: 'NuocCham Food Center project', years: '2026', detail: 'Designing a mobile app for store operations, training, and ordering.' },
  { role: 'Web Development Student', place: 'DCIT 26 Laboratories', years: '2026', detail: 'Built and deployed React and Tailwind CSS websites.' },
]
