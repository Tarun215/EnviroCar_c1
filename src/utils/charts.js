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
  height: 210,
  padding: '10px',
  position: 'absolute',
  left: 20,
  bottom: 20,
  width: 500,
  zIndex: 100
}

const timestamp = new Date('Feb 19 2020').getTime()
const ONE_DAY = 86400000

const data = [
  { x: 1, y: 5 },  { x: 2, y: 5 },
  { x: 3, y: 0 },  { x: 4, y: 0 },
  { x: 5, y: 0 },  { x: 6, y: 5 },
  { x: 7, y: 10 }, { x: 8, y: 12 },
  { x: 9, y: 10 }, { x: 10, y: 0 },
  { x: 11, y: 0 },   { x: 12, y: 11 },
  { x: 13, y: 8 },   { x: 14, y: 15 },
  { x: 15, y: 13 },  { x: 16, y: 6 }
].map(e => ({x: e.x*ONE_DAY + timestamp, y: e.y}))

export default function Charts() {
  return (
    <div style={chart_styles}>
      <h2>No. of Tracks by date (Feb, March 2020)</h2>
      {/* <p>Out of 100</p> */}
      <XYPlot 
        xDomain={[timestamp + ONE_DAY, timestamp + 16 * ONE_DAY]}
        height={140} 
        width={480} 
        xType="time"
        >
        <XAxis tickValues={[timestamp + ONE_DAY, timestamp+6*ONE_DAY, timestamp+12*ONE_DAY, timestamp + 16 * ONE_DAY]}/>
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
    </div>
  );
}