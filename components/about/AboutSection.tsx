"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-page about-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-three__thumb about-photos">
              <div className="about-three__thumb--two about-three__thumb--reveal about-three__thumb--reveal-delay-1" data-wow-delay="200ms">
                <Image
                src="/about-assets/resources/about-3-2.jpg"
                 
                  alt="Smiling teammate working at desk"
                  width={760}
                  height={540}
                  priority
                />
              </div>
              <div className="about-three__thumb--one about-three__thumb--reveal about-three__thumb--reveal-delay-2" data-wow-delay="300ms">
                <Image
                 src="/about-assets/resources/about-3-1.jpg"
                  
                  alt="Team member collaborating on laptop"
                  width={520}
                  height={520}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-three__content">
              <div className="section-title">
                <h5 className="section-title__tagline section-title__tagline--has-dots">
                  about us
                </h5>
                <h2 className="section-title__title">
                  Get to know about BzAnalytics
                </h2>
              </div>

              <h4 className="about-three__content__heading">
                Digital Transformation Towards Web 4.0.
              </h4>
              <p className="about-three__content__text">
                We believe that a big part of our difference is the adaptability
                and integrability of our solutions. It was a seismic moment for
                BzAnalytics that the decision by our organisation to launch our
                global hub at Dubai, BzAnalytics Information Technology. Our
                primary goals and objectives - as we live in the &quot;Experience
                Economy&quot; brand loyalty is increasingly becoming a thing of the
                past. We have been evolving with complex business issues is a key
                market differentiator.
              </p>
              <div className="about-three__author">
                <div className="about-three__author__thumb">
                  <Image
                  src="/about-assets/resources/BEEGUM_PAMEELA.png"
                  alt="Beegum Pameela"
                  width={70}
                  height={70}
                />
                </div>
                <Image
                  src="/about-assets/resources/signature.png"
                  alt="signature"
                  width={223}
                  height={70}
                  className="about-three__author__signature"
                />
                <p className="about-three__author__meta">
                  Beegum Pameela - CEO, BzAnalytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
