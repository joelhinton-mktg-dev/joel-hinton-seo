'use client';

import { Share2, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types/blog';

interface ShareButtonsProps {
  post: BlogPost;
  canonicalUrl: string;
}

interface ShareLinks {
  twitter: string;
  linkedin: string;
  facebook: string;
  email: string;
}

const generateShareLinks = (post: BlogPost, url: string): ShareLinks => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(post.title);
  const encodedDescription = encodeURIComponent(post.excerpt);

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
};

export default function ShareButtons({ post, canonicalUrl }: ShareButtonsProps) {
  const shareLinks = generateShareLinks(post, canonicalUrl);

  const handleShare = (platform: keyof ShareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Share this article</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('email')}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
