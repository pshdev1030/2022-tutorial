import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

interface containerInfo {
  width: undefined | number;
  height: undefined | number;
}

export const IcicleChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const [containerInfo, setContainerInfo] = useState<containerInfo>({
    width: undefined,
    height: undefined,
  });

  const { width, height } = containerInfo;

  useEffect(() => {
    if (!containerRef.current || !divRef.current) return;

    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();

    setContainerInfo({ width: containerWidth, height: containerHeight });
  }, []);

  return (
    <div
      ref={containerRef}
      css={css`
        height: 100%;
      `}
    >
      <div
        ref={divRef}
        css={css`
          width: ${width};
          height: ${height};
        `}
      ></div>
    </div>
  );
};
