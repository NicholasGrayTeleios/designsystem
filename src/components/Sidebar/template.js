import * as React from 'react';
import './sidebar.css';

const Template = function () {
  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top no-print" id="mainNav">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Solutions">
              <a className="nav-link" href="/#">
                <img 
                  src="https://teleiosmediastorage.blob.core.windows.net/asset-09d74907-63f6-4955-b9ac-fd04c4290c5a/home.png?sp=r&st=2021-05-14T15:13:05Z&se=2041-05-14T23:13:05Z&sv=2020-02-10&sr=b&sig=K%2Fv88nODGOMcAKOFdYYzOgmy3IDKzBUxVgI6BbMI9n4%3D"
                  alt="Home" 
                />
                <span className="nav-link-text">Home</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Manage Forms">
              <a className="nav-link" href="/#">
                <img 
                  src="https://teleiosmediastorage.blob.core.windows.net/asset-70571e04-bece-487b-b105-9ab64dabf326/mytasks.png?sp=r&st=2021-05-14T15:14:45Z&se=2041-05-14T23:14:45Z&sv=2020-02-10&sr=b&sig=falN9PjZeu9idxjPm%2Bd9EhxAjZXA9pnr%2F%2BQxwq%2F9UhA%3D"
                  alt="Tasks" 
                />
                <span className="nav-link-text">My Tasks</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Insights">
              <a className="nav-link" href="/#">
                <img src="https://teleiosmediastorage.blob.core.windows.net/asset-905a8ede-949f-4f97-986a-438fd1d29293/insights.png?sp=r&st=2021-05-14T15:14:05Z&se=2041-05-14T23:14:05Z&sv=2020-02-10&sr=b&sig=XytFcSMqURjLYgimRdcjBbMzEJw7AWk1NTdq6zO2yqU%3D" alt="Insights" />
                <span className="nav-link-text">Insights</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Data Sources">
              <a className="nav-link" href="/#">
                <img src="https://teleiosmediastorage.blob.core.windows.net/asset-0e6c48ac-5390-47bf-83e6-7b630cf0b452/DataSources.png?sp=r&st=2021-05-14T15:12:14Z&se=2041-05-14T23:12:14Z&sv=2020-02-10&sr=b&sig=6I1LSa80qUvFLLuFC3gZzDtHNXmTGNZDw5h7qXkLgD4%3D" alt="DataSources" />
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
