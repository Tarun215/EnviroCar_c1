import React from "react";

const styles = {
    background: '#808080',
    borderRadius: 3,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    fontFamily:
      'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
    fontSize: '12px',
    lineHeight: 1.833,
    height: 210,
    padding: '10px',
    position: 'absolute',
    right : 20,
    top: 20,
    width: 180,
    zIndex: 100
  }

  export default function ColorScheme() {
    return (
      <div style={styles}>
        <p style={{ color:"#FF0000" }}>Consumption more than 4 l/hr</p>
        <p style={{ color:"#FF8000" }}>Consumption between 3-4 l/hr</p>
        <p style={{ color:"#FFFF00" }}>Consumption between 2-3 l/hr</p>
        <p style={{ color:"#80FF00" }}>Consumption between 1-2 l/hr</p>
        <p style={{ color:"#00FF00" }}>Consumption less than 1 l/hr</p>
        <p style={{ color:"#0000FF" }}>Consumption data unavailable</p>
      </div>
    );
  }