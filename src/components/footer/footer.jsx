import React from "react";
import { FaPhone, FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const contactDetails = [
    {
      id: 1,
      type: "Phone",
      value: "+91 9136214172",
      icon: <FaPhone />,
      link: "tel:9136214172",
    },
    {
      id: 2,
      type: "Email",
      value: "sanadsoman871@gmail.com",
      icon: <MdEmail />,
      link: "mailto:sanadsoman871@gmail.com",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/sanadsoman",
    },
    {
      id: 2,
      icon: <FaGithub size={20} />,
      url: "https://github.com/sanadsoman45",
    },
  ];

  return (
    <div className="bg-black text-white py-5 px-3">
      <div className="container">
        <div className="row justify-content-between g-5">
          {/* Contact Info */}
          <div className="col-md-6">
            <h4 className="text-uppercase fw-bold">Sanad Soman</h4>
            <p style={{ maxWidth: "450px" }}>
              I would be happy to hear from you. If you have any questions or queries,
              feel free to contact me using the details below:
            </p>
            <ul className="list-unstyled">
              {contactDetails.map((item) => (
                <li
                  key={item.id}
                  className="d-flex align-items-center gap-2 mb-2"
                >
                  <span className="text-light">{item.icon}</span>
                  <a
                    href={item.link}
                    className="text-white text-decoration-none"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-6 text-md-end">
            <h6 className="text-uppercase fw-bold mb-2">You can also connect with me on</h6>
            <div className="d-flex justify-content-md-end gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center rounded-circle bg-white text-dark"
                  style={{
                    width: "42px",
                    height: "42px",
                    transition: "0.3s",
                    textDecoration: "none",
                     cursor: "pointer", 
                  }}
                  title="Visit profile"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-muted mt-5 small">
          <p className="text-white">— All Work © Sanad Soman | All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
