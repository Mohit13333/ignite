"use client";
import React from "react";

export default function IgniteCareerCard() {
  return (
    <section className="ignite-section">
      <div className="ignite-container">
        {/* Left Content */}
        <div className="ignite-left">
          <div className="subtitle-wrapper">
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.25s" }}>
              <h1 className="header-title fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  background: "linear-gradient(90deg, #3F88BA, #161664)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: '0.1em',
                  animationDelay: "0.3s"
                }}>
                <img
                  src="/assets/3color.png"
                  alt="act"
                  width={15}
                  height={18}
                  style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
                /> ABOUT IGNITE'S CAREER    <img
                  src="/assets/3color.png"
                  alt="act"
                  width={15}
                  height={18}
                  style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
                />
              </h1>
            </div>
          </div>

          <h1 className="ignite-main-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR <span className="green-text">ADIPISCING</span>
          </h1>

          <p className="ignite-description  fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            Choosing us means partnering with experienced coaches who
            are dedicated to unlocking your potential.We offer personalized
            strategies, proven methods, and unwavering support to help
            you navigate challenges.
          </p>

          <h2 className="ignite-secondary-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR ADIPISCING
          </h2>

          <p className="ignite-short-description">
            Choosing us means partnering with
            experienced coaches who are dedicated to
            unlocking your potential.
          </p>
        </div>

        {/* Right Content */}
        <div className="ignite-right">
          <div className="image-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            <img
              src="/assets/person1.jpg"
              alt="Two professionals working together on laptop"
              className="main-image"
            />
          </div>

          {/* Separate Check items boxes */}
       <div
  className="check-boxes-container fade-in-section"
  data-scroll
  data-scroll-class="is-inview"
  data-scroll-repeat
  style={{ animationDelay: "0.3s" }}
>
  <div className="check-box d-flex justify-content-between">
    
    {/* First item */}
    <div className="d-flex align-items-start gap-2">
      <div className="check-circle">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 4.5L6 12L2.5 8.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span>Lorem ipsum dolor<br />sit amet, consectetur.</span>
    </div>

    {/* Second item */}
    <div className="d-flex align-items-start gap-2">
      <div className="check-circle">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 4.5L6 12L2.5 8.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span>Lorem ipsum dolor<br />sit amet, consectetur.</span>
    </div>

  </div>
</div>

        </div>
      </div>

      <style jsx>{`
        .ignite-section {
          padding: 60px 20px;
          font-family: 'Arial', sans-serif;
        }

        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-bottom: 25px;
        }

        .header-title {
          font-size: clamp(0.9rem, 3vw, 1.2rem);
          font-weight: bold;
          margin: 0;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00A491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 0.9rem;
          font-weight: 700;
          color: #2C5F7D;
          letter-spacing: 1px;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #233467;
          line-height: 1.1;
          margin: 0 0 25px 0;
        }

        .green-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1rem;
          color: #8B9DC3;
          line-height: 1.6;
          margin: 0 0 35px 0;
          max-width: 500px;
        }

        .ignite-secondary-title {
          font-size: 1.4rem;
          font-weight: 700;
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;          
          line-height: 1.2;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
          font-size: 1rem;
          color: #8B9DC3;
          line-height: 1.6;
          margin: 0;
          max-width: 400px;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .check-box {
          background: url("/assets/Rectangle154.png") no-repeat center/cover;
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex: 1;
          box-shadow: 0 4px 15px rgba(168, 197, 242, 0.3);
        }

        .check-circle {
          width: 28px;
          height: 28px;
          background: linear-gradient(180deg, #3F88BA 0%, #161664 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-box span {
          font-size: 0.9rem;
          color: #2C5F7D;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .ignite-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ignite-left {
            padding-right: 0;
          }

          .ignite-main-title {
            font-size: 2.4rem;
          }

          .check-boxes-container {
            flex-direction: flex;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .subtitle-wrapper {
            justify-content: center;
            text-align: center;
            width: 100%;
          }

          .header-title {
            font-size: clamp(0.8rem, 4vw, 1rem);
            white-space: nowrap;
            overflow: visible;
            padding: 0 8px;
          }

          .ignite-main-title {
            font-size: 2rem;
            text-align: center;
          }

          .ignite-secondary-title {
            font-size: 1.2rem;
            text-align: center;
          }

          .ignite-description,
          .ignite-short-description {
            text-align: center;
          }

          .check-boxes-container {
            padding: 20px;
          }

          .line {
            width: 15px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: clamp(0.7rem, 3.5vw, 0.9rem);
            padding: 0 4px;
          }

          .header-title img {
            width: 12px !important;
            height: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}