"use client";
import React from "react";

const ImageCard = () => {
  return (
    <div className="card1 mx-auto fade-in-section" 
      data-scroll 
      data-scroll-class="is-inview" 
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}
    >
      <div className="images-container">
        <div className="image-wrapper fade-in-section" 
          data-scroll 
          data-scroll-class="is-inview" 
          data-scroll-repeat
          style={{ animationDelay: "0.15s" }}>
          <img src="/assets/uni1.png" alt="University 1" className='img' />
        </div>
        <div className="image-wrapper fade-in-section" 
          data-scroll 
          data-scroll-class="is-inview" 
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}>
          <img src="/assets/uni2.png" alt="University 2" className='img' />
        </div>
        <div className="image-wrapper fade-in-section" 
          data-scroll 
          data-scroll-class="is-inview" 
          data-scroll-repeat
          style={{ animationDelay: "0.25s" }}>
          <img src="/assets/uni3.png" alt="University 3" className='img' />
        </div>
      </div>
      <style jsx>{`
        /* Fade-in animation styles */
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card1 {
          max-width: 90vw;
        }
        
        .images-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        
        .image-wrapper {
          flex: 1;
          min-width: 0;
        }
        
        .image-wrapper img {
          width: 100%;
          height: 30vh;
          object-fit: contain;
          aspect-ratio: 1;
        }
        
        @media (max-width: 768px) {
          .images-container {
            flex-direction: column;
            gap: 10px;
          }
          
          .image-wrapper {
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          
          .image-wrapper.is-inview {
            opacity: 1;
            transform: translateX(0);
          }
          
          .image-wrapper:nth-child(1) {
            transition-delay: 0.15s;
          }
          .image-wrapper:nth-child(2) {
            transition-delay: 0.25s;
          }
          .image-wrapper:nth-child(3) {
            transition-delay: 0.35s;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCard;