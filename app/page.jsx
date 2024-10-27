'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Introduction from '../components/Introduction';
import LoginDone from '../components/LoginDone';

export default function Index() {
  const { user, isLoading } = useUser();

  return (
    <>
      {!isLoading && !user && (
        <>
          <Introduction />
          <hr />
          <div className="hero ">
            <a 
              href="/api/auth/login" 
              className="btn btn-primary btn-block customButton"
            >
              <span className='customButtonText'>
                ログインして 性格診断を始める
              </span>
            </a>
          </div>
        </>
      )}
      {user && (
        <>
          <LoginDone />
          <hr />
          <div className="hero ">
            <a
              href="/api/auth/logout"
              className="btn btn-secondary btn-block customButton"
            >
                <span className='customButtonText'>
                  ログアウトする
                </span>
            </a>
          </div>
        </>
      )}
    </>
  );
}
