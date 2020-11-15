import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faOrcid,
    faTwitter,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import classes from './Socials.module.css';
import GoogleScholarLogo from '../../assets/gsLogo2.png';

  export default function SocialFollow() {
    return (
      <div className={classes.SocialContainer}>
        {/* <h3>Social Follow</h3> */}
        <a href="https://www.youtube.com/c/jamesqquick"
        className={[classes.Social, classes.Github].join(' ')}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/"
        className={[classes.Social, classes.Linkedin].join(' ')}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" 
        className={[classes.Social, classes.Twitter].join(' ')}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
        className={[classes.Social, classes.Orcid].join(' ')}>
        <FontAwesomeIcon icon={faOrcid} size="2x" />
        </a>
        {/* <a href="scholar.google.com"
        className={[classes.Social, classes.GoogleScholar].join(' ')}>
          <img src={GoogleScholarLogo} width="40px" alt="Google-Scholar" />
        </a> */}
      </div>
    );
  }
