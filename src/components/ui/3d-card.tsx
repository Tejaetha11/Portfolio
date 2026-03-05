// Card.tsx
"use client";
import React, { 
  createContext, 
  useState, 
  useContext, 
  useRef, 
  useEffect,
  ReactNode,
  HTMLAttributes,
  ElementType
} from "react";
import { cn } from "../../lib/utils";

interface MouseEnterContextValue {
  0: boolean;
  1: React.Dispatch<React.SetStateAction<boolean>>;
}

const MouseEnterContext = createContext<MouseEnterContextValue | undefined>(undefined);

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
  containerClassName,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  // --- Desktop: mouse tilt ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  // --- Mobile: gyroscope tilt ---
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouchDevice) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (!containerRef.current) return;
      const beta = e.beta ?? 0;
      const gamma = e.gamma ?? 0;

      // Increased sensitivity so tilt is clearly visible
      const x = Math.min(Math.max(gamma / 3, -15), 15);
      const y = Math.min(Math.max((beta - 40) / 3, -15), 15);

      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const startListening = () => {
      window.addEventListener("deviceorientation", handleOrientation);
    };

    // iOS 13+ requires explicit user permission via a tap
    if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
      // iOS — add a one-time tap listener to request permission
      const requestOnTap = async () => {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission();
          if (permission === "granted") {
            startListening();
          }
        } catch (err) {
          // silently fail
        }
        document.removeEventListener("touchstart", requestOnTap);
      };
      document.addEventListener("touchstart", requestOnTap, { once: true });
    } else {
      // Android — start immediately, no permission needed
      startListening();
    }

    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-4 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
        {...props}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "h-full w-auto [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardItemProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}

export const CardItem: React.FC<CardItemProps> = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return [context[0], context[1]];
};