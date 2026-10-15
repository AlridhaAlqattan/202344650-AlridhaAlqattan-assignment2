# Alridha Alqattan - Assignment 2

# Personal Portfolio Website

## Project Description

This project is a personal portfolio website developed using mutliple coding languages. It presents my background, projects, and contact information in a simple and organized layout.

The website includes a navigation bar, an About section, a Projects section, and a Contact section. It also includes a component that displays the current date and time. Additionally, it fetches an API to display programming jokes.

Initially in assignment 1, only HTML,CSS, and JS were used. However,
React and jsx is also used in the upgraded version in assignment 2

## Features

- **Navigation:** Links to the main sections of the website.
- **About:** Introduces me and provides information about my background.
- **Projects:** Displays selected projects and relevant details.
- **Contact:** Provides a form for visitors to enter their contact information and message.
- **Programming Joke:** Displays a programming joke fetched from an API.
- **Live Date and Time:** Displays the current date and time using a separate React component.
- **Responsive Design:** Designed to provide a usable experience across different screen sizes.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Setup Instructions

### Prerequisites

Install Node.js and npm before running the project.

### Installation

1. Clone the repository:

   
   git clone YOUR_REPOSITORY_URL
  

2. Navigate to the project directory:


   cd YOUR_PROJECT_DIRECTORY


3. Install the dependencies:


   npm install
  

4. Start the development server:

  
   npm run dev
  

5. Open the local URL displayed in the terminal in your browser.

## Project Structure

```text
project/
├── assets/
│   ├── file-system.jpg
│   ├── journey_to_success.jpg
│   ├── kfupm-logo-300x284.webp
│   └── webdev.jpg
├── docs/
│   ├── Academic-Integrity-Report.md
│   ├── ai-usage-report.md
│   └── Technical-Documentation.md
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── file-system.jpg
│   │   ├── journey_to_success.jpg
│   │   ├── kfupm-logo-300x284.webp
│   │   └── webdev.jpg
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── JokeBox.jsx
│   │   └── TimeDate.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

The project structure above is illustrative. Some Files are not shown for 
Simplicity.
## AI Usage

AI tools were used as development assistance for understanding React concepts, troubleshooting code, and improving the project documentation. AI-generated suggestions were reviewed and adapted as needed.

## Assignment 2 Requirements Met

### Dynamic Content
- Time and Date is implemented
- Navigation between different sections is implemented

### Data Handling
- Data is fetched from an API and displayed in the programming joke section
- The contact form validates data and shows confirmation message or error message

###  Animation and Transitions
- Hover effects on buttons and Boxes

### Error Handling and User Feedback
- Error messages for invalid or empty form inputs
- A message when an API fetching fails
- Loading message when fetching data from API
- No data found message when no data is found from the API