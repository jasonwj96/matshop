import React, { Component } from "react";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerLinks">
          <div className="linkSet">
            <p>Jobs</p>
            <a href="/">Careers</a>
            <a href="/">Internships</a>
            <a href="/">Training</a>
            <a href="/">Resources</a>
          </div>

          <div className="linkSet">
            <p>Meet Us</p>
            <a href="/">About</a>
            <a href="/">Terms</a>
            <a href="/">Partners</a>
            <a href="/">Blog</a>
          </div>

          <div className="linkSet">
            <p>Troubleshooting</p>
            <a href="/">Feedback</a>
            <a href="/">Refunds</a>
            <a href="/">Replacements</a>
            <a href="/">Shipping Policy</a>
          </div>

          <div className="linkSet">
            <p>FAQ</p>
            <a href="/">Questions</a>
            <a href="/">Answers</a>
            <a href="/">Suggestions</a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <a href="/">Back to top</a>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
          </div>
          <p>
            2019 Copyright &copy; <span> Matshop.com</span>
          </p>
        </div>
      </div>
    );
  }
}
