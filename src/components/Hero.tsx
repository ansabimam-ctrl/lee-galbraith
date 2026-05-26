'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const LOOK_IMAGES: Record<number, string[]> = {
  0: [
    '/Look1/EBI01402.jpg', '/Look1/EBI01403.jpg', '/Look1/EBI01404.jpg', '/Look1/EBI01405.jpg',
    '/Look1/EBI01407.jpg', '/Look1/EBI01408.jpg', '/Look1/EBI01409.jpg', '/Look1/EBI01410.jpg',
    '/Look1/EBI01411.jpg', '/Look1/EBI01412.jpg', '/Look1/EBI01413.jpg', '/Look1/EBI01415.jpg',
    '/Look1/EBI01416.jpg', '/Look1/EBI01417.jpg', '/Look1/EBI01418.jpg'
  ],
  1: [
    '/Look2/EBI01419.jpg', '/Look2/EBI01420.jpg', '/Look2/EBI01421.jpg', '/Look2/EBI01422.jpg',
    '/Look2/EBI01423.jpg', '/Look2/EBI01424.jpg', '/Look2/EBI01425.jpg', '/Look2/EBI01426.jpg',
    '/Look2/EBI01427.jpg', '/Look2/EBI01428.jpg', '/Look2/EBI01429.jpg', '/Look2/EBI01430.jpg',
    '/Look2/EBI01431.jpg', '/Look2/EBI01432.jpg', '/Look2/EBI01433.jpg'
  ],
  2: [
    '/Look3/EBI01434.jpg', '/Look3/EBI01435.jpg', '/Look3/EBI01436.jpg', '/Look3/EBI01437.jpg',
    '/Look3/EBI01438.jpg', '/Look3/EBI01439.jpg', '/Look3/EBI01440.jpg', '/Look3/EBI01441.jpg',
    '/Look3/EBI01442.jpg', '/Look3/EBI01443.jpg', '/Look3/EBI01444.jpg', '/Look3/EBI01445.jpg',
    '/Look3/EBI01446.jpg', '/Look3/EBI01448.jpg'
  ],
  3: [
    '/Look4/EBI01722.jpg', '/Look4/EBI01728.jpg', '/Look4/EBI01730.jpg', '/Look4/EBI01731.jpg',
    '/Look4/EBI01733.jpg', '/Look4/EBI01734.jpg', '/Look4/EBI01735.jpg', '/Look4/EBI01736.jpg',
    '/Look4/EBI01737.jpg', '/Look4/EBI01738.jpg', '/Look4/EBI01739.jpg', '/Look4/EBI01740.jpg'
  ],
  4: [
    '/Look5/EBI01746.jpg', '/Look5/EBI01748.jpg', '/Look5/EBI01750.jpg', '/Look5/EBI01751.jpg',
    '/Look5/EBI01752.jpg', '/Look5/EBI01754.jpg'
  ],
  5: [
    '/Look6/EBI01761.jpg', '/Look6/EBI01763.jpg', '/Look6/EBI01765.jpg', '/Look6/EBI01767.jpg',
    '/Look6/EBI01769.jpg', '/Look6/EBI01770.jpg', '/Look6/EBI01771.jpg', '/Look6/EBI01772.jpg'
  ],
  6: [
    '/Look7/EBI01773.jpg', '/Look7/EBI01774.jpg', '/Look7/EBI01775.jpg', '/Look7/EBI01776.jpg',
    '/Look7/EBI01777.jpg', '/Look7/EBI01778.jpg', '/Look7/EBI01780.jpg'
  ],
  7: [
    '/Look8/EBI01755.jpg', '/Look8/EBI01758.jpg', '/Look8/EBI01759.jpg', '/Look8/EBI01760.jpg'
  ],
  8: [
    '/Look9/a (5).JPG', '/Look9/a (6).JPG', '/Look9/a (7).JPG', '/Look9/a (8).JPG', '/Look9/a (9).JPG',
    '/Look9/b (10).JPG', '/Look9/b (5).JPG', '/Look9/b (6).JPG', '/Look9/b (7).JPG', '/Look9/b (8).JPG',
    '/Look9/b (9).JPG', '/Look9/c (4).JPG', '/Look9/c (5).JPG', '/Look9/c (6).JPG', '/Look9/c (7).JPG',
    '/Look9/c (8) - Copy.JPG', '/Look9/c (8).JPG', '/Look9/d (3).JPG', '/Look9/d (4).JPG', '/Look9/d (5).JPG',
    '/Look9/d (6).JPG', '/Look9/e (4).JPG', '/Look9/e (5).JPG', '/Look9/e (6).JPG', '/Look9/f (10).JPG',
    '/Look9/f (11).JPG', '/Look9/f (18).JPG', '/Look9/f (19).JPG', '/Look9/f (3).JPG', '/Look9/f (4).JPG',
    '/Look9/f (5).JPG', '/Look9/f (9) - Copy.JPG', '/Look9/f (9).JPG'
  ],
};

