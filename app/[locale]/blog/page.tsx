import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — Metal Fabrication & Automation Insights",
  description:
    "Technical articles, buying guides, and industry insights for US metal fabrication shops. Fiber laser, CNC press brake, cobot welding, and more.",
};

const POSTS = [
  {
    slug: "fiber-laser-vs-co2-laser-cutting",
    title: "Fiber Laser vs. CO₂ Laser: Which Is Right for Your Shop in 2026?",
    excerpt:
      "Wall-plug efficiency, cutting speed on thin sheet, and operating cost — we break down every meaningful difference so you can make the right choice for your material mix.",
    category: "Buying Guide",
    date: "March 28, 2026",
    readTime: "8 min read",
    imageId: "/images/blog-fiber-vs-co2.png",
  },
  {
    slug: "cobot-welding-roi-real-numbers",
    title: "Cobot Welding ROI: Real Numbers from 3 US Fabrication Shops",
    excerpt:
      "We tracked payback period, quality reject rates, and welder retention at three shops that deployed collaborative welding arms in the past 18 months. Here's what actually happened.",
    category: "Case Study",
    date: "March 14, 2026",
    readTime: "11 min read",
    imageId: "/images/blog-cobot-roi.png",
  },
  {
    slug: "press-brake-tonnage-calculator",
    title: "Press Brake Tonnage Calculator: How to Size Your Machine Without Guessing",
    excerpt:
      "The formula, the safety factors, and the material variables that matter. Plus a free downloadable tonnage chart for the 20 most common mild steel and stainless gauges.",
    category: "Technical Guide",
    date: "February 26, 2026",
    readTime: "6 min read",
    imageId: "/images/blog-press-brake-tonnage.png",
  },
  {
    slug: "laser-cleaning-vs-sandblasting",
    title: "Laser Cleaning vs. Sandblasting: The Full Cost Comparison",
    excerpt:
      "Media cost, disposal, surface damage, and setup time. We ran both processes side-by-side on the same batch of rusted mild steel and documented every variable.",
    category: "Technical Guide",
    date: "February 12, 2026",
    readTime: "7 min read",
    imageId: "/images/blog-laser-cleaning-compariso.png",
  },
  {
    slug: "shearing-machine-guillotine-vs-swing-beam",
    title: "Guillotine vs. Swing-Beam Shear: Which Configuration Fits Your Work?",
    excerpt:
      "Both shear plate steel — but how they move, what they cost to maintain, and what work they do best differs significantly. Here's the complete breakdown.",
    category: "Buying Guide",
    date: "January 30, 2026",
    readTime: "5 min read",
    imageId: "/images/blog-shear-comparison.png",
  },
  {
    slug: "laser-welding-vs-tig-welding-comparison",
    title: "Laser Welding vs. TIG Welding: When to Switch and When to Stay",
    excerpt:
      "Speed, bead appearance, heat distortion, and application range. TIG isn't going away — but for specific work, laser welding is dramatically better. We explain exactly which.",
    category: "Technical Guide",
    date: "January 15, 2026",
    readTime: "9 min read",
    imageId: "/images/blog-laser-vs-tig.png",
  },
];

const CATEGORIES = ["All", "Buying Guide", "Technical Guide", "Case Study", "Industry News"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vtm-dark pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-screen-xl mx-auto">
          <SectionLabel light className="mb-4">Insights</SectionLabel>
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Metal fabrication knowledge, without the sales pitch.
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-vtm-gray-border sticky top-[72px] z-30">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto py-4 no-scrollbar">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                  i === 0
                    ? "bg-vtm-dark text-white"
                    : "text-vtm-gray-mid hover:text-vtm-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Featured post */}
          <Link
            href={`/blog/${POSTS[0].slug}`}
            className="group grid md:grid-cols-2 gap-8 mb-16 border-b border-vtm-gray-border pb-16"
          >
            <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden bg-vtm-gray-light">
              <Image
                src={POSTS[0].imageId.startsWith("/") ? POSTS[0].imageId : `https://images.unsplash.com/photo-${POSTS[0].imageId}?w=900&q=80&fit=crop`}
                alt={POSTS[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Tag>{POSTS[0].category}</Tag>
                <span className="text-vtm-gray-mid text-xs">{POSTS[0].date}</span>
                <span className="text-vtm-gray-border">·</span>
                <span className="text-vtm-gray-mid text-xs">{POSTS[0].readTime}</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-vtm-dark tracking-tight mb-4 group-hover:text-vtm-red transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-vtm-gray-mid leading-relaxed mb-6">{POSTS[0].excerpt}</p>
              <span className="text-vtm-red text-sm font-semibold">Read article →</span>
            </div>
          </Link>

          {/* Remaining posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-vtm-gray-border hover:border-vtm-dark transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-vtm-gray-light">
                  <Image
                    src={post.imageId.startsWith("/") ? post.imageId : `https://images.unsplash.com/photo-${post.imageId}?w=600&q=80&fit=crop`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Tag>{post.category}</Tag>
                    <span className="text-vtm-gray-mid text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-headline font-bold text-vtm-dark text-lg mb-3 leading-snug group-hover:text-vtm-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-vtm-gray-mid text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-vtm-gray-mid text-xs mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-vtm-gray-light py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <SectionLabel className="mb-4">Stay Current</SectionLabel>
            <h2 className="font-headline text-3xl font-bold text-vtm-dark tracking-tight mb-4">
              New articles, every two weeks.
            </h2>
            <p className="text-vtm-gray-mid mb-6">
              Technical guides, machine comparisons, and industry news for US metal fabricators. No sales emails — just useful content.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
