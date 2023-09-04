import './HeroSection.scss';
import React from 'react';

interface HeroSectionProps {
  clickHandler: (data: number) => void;
}

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <section id="hero" className="container">
      <button onClick={() => props.clickHandler(42)}>send data</button>
      <div className="hero-content">
        <h1>
          Discover <br />
          digital art & Collect NFTs
        </h1>
        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        <a href="index.html" className="btn fill">
          Get Started
        </a>
        <div className="statistics">
          <b>240k+</b>
          <b>100k+</b>
          <b>240k+</b>
          <div>Total Sale</div>
          <div>Auctions</div>
          <div>Artists</div>
        </div>
      </div>
      <div className="hero-card">
        <img src="./assets/hero-card-image.png" className="hero-card-image" alt="" />
        <div className="card-content">
          <div className="card-title">Space Walking</div>
          <div className="card-author">
            <img src="./assets/Avatar.png" alt="Animakid" />
            <span>Animakid</span>
          </div>
        </div>
      </div>
    </section>
  );
};
