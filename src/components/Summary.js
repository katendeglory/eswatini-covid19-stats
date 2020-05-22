import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Loading from './Utils/Loading';
import PieChart from './Utils/PieChart';

import './Summary.scss';

const query = gql`
  query {
    country(name: "Eswatini") {
      mostRecent {
        date
        confirmed
        deaths
        recovered
      }
    }

    countries {
      mostRecent {
        confirmed
        deaths
        recovered
      }
    }
  }
`;

const Summary = () => {

  const { data, loading, error } = useQuery(query);

  if (loading) return <Loading />
  if (error) return <div>{error.message}</div>

  const { confirmed, deaths, recovered } = data.country.mostRecent;
  const active = confirmed - (recovered + deaths);

  const { globalDeaths, globalconfirmed, globalRecovered } = data.countries.reduce((acc, item) => {
    acc.globalDeaths += item.mostRecent.deaths;
    acc.globalconfirmed += item.mostRecent.confirmed;
    acc.globalRecovered += item.mostRecent.recovered;
    return acc;
  }, { globalDeaths: 0, globalconfirmed: 0, globalRecovered: 0 });


  return (
    <div className="summary">
      <h2 className="summary-title">
        Eswatini Statistics Summary as of Today
      </h2>

      <div className="summary-grid">
        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Total Confirmed
          </h3>
          <h1 className="summary-item-value">
            {confirmed}
          </h1>
          <div className="confirmed summary-item-line sul-box-raised-2 sm"></div>
        </div>

        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Total Deaths
          </h3>
          <h1 className="summary-item-value">
            {deaths}
          </h1>
          <div className="dead summary-item-line sul-box-raised-2 sm"></div>
        </div>

        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Total Recovered
          </h3>
          <h1 className="summary-item-value">
            {recovered}
          </h1>
          <div className="recovered summary-item-line sul-box-raised-2 sm"></div>
        </div>

        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Total Active
          </h3>
          <h1 className="summary-item-value">
            {active}
          </h1>
          <div className="active summary-item-line sul-box-raised-2 sm"></div>
        </div>

        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Recovery Rate
          </h3>
          <h1 className="summary-item-value">
            {((recovered / confirmed) * 100).toFixed(2)}%
          </h1>
          <div className="recovery-rate summary-item-line sul-box-raised-2 sm"></div>
        </div>

        <div className="summary-item sul-box-raised-2">
          <h3 className="summary-item-title">
            Death Rate
          </h3>
          <h1 className="summary-item-value">
            {((deaths / confirmed) * 100).toFixed(2)}%
          </h1>
          <div className="death-rate summary-item-line sul-box-raised-2 sm"></div>
        </div>

      </div>

      <h2 className="summary-title">
        Chart Representation
      </h2>

      <div className="summary-chart-grid">
        <PieChart
          data={[
            { "id": "Deaths", "label": "Deaths", "value": deaths, "color": "#ea423575" },
            { "id": "Recovered", "label": "Recovered", "value": recovered, "color": "#34a85375" },
            { "id": "Active", "label": "Active", "value": active, "color": "#fabc0575" }
          ]}
          className="sul-box-raised-2"
          title="Eswatini Stats"
        />

        <PieChart
          data={[
            { "id": "Deaths", "label": "Deaths", "value": globalDeaths, "color": "#ea423575" },
            { "id": "Recovered", "label": "Recovered", "value": globalRecovered, "color": "#34a85375" },
            { "id": "Active", "label": "Active", "value": (globalconfirmed - (globalDeaths + globalRecovered)), "color": "#fabc0575" },
          ]}
          className="sul-box-raised-2"
          title="World Stats"
        />
      </div>

    </div>
  );
}

export default Summary;