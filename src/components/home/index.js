import React from 'react';
import './home.css';
import Particles from "react-tsparticles";
import ETH from '../../assets/ETH.png';
import BTC from '../../assets/BTC.png';

function Home() {
    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <>
        <div className='hero_section'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        onHover: {
                        enable: true,
                        mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    },
                    detectRetina: true,
                }}
            />
            <p className='hero_head'>Blockchain Society</p>
            <p className='hero_head'>IIT Roorkee</p>
            <p className='hero_quote'>“Some quote if we have to add or additional info”</p>
            <img src={ETH} className='eth_logo'/>
            <img src={BTC} className='btc_logo'/>
        </div>
    </>
  );
}

export default Home;
