import { useState, useEffect } from 'react';

const useModal = (storageKey = 'hasSeenTourismEvent', delay = 1000) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ពិនិត្យមើលក្នុង localStorage ថាតើ user ធ្លាប់បិទ Modal នេះឬនៅ
    const hasSeen = localStorage.getItem(storageKey);

    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [storageKey, delay]);

  // Function សម្រាប់បិទ Modal និងកត់ត្រាក្នុង localStorage
  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem(storageKey, 'true');
  };

  // Function សម្រាប់បើក Modal (ករណីចង់បើក manually តាមប៊ូតុង)
  const openModal = () => {
    setIsOpen(true);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;