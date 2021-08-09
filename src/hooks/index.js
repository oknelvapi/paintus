import { useEffect } from 'react';

function usePreload() {

  useEffect(() => {
    let timerId = null;
    const bodyTag = document.body;
    timerId = setTimeout(() => bodyTag.classList.remove('is-preload'), 100);

    return () => {
      clearTimeout(timerId);
      bodyTag.classList.add('is-preload');
    };

  }, []);


  return null;
}


export { usePreload };
