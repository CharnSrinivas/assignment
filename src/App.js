import logo from './logo.svg';
import './App.css';
import React from 'react';

const time_to_show_ad = 10;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_img: false,
    }
  }

  componentDidMount() {
    const video = document.querySelector('video');
    video.addEventListener('loadeddata', () => {
      video.play();
      const interval_id = setInterval(() => {
        console.log("in interval");
        if (video && video.currentTime >= time_to_show_ad && video.currentTime <= time_to_show_ad + 1) {

          this.setState({ show_img: true});
        }
        if (this.state.show_img) { clearInterval(interval_id); }
      }, 1000)
    })
  }

  onAdClick = () => {
    document.querySelector('video').pause();
    window.open('https://j.mp/3IDGsfB', "_blank")
  }

  render() {

    return (
      <div id='main' style={{
        position: 'relative'
      }}>
        {
          this.state.show_img &&
          <img
            style={{
              position: 'absolute',
              left: "50%",
              top: "50%",
              transform: 'translate(-50%,-50%)',
              cursor: 'pointer',
              zIndex:3

            }}
            src='https://i.ibb.co/JjNsyft/one-removebg-preview.png'
            onClick={() => {

              document.querySelector('video').pause();
              window.open('https://j.mp/3IDGsfB', "_blank")
            }} />
        }
        <video src="/video.mp4" controls autoPlay >
        </video>
      </div>
    );
  }
}

export default App;
