"use client";
import React from "react";

export default function CareerForm() {
  return (
    <section className="career-section" 
      data-scroll 
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      {/* Title */}
      <h2 className="title fade-in-section" 
        data-scroll 
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.1s" }}
      >
        ADVANCE YOUR CAREER WITH{" "}
        <span>THE RIGHT OPPORTUNITIES</span>
      </h2>

      {/* Form */}
      <div className="career-form fade-in-section"
        data-scroll 
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}
      >
        <label>NAME*</label>
        <input type="text" placeholder="Enter your full name" />

        <label>EMAIL*</label>
        <input type="email" placeholder="Enter your email" />

        <label>CONTACT NO.*</label>
        <div className="phone-input">
          <img src="/assets/uae.png" alt="flag" width={25} height={35}/>
          <select>
            <option>+971</option>
          </select>
          <input type="tel" placeholder="Your phone number" />
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.25s" }}
          >
            <label>CURRENT LOCATION</label>
            <input type="text" placeholder="City, Country" />
          </div>
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <label>DEPARTMENT*</label>
            <input type="text" placeholder="Enter department" />
          </div>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.35s" }}
          >
            <label>POSITION/ROLE*</label>
            <input type="text" placeholder="Enter position" />
          </div>
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}
          >
            <label>SUBJECTS*</label>
            <select>
              <option>Select subject</option>
            </select>
          </div>
        </div>

        {/* Job type buttons */}
        <div className="job-type fade-in-section"
          data-scroll 
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.45s" }}
        >
          <button type="button" className="outlined">Full Time</button>
          <button type="button" className="outlined">Part Time</button>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}
          >
            <label>NOTICE PERIOD</label>
            <input type="text" placeholder="e.g. 1 month" />
          </div>
          <div className="fade-in-section"
            data-scroll 
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}
          >
            <label>YEARS OF EXPERIENCE*</label>
            <input type="text" placeholder="e.g. 3 years" />
          </div>
        </div>

        {/* File upload */}
        <div className="file-section fade-in-section"
          data-scroll 
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.6s" }}
        >
          <p className="file-note">
            Max Size: 1MB Support: PDF, DOC
          </p>
          <div className="file-upload">
            Drop Your CV Here
          </div>
        </div>

        <div className="text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}>
          <button
            className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
              background: "linear-gradient(90deg, #3F88BA, #161664)",
              color: 'white',
              padding: '0.8rem 1.8rem',
              border: 'none',
              transition: 'opacity 0.3s ease',
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              marginTop: '1rem'
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            Submit
            <div
              className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{
                width: 'clamp(1.5rem, 2vw, 2rem)',
                height: 'clamp(1.5rem, 2vw, 2rem)',
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                animationDelay: "0.75s"
              }}
            >
              <img src="/assets/arrowright.png" alt="arrright" width={12} height={12} />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .career-section {
          max-width: 850px;
          margin: auto;
          text-align: center;
          padding: 40px 20px;
          font-family: 'Arial', sans-serif;
        }

        .title {
          font-size: clamp(1.2rem, 2.4vw, 2rem);
          font-weight: 800;
          color: #161664;
          margin-bottom: 40px;
          line-height: 1.2;
        }
        .title span {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .career-form {
          margin-top: 30px;
          padding: 50px;
          border-radius: 30px;
          text-align: left;
          background: linear-gradient(135deg, #e8f4f8 0%, #f0f8f0 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        label {
          display: block;
          font-size: clamp(0.8rem, 1vw, 1rem);
          font-weight: 700;
          color: #161664;
          margin-top: 20px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        input, select {
          width: 100%;
          padding: 10px 0;
          border: none;
          border-bottom: 1px solid #161664;
          background: transparent;
          outline: none;
          font-size: clamp(0.9rem, 1.1vw, 1.1rem);
          color: #0d2344;
          font-family: 'Arial', sans-serif;
        }
        input::placeholder {
          color: #4b4b77;
          font-size: clamp(0.8rem, 1vw, 1rem);
        }
        select {
          color: #4b4b77;
          font-size: clamp(0.8rem, 1vw, 1rem);
        }

        .phone-input {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #161664;
          padding-bottom: 10px;
        }
        .phone-input img {
          width: 32px;
          height: 28px;
        }
        .phone-input select {
          border: none;
          background: #D9D9D980;
          border-radius:4px !important;
          font-size: clamp(0.8rem, 1vw, 1rem);
          color: #0d2344;
          width: auto;
          min-width: 60px;
        }
        .phone-input input {
          border: none;
          flex: 1;
          padding: 0;
        }

        .two-col {
          display: flex;
          gap: 30px;
          margin-top: 0;
        }
        .two-col div {
          flex: 1;
        }

        .job-type {
          margin: 25px 0;
          display: flex;
          gap: 15px;
        }
        .outlined {
          border: 1px solid #161664;
          background: transparent;
          border-radius: 25px;
          padding: 10px 25px;
          font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 1rem);
          cursor: pointer;
          transition: all 0.3s ease;
          color: #161664;
          font-family: 'Arial', sans-serif;
        }
        .outlined:hover {
          background: linear-gradient(90deg, #3F88BA, #161664);
          color: white;
        }

        .file-section {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .file-note {
          font-size: clamp(0.7rem, 0.9vw, 0.9rem);
          color: #161664;
          margin-bottom: 15px;
          text-align: center;
        }

        .file-upload {
          border: 1px solid #161664;
          padding: 20px 35px;
          border-radius: 40px;
          text-align: center;
          cursor: pointer;
          font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 1rem);
          background: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          color: #161664;
          min-width: 200px;
          display: inline-block;
        }
        .file-upload:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        .submit-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 35px;
        }

        .submit-btn {
          background: linear-gradient(90deg, #3F88BA, #161664);
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          border: none;
          font-weight: 700;
          font-size: clamp(0.9rem, 1.1vw, 1.1rem);
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-family: 'Arial', sans-serif;
          letter-spacing: 0.5px;
        }
        .submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
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

        @media (max-width: 768px) {
          .two-col {
            flex-direction: column;
            gap: 0;
          }
          
          .job-type {
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }
          
          .outlined {
            width: 150px;
          }
          
          .career-form {
            padding: 30px 25px;
          }
          
          .title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}