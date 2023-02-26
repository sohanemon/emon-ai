import { useEffect } from 'react';

const useChangeContentBg = (imageSrc) => {
  useEffect(() => {
    const containerDiv = document.querySelector('[data-rmiz-modal-content]');
    if (containerDiv) containerDiv.className = 'bg-black';

    return () => {};
  }, [imageSrc]);
};

export default useChangeContentBg;
