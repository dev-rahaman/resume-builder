import { useEffect, useState } from "react";

export const useFormLocalStorage = (key, initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Set initial data in localStorage and start the interval
    const setDataAndStartInterval = () => {
      localStorage.setItem(key, JSON.stringify(formData));
      const interval = setInterval(() => {
        localStorage.setItem(key, JSON.stringify(formData));
      }, 2000);
      return interval;
    };

    const interval = setDataAndStartInterval();

    return () => clearInterval(interval);
  }, [formData, key]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, [key]);

  return [formData, setFormData];
};
