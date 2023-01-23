// TradingViewWidget.js
import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_e444d") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          // autosize: true,
          width: 512,
          height: 512,
          symbol: "XETR:DAX",
          interval: "D",
          timezone: "Europe/Berlin",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_e444d",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        style={{
          textAlign: "center",
          margin: "1rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        dax index
      </div>
      <div style={{ margin: "1rem", padding: "1rem" }} id="tradingview_e444d" />
      {/*  <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/XETR-DAX/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">DAX chart</span>
        </a>{" "}
        by TradingView
      </div> */}
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ margin: "1rem" }}
          variant="contained"
          onClick={() => history.back()}
        >
          back
        </Button>
      </div>
    </div>
  );
}
