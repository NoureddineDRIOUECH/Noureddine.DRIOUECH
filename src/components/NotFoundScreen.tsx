import React from "react";

export default function NotFoundScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        zIndex: 9999,
      }}
    >
      {/* ── 1. Embedded Font Face & Responsive CSS ──────────────────────── */}
      <style>{`
        @font-face {
          font-family: "Geist Mono:SemiBold";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("https://static.figma.com/font/GeistMono_wght__1") format("woff2");
        }

        .n404-wrapper * {
          box-sizing: border-box;
        }

        .n404-logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .n404-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
        }

        .n404-title {
          font-family: "Geist Mono:SemiBold", monospace;
          font-weight: 600;
          line-height: 1.05;
          margin: 0;
          padding: 0;
          text-align: center;
          background: linear-gradient(
            247.3282658084845deg,
            rgb(255, 255, 255) 2.5334%,
            rgba(255, 255, 255, 0.4) 93.612%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }

        .n404-divider {
          background-color: #ffffff;
          height: 1px;
          flex-shrink: 0;
        }

        .n404-message {
          font-family: "Geist Mono:SemiBold", monospace;
          font-weight: 600;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-align: center;
          user-select: none;
        }

        .n404-bottom-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .n404-button {
          font-family: "Geist Mono:SemiBold", monospace;
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 10px 22px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          pointer-events: auto;
          transition: all 0.2s ease;
        }

        .n404-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }

        /* Desktop Layout */
        @media (min-width: 641px) {
          .n404-logo {
            top: 80px;
            width: 233px;
            height: 40px;
          }
          .n404-content {
            width: 483px;
            gap: 44px;
          }
          .n404-title {
            font-size: 295.751px;
            letter-spacing: -24.6459px;
            margin-right: -24.6459px;
          }
          .n404-divider {
            width: 425px;
          }
          .n404-message {
            font-size: 24px;
            letter-spacing: -2px;
            margin-right: -2px;
          }
          .n404-bottom-group {
            gap: 22px;
          }
        }

        /* Mobile Layout */
        @media (max-width: 640px) {
          .n404-logo {
            top: 32px;
            transform: translateX(-50%) scale(0.75);
            transform-origin: top center;
          }
          .n404-content {
            width: min(calc(100% - 40px), 360px);
            gap: 28px;
          }
          .n404-title {
            font-size: clamp(120px, 42vw, 190px);
            letter-spacing: -0.09em;
            margin-right: -0.09em;
          }
          .n404-divider {
            width: 100%;
          }
          .n404-message {
            font-size: clamp(15px, 4.2vw, 19px);
            letter-spacing: -1.3px;
            margin-right: -1.3px;
          }
          .n404-bottom-group {
            gap: 16px;
          }
        }
      `}</style>

      <div className="n404-wrapper" style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* ── 2. Background Video (Layer 0) ───────────────────────────────── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 1,
            pointerEvents: "none",
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── 3. Header Logo (Layer 1 - Directly in front of video) ───────── */}
       

        {/* ── 4. Centered 404 Group (Layer 1 - Dead Center In Front) ──────── */}
        <main className="n404-content">
          {/* Large 404 Heading */}
          <h1 className="n404-title">404</h1>

          {/* Divider */}
          <div className="n404-divider" aria-hidden="true" />

          <div className="n404-bottom-group">
            {/* Error Message */}
            <p className="n404-message">
              The path may be broken, but the journey isn't. Let's get you back.
            </p>

            {/* Return Home Button */}
            <a href="/" className="n404-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Return to Home
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
