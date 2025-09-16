import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { ContactFormData, contactFormSchema, BusinessTypeOption } from '@/types/contact-forms';
import { trackFormSubmission, trackConversion, trackLead } from '@/lib/analytics';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  defaultService: string;
  businessTypes: BusinessTypeOption[];
  onServiceSelect?: (service: string) => void;
}

export const ContactDialog: React.FC<ContactDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  defaultService,
  businessTypes,
  onServiceSelect
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { selectedService: defaultService }
  });

  const onSubmitForm = async (data: ContactFormData) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xrbarnbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessType: data.businessType,
          selectedService: data.selectedService,
          marketingChallenge: data.marketingChallenge
        })
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        
        // Track form submission and conversion
        trackFormSubmission(
          'contact_dialog',
          window.location.pathname,
          data.businessType,
          defaultService
        );
        
        trackConversion('contact_form', 1, 'USD');
        
        trackLead(
          window.location.pathname,
          'contact',
          data.businessType
        );
        
        if (process.env.NODE_ENV === 'development') {
          console.log("Contact form submitted successfully:", data);
        }
        
        setTimeout(() => {
          setSubmitSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      setSubmitError('There was an error submitting the form. Please try again.');
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setSubmitError('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setSubmitSuccess(false);
      setSubmitError('');
      reset({ selectedService: defaultService });
      onClose();
    }
  };

  // Handle service selection from parent component
  React.useEffect(() => {
    if (onServiceSelect) {
      setValue('selectedService', defaultService);
    }
  }, [defaultService, setValue, onServiceSelect]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}
        
        {submitSuccess ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Thank you for your submission!</h3>
            <p className="text-muted-foreground">Your message has been sent successfully. We'll contact you within 24 hours to schedule your consultation.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit(onSubmitForm)} 
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                {...register("name")}
                placeholder="Your full name"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                {...register("email")}
                placeholder="your@email.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                {...register("phone")}
                placeholder="(555) 123-4567"
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Select onValueChange={(value) => setValue('businessType', value, { shouldValidate: true })}>
                <SelectTrigger className={errors.businessType ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessType && <p className="text-sm text-destructive">{errors.businessType.message}</p>}
            </div>

            <div>
              <Label htmlFor="selectedService">Selected Service</Label>
              <Input
                id="selectedService"
                name="selectedService"
                {...register("selectedService")}
                readOnly
                className="bg-muted"
              />
            </div>

            <div>
              <Label htmlFor="marketingChallenge">Current Marketing Challenge</Label>
              <Textarea
                id="marketingChallenge"
                name="marketingChallenge"
                {...register("marketingChallenge")}
                placeholder="Tell us about your current marketing challenges..."
                rows={3}
                className={errors.marketingChallenge ? 'border-destructive' : ''}
              />
              {errors.marketingChallenge && <p className="text-sm text-destructive">{errors.marketingChallenge.message}</p>}
            </div>

            <div className="flex gap-2 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Sending..." : "Get Free Consultation"}
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={isSubmitting}>
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;