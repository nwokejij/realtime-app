import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';


export const Graph = () => {
  const [happyCount, setHappyCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);

  const data = [
    ["Emoji", "Frequency"],
    ["Happy", happyCount],
    ["Sad", sadCount],
    ["Neutral", neutralCount]
  ];
  const divStyle = {
    position: 'fixed',
    bottom: 10,
    left: '20%',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    alignself: 'flex-start'
  }

  const options = {
    titlePosition: 'none',
    pieHole: 0,
    is3D: false,
  };
  
  const fetchData = () => {
    axios.post('/messages').then((response) => {
      const chats = response.data.messages;
      let happy = 0;
      let sad = 0;
      let neutral = 0;

      for (const chat of chats) {
        if (chat.sentiment > 0) {
          happy += 1;
        } else if (chat.sentiment === 0) {
          neutral += 1;
        } else {
          sad += 1;
        }
      }

      setHappyCount(happy);
      setSadCount(sad);
      setNeutralCount(neutral);
    }).catch(error => {
      console.error('Error fetching messages:', error);
    });
  };

  useEffect(() => {
    fetchData(); // Fetch initial data
    const interval = setInterval(fetchData, 1000); // Fetch data every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div style={ divStyle }>
      <h4 style= {{position: 'absolute', left: "130px", top: "25px", zIndex: 2}}> Overall Mood </h4>
    <Chart
      chartType="PieChart"
      data={data} 
      options={options}
      width="100%"
      height="250px"
    />
    </div>
  );
};


  export default Graph;


