import * as React from 'react';
import './sidebar.css';
import homeimg from './images/home.png';
import taskimg from './images/mytasks.png';
import insightimg from './images/insights.png';
import dataimg from './images/DataSources.png';

const Template = function () {
  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top no-print" id="mainNav">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Solutions">
              <a className="nav-link" href="/#">
                <img src={homeimg} alt="Home" />
                <span className="nav-link-text">Home</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Manage Forms">
              <a className="nav-link" href="/#">
                <img src={taskimg} alt="Tasks" />
                <span className="nav-link-text">My Tasks</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Insights">
              <a className="nav-link" href="/#">
                <img src={insightimg} alt="Insights" />
                <span className="nav-link-text">Insights</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Data Sources">
              <a className="nav-link" href="/#">
                <img src={dataimg} alt="DataSources" />
                <span className="nav-link-text">Data Sources</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export { Template as default };
