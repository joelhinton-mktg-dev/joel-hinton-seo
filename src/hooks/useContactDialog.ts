import { useState, useCallback } from 'react';

export const useContactDialog = (defaultService: string = '') => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(defaultService);

  const openDialog = useCallback((service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    // Reset to default service after a delay to avoid flickering
    setTimeout(() => setSelectedService(defaultService), 300);
  }, [defaultService]);

  const selectService = useCallback((service: string) => {
    setSelectedService(service);
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    selectedService,
    openDialog,
    closeDialog,
    selectService
  };
};