const Hero = () => {
  const [currentLook, setCurrentLook] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const stats = [
    { label: 'AGE', value: '51' },
    { label: 'HEIGHT', value: '5\'10"' },
    // { label: 'BUST/CHEST', value: '44" / 36"' },
    { label: 'WAIST', value: '32"' },
    // { label: 'WEIGHT', value: '10 STONE' },
    { label: 'HAIR', value: 'Brown/Grey' },
    { label: 'EYES', value: 'Blue/Green' },
    { label: 'GENDER', value: 'MALE' },
    { label: 'DRIVE', value: 'YES' },
    { label: 'ETHNICITY', value: 'ENGLISH' },
    { label: 'LOCATION', value: 'Manchester' },
    { label: 'ACCENT', value: 'British' },
  ];

  const looks = ['LOOK 1', 'LOOK 2', 'LOOK 3', 'LOOK 4', 'LOOK 5', 'LOOK 6', 'LOOK 7', 'LOOK 8', 'LOOK 9'];
  
  const currentImages = LOOK_IMAGES[currentLook] || Array(15).fill('/images/hero.png');
  const totalImages = currentImages.length;

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    setLightboxImageIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevLightboxImage = useCallback(() => {
    setLightboxImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextLightboxImage, prevLightboxImage, closeLightbox]);

  const handleNext = () => {
    setDirection('next');
    setCurrentImageIndex((prev) => (prev + 3) % totalImages);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentImageIndex((prev) => (prev - 3 + totalImages) % totalImages);
  };

  const handleLookClick = (index: number) => {
    setCurrentLook(index);
    setCurrentImageIndex(0);
    setDirection('next');
  };

  // Indices for the 3 images shown
  const idx1 = (currentImageIndex - 1 + totalImages) % totalImages;
  const idx2 = currentImageIndex;
  const idx3 = (currentImageIndex + 1) % totalImages;

  const formatCounter = () => {
    const start = currentImageIndex + 1;
    const end = Math.min(start + 2, totalImages);
    return `${start.toString().padStart(2, '0')}-${end.toString().padStart(2, '0')} / ${totalImages}`;
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.carouselContainer}>
        <div className={styles.statsOverlay}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statTag}>
              {stat.label} {stat.value}
            </div>
          ))}
        </div>

        <div className={styles.slideTrack}>
          {/* Previous Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`} onClick={() => openLightbox(idx1)}>
            <div key={`left-${idx1}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx1]} alt={`Look ${currentLook + 1} - Image ${idx1 + 1}`} fill className={`${styles.heroImage} ${styles.clickableImage}`} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx1]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
            <div className={styles.sideOverlay}></div>
          </div>

          {/* Current Slide */}
          <div className={styles.slide} onClick={() => openLightbox(idx2)}>
            <div key={`center-${idx2}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image 
                src={currentImages[idx2]} 
                alt={`Look ${currentLook + 1} - Image ${idx2 + 1}`}
                fill 
                className={`${styles.heroImage} ${styles.clickableImage}`}
                priority
              />
              <div className={styles.reflection}>
                <Image src={currentImages[idx2]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
          </div>

          {/* Next Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`} onClick={() => openLightbox(idx3)}>
            <div key={`right-${idx3}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx3]} alt={`Look ${currentLook + 1} - Image ${idx3 + 1}`} fill className={`${styles.heroImage} ${styles.clickableImage}`} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx3]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
            <div className={styles.sideOverlay}></div>
          </div>
        </div>

        <div className={styles.navbarPadding}></div>

        <div className={styles.blurBand}></div>

        <div className={styles.bottomControls}>
          <div className={styles.navigation}>
            <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous images group">
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <div className={styles.counter}>{formatCounter()}</div>
            <button onClick={handleNext} className={styles.navBtn} aria-label="Next images group">
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>

          <div className={styles.looksPagination}>
            {looks.map((look, index) => (
              <button 
                key={index} 
                onClick={() => handleLookClick(index)}
                className={`${styles.lookLink} ${index === currentLook ? styles.activeLook : ''}`}
              >
                {look}
              </button>
            ))}
          </div>
        </div>
        {isLightboxOpen && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxBg} onClick={closeLightbox}></div>
            
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
              &times;
            </button>
            
            <div className={styles.lightboxCounter}>
              {(lightboxImageIndex + 1).toString().padStart(2, '0')} / {totalImages.toString().padStart(2, '0')}
            </div>
            
            <button className={styles.lightboxNavLeft} onClick={prevLightboxImage} aria-label="Previous Image">
              &#8249;
            </button>
            
            <div className={styles.lightboxImageWrapper}>
              <Image 
                src={currentImages[lightboxImageIndex]} 
                alt={`Lightbox - Image ${lightboxImageIndex + 1}`}
                fill
                className={styles.lightboxImage}
              />
            </div>
            
            <button className={styles.lightboxNavRight} onClick={nextLightboxImage} aria-label="Next Image">
              &#8250;
            </button>
            
            <div className={styles.lightboxFooter}>
              ESC TO CLOSE - ARROWS TO NAVIGATE
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
