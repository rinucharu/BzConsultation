"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-three__thumb">
                            
                            <div className="about-three__thumb--one wow fadeInLeft animated" data-wow-delay="300ms">
                                <img src="/assets/images/resources/about-3-1.jpg" alt="girl working on computer" loading="lazy"/>
                            </div>
                            <div className="about-three__thumb--two wow fadeInLeft animated" data-wow-delay="200ms">
                                <img src="/assets/images/resources/about-3-2.jpg" alt="girl with mobile phone" loading="lazy"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="about-three__content">
                            
                            <div className="section-title">
                                <h5 className="section-title__tagline section-title__tagline--has-dots">about us</h5>
                                <h2 className="section-title__title">Get to know about BzAnalytics</h2>
                            </div>
                            
                            <h4 className="about-three__content__heading">Digital Transformation Towards Web 4.0.</h4>
                            <p className="about-three__content__text">
                                We believe that a big part of our difference is the adaptability and integrability of our solutions.It was a seismic moment for BzAnalytics that the decision by our organisation to launch our global hub at Dubai,BzAnalytics Information Technology.Our
                                primary goals and objectives - as we live in the "Experience Economy" brand loyalty is increasingly becoming a thing of the past.We have been evolving with complex business issues is a key market&nbsp;differentiator.
                            </p>
                            <div className="about-three__author">
                                <div className="about-three__author__thumb"><img src="/assets/images/team/BEEGUM_PAMEELA.png" alt="Beegum Pameela" loading="lazy"/></div>
                                <img src="/assets/images/resources/signature.png" alt="signature" width="223" loading="lazy"/>
                                <p className="about-three__author__meta">Beegum Pameela - CEO, BzAnalytics</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
