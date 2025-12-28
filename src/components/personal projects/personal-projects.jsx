import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const PersonalProjects = () => {
  const projects = [
    {
      id: 1,
      proj_name: "Easy Sweep",
      proj_desc: `
        Designed and built an autonomous housekeeping robot capable of navigating tight corners to sweep and mop floors. 
        Gained hands-on experience with backend development using Flask APIs for robot control and monitoring.
      `,
      proj_tools: ["HTML", "CSS", "Flask", "Python", "JavaScript"],
      proj_url: "https://github.com/sanadsoman45/easysweep",
    },
    {
      id: 2,
      proj_name: "Super Chef",
      proj_desc: `
        Created a smart recipe recommendation app that suggests dishes based on available ingredients. 
        Includes shopping list management and offline access to favorite recipes using local and cloud storage.
      `,
      proj_tools: ["Android", "Firebase", "SQLite", "Java"],
      proj_url: "https://github.com/sanadsoman45/recipe",
    },
    {
      id: 3,
      proj_name: "Tasks App",
      proj_desc: `
        Developed a minimalistic task manager using Flutter for organizing tasks into pending and completed states. 
        Integrated daily motivational quotes for enhanced user engagement.
      `,
      proj_tools: ["Flutter"],
      proj_url: "https://github.com/sanadsoman45/tasksapp/tree/main",
    },
    {
      id: 4,
      proj_name: "Super Chef API",
      proj_desc: `
        Built a robust RESTful API using Spring Boot to manage recipes and ingredient inventories. 
        Enabled intelligent recipe recommendations and stock management for a seamless cooking experience.
      `,
      proj_tools: ["Spring Boot", "Java"],
      proj_url: "https://github.com/sanadsoman45/SuperChef-JPA",
    },
    {
      id: 5,
      proj_name: "Shoes Ecommerce",
      proj_desc: `
        Designed a user-friendly e-commerce platform for browsing and purchasing shoes. 
        Implemented advanced filters and dynamic product recommendations to improve user personalization.
      `,
      proj_tools: ["React", "JavaScript"],
      proj_url: "https://github.com/sanadsoman45/ecommerce",
    },
    {
      id: 6,
      proj_name: "Cab Booking (Microservices)",
      proj_desc: `
        Designed a microservices architecture for an cab provider utilising docker containerization for packaging the node services, mongoDB and RabbitMQ. Leveraged RabbotMQ for setting up async communications between services.
      `,
      proj_tools: ["Node","Express","JavaScript","MongoDb","RabbitMQ", "Docker"],
      proj_url: "https://github.com/sanadsoman45/Cab_booking_Microservices",
    },
  ];

  // Variants for parent container (stagger children)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // stagger delay between cards
      },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // start slightly left and invisible
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="d-flex flex-column align-items-center py-5"
      style={{ backgroundColor: "#f5f5f5" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h5
        className="text-uppercase mb-4"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, type: "spring", stiffness: 120 },
        }}
        viewport={{ once: true }}
      >
        Personal | Academic Projects
      </motion.h5>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-sm-10 col-md-6 col-lg-4"
              variants={cardVariants}
            >
              <div className="card shadow-sm h-100 position-relative">
                <div className="card-body d-flex flex-column">
                  <h6 className="text-muted mb-1">{`Project ${index + 1}`}</h6>
                  <h5 className="card-title fw-bold">{project.proj_name}</h5>
                  <p className="card-text" style={{ whiteSpace: "pre-line" }}>
                    {project.proj_desc}
                  </p>
                  <p className="mt-2 fw-bold">Tools & Technologies:</p>
                  <p className="small text-muted">
                    {project.proj_tools.join(" | ")}
                  </p>

                  <div className="mt-auto d-flex justify-content-end align-items-center">
                    <a
                      href={project.proj_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center text-decoration-none text-primary"
                      style={{ gap: "4px", cursor: "pointer" }}
                    >
                      <span className="fw-semibold">GitHub</span>
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalProjects;
