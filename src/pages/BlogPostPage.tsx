import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug && p.published);
  
  if (!post) {
    return <Navigate to="/404" replace />;
  }
  
  return <BlogPost post={post} />;
};

export default BlogPostPage;