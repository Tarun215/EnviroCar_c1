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
    position: 'absolute',
    left: 20,
    top: 20,
    width: 400,
    zIndex: 100
  }

  export default function MapTitle() {
    return (
      <div style={styles}>
        <h4 style={{ marginTop:0 , marginBottom: 10}}>This map represents tracks from EnviroCar API for Munster</h4>
        {/* <p style={{marginTop:5, marginBottom: 5}}>Colors as shown on top right</p> */}
      </div>
    );
  }