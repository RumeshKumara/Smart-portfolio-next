import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" href="/contact">
        <p className="button__text">
          <span style={{ "--index": 0 }}>H</span>
          <span style={{ "--index": 1 }}>I</span>
          <span style={{ "--index": 2 }}>R</span>
          <span style={{ "--index": 3 }}>E</span>
          <span style={{ "--index": 4 }}> </span>
          <span style={{ "--index": 5 }}>M</span>
          <span style={{ "--index": 6 }}>E</span>
          <span style={{ "--index": 7 }}> </span>
          <span style={{ "--index": 8 }}>C</span>
          <span style={{ "--index": 9 }}>L</span>
          <span style={{ "--index": 10 }}>I</span>
          <span style={{ "--index": 11 }}>C</span>
          <span style={{ "--index": 12 }}>K</span>
          <span style={{ "--index": 13 }}></span>
          <span style={{ "--index": 14 }}>B</span>
          <span style={{ "--index": 15 }}>T</span>
          <span style={{ "--index": 16 }}>N</span>
        </p>
        <div className="button__circle" >
          <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon" width={20}>
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 14 15" fill="none" width={20} xmlns="http://www.w3.org/2000/svg" className="button__icon button__icon--copy">
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #ec4899 ;
    color: #fff;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition:
      background 300ms,
      transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    font-size: 18px;
    inset: 0;
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(19deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 60px;
    height: 60px;
    overflow: hidden;
    background: #fff;
    color: #ec4899 ;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }
  

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default Button;
