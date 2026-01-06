"use client";

import React, { useState, useEffect } from 'react';

/**
 * Senior Frontend Engineer Note: 
 * Optimized for Next.js App Router. Uses Inline Styles for rapid deployment, 
 * zero external dependencies, and a clean mobile-first architecture.
 */

export default function DeliveryMitraDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Status Animation: Pulsing effect for the "Agent Online" indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Design Tokens
  const theme = {
    orange: "#FF8C00",
    green: "#2ECC71",
    bgGray: "#F8F9FA",
    white: "#FFFFFF",
    textDark: "#2D3436",
    textMuted: "#636E72",
    shadow: "0 10px 25px rgba(0,0,0,0.08)"
  };

  return (
    <div style={{
      backgroundColor: theme.bgGray,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      margin: 0,
      padding: 0
    }}>
      {/* Mobile-First Layout Container */}
      <div style={{
        width: "100%",
        maxWidth: "500px",
        minHeight: "100vh",
        backgroundColor: theme.white,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: "0 0 40px rgba(0,0,0,0.03)"
      }}>
        
        {/* Header Section */}
        <header style={{
          padding: "40px 20px 20px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={{ width: "80px", height: "auto", marginBottom: "16px" }}
          />
          <h1 style={{
            color: theme.orange,
            fontSize: "26px",
            fontWeight: "800",
            margin: "0",
            letterSpacing: "-0.5px"
          }}>
            mishTee Delivery Mitra
          </h1>
          
          {/* Status Indicator */}
          <div style={{
            display: "flex",
            alignItems: "center",
            marginTop: "12px",
            backgroundColor: "rgba(46, 204, 113, 0.1)",
            padding: "6px 16px",
            borderRadius: "50px",
            border: `1px solid rgba(46, 204, 113, 0.2)`
          }}>
            <div style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: theme.green,
              marginRight: "10px",
              opacity: isPulsing ? 1 : 0.4,
              transition: "opacity 0.6s ease-in-out",
              boxShadow: isPulsing ? `0 0 10px ${theme.green}` : "none"
            }} />
            <span style={{ 
              color: theme.green, 
              fontSize: "14px", 
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              Agent Online
            </span>
          </div>
        </header>

        {/* Task Dashboard Section */}
        <main style={{ padding: "0 24px", flex: 1 }}>
          <div style={{ marginTop: "20px" }}>
            <p style={{ 
              color: theme.textMuted, 
              fontSize: "14px", 
              fontWeight: "600", 
              marginBottom: "16px",
              textTransform: "uppercase" 
            }}>
              Active Task
            </p>
            
            {/* Task Card */}
            <div style={{
              backgroundColor: theme.white,
              borderRadius: "20px",
              padding: "24px",
              boxShadow: theme.shadow,
              border: "1px solid #F1F2F6",
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "12px", color: theme.textMuted, fontWeight: "500" }}>Deliver to:</span>
                  <h2 style={{ 
                    margin: "4px 0 0 0", 
                    fontSize: "22px", 
                    color: theme.textDark, 
                    fontWeight: "800" 
                  }}>
                    Arjun Mehta
                  </h2>
                </div>
                <div style={{
                  backgroundColor: "#FFF3E0",
                  color: theme.orange,
                  fontSize: "12px",
                  fontWeight: "700",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  height: "fit-content"
                }}>
                  ID: #MT-992
                </div>
              </div>

              <div style={{ 
                borderTop: "1px dashed #DFE6E9", 
                paddingTop: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px"
              }}>
                <span style={{ fontSize: "20px" }}>📍</span>
                <p style={{ 
                  margin: 0, 
                  color: theme.textMuted, 
                  fontSize: "15px", 
                  lineHeight: "1.4" 
                }}>
                  12th Floor, DesignSpark Towers,<br />
                  International Tech Park, Phase 2
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Action Footer */}
        <footer style={{
          padding: "24px",
          backgroundColor: theme.white,
          borderTop: "1px solid #F1F2F6"
        }}>
          <button 
            onClick={() => alert("Connecting to Navigation Service...")}
            onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.96)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
            style={{
              width: "100%",
              backgroundColor: theme.orange,
              color: theme.white,
              padding: "20px",
              borderRadius: "16px",
              border: "none",
              fontSize: "18px",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(255, 140, 0, 0.3)",
              transition: "all 0.2s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <span>🚀</span> Start Navigation
          </button>
        </footer>
      </div>
    </div>
  );
}
