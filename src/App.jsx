import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar";
import ProfileContent from "./components/profile-content/profile-cont";
import Skills from "./components/skills/skills";
import Education from "./components/education/education";
import Achievements from "./components/achievements/achievements";
import PersonalProjects from "./components/personal projects/personal-projects";
import Footer from "./components/footer/footer";
import WorkExperience from "./components/workexp/workexperience";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <ProfileContent />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="projects">
        <PersonalProjects />
      </div>
       <div id="work">
        <WorkExperience/>
      </div>
      <div id="contact">
        <Footer />
      </div>
     
    </>
  );
}


export default App;
