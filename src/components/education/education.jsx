import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { motion } from 'framer-motion';

const Education = () => {
  const userEducation = [
    {
      universityName: "University of Mumbai",
      collegeName: "Mulund College Of Commerce",
      degreeName: "Bachelors of Science",
      majorsName: "Computer Science",
      duration: "2018-2021",
      place: "Mumbai, India",
    },
  ];

  // Slide-in from left variant
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <div
      style={{ backgroundColor: "#f5f5f5" }}
      className="d-flex flex-column align-items-center py-5 px-3 px-md-0"
    >
      <motion.h5
        viewport={{ once: true, amount: 0.3 }}
        className="text-uppercase mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: "spring", stiffness: 120 } }}
      >
        Education
      </motion.h5>

      {userEducation.map((education, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="card mb-4 shadow"
          style={{
            width: "100%",
            maxWidth: "26rem",
            borderRadius: "0 0 1.5rem 0",
          }}
        >
          <div className="row g-0">
            {/* Left section with icon */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center bg-dark rounded-start rounded-md-start-0 rounded-top-md-0 rounded-top p-3">
              <PiStudentFill size={80} color="white" />
            </div>

            {/* Right content section */}
            <div className="col-12 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{education.degreeName}</h5>
                <p className="card-text mb-1">{education.majorsName}</p>
                <p className="card-text mb-1">{education.collegeName}</p>
                <p className="card-text mb-1">
                  <small className="text-muted">{education.universityName}</small>
                </p>
                <p className="card-text mb-1">{education.duration}</p>
                <div className="card-text d-flex justify-content-end align-items-end">
                  <footer className="blockquote-footer bg-transparent mt-3 h6">
                    <small className="text-muted">{education.place}</small>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
