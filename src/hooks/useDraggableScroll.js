import { useRef, useEffect } from 'react';

export function useDraggableScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      slider.classList.remove('snap-x'); // Disable scroll snapping while dragging for smoothness
      slider.style.scrollBehavior = 'auto'; // Disable CSS smooth scroll if any
      Array.from(slider.children).forEach(child => child.style.pointerEvents = 'none'); // Prevent ghost image drag
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('snap-x'); // Restore snapping
      slider.style.scrollBehavior = ''; 
      Array.from(slider.children).forEach(child => child.style.pointerEvents = '');
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('snap-x'); // Restore snapping
      slider.style.scrollBehavior = '';
      Array.from(slider.children).forEach(child => child.style.pointerEvents = '');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast modifier
      slider.scrollLeft = scrollLeft - walk;
    };

    // Add cursor style for desktop
    slider.classList.add('cursor-grab');
    slider.classList.add('select-none'); // Prevent text selection while dragging

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return ref;
}
