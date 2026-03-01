# Simple Blog Platform
git status# TechNest

## Group Information
-**Student 1.**Adeesha Akalanka Samarasiriwardhana - ITBNM-2313-0072 - Role: Full-Stack Developer
-**Student 2.**K.T.Vikum Prabodya - ITBNM-2313-0072 - Role: DevOps Engineer

## Project description

The blog built using HTML, CSS, and JavaScript. The Developer used Visual studios to make the Develop application features and the Terminal (git bash) for the connect with git repository of the DevOps Engineer. 

## Live Deployment 
**Live URL:** https://tecknest.netlify.app/

## Technology Used
HTML, CSS, JavaScript
Visual Studios
Visual Studios Terminal
Git Bash
Github 
Docker

## Features
Blog post listing (Home page)
Individual post view
Categories (AI, Mobile, Gaming, Hardware, etc.)
Image slider (TechNest brand section)
Dark theme UI
Responsive design
Advertisement / promoted products section
Lightweight – no frameworks used


## Branch Strategy
Wee implemented the following branching strategy:
`main` - Production branch
`develop` - Integration branch
`feature/*` - Feature development branches
blog-page/
│
├─ .git/
│
├─ src/
│   ├─ index.html        # Home page
│   ├─ post.html         # Individual blog post page
│   ├─ style.css         # Main stylesheet
│   ├─ app.js            # Home page logic
│   ├─ post.js           # Post page logic
│   │
│   └─ images/
│       ├─ ai revolution 2026.jpg
│       ├─ Top Mobile Devices.jpg
│       ├─ Gaming Trends 2026.jpg
│       ├─ Hardware Upgrades That Matter.jpg
│       ├─ ai in cybersecurity.jpg
│       │
│       └─ brand/
│           ├─ technology.jpg
│           ├─ Computing.jpg
│           └─ Gaming.jpg
│
└─ README.md

## Individual Contribution

### Adeesha Akalanka Samarasiriwardhana
- Home Page
- Individual post view
- Categories 
- Image slider 
- Dark theme UI
- Responsive design

### K. T. Vikum Prabodya
- Repository setup and configuration
- GitHub Actions CI/CD pipeline implementation
- Deployment setup and management
- Docker Deploymentation

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- Git

### Installation
```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd [project-name]

# Install dependencies
npm install

# Run development server
npm run dev

# Deployment Process
[Explain how your CI/CD pipeline works]
# Challenges Faced
[Optional: Describe any challenges and how you resolved them]
# Build Status 
---

# TechNest Blog Website (static frontend application) (Dockerized)

## Prerequisites
- Docker installed
- Docker Compose installed

## Build the Image
docker build -t technest .

## Run Container
docker run -p 8080:80 technest

Then open:
http://localhost:8080

## Using Docker Compose
docker-compose up --build


