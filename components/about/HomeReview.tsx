"use client";

import { useEffect, useState } from "react";

export default function HomeReview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Rohan Pannalkar",
      quoteLines: [
        "Velkur Management Pvt.Ltd. had a great ",
        "experience with BzConsultation for over a year.They  ",
        "sucessfully executed and maintained multiple",
        "website projects and delivered iOS and Android  ",
        "mobile applications as per our requirements.We",
        "higky recommend them for website and mobile ",
        "app  development. Best wishes for BzAnalytics!",
      ],
    },
    {
      name: "Sunil Jacob Mathews",
      quoteLines: [
        "To summarize my honnest review, I would describe",
        "them them as group of extermenly dedicated ",
        "professionals who work every day and night to",
        "achive their goals . They are a dediated team ",
        "that is commited to delivering projects on  ",
        "time without any failures . ",
        
      ],
    },
    {
      name: "Neethu Raju",
      quoteLines: [
        "Higly professional and hardworking team which",
        "takes into account  every single detail and works",
        "with termendous enthusiasm.",
      ],
    },
    {
      name: "Lahenshah K.s",
      quoteLines: [
        "Very professional and quick service!! I was about",
        "to complete my project on time, without any",
        "obstacle. The staff is very friendly and ",
        "passionate. Highly recommended!!",
        
      ],
    },
  ];

  const visibleTrack = [...testimonials, ...testimonials];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <>
      <section className="about-page slider-text-one">
        <div className="slider-text-one__animate-text">
          <span>
            &nbsp;Our satisfied <span>&amp;</span> happy clients.&nbsp;&nbsp;
          </span>
          <span>
            &nbsp;Our satisfied <span>&amp;</span> happy clients.&nbsp;&nbsp;
          </span>
        </div>
      </section>

      <section className="about-page testimonial-three">
        <div className="container">
          <div className="section-title">
            <h5 className="section-title__tagline section-title__tagline--has-dots">
              our Clients feedback
            </h5>
            <div className="testimonial-three__heading-row">
              <h2 className="section-title__title">
                What they 're taking
                <br /> about us
              </h2>
              <div className="testimonial-three__arrows">
                <button
                  type="button"
                  className="testimonial-three__arrow testimonial-nav-btn testimonial-three__arrow--left"
                  onClick={handlePrev}
                  aria-label="Show previous reviews"
                >
                  <span className="icon-left-arrow" />
                </button>
                <button
                  type="button"
                  className="testimonial-three__arrow testimonial-nav-btn testimonial-three__arrow--right"
                  onClick={handleNext}
                  aria-label="Show next reviews"
                >
                  <span className="icon-right-arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="testimonial-three__marquee">
            <div
              className="testimonial-three__track"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(calc(-${activeIndex} * (var(--review-card-width) + var(--review-gap))))`,
              }}
            >
              {visibleTrack.map((item, idx) => (
                <div className="testimonial-three__item" key={`${item.name}-${idx}`}>
                  <div className="testimonial-three__item__border"></div>
                  <div className="testimonial-three__item__top">
                    <h3 className="testimonial-three__item__name">{item.name}</h3>
                    <div className="testimonial-three__item__meta">
                      <div className="testimonial-three__item__meta__ratings">★★★★★</div>
                      <div className="testimonial-three__item__meta__reviews">4.9 Reviews</div>
                    </div>
                  </div>
                  <div className="testimonial-three__item__quote">
                    {item.quoteLines.map((line, lineIndex) => (
                      <span key={`${item.name}-line-${lineIndex}`}>
                        {line}
                        {lineIndex < item.quoteLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
