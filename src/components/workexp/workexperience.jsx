import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const workExperiences = [
    {
      id: 1,
      title: "Jr. Full Stack Java Developer",
      duration: "Apr 2024 - Present",
      companyName: "Bauer Corporate Services",
    },
    {
      id: 2,
      title: "Junior Software Engineer",
      duration: "Aug 2023 - Mar 2024",
      companyName: "Oberonsa Edge",
    },
    {
      id: 3,
      title: "Engineer - Cloud & Infra Services",
      duration: "Jun 2021 - Dec 2022",
      companyName: "LTI Mindtree",
    },
  ];

  // Container variant to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between cards
      },
    },
  };

  // Each card slides from left
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="py-5 px-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h5
        className="text-uppercase text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h5>

      <div className="container">
        <div className="row g-4">
          {workExperiences.map((work) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={work.id}
              variants={cardVariants}
            >
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  transition: "transform 0.2s",
                }}
              >
                <div className="card-body d-flex">
                  {/* Icon */}
                  <div className="me-3 d-flex align-items-start">
                    <MdOutlineWorkOutline size={40} className="text-primary" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h6 className="card-title mb-1">{work.title}</h6>
                    <p className="card-subtitle text-muted mb-1">
                      {work.companyName}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{work.duration}</small>
                    </p>
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

export default WorkExperience;
