"use client";

import { useState, useEffect, useRef } from "react";

export default function CardNavigator() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

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
      if (!cardsContainer) return;
      
    //   const scrollPosition = cardsContainer.scrollLeft;
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

    // Clean up event listener
    return () => {
      cardsContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to a specific card
  const scrollToCard = (index: number): void => {
    if (!cardsContainerRef.current || !cardsRef.current[index]) return;
    
    // Get the target card's left position relative to the container
    const card = cardsRef.current[index];
    const container = cardsContainerRef.current;
    
    // Calculate the scroll position needed to show this card
    // This accounts for any margins, padding, or gaps between cards
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
          className={`text-3xl font-bold cursor-pointer disabled:opacity-50 ${
            isLoading ? "invisible" : "visible"
          }`}
          aria-label="Previous card"
          aria-hidden={isLoading}
        >
          ←
        </button>
        
        <button
          onClick={() => navigateCards(1)}
          disabled={currentCard === totalCards - 1 || isLoading}
          className={`font-bold text-3xl cursor-pointer disabled:opacity-50 ${
            isLoading ? "invisible" : "visible"
          }`}
          aria-label="Next card"
          aria-hidden={isLoading}
        >
          →
        </button>
      </div>
    </div>
  );
}