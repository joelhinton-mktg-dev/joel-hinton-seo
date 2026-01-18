'use client';

import { Share2, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Guide } from '@/types/guide';

interface GuideShareButtonsProps {
  guide: Guide;
  canonicalUrl: string;
}

interface ShareLinks {
  twitter: string;
  linkedin: string;
  facebook: string;
  email: string;
}

const generateShareLinks = (guide: Guide, url: string): ShareLinks => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(guide.title);
  const encodedDescription = encodeURIComponent(guide.excerpt);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
};

export default function GuideShareButtons({ guide, canonicalUrl }: GuideShareButtonsProps) {
  const shareLinks = generateShareLinks(guide, canonicalUrl);

  const handleShare = (platform: keyof ShareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Share this guide</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('email')}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
