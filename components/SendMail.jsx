import React from 'react';
import Mail from './Mail';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">

    <div class="container">
      <h1>メールを送信しました！</h1>
      <Mail/>
    </div>
  </div>
);

export default Hero;
