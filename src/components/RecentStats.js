import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from './Utils/Loading';
import LineChart from './Utils/LineChart';
import moment from 'moment';
import MaterialTable from 'material-table';

import './RecentStats.scss';

const query = gql`
  query Results($date: String!){
    results(countries: ["Eswatini"], date: { gt: $date }) {
      date
      confirmed
      deaths
      recovered
    }
  }
`;

const RecentStats = () => {
  const today = moment();
  const twoWeeksDate = today.subtract('10', 'days').format("MM/DD/YYYY");

  const { data, loading, error } = useQuery(query, { variables: { date: twoWeeksDate } });


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

    const formattedDate = item.date.slice(5).replace("-", "/");

    item.date = moment(item.date).format('YYYY-MM-DD')

    deathsChartArray.push({ x: formattedDate, y: dailyDeaths })
    confirmedChartArray.push({ x: formattedDate, y: dailyConfirmed })
    recoveredChartArray.push({ x: formattedDate, y: dailyRecovered })

    return { ...item, dailyDeaths, dailyConfirmed, dailyRecovered }
  });

  const lineChartData = [
    {
      "id": "deaths",
      "color": "#ea423575",
      "data": deathsChartArray
    },
    {
      "id": "confirmed",
      "color": "#fabc0575",
      "data": confirmedChartArray
    },
    {
      "id": "recovered",
      "color": "#34a85375",
      "data": recoveredChartArray
    }
  ];

  return (
    <div>
      <div className="recent-stats">
        <LineChart data={lineChartData} title="Last 10 Days Data" />

        <div className="table-wrapper">
          <MaterialTable
            title="Table Summary Past 10 Days"
            columns={[
              { title: 'Date...', field: 'date', type: 'date', defaultSort: "desc" },
              { title: 'Deaths', field: 'dailyDeaths', type: 'numeric' },
              { title: 'Confirmed', field: 'dailyConfirmed', type: 'numeric' },
              { title: 'Recovered', field: 'dailyRecovered', type: 'numeric' },
            ]}
            data={enhancedData}
            options={{ search: false }}
          />
        </div>
      </div>
    </div>
  )
}

export default RecentStats;