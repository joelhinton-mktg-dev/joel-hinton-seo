'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import ContactDialog from './ContactDialog';
import { businessTypes } from '@/types/contact-forms';

interface ContactButtonProps {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "professional" | "cta";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  defaultService?: string;
  dialogTitle?: string;
  dialogDescription?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className,
  defaultService = "Free Marketing Consultation",
  dialogTitle = "Get Your Free Marketing Consultation",
  dialogDescription = "Let's discuss your business goals and create a custom marketing strategy."
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </Button>
      <ContactDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={dialogTitle}
        description={dialogDescription}
        defaultService={defaultService}
        businessTypes={businessTypes.general}
      />
    </>
  );
};

export default ContactButton;
