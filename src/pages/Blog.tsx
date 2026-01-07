import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Clock, Search, Filter, Tag, ArrowRight } from 'lucide-react';
import { BlogPost, BlogCategory, BlogFilters, PaginatedBlogPosts } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

const POSTS_PER_PAGE = 6;

const categories: BlogCategory[] = ['SEO Psychology', 'Growth Marketing', 'Case Studies', 'AI Marketing'];

const Blog: React.FC = () => {
  const [filters, setFilters] = useState<BlogFilters>({});
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      if (!post.published) return false;
      
      if (filters.category && post.category !== filters.category) return false;
      
      if (filters.tag && !post.tags.includes(filters.tag)) return false;
      
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      return true;
    });
  }, [filters]);

  const paginatedPosts = useMemo((): PaginatedBlogPosts => {
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const posts = filteredPosts.slice(startIndex, endIndex);

    return {
      posts,
      totalPosts,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [filteredPosts, currentPage]);

  const handleFilterChange = (key: keyof BlogFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined,
    }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({});
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredPost = blogPosts.find(post => post.published && post.id === 'psychology-driven-cro');

  return (
    <>
      <Helmet>
        <title>Marketing Psychology Blog | AIO Growth SEO</title>
        <meta name="description" content="Explore psychology-driven marketing strategies, growth hacking techniques, and data-driven case studies to boost your business performance." />
        <meta name="keywords" content="marketing psychology, growth marketing, conversion optimization, consumer behavior, marketing strategy, Central Florida" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Marketing Psychology Blog | AIO Growth SEO" />
        <meta property="og:description" content="Explore psychology-driven marketing strategies, growth hacking techniques, and data-driven case studies to boost your business performance." />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Psychology Blog | AIO Growth SEO" />
        <meta name="twitter:description" content="Explore psychology-driven marketing strategies, growth hacking techniques, and data-driven case studies to boost your business performance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        {/* Breadcrumb */}
        <PageBreadcrumb 
          items={[
            { label: "Blog", current: true }
          ]}
        />
        
        <main className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Marketing Psychology Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of consumer psychology to drive growth, increase conversions, 
              and build stronger connections with your audience.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">Featured</Badge>
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">
                      <Link 
                        to={`/blog/${featuredPost.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(featuredPost.publishDate), 'MMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readingTime} min
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read full article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </div>
                {featuredPost.featuredImage && (
                  <div className="md:w-1/3">
                    <img 
                      src={featuredPost.featuredImage} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-slate-600" />
                  <span className="font-medium text-slate-900">Filter by:</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      placeholder="Search articles..."
                      value={filters.search || ''}
                      onChange={(e) => handleFilterChange('search', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select 
                    value={filters.category ?? 'all'} 
                    onValueChange={(value) => handleFilterChange('category', value === 'all' ? '' : value)}
                  >
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    value={filters.tag ?? 'all'} 
                    onValueChange={(value) => handleFilterChange('tag', value === 'all' ? '' : value)}
                  >
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="All Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tags</SelectItem>
                      {allTags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {(filters.category || filters.tag || filters.search) && (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Info */}
          <div className="mb-8">
            <p className="text-slate-600">
              Showing {paginatedPosts.posts.length} of {paginatedPosts.totalPosts} articles
              {filters.category && ` in ${filters.category}`}
              {filters.tag && ` tagged with "${filters.tag}"`}
              {filters.search && ` matching "${filters.search}"`}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {paginatedPosts.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedPosts.posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="w-3 h-3" />
                        {post.readingTime} min
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(post.publishDate), 'MMM d, yyyy')}
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read more →
                      </Link>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
              <Button onClick={clearFilters} className="mt-4">
                Clear filters and show all articles
              </Button>
            </div>
          )}

          {/* Pagination */}
          {paginatedPosts.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!paginatedPosts.hasPreviousPage}
              >
                Previous
              </Button>
              
              {Array.from({ length: paginatedPosts.totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? 'default' : 'outline'}
                  onClick={() => handlePageChange(page)}
                  size="sm"
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!paginatedPosts.hasNextPage}
              >
                Next
              </Button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;