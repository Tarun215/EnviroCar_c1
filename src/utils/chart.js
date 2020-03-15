import React from "react";

import { VerticalBarSeries, XAxis, XYPlot, YAxis } from "react-vis";

const chart_styles = {
  background: 'white',
  borderRadius: 3,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  fontFamily:
    'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
  fontSize: '12px',
  lineHeight: 1.833,
  height: 310,
  padding: '10px',
  position: 'absolute',
  left: 20,
  bottom: 20,
  width: 500,
  zIndex: 100
}

const timestamp = new Date('Oct 3 2019').getTime()
const ONE_MONTH = 86400000 * 30;

const data = [
    { x: '1', y: 49 },
    { x: '2', y: 31 },
    { x: '3', y: 16 },
    { x: '4', y: 1 },
    { x: '5', y: 3 }
  ].map(e => ({x: e.x*ONE_MONTH + timestamp, y: e.y}))


export default function Charts({highlight, highlightedMonth}) {

    const final_data = data.map(d => ({
        ...d, color: d.x === highlightedMonth ? '#19CDD7' : '#125C77'
      }));

  return (
    <div style={chart_styles}>
      <h2>No. of Tracks by month (Nov, Dec, Jan, Feb, March)</h2>
      <XYPlot 
        xDomain={[timestamp + ONE_MONTH, timestamp + 5 * ONE_MONTH]}
        height={240} 
        width={480} 
        xType="time"
        onMouseLeave={() => highlight('')}
        >
        <XAxis />
        {/* <XAxis tickValues={[timestamp + ONE_MONTH, timestamp+2*ONE_MONTH, timestamp+3*ONE_MONTH, timestamp + 4 * ONE_MONTH, timestamp + 5 * ONE_MONTH]}/> */}
        <YAxis />
        <VerticalBarSeries colorType="literal" data={final_data} onValueMouseOver={d => highlight(d.x)} />
      </XYPlot>
    </div>
  );
}