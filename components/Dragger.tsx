import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  return (
    <DraggableCardContainer className="relative  flex min-h-screen  justify-center overflow-clip">
      <div className="grid   grid-cols-1 items-center justify-center">
        <Container>
          <DraggableCardBody>
            <img
              src="/ser.jpg"
              alt="Some mountains"
              className="pointer-events-none relative z-10 h-80 w-full object-cover"
            />
            <p className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            The Only Strategy You’ll Ever Need
            </p>
          </DraggableCardBody>
        </Container>
        
      </div>
    </DraggableCardContainer>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center rounded-lg bg-gray-200 dark:bg-neutral-800">
      {children}
    </div>
  );
};
