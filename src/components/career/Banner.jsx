"use client";

export default function CareersBanner() {
    return (
        <section className="careers-banner fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
                animationDelay: "0.3s",
            }}>
            {/* Dark overlay */}
            <div className="dark-overlay"></div>

            <div className="overlay">
                <h2>CAREERS</h2>
                <p>HOME // CAREERS</p>
            </div>

            <style jsx>{`
          .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .fade-in-section.is-inview {
            opacity: 1;
            transform: translateY(0);
          }
          .careers-banner {
            position: relative;
            max-width: 90vw;
            width: 100%;
            height: calc(90vw / 2.98); /* desktop aspect ratio */
            margin: auto;
            border-radius: 12px;
            overflow: hidden;
            background-image: url("/assets/banner.jpg");
            background-size: cover;
            background-position: center;
          }

          /* Dark overlay */
          .dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 12px;
          }

          .overlay {
            position: absolute;
            bottom: 20px;
            left: 50px;
            color: white;
            z-index: 1;
          }

          h2 {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 700;
          }

          p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .careers-banner {
              height: 90vw; /* square card on mobile */
            }
            h2 {
              font-size: 1.4rem;
            }
            p {
              font-size: 0.8rem;
            }
          }
      `}</style>
        </section>
    );
}
