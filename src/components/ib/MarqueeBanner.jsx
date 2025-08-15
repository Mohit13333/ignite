"use client";

export default function MarqueeBanner() {
  return (
    <div className="marquee-container fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      <div className="marquee">
        <span>
          • EXPERT GUIDANCE &nbsp;&nbsp;
          • GRADE IMPROVEMENT &nbsp;&nbsp;
          • FREE STUDY RESOURCES &nbsp;&nbsp;
          • CAREER ADVICE &nbsp;&nbsp;
        </span>
        <span>
          • EXPERT GUIDANCE &nbsp;&nbsp;
          • GRADE IMPROVEMENT &nbsp;&nbsp;
          • FREE STUDY RESOURCES &nbsp;&nbsp;
          • CAREER ADVICE &nbsp;&nbsp;
        </span>
      </div>

      <style jsx>{`
        .marquee-container {
          background: linear-gradient(90deg, #3F88BA, #161664);
          overflow: hidden;
          padding:1rem;
          white-space: nowrap;
        }

        .marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }

        .marquee span {
          display: inline-block;
          font-weight: bold;
          font-size: 1.1rem;
          color: #d1e9ff;
          letter-spacing: 2px;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
