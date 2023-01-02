import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const focusInExpand = css`
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
`;


const AnimatedElement = ({ children, animation, element }) => {
  const elementRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      });
    });
    observer.observe(elementRef.current);
    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);

  return React.createElement(
    element,
    {
      ref: elementRef,
      style: {
        animation: isAnimated ? css`${focusInExpand} 1s ease-in-out` : 'none',
      },
    },
    children
  );
};

export { focusInExpand, AnimatedElement };
