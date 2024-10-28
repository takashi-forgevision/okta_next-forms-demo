import React from 'react';
import Check from './svg/Check';

const LoginDone = () => (
  <div className="hero my-5 text-center" data-testid="hero">

    <div class="container">
      <h1>性格診断終了！</h1>
      <h3>もう一度行う場合には再度ログインしてください。</h3>
      <Check/>
    </div>
  </div>
);

export default LoginDone;
