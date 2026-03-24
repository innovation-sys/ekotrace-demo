import React from 'react';
import { Table } from 'antd';

const CarbonImpactTracker = () => {
  const dataSource = [
    {
      key: '1',
      metric: 'Total Carbon Emissions',
      value: '1000 kg CO2',
    },
    {
      key: '2',
      metric: 'Carbon Offset',
      value: '200 kg CO2',
    },
    {
      key: '3',
      metric: 'Net Carbon Impact',
      value: '800 kg CO2',
    },
  ];

  const columns = [
    {
      title: 'Metric',
      dataIndex: 'metric',
      key: 'metric',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  return (
    <div>
      <h1>Carbon Impact Tracker Dashboard</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CarbonImpactTracker;