import React from "react";

const styles = {
    background: 'white',
    borderRadius: 3,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    fontFamily:
      'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
    fontSize: '12px',
    lineHeight: 2,
    height: 30,
    padding: '10px',
    position: 'relative',
    left: 20,
    top: 20,
    width: 100,
    zIndex: 100
  }

  const MapTitle = ({ month }) => {
    return (
      <div style={styles}>
        <h2 style={{ marginTop:0 , marginBottom: 10}}>{month}</h2>
      </div>
    );
  }

  export default MapTitle;