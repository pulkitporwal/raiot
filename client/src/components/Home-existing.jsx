import React from 'react';
import logo from "../assets/logo2.png"
import "../assets/style.css"

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li className="active"><a href="#">Home</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/team'>Team</a></li>
            <li><a href='/faq'>FAQ</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScQCE6lfPaEEaeEkp2J2ugJs9RxVPe_wxprlN3sx-PhgOxK5g/viewform?usp=sf_link" target="_blank">Register</a></li>
          </ul>
        </nav>
      </header>
      <section className="content">
        <div className="container top">
          <h1 className="gradient-text">Robotics And Internet Of Things Lab</h1>
          <p>
            The One And Only Robotics Club Of Amity University Rajasthan
          </p>
          <br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScQCE6lfPaEEaeEkp2J2ugJs9RxVPe_wxprlN3sx-PhgOxK5g/viewform?usp=sf_link" className="button" target="_blank">REGISTER</a>
        </div>
      </section>
      <hr />
      <hr className="gradient" />
      <section className="mission">
        <h1>ABOUT US</h1>
        <section className="about_us_main">
          <p>
            At RaIoT Lab, we are passionate about exploring the limitless possibilities that
            robotics offers. Our club is a diverse community of students, engineers, and enthusiasts who share a
            common
            interest in robotics and automation. Whether you're a seasoned robotics expert or a newcomer eager to
            learn,
            we welcome individuals from all backgrounds and skill levels.
          </p>
        </section>
        <h1>OUR MISSION</h1>
        <p>
          Our mission is to foster a collaborative environment where members can enhance their robotics knowledge,
          develop technical skills, and engage in exciting projects that push the boundaries of innovation. We believe
          in the power of robotics to shape the future and aim to inspire the next generation of leaders in the field.
        </p>
        <h1>WHAT WE DO</h1>
        <section className="what_we_do_list">
          <ol>
            <li>
              <h2>1. Hands-On Projects:</h2>
              <h3>
                Dive into practical, real-world applications of robotics through our hands-on projects. From
                building simple robots to tackling complex challenges, our club provides a platform for you to
                apply
                theoretical knowledge to tangible creations.
              </h3>
            </li>
            <li>
              <h2>2. Workshops and Training:</h2>
              <h3>
                Stay at the forefront of robotics technology with our workshops and training sessions. Led by
                experienced members and invited experts, these sessions cover a wide range of topics, including
                programming, electronics, and mechanical design.
              </h3>
            </li>
            <li>
              <h2>3. Competitions:</h2>
              <h3>
                Put your skills to the test by participating in local and national robotics competitions. Our
                club actively seeks opportunities for members to showcase their talents and compete against
                other robotics enthusiasts.
              </h3>
            </li>
            <li>
              <h2>4. Guest Speakers and Events:</h2>
              <h3>
                Connect with professionals and experts in the field through guest speaker events. Learn about
                the latest trends, advancements, and career opportunities in robotics, and expand your network
                within the robotics community.
              </h3>
            </li>
            <li>
              <h2>5. Community Outreach:</h2>
              <h3>
                We believe in giving back to the community. Engage in outreach programs where we use robotics as
                a tool to inspire and educate others. Whether it's hosting robotics workshops for local schools
                or participating in community events, we strive to make a positive impact.
              </h3>
            </li>
          </ol>
        </section>
      </section>
      <section className="join">
        <hr className="gradient" style={{ marginTop: "60px" }} />
        <h2>Who Can Join?</h2>

        <h4 className="text-gradient-purple">All Years</h4>
        <p>Students Of All Years Can Join.</p>

        <h4 className="text-gradient-purple">No Previous Experience Required</h4>
        <p>No Previous Experience Is Necessary, But is appreciated. But enthusiasm to Learn Is Compulsory</p>

        <h4 className="text-gradient-purple">Should Be A Student Of Amity University Rajasthan</h4>
        <p>Only Students of Amity University Can Join as per Guidelines from the University</p>

        <h4 className="text-gradient-purple">Laptop Is Mandatory</h4>
        <p>You Must at least have a portable device that you can carry to the lab, on which you can code</p>
      </section>
      <hr className="gradient" />
      <section className="excited">
        <h1>EXITED?</h1>
        <p>
          See Our Projects and Bless Your Eyes!
        </p>
        <br />
        <a href="#projects" className="button" target="_blank">
          <span>PROJECTS</span>
        </a>
      </section>
      <hr className="gradient" />
      <section className="contact">
        <h1>CONTACT US</h1>
        <h2>Our Official Mail ID :</h2>
        <section className="contact-mail">
          <p>
            <a href="mailto:adityashailendra477@gmail.com">adityashailendra477@gmail.com</a>
          </p>
        </section>
        <h2>SOCIAL HANDLES:</h2>
        <ul>
          <section className="logo-1">
            <li>
              <a href="https://www.linkedin.com/in/adityarajsingh007/" target="_blank"><img
                src={logo} alt="LinkedIn" /><br /><br />LinkedIn</a>
            </li>
          </section>
          <li>
            <section className="logo-2">
              <a href="https://www.instagram.com/" target="_blank"><img
                src={logo} alt="Instagram" /><br /><br />Instagram</a>
            </section>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <hr style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "grey" }} />
        <div className="flex-container">
          <div className="column">
            <section className="col1">
              <a href='/' target='_blank'>
                <img src={logo} alt="RAIOT" />
              </a>
            </section>
          </div>
          <div className="column">
            <section className="col2">
              <a href="https://www.amity.edu/jaipur/" target="_blank">
                <img src={logo} alt="Amity University" />
              </a>
            </section>
          </div>
          <div className="column">
            <section className="col3">
              <p>Address:
                <br />
                Ground Floor, B-Block
                <br />
                SP-1 Kant Kalwar, NH11C, RIICO Industrial Area, Rajasthan 303002
              </p>
              <section className="footer-logos">
                <ul>
                  <li>
                    <section className="logo-1">
                      <a href="https://www.linkedin.com/company/raiot-labs-amity-university-rajasthan/mycompany/"
                        target="_blank"><img src={logo} alt="LinkedIn" /></a>
                    </section>
                  </li>
                  <li>
                    <section className="logo-2">
                      <a href="https://www.instagram.com/" target="_blank"><img
                        src={logo} alt="Instagram" /></a>
                    </section>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
        <hr style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "grey" }} />
        <p className="copyright"><br />© 2023 RaIoT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
