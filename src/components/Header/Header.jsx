import React from 'react';
import { Link } from 'react-router-dom';
import './Header.less';

export default function Header() {
  return (
    <header>
      <h1>
        <Link className="star-link" to="/">
          ENSTARS PARSERS
        </Link>
      </h1>
      <ul id="navbar">
        <li>
          <Link className="star-link" to="/howto">
            HOW TO USE
          </Link>
        </li>
        <li>
          <a
            className="star-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/myang5/enstars-parsers/issues"
          >
            KNOWN ISSUES
          </a>
        </li>
        <li>
          <a
            className="star-link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/gayandasleep"
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            className="star-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/myang5/enstars-parsers"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </header>
  );
}
