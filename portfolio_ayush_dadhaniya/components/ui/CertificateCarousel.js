import React, { useRef, useEffect, useState } from "react";

const CARD_WIDTH = 200;
const CARD_HEIGHT = 250
const CAROUSEL_RADIUS = 360;

export default function CertificateCarousel({ certificates = defaultCertificates }) {
  const carouselRef = useRef(null);
  const [theta, setTheta] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = certificates.length;
  const dragState = useRef({ dragging: false, startX: 0, lastTheta: 0 });

  useEffect(() => {
    // Position cards in a circle
    const angle = 360 / totalCards;
    const cards = carouselRef.current.querySelectorAll('.carousel-card');
    cards.forEach((card, index) => {
      const cardAngle = angle * index;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${CAROUSEL_RADIUS}px)`;
    });
  }, [totalCards]);

  const rotateCarousel = (newTheta) => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${newTheta}deg)`;
    }
  };

  useEffect(() => {
    rotateCarousel(theta);
    setCurrentIndex(Math.abs(Math.round(theta / (360 / totalCards))) % totalCards);
  }, [theta, totalCards]);

  const nextCard = () => setTheta((prev) => prev - 360 / totalCards);
  const prevCard = () => setTheta((prev) => prev + 360 / totalCards);

  // --- Drag/Swipe Support ---
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const anglePerCard = 360 / totalCards;

    const onMouseDown = (e) => {
      dragState.current.dragging = true;
      dragState.current.startX = e.clientX;
      dragState.current.lastTheta = theta;
      document.body.style.cursor = 'grabbing';
    };
    const onMouseMove = (e) => {
      if (!dragState.current.dragging) return;
      const dx = e.clientX - dragState.current.startX;
      setTheta(dragState.current.lastTheta + dx * 0.5); // Sensitivity
    };
    const onMouseUp = () => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      document.body.style.cursor = '';
      // Snap to nearest card
      setTheta((prev) => Math.round(prev / anglePerCard) * anglePerCard);
    };
    carousel.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch events
    const onTouchStart = (e) => {
      dragState.current.dragging = true;
      dragState.current.startX = e.touches[0].clientX;
      dragState.current.lastTheta = theta;
    };
    const onTouchMove = (e) => {
      if (!dragState.current.dragging) return;
      const dx = e.touches[0].clientX - dragState.current.startX;
      setTheta(dragState.current.lastTheta + dx * 0.5);
    };
    const onTouchEnd = () => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      setTheta((prev) => Math.round(prev / anglePerCard) * anglePerCard);
    };
    carousel.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // Wheel scroll support
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // vertical scroll
        if (e.deltaY > 0) nextCard();
        else prevCard();
      } else {
        // horizontal scroll
        if (e.deltaX > 0) nextCard();
        else prevCard();
      }
    };
    carousel.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      carousel.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      carousel.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      carousel.removeEventListener('wheel', onWheel);
    };
  }, [theta, totalCards]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8">
      <div className="relative" style={{ perspective: 1000, width: CARD_WIDTH, height: CARD_HEIGHT }}>
        <div
          ref={carouselRef}
          className="carousel absolute left-0 top-0 w-full h-full cursor-grab"
          style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s ease' }}
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className={`carousel-card absolute left-1/2 top-1/2`}
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginLeft: -CARD_WIDTH / 2,
                marginTop: -CARD_HEIGHT / 2,
                borderRadius: 20,
                background: 'rgba(30,30,60,0.95)',
                boxShadow: '0 0 20px rgba(157,0,255,0.18)',
                border: '1px solid rgba(157,0,255,0.25)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transition: 'box-shadow 0.3s',
              }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-28 object-contain rounded-t-xl"
                style={{ borderBottom: '1px solid rgba(157,0,255,0.12)' }}
              />
              <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 w-full">
                <h3 className="text-sm text-bold text-white mb-2 text-center drop-shadow-[0_2px_8px_rgba(236,72,153,0.25)]">{cert.name}</h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:from-pink-500 hover:to-purple-500 transition text-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}