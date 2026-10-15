import { useEffect, useState } from 'react'
import './App.css'
import TimeDate from './components/TimeDate.jsx'
import kfupmLogo from './assets/kfupm-logo-300x284.webp'
import Contact from './components/Contact.jsx'

function App() {



  return (
    <>
      <a href="https://www.kfupm.edu.sa/"><img src={kfupmLogo} alt="KFUPM Logo" id="logo" /></a>

      <div id="wrap">

        <TimeDate />

        <div id="greet">
          <h1><strong>Alridha Alqattan Website</strong></h1>
          <h3>Welcome to my personal website!</h3>
        </div>

        <h2>Navigation</h2> {/* This part shows the different section and enables the user to navigate to them by a click*/}
        <section id="navigation">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <div id="box1" className="box">
            <p>My name is Alridha Alqattan, and I am a Computer Science student at King Fahad
              University of Petroleum and Minerals. I joined the university in 2023. I am 21 years old. </p>
            <p><strong>I am very excited to learn more about Web Development!</strong></p>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <h3 className="title">Project 1: Pseudo File System</h3>
          <div id="box2" className="box">
            <p>During my study of ICS202 (Algorithms and Data Structures), i worked on a
              project called Pseudo File System. The project was about creating a file system
              using some concepts of data structures i learned. i used java and tree like structures.
            </p>
            <a href="assets/file-system.jpg" target="_blank"><img src="assets/file-system.jpg" alt="File System"
              class="projImg" /></a>
          </div>
        </section>

        <h3 className="title">Project 2: Web Development Project</h3>
        <div id="box3" className="box">
          <p>During my study of SWE363 (Web Development), I worked in a team to create a website
            which enables KFUPM students to report problems in their buldings. Whether the
            problem is related to electricity, water, or any other issue.
          </p>
          <a href="assets/webdev.jpg" target="_blank"><img src="assets/webdev.jpg" alt="Web Development"
            class="projImg" /></a>
        </div>
        <section id="contact">
          <h2>Contact</h2>

          <div id="box4" className="box">
            <Contact />
          </div>
        </section>

      </div>

    </>
  )
}

export default App
