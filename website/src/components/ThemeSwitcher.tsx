import React, { useEffect } from 'react';

export const ThemeSwitcher = () => {
  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.add('dark-theme');
    document.getElementsByTagName('html')[0].setAttribute('style', 'color-scheme : dark;');
  }, []);
  return (
    <a onClick={() => {}}>
      <button>
        <i
          className="fas fa-palette"
          onClick={() => {
            let isLightTheme = document.getElementsByTagName('html')[0].classList.contains('light-theme');
            document.getElementsByTagName('html')[0].classList.toggle('light-theme');
            document.getElementsByTagName('html')[0].classList.toggle('dark-theme');
            document.getElementsByTagName('html')[0].setAttribute('style', `color-scheme : ${isLightTheme ? 'dark' : 'light'};`);
          }}
        ></i>
      </button>
      <span className="px-2 small-screen-only">Switch Theme</span>
    </a>
  );
};