import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from './Utils/Loading';
import LineChart from './Utils/LineChart';
import MaterialTable from 'material-table';
import moment from 'moment';

import './AllTimeStats.scss';

const query = gql`
  query {
    results(countries: ["Eswatini"]) {
      date
      confirmed
      deaths
      recovered
    }
  }
`;

const AllTimeStats = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) return <Loading />
  if (error) return <div>{error.message}</div>

  // Enhanced Data
  const deathsChartArray = [];
  const confirmedChartArray = [];
  const recoveredChartArray = [];

  const enhancedData = data.results.map((item, i) => {
    let dailyDeaths = 0;
    let dailyConfirmed = 0;
    let dailyRecovered = 0;

    if (i > 0) {
      dailyDeaths = item.deaths - data.results[i - 1].deaths;
      dailyConfirmed = item.confirmed - data.results[i - 1].confirmed;
      dailyRecovered = item.recovered - data.results[i - 1].recovered;
    }

    item.date = moment(item.date).format('YYYY-MM-DD')

    deathsChartArray.push({ x: item.date, y: dailyDeaths })
    confirmedChartArray.push({ x: item.date, y: dailyConfirmed })
    recoveredChartArray.push({ x: item.date, y: dailyRecovered })

    return { ...item, dailyDeaths, dailyConfirmed, dailyRecovered }
  });

  const lineChartData = [
    { "id": "deaths", "color": "#ea423575", "data": deathsChartArray },
    { "id": "confirmed", "color": "#fabc0575", "data": confirmedChartArray },
    { "id": "recovered", "color": "#34a85375", "data": recoveredChartArray }
  ];

  const activeCasesStatusChartData = [
    {
      "id": "active cases", "color": "#fabc0599",
      "data": data.results.map((item => ({ y: item.confirmed - (item.recovered + item.deaths), x: item.date })))
    }
  ];

  return (
    <div>
      <div className="all-time-stats">

        <LineChart data={lineChartData} title="Linear Progression Since Day 1"
          hideXAxis={true} hideYAxis={true} className="line-chart-scrollable" />

        <div style={{ height: "4rem" }}></div>

        <LineChart data={activeCasesStatusChartData} title="Active Cases Evolution Since Day 1"
          hideXAxis={true} hideYAxis={true} className="line-chart-scrollable" />

        <div className="table-wrapper">
          <MaterialTable
            title="Table Summary Since Day 1"
            columns={[
              { title: 'Date...', field: 'date', type: 'date', defaultSort: "desc" },
              { title: 'Deaths', field: 'dailyDeaths', type: 'numeric' },
              { title: 'Confirmed', field: 'dailyConfirmed', type: 'numeric' },
              { title: 'Recovered', field: 'dailyRecovered', type: 'numeric' },
            ]}
            data={enhancedData}
            options={{ search: false, sorting: true }}
          />
        </div>

      </div>
    </div>
  )
}

export default AllTimeStats;