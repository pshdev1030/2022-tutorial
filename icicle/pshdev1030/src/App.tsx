import { css } from "@emotion/react";
import { useState } from "react";
import { IcicleChart } from "./components/IcicleChart";

function App() {
  return (
    <div
      css={css`
        width: 1000px;
        height: 700px;
      `}
    >
      <IcicleChart />
    </div>
  );
}

export default App;
