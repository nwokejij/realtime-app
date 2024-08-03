import axios from 'axios';
import { Chart } from 'react-google-charts';
import React, { useState, useEffect } from 'react';

export function UserMessages (props){
    const [userGraph, setUserGraph] = useState(false);
    const [happyCount, setHappyCount] = useState(0);
    const [sadCount, setSadCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);

    const data = [
        ["Emoji", "Frequency"],
        ["Happy", happyCount],
        ["Sad", sadCount],
        ["Neutral", neutralCount]
      ];
      const options = {
        titlePosition: 'none',
        pieHole: 0,
        is3D: false,
      };
    const buttonStyle = {
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      padding: '15px 30px' 
    }
    const divStyle = {
      position: 'fixed',
      bottom: 10,
      left: '20%',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      alignself: 'flex-start'
    }
    //console.log("UserGraph outside handleClick", userGraph);

    const fetchData = () => {
        let happy = 0;
        let sad = 0;
        let neutral = 0;
      //console.log("User", props.name);
      axios.post('/messages').then((response) => {
        let messages = response.data.messages
        //console.log("Messages", messages)
        let userMessages = messages.filter(message => 
          message.user == props.name
        )
        //console.log("UserMessages", userMessages);
        userMessages.forEach(element => {
            if (element.sentiment > 0){
                happy += 1;
            }
            else if (element.sentiment < 0){
                sad += 1;
            } else{
                neutral += 1;
            }
            
        })
        setHappyCount(happy);
        setSadCount(sad);
        setNeutralCount(neutral);
    }).catch(error => {
        console.error('Error fetching messages:', error);
      });
    };

    const handleClick = () => {
      setUserGraph(prevUserGraph => !prevUserGraph);
    }

    useEffect(() => {
      if (userGraph) {
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
      }
    }, [userGraph]);

    return (
      <>
        <div>
          <button style={buttonStyle} onClick={handleClick}> Toggle Mood </button>
        </div>
        {userGraph && (
          <div style={divStyle}>
                  <h4 style= {{position: 'absolute', left: "130px", top: "25px", zIndex: 2}}> Personal Mood </h4>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width="100%"
              height="250px"
            />
          </div>
        )}
      </>
    );
  }