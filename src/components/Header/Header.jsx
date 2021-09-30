import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Formatters, DEFAULT_FORMATTER } from '@constants';
import './Header.less';

const formatterLinks = Object.values(Formatters);

export default function Header() {
  const location = useLocation();
  const history = useHistory();

  const formatterType = location.pathname.split('/')[1];
  const linkValue = formatterType ? formatterType : DEFAULT_FORMATTER;

  const handleLinkChange = (e) => {
    const newLink = e.target.value;
    history.push(`/${newLink}`);
  };

  return (
    <header>
      <h1>
        <Link className="star-link" to="/">
          ENSTARS PARSERS
        </Link>
      </h1>
      <ul id="navbar">
        <li>
          <select value={linkValue} onChange={handleLinkChange}>
            {formatterLinks.map((link) => (
              <option key={link} value={link}>
                {link}
              </option>
            ))}
          </select>
        </li>
        {/* <li>
          <Link className="star-link" to="/howto">
            HOW TO USE
          </Link>
        </li> */}
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
            href="https://github.com/myang5/enstars-parsers/issues"
          >
            REPORT ISSUE
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
