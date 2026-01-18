'use client';

import { Button } from '@/components/ui/button';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { Target, Phone, ArrowRight } from 'lucide-react';

interface IndustryContactSectionProps {
  industryName: string;
  industryShortName: string;
  variant?: 'hero' | 'cta';
}

export default function IndustryContactSection({ industryName, industryShortName, variant = 'hero' }: IndustryContactSectionProps) {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog(`${industryName} Marketing Audit`);

  if (variant === 'cta') {
    return (
      <>
        <Button
          size="lg"
          className="px-8 py-4 text-lg"
          onClick={() => openDialog()}
        >
          <Target className="w-5 h-5 mr-2" />
          Get My {industryShortName} Analysis
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <ContactDialog
          isOpen={isOpen}
          onClose={closeDialog}
          title={`${industryName} Marketing Strategy`}
          description={`Get a custom marketing analysis designed specifically for your ${industryName.toLowerCase()} business.`}
          defaultService={selectedService}
          businessTypes={businessTypes.general}
        />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="px-8 py-4 text-lg"
          onClick={() => openDialog()}
        >
          <Target className="w-5 h-5 mr-2" />
          Get {industryShortName} Marketing Audit
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg"
          onClick={() => {
            selectService(`${industryName} Consultation`);
            openDialog();
          }}
        >
          <Phone className="w-5 h-5 mr-2" />
          {industryShortName} Consultation
        </Button>
      </div>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={`${industryName} Marketing Strategy`}
        description={`Get a custom marketing analysis designed specifically for your ${industryName.toLowerCase()} business.`}
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />
    </>
  );
}
