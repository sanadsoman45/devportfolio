import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import { motion, scale } from 'framer-motion';

const skills = [
  { icon: <IoLogoHtml5 size={36} />, label: "HTML" },
  { icon: <FaCss3Alt size={36} />, label: "CSS" },
  { icon: <IoLogoJavascript size={36} />, label: "JavaScript" },
  { icon: <FaBootstrap size={36} />, label: "Bootstrap" },
  { icon: <FaAngular size={36} />, label: "Angular" },
  { icon: <SiTypescript size={36} />, label: "Typescript" },
  { icon: <FaReact size={36} />, label: "React" },
  { icon: <FaNodeJs size={36} />, label: "Node JS" },
  { icon: <SiExpress size={36} />, label: "Express JS" },
  { icon: <DiMsqlServer size={36} />, label: "MS SQL" },
  { icon: <FaFlutter size={36} />, label: "Flutter" },
  { icon: <BsAndroid2 size={36} />, label: "Android" },


];

const tools = [
  { icon: <FaAws size={36} />, label: "AWS" },
  { icon: <FaGitAlt size={36} />, label: "Git" },
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },

}

const Skills = () => {
  return (
    <motion.div variants={parentVariants} className="container mt-5 mb-5 text-center" initial="hidden"  viewport={{ once: true, amount: 0.3 }}  whileInView="visible">
      <motion.h5 className="text-uppercase mb-4" variants={childVariants}>SKILL SET</motion.h5>

      <motion.p variants={childVariants} className="mx-auto" style={{ maxWidth: "800motionpx", textAlign: "justify" }}>
        "I have been working on the following technologies for around past 2
        years. The journey of my tech career started from my Bachelors in
        Computer Science, where I came across computer programming and their
        fundamentals. Since then I have been exploring several different
        technologies which I found quite interesting. I believe sticking to just
        one technology in today's modern tech-world will keep your knowledge
        limited. I strongly believe in, 'Explore more, Learn more'."
      </motion.p>

      {/* Frontend & Backend */}
      <motion.p variants={childVariants} className="text-uppercase mt-4">Frontend and Backend Technologies</motion.p>
      <motion.div variants={childVariants} className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="d-flex flex-column align-items-center"
            style={{ width: "100px" }}
          >
            {skill.icon}
            <p className="text-uppercase mt-2 mb-0 small">{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Other Tools */}
      <motion.p variants={childVariants} className="text-uppercase mt-4">Other Tools and Technologies</motion.p>
      <motion.div variants={childVariants} className="d-flex flex-wrap justify-content-center gap-3">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="d-flex flex-column align-items-center"
            style={{ width: "100px" }}
          >
            {tool.icon}
            <p className="text-uppercase mt-2 mb-0 small">{tool.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
