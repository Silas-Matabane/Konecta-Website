import { Link } from 'react-router-dom';
import SectionEyebrow from '@components/common/SectionEyebrow';
import { insights } from '@data/insights';
import useInView from '@hooks/useInView';

const INSIGHT_IMAGES = [
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  'https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&q=80',
];

function ArticleCard({ article, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`glass-card group overflow-hidden transition-all duration-700 ${article.featured ? 'md:col-span-2' : ''} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${article.featured ? 'min-h-[260px]' : 'min-h-[200px]'}`}>
        <img
          src={INSIGHT_IMAGES[index] || INSIGHT_IMAGES[0]}
          alt={article.title}
          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-konecta-black/80 to-transparent" />
      </div>
      {/* Body */}
      <div className="p-6">
        <div className={`text-[0.65rem] font-heading font-bold tracking-widest uppercase mb-3 ${article.featured ? 'text-konecta-orange' : 'text-white/80'}`}>
          {article.category}
        </div>
        <h3 className="font-heading font-bold text-lg text-konecta-white leading-snug mb-4 card-hover-underline">
          {article.title}
        </h3>
        <div className="flex gap-4 text-xs text-white/80">
          <span>{article.readTime}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function InsightsSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative bg-konecta-black px-6 lg:px-14 py-section overflow-hidden" id="insights">
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-konecta-slate/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Split header */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionEyebrow text="Thought Leadership" />
          <h2 className="section-title mt-4"><span className="text-gradient-orange">Konecta Insights</span></h2>
        </div>
        <div className={`flex items-end justify-end transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link to="/insights" className="btn-secondary">All Articles →</Link>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
