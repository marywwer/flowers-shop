import type { PropsWithChildren } from "react";
import styles from "./Styles.module.scss";

type TooltipProps = PropsWithChildren<{
  content: string;
  position?: "top" | "bottom";
}>;

export function Tooltip({
  content,
  children,
  position = "top",
}: TooltipProps) {
  const positionClass =
    position === "bottom"
      ? styles.tooltipBottom
      : styles.tooltipTop;

  return (
    <span className={styles.tooltipWrap}>
      {children}

      <span
        className={`${styles.tooltip} ${positionClass}`}
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
}