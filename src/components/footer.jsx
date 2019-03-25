import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = props => {
  const content = (
    <div className="footer">
      <div className="footer-links">
        <div className="linkSet">
          <p>Jobs</p>
          <Link to="/">Careers</Link>
          <Link to="/">Internships</Link>
          <Link to="/">Training</Link>
          <Link to="/">Resources</Link>
        </div>

        <div className="linkSet">
          <p>Meet Us</p>
          <Link to="/">About</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Partners</Link>
          <Link to="/">Blog</Link>
        </div>

        <div className="linkSet">
          <p>Troubleshooting</p>
          <Link to="/">Feedback</Link>
          <Link to="/">Refunds</Link>
          <Link to="/">Replacements</Link>
          <Link to="/">Shipping Policy</Link>
        </div>

        <div className="linkSet">
          <p>FAQ</p>
          <Link to="/">Questions</Link>
          <Link to="/">Answers</Link>
          <Link to="/">Suggestions</Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <Link to="/">Back to top</Link>
          <Link to="/">Help</Link>
          <Link to="/">Privacy & Terms</Link>
        </div>
        <p>
          2019 Copyright &copy; <span> Matshop.com</span>
        </p>
      </div>
    </div>
  );

  return content;
};

export default Footer;
