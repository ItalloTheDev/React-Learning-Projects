// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About Mini <span>Blog</span>
      </h2>
      <p>
        This project consists of a blog made with React for the front-end and
        Firebase for the back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  );
};

export default About;
