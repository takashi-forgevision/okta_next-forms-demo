import React from 'react';
import Image from 'next/image'

const Introduction = () => (
  <div className="hero text-center" data-testid="hero">
    <div class="container">
      <h1>Okta CIC Formsで楽しむ 8種類の性格診断アプリ</h1>
        <br/>
        <h2>使い方</h2>
        <p>アプリにログインして質問に答えるだけ！</p>
        <p>※本アプリは Okta CIC Forms のテスト用アプリの為、ログイン後に何か出来るわけではありません。もう一度試したい場合は再度ログインしてください。</p>

        <h2>Okta CICを活用！</h2>
        <p>Okta CIC の Forms 機能を活用し、使いやすさとセキュリティの両立を実現。ユーザーのログイン情報は安心・安全に管理されます。</p>

        <h2>セキュリティとプライバシー</h2>
        <p>あなたの個人情報は"Auth0 by Okta"によって厳重に管理され、他の目的には使用されません。</p>
    </div>
  </div>
);

export default Introduction;
