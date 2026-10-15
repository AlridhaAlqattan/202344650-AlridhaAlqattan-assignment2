# Technical Documentation

##  Assignment Overview

The Personal Portfolio Website is a React-based web application designed to present personal information, projects, and contact details through a structured user interface.

Some parts were implemented as reusable components to improve code readability and maintainability.

##  Technologies and Tools

| Technology | Purpose |
|---|---|
| React | Building the user interface with components |
| JavaScript | Implementing application logic and interactions |
| HTML/JSX | Defining the page structure |
| CSS | Styling and layout |


##  Application Structure

The application uses React components to separate different responsibilities.

###  App.jsx

`App.jsx` serves as the main application component. It organizes the portfolio's main sections and combines the components needed to display the website.

The interface includes navigation and sections for About, Projects, and Contact, and a Programming Joke section.

###  TimeDate.jsx

`TimeDate.jsx` is a separate component responsible for displaying the current date and time.

React's useState hook can store the displayed date and time, while useEffect can manage the update process.

### Contact.jsx

`Contact.jsx` is a separate component responsible for displaying the Contact box and handling the form error checking and correctness of information

React's useState is used here to update the error message as well as clearing the information or extracting them from the user.

### JokeBox.jsx

`JokeBox.jsx` is a separate component responsible for displaying a programming joke fetched from an API. The component uses try and catch to catch any errors in fetching from the API. Additionally, it uses a loading state to show a loading message to inform the user of the system state.

React's useState and useEffect is used here to display the fetched joke and update the joke with another one when the user presses the `Get Another Joke` button.

###  Styling

CSS files define the visual appearance, spacing, colors, layout, and responsive behavior of the website.



##  Main Features

### Navigation

The navigation interface allows visitors to move between the main sections of the portfolio.

### About Section

Presents personal background and relevant information.

### Projects Section

Displays selected projects and their descriptions.

### Contact Section

Provides a way for visitors to enter contact information and a message. It provides a validation functionality and requires all boxes to be filled.
When info is submitted correctly, a confirmation message is shown.

### Programming Joke Section

Displays a joke fetched from an API and provides the user with the choice to get another joke with the click of a button. It shows a loading message when the joke is not loaded yet.

### Date and Time

Displays current date and time information through the `TimeDate` component.

##  Installation and Execution

### Prerequisites

- Node.js
- npm

### Steps

1. Clone the project repository.
2. Open a terminal in the project directory.
3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local address printed in the terminal.



