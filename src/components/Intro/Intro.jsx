import React from 'react';
import { init } from 'ityped';
import ComputerIcon from '@material-ui/icons/Computer';
import { useEffect, useRef } from 'react';
import './Intro.css';
const Intro = () => {
  // const textRef = useRef();
  const abouttextRef = useRef();
  useEffect(() => {
    // init(textRef.current, {
    //   showCursor: false,
    //   backDelay: 1500,
    //   backSpeed: 60,
    //   showCursor: true,
    //   strings: ['Designer', 'Developer', 'Content Writer'],
    // });
    init(abouttextRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 25,
      strings: [
        'I am web designer and developer. I have 5 years experience in web development',
      ],
    });
  }, []);
  return (
    <>
      <div className='intro' id='intro'>
        <div className='left'>
          <div className='imgContainer'>
            <img src='assets/man.png' alt='pic' />
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            <ComputerIcon id='cpicon' />
            <h2>Hi There, I'm</h2>
            <h1>Rizwan Minhas</h1>
            <h3>
              Freelancer <span>Developer / Designer</span>
            </h3>
            <div className='about'>
              <h3>About</h3>
              <p ref={abouttextRef}></p>
            </div>
          </div>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='downarrow' />
          </a>
        </div>
        <div class='custom-shape-divider-bottom-1636976926'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              class='shape-fill'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Intro;
