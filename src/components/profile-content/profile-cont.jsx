import React, { useEffect, useMemo, useState } from "react";
import styles from "./profile-cont.module.css";
import bgImage from "../../assets/grasswall1.jpeg";
import profileImg from "../../assets/profile.jpg";
import { motion } from "framer-motion";

const ProfileContent = () => {
  const user = {
    fname: "Sanad",
    lname: "Soman",
    skills: [
      "MEAN Developer (MSSQL, Express, Angular, Node)",
      "Web Developer",
      "App Developer",
    ],
    imageUrl: profileImg,
  };

  const [imageDone, setImageDone] = useState(false);
  const [nameDone, setNameDone] = useState(false);
  const [codeBoxDone, setCodeBoxDone] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  const lines = useMemo(
    () => [
      [
        { text: "if", color: "#f9d65c" },
        { text: " ", color: "#ffffff" },
        { text: "(", color: "#f9d65c" },
        { text: " ", color: "#ffffff" },
        { text: "sad", color: "#ffffff" },
        { text: "(", color: "#19a2ff" },
        { text: ")", color: "#19a2ff" },
        { text: " ", color: "#ffffff" },
        { text: ")", color: "#f9d65c" },
        { text: "==", color: "#00b894" },
        { text: "true", color: "#00b894" },
        { text: " ", color: "#ffffff" },
        { text: ")", color: "#f9d65c" },
        { text: "{", color: "#ffaa00" },
      ],
      [
        { text: "  ", color: "#ffffff" },
        { text: "sad", color: "#ffffff" },
        { text: "(", color: "#19a2ff" },
        { text: ")", color: "#19a2ff" },
        { text: ".", color: "#ffffff" },
        { text: "stop", color: "#ff5c5c" },
        { text: "(", color: "#19a2ff" },
        { text: ")", color: "#19a2ff" },
        { text: ";", color: "#ff5c5c" },
      ],
      [
        { text: "  ", color: "#ffffff" },
        { text: "beAwsome", color: "#29a3ff" },
        { text: "(", color: "#19a2ff" },
        { text: ")", color: "#19a2ff" },
        { text: ";", color: "#29a3ff" },
        { text: " ", color: "#ffffff" },
        { text: "}", color: "#29a3ff" },
      ],
      [
        { text: "else", color: "#3390ff" },
        { text: " ", color: "#ffffff" },
        { text: "{", color: "#ffffff" },
        { text: " ", color: "#ffffff" },
        { text: "keepCoding", color: "#ffffff" },
        { text: "(", color: "#19a2ff" },
        { text: ")", color: "#19a2ff" },
        { text: " ", color: "#ffffff" },
        { text: "}", color: "#3390ff" },
      ],
      [
        { text: "—  ", color: "#7aa0c9" },
        { text: "{", color: "#3390ff" },
        { text: " ", color: "#ffffff" },
        { text: "Code", color: "#ffffff" },
        { text: " ", color: "#ffffff" },
        { text: "It's", color: "#f9d65c" },
        { text: " ", color: "#ffffff" },
        { text: "fun", color: "#ff5c5c" },
        { text: "}", color: "#3390ff" },
      ],
    ],
    []
  );

  const flatTokens = useMemo(() => {
    const arr = [];
    lines.forEach((line, li) => {
      line.forEach((tok, ti) => {
        for (let i = 0; i < tok.text.length; i++) {
          arr.push({ ch: tok.text[i], color: tok.color, li, ti });
        }
      });
      if (li < lines.length - 1) {
        arr.push({ ch: "\n", color: "#ffffff", li, ti: -1 });
      }
    });
    return arr;
  }, [lines]);

  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPE_MS = 60;
  const BACKSPACE_MS = 25;
  const HOLD_DONE_MS = 10000;

  useEffect(() => {
    if (codeBoxDone) setTypingStarted(true);
  }, [codeBoxDone]);

  useEffect(() => {
    if (!typingStarted) return;
    let t;
    const total = flatTokens.length;

    if (!isDeleting) {
      if (count < total) {
        t = setTimeout(() => setCount((c) => c + 1), TYPE_MS);
      } else {
        t = setTimeout(() => setIsDeleting(true), HOLD_DONE_MS);
      }
    } else {
      if (count > 0) {
        t = setTimeout(() => setCount((c) => c - 1), BACKSPACE_MS);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(t);
  }, [typingStarted, count, isDeleting, flatTokens.length]);

  const rendered = useMemo(() => {
    const frags = [];
    for (let i = 0; i < count; i++) {
      const t = flatTokens[i];
      if (t.ch === "\n") frags.push(<br key={`br-${i}`} />);
      else
        frags.push(
          <span key={`ch-${i}`} style={{ color: t.color }}>
            {t.ch}
          </span>
        );
    }
    return frags;
  }, [count, flatTokens]);

  const imgInitial = { opacity: 0, scale: 0.85 };
  const imgAnimate = { opacity: 1, scale: 1 };
  const imgTransition = { duration: 0.8, ease: "easeOut" };

  const nameInitial = { opacity: 0, y: 8 };
  const nameAnimate = { opacity: 1, y: 0 };
  const nameTransition = { duration: 0.5, ease: "easeOut" };

  const skillsInitial = { opacity: 0, y: 6 };
  const skillsAnimate = { opacity: 1, y: 0 };
  const skillsTransition = { duration: 0.5, ease: "easeOut", delay: 0.1 };

  const boxInitial = { opacity: 0, y: 12, scale: 0.98 };
  const boxAnimate = { opacity: 1, y: 0, scale: 1 };
  const boxTransition = { duration: 0.6, ease: "easeOut" };

  return (
    <motion.div
      className={`container-fluid ${styles.profileCont}`}
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`${styles.content} d-flex flex-column align-items-center justify-content-center`}
        style={{ minHeight: "100vh", paddingTop: "70px" }}
      >
        {/* Image */}
        <div className="d-flex justify-content-center">
          <motion.img
            initial={imgInitial}
            animate={imgAnimate}
            transition={imgTransition}
            onAnimationComplete={() => setImageDone(true)}
            src={profileImg}
            alt="Profile"
            style={{
              borderRadius: "50%",
              height: "15rem",
              width: "15rem",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name slot (keeps layout, centers content) */}
        <div className={styles.nameSlot}>
          {imageDone && (
            <motion.p
              className="text-light m-0"
              initial={nameInitial}
              animate={nameAnimate}
              transition={nameTransition}
              onAnimationComplete={() => setNameDone(true)}
              // CHANGED: remove absolute, let slot center it
              style={{ fontWeight: 600 }}
            >
              {`${user.fname} ${user.lname}`}
            </motion.p>
          )}
        </div>

        {/* Skills slot */}
        <div className={styles.skillsSlot}>
          {imageDone && (
            <motion.div
              className="d-flex flex-wrap justify-content-center gap-3"
              initial={skillsInitial}
              animate={skillsAnimate}
              transition={skillsTransition}
            >
              {user.skills.map((skill, index) => (
                <span key={index} className="text-light">
                  {`${skill} ${index < user.skills.length - 1 ? "|" : ""}`}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Code box slot */}
        <div className={styles.codeBoxSlot}>
          {nameDone && (
            <motion.div
              // CHANGED: no absolute positioning; slot handles centering
              className={`${styles.opaqueBg} d-none d-lg-flex`}
              initial={boxInitial}
              animate={boxAnimate}
              transition={boxTransition}
              onAnimationComplete={() => setCodeBoxDone(true)}
            >
              <div className={styles.dashedBorder}>
                <div
                  style={{
                    fontFamily:
                      "JetBrains Mono, Fira Code, Menlo, Consolas, monospace",
                    fontSize: "1.05rem",
                    padding: "1.25rem",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {codeBoxDone && rendered}
                  {codeBoxDone && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "1em",
                        backgroundColor: "#ffffff",
                        marginLeft: "2px",
                        translateY: "2px",
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileContent;
