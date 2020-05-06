import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './Summary.scss';
import Loading from './Utils/Loading';
import PieChart from './Utils/PieChart';

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
  }
`;

const Summary = () => {

  const { data, loading, error } = useQuery(query);

  console.log(data);

  if (loading) return <Loading />
  if (error) return <div>{error.message}</div>

  const { confirmed, deaths, recovered } = data.country.mostRecent;
  const active = confirmed - (recovered + deaths);

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
      </div>

      <div className="summary-chart-container">
        <PieChart
          data={
            [
              {
                "id": "Deaths",
                "label": "Deaths",
                "value": deaths,
                "color": "#ea423575"
              },
              {
                "id": "Recovered",
                "label": "Recovered",
                "value": recovered,
                "color": "#34a85375"
              },
              {
                "id": "Active",
                "label": "Active",
                "value": active,
                "color": "#fabc0575"
              }
            ]
          }
        />
      </div>

    </div>
  );
}



export default Summary;