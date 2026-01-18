import { useParams, Navigate } from 'react-router-dom';
import Guide from '@/components/Guide';
import { getGuideBySlug } from '@/data/guides';

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/guides" replace />;
  }

  const guide = getGuideBySlug(slug);

  if (!guide || !guide.published) {
    return <Navigate to="/404" replace />;
  }

  return <Guide guide={guide} />;
};

export default GuidePage;
