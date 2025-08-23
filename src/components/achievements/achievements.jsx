import React, { useState, useEffect } from "react";
import pythonCert from "../../assets/certifications/Coursera 5TUCLGAGQXSB_page-0001.jpg";
import awsCert from "../../assets/certifications/aws-ccp.png";
import angTesting from "../../assets/certifications/UC-59d67cd6-a309-454d-8311-ad3c75d55dfe_page-0001.jpg";
import jbkJava from "../../assets/certifications/jbk-cert.jpg";
import { motion } from "framer-motion";

const Achievements = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const certifications = [
    { id: 1, title: "Crash Course on Python", imgSrc: pythonCert },
    { id: 2, title: "AWS Certified Cloud Practitioner", imgSrc: awsCert },
    { id: 3, title: "Angular Testing Masterclass (Angular 19)", imgSrc: angTesting },
    { id: 4, title: "Full Stack Development (Java, J2EE, Angular)", imgSrc: jbkJava },
  ];

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prev) => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [certifications.length]);

  const nextSlide = () => setCurIndex((prev) => (prev + 1) % certifications.length);
  const prevSlide = () =>
    setCurIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));

  const handleTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Variants for bullet points
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mt-5 mb-5">
      <motion.h5
        className="text-uppercase text-center mb-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h5>

      <div className="row g-4 align-items-start">
        {/* Certification List */}
        <div className="col-md-6">
          <motion.h4
            className="text-uppercase mb-3"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            Certifications / Training
          </motion.h4>

          <motion.ul
            className="ps-3"
            style={{ listStyleType: "square" }}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.li
                key={cert.id}
                className="mb-2"
                variants={itemVariants}
              >
                {cert.title}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Carousel */}
        <motion.div viewport={{once: true, amount:0.03}} className="col-md-6" initial={{scale:0, opacity:0}} whileInView={{opacity:1, scale:1,transition:{duration:1}}}>
          <div
            className="position-relative"
            style={{ height: "400px", overflow: "hidden" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`w-100 h-100 position-absolute top-0 start-0 transition-opacity ${
                  index === curIndex ? "opacity-100 z-1" : "opacity-0 z-0"
                }`}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                <img
                  src={cert.imgSrc}
                  alt={cert.title}
                  className="img-fluid h-100 mx-auto d-block"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}

            {/* Prev & Next Buttons */}
            <button
              className="carousel-control-prev"
              type="button"
              onClick={prevSlide}
              style={{
                filter: "invert(1)",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                zIndex: 2,
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              onClick={nextSlide}
              style={{
                filter: "invert(1)",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "10px",
                zIndex: 2,
              }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Dots */}
            <div className="d-flex justify-content-center mt-3 gap-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurIndex(index)}
                  className={`rounded-circle border-0 ${
                    index === curIndex
                      ? "bg-dark"
                      : "bg-secondary bg-opacity-25"
                  }`}
                  style={{ width: "10px", height: "10px" }}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
