"use client";

import { useState, useEffect, useRef } from "react";

export default function CardNavigator() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Get the cards container
    const cardsContainer = document.querySelector<HTMLDivElement>(".ui-intro-cards");
    if (!cardsContainer) return;
    
    cardsContainerRef.current = cardsContainer;
    
    // Get the cards and store references
    const cardElements = cardsContainer.querySelectorAll<HTMLElement>(".ui-intro-card");
    cardsRef.current = Array.from(cardElements);
    setTotalCards(cardElements.length);
    setIsLoading(false);

    // Function to determine which card is currently in view
    const handleScroll = (): void => {
      if (!cardsContainer || isScrollingRef.current) return;
      
      const containerRect = cardsContainer.getBoundingClientRect();
      
      // Find which card is most visible in the viewport
      let bestVisibleIndex = 0;
      let maxVisibleWidth = 0;
      
      cardsRef.current.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        
        // Calculate visible area of the card
        const leftVisible = Math.max(cardRect.left, containerRect.left);
        const rightVisible = Math.min(cardRect.right, containerRect.right);
        const visibleWidth = Math.max(0, rightVisible - leftVisible);
        
        if (visibleWidth > maxVisibleWidth) {
          maxVisibleWidth = visibleWidth;
          bestVisibleIndex = index;
        }
      });
      
      setCurrentCard(bestVisibleIndex);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    cardsContainer.addEventListener("scroll", handleScroll);

    // Add scroll end detection
    const handleScrollEnd = () => {
      if (isScrollingRef.current) {
        isScrollingRef.current = false;
        handleScroll(); // Re-check which card is visible after scrolling ends
      }
    };

    cardsContainer.addEventListener("scrollend", handleScrollEnd);
    
    // Fallback for browsers without scrollend support
    const scrollListener = () => {
      if (scrollTimerRef.current !== undefined) {
        window.clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = window.setTimeout(handleScrollEnd, 150);
    };
    
    cardsContainer.addEventListener("scroll", scrollListener);

    // Clean up event listeners
    return () => {
      cardsContainer.removeEventListener("scroll", handleScroll);
      cardsContainer.removeEventListener("scroll", scrollListener);
      cardsContainer.removeEventListener("scrollend", handleScrollEnd);
      
      if (scrollTimerRef.current !== undefined) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  // Function to scroll to a specific card
  const scrollToCard = (index: number): void => {
    if (!cardsContainerRef.current || !cardsRef.current[index]) return;
    
    // Mark that we're starting programmatic scrolling
    isScrollingRef.current = true;
    setCurrentCard(index); // Update current card immediately for UI feedback
    
    // Get the target card's left position relative to the container
    const card = cardsRef.current[index];
    const container = cardsContainerRef.current;
    
    // Calculate the scroll position needed to show this card
    const cardOffsetLeft = card.offsetLeft - container.offsetLeft;
    
    // Scroll to the card
    container.scrollTo({
      left: cardOffsetLeft,
      behavior: "smooth"
    });
  };

  // Navigate to the next or previous card
  const navigateCards = (direction: number): void => {
    const newIndex = currentCard + direction;
    if (newIndex >= 0 && newIndex < totalCards) {
      scrollToCard(newIndex);
    }
  };

  return (
    <div className="flex justify-end mt-4 mb-8 mr-8 h-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigateCards(-1)}
          disabled={currentCard === 0 || isLoading}
          className={`font-bold cursor-pointer disabled:opacity-50 ${
            isLoading ? "invisible" : "visible"
          }`}
          aria-label="Previous card"
          aria-hidden={isLoading}
        >
          <svg className="fill-black dark:fill-white" width="24" height="28" viewBox="0 0 188 185" xmlns="http://www.w3.org/2000/svg">
            <path d="M91.9091 184.182L0.272728 92.5455L91.9091 0.909088L113 21.8182L57.6364 77.1818H187.364V107.909H57.6364L113 163.182L91.9091 184.182Z" />
          </svg>
        </button>
        
        <button
          onClick={() => navigateCards(1)}
          disabled={currentCard === totalCards - 1 || isLoading}
          className={`font-bold cursor-pointer disabled:opacity-50 ${
            isLoading ? "invisible" : "visible"
          }`}
          aria-label="Next card"
          aria-hidden={isLoading}
        >
          <svg className="fill-black dark:fill-white" height="24" viewBox="0 0 188 185" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="m95.4546 184.182-21.091-20.909 55.3634-55.364h-129.727v-30.7272h129.727l-55.3634-55.2727 21.091-21.000012 91.6364 91.636412z" />
          </svg>
        </button>
      </div>
    </div>
  );
}