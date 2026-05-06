import React from 'react';
import {
  Home,
  MapPin,
  Search,
  User,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Bed,
  Bath,
  LayoutGrid,
  PlusCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react';
import './RealEstateLanding.css';

type PropertyItem = {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  status: 'For sale' | 'For rent';
  statusRent?: boolean;
};

const FEATURED: PropertyItem[] = [
  {
    image: '/assets/prop1.png',
    title: 'Canyon Road House',
    location: 'Los Angeles, California, USA',
    price: '$2,500,000',
    beds: 4,
    baths: 3,
    area: '2,500 sqft',
    status: 'For sale',
  },
  {
    image: '/assets/prop2.png',
    title: 'North Road House',
    location: 'San Francisco, California, USA',
    price: '$3,200,000',
    beds: 5,
    baths: 4,
    area: '3,200 sqft',
    status: 'For sale',
  },
  {
    image: '/assets/prop3.png',
    title: 'Groomed House',
    location: 'Seattle, Washington, USA',
    price: '$1,800,000',
    beds: 3,
    baths: 2,
    area: '1,800 sqft',
    status: 'For rent',
    statusRent: true,
  },
  {
    image: '/property_modern_houses_grid.png',
    title: 'Market Ave Villa',
    location: 'Chicago, Illinois, USA',
    price: '$4,100,000',
    beds: 6,
    baths: 5,
    area: '4,500 sqft',
    status: 'For sale',
  },
  {
    image: '/property_modern_houses_grid.png',
    title: 'Modern Plano Villa',
    location: 'Dallas, Texas, USA',
    price: '$2,900,000',
    beds: 4,
    baths: 3,
    area: '3,100 sqft',
    status: 'For rent',
    statusRent: true,
  },
  {
    image: '/hero_image.png',
    title: 'Lake Creek House',
    location: 'Austin, Texas, USA',
    price: '$3,500,000',
    beds: 5,
    baths: 4,
    area: '3,800 sqft',
    status: 'For sale',
  },
];

const COMMERCIAL: Omit<PropertyItem, 'beds' | 'baths' | 'area'>[] = [
  {
    image: '/assets/comm1.png',
    title: 'Pembroke Pine Office',
    location: '',
    price: '$12,000/mo',
    status: 'For sale',
  },
  {
    image: '/property_modern_houses_grid.png',
    title: 'Skyline Office',
    location: '',
    price: '$8,500/mo',
    status: 'For rent',
    statusRent: true,
  },
  {
    image: '/property_modern_houses_grid.png',
    title: 'Modern Suite',
    location: '',
    price: '$15,000/mo',
    status: 'For sale',
  },
  {
    image: '/property_modern_houses_grid.png',
    title: 'Retail Center',
    location: '',
    price: '$22,000/mo',
    status: 'For sale',
  },
];

const RealEstateLanding: React.FC = () => {
  return (
    <div className="rel-root min-h-screen">
      <div className="fixed left-0 right-0 top-0 z-50 bg-white">
        {/* Top contact bar — template strip */}
        <div className="rel-topbar hidden md:block">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-2.5">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--rel-primary)]" strokeWidth={2.25} />
                Mon–Fri 08:30–18:00
              </span>
              <a href="tel:+0123456789" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--rel-primary)]" strokeWidth={2.25} />
                +012 345 6789
              </a>
            </div>
            <a href="mailto:info@realestate.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--rel-primary)]" strokeWidth={2.25} />
              info@realestate.com
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="rel-header border-t-0">
          <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
            <a href="#" className="flex items-center gap-2.5">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[12px]"
                style={{ background: 'var(--rel-primary)' }}
              >
                <Home className="h-6 w-6 text-white" strokeWidth={2.25} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[var(--rel-ink)]">RealEstate</span>
            </a>

            <nav className="hidden items-center gap-9 lg:flex">
              <a href="#" className="rel-nav-link rel-nav-link--active">
                Home
              </a>
              <a href="#" className="rel-nav-link">
                Property
              </a>
              <a href="#" className="rel-nav-link">
                Blog
              </a>
              <a href="#" className="rel-nav-link inline-flex items-center gap-1">
                Pages
                <ChevronDown className="h-4 w-4 opacity-70" />
              </a>
              <a href="#" className="rel-nav-link">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hidden items-center gap-2 font-semibold text-[var(--rel-ink)] hover:text-[var(--rel-primary)] sm:flex"
              >
                <User className="h-5 w-5" />
                Login
              </button>
              <button type="button" className="rel-btn-primary flex items-center gap-2 px-6 py-2.5 uppercase">
                <PlusCircle className="h-4 w-4" strokeWidth={2.5} />
                Get started
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer: 72px mobile; ~113px desktop (topbar + nav) */}
      <div className="h-[72px] md:h-[113px]" aria-hidden />

      {/* Hero */}
      <section className="rel-hero relative overflow-hidden px-6">
        <div className="rel-hero__bg">
          <img src="/hero_house_background.png" alt="" className="max-md:min-h-[520px]" />
        </div>
        <div className="rel-hero__overlay" />
        <div className="rel-hero__inner mx-auto max-w-6xl text-center">
          <h1 className="rel-hero__title mb-5">
            Find a home that suits your <span>lifestyle.</span>
          </h1>
          <p className="rel-hero__lead mb-12">
            Real estate deals are complicated, and our team is here to help you find the best property that fits your
            needs perfectly.
          </p>

          <div className="rel-search mx-auto flex max-w-[920px] flex-col gap-3 md:flex-row md:items-stretch">
            <div className="rel-search__field min-w-0 flex-1 border-b border-gray-100 px-4 py-3 md:border-b-0 md:border-r">
              <label>Looking for</label>
              <select aria-label="Property category">
                <option>Property type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>
            <div className="rel-search__field min-w-0 flex-1 border-b border-gray-100 px-4 py-3 md:border-b-0 md:border-r">
              <label>Location</label>
              <select aria-label="Location">
                <option>All cities</option>
                <option>New York, USA</option>
                <option>Miami, USA</option>
                <option>Chicago, USA</option>
              </select>
            </div>
            <div className="rel-search__field min-w-0 flex-1 px-4 py-3">
              <label>Price range</label>
              <select aria-label="Price range">
                <option>$100k – $500k</option>
                <option>$500k – $1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <button type="button" className="rel-search__btn shrink-0">
              <Search className="h-5 w-5" strokeWidth={2.5} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="rel-section-eyebrow">Featured property</p>
            <h2 className="rel-section-title">Discover your featured property</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--rel-muted)]">
              Browse through our hand-picked selection of high-quality properties.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p) => (
              <PropertyCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark promo */}
      <section className="rel-dark-section px-6 py-20">
        <div className="relative z-[1] mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:gap-20">
          <div className="relative w-full flex-1">
            <img
              src="/property_modern_houses_grid.png"
              alt="Property showcase"
              className="mx-auto w-full max-w-md rounded-[var(--rel-radius-lg)] shadow-2xl shadow-black/40"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Putting a plan to action,
              <br />
              to assure your satisfaction!
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400">
              We guide you throughout the entire process of finding and securing your dream property with transparency
              and expertise.
            </p>
            <button
              type="button"
              className="rounded-[var(--rel-radius-md)] bg-[var(--rel-primary)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-[var(--rel-primary-dark)]"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f4f6f8] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="w-full flex-1">
            <p className="rel-section-eyebrow text-left">Testimonials</p>
            <h2 className="rel-section-title mb-8 text-left">What our clients say about us</h2>
            <div className="relative">
              <span className="rel-quote-mark" aria-hidden>
                &ldquo;
              </span>
              <p className="relative z-[1] text-lg italic leading-relaxed text-[var(--rel-ink)] md:text-xl">
                Finding a new home can be stressful, but the team made it incredibly easy. Their attention to detail and
                market knowledge is unmatched. I highly recommend them to anyone looking for a premium property.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-lg font-bold text-[var(--rel-ink)]">Jane Moore</p>
              <p className="text-[var(--rel-muted)]">CEO, Tech Innovations</p>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[var(--rel-ink)] transition hover:shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--rel-primary)] text-white transition hover:bg-[var(--rel-primary-dark)]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex-1 flex justify-center">
            <img
              src="/assets/woman.png"
              alt="Happy client"
              className="w-full max-w-[400px] rounded-[var(--rel-radius-lg)] object-cover shadow-2xl lg:rotate-[2deg]"
              onError={(e) => {
                const el = e.currentTarget;
                el.onerror = null;
                el.src = '/testimonial_customer.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="rel-section-eyebrow">For business</p>
            <h2 className="rel-section-title">Commercial property</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--rel-muted)]">
              Premier office spaces and retail locations for your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMERCIAL.map((c) => (
              <CommercialCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="relative flex min-h-[560px] items-center px-6 py-16">
        <img
          src="/hero_house_background.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="relative z-[1] mx-auto flex w-full max-w-6xl flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-md rounded-[var(--rel-radius-lg)] border border-white/10 bg-[var(--rel-dark)]/90 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-white">Get in touch</h3>
            <p className="mb-6 text-sm text-gray-400">Tell us what you need — we will get back within one business day.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-[var(--rel-radius-sm)] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[var(--rel-primary)]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-[var(--rel-radius-sm)] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[var(--rel-primary)]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-[var(--rel-radius-sm)] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[var(--rel-primary)]"
              />
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full resize-none rounded-[var(--rel-radius-sm)] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[var(--rel-primary)]"
              />
              <button
                type="submit"
                className="w-full rounded-[var(--rel-radius-md)] bg-[var(--rel-primary)] py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/30 transition hover:bg-[var(--rel-primary-dark)]"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="max-w-xl flex-1 text-white lg:pl-8">
            <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Putting a plan to action,
              <br />
              to assure your satisfaction!
            </h2>
            <p className="text-base leading-relaxed text-gray-200/90 md:text-lg">
              Whether you are looking for your first home or expanding your portfolio, we have the expertise to make it
              happen.
            </p>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="rel-section-eyebrow">Locations</p>
            <h2 className="rel-section-title">What city will you live in?</h2>
            <p className="mx-auto mt-4 text-[var(--rel-muted)]">Explore properties across the most vibrant cities.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:h-[500px] lg:grid-cols-4 lg:grid-rows-2">
            <CityCard name="New York" count="128 properties" image="/assets/ny.png" className="md:min-h-[240px] lg:row-span-2 lg:min-h-0" tall />
            <CityCard name="Boston" count="84 properties" image="/city_skylines_grid.png" className="min-h-[220px]" />
            <CityCard name="Washington" count="56 properties" image="/city_skylines_grid.png" className="min-h-[220px]" />
            <div className="grid gap-5 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:grid-rows-2">
              <CityCard name="Miami" count="92 properties" image="/city_skylines_grid.png" className="min-h-[140px] lg:min-h-0" />
              <CityCard name="Chicago" count="114 properties" image="/city_skylines_grid.png" className="min-h-[140px] lg:min-h-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rel-footer px-6 pb-10 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <h4 className="mb-5 text-base font-bold">Opening hours</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>Mon – Fri: 08:30 – 18:00</li>
                <li>Sat: 09:00 – 13:00</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-base font-bold">Find us</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--rel-primary)]" />
                  123 Street Name, Town, City, Country
                </li>
                <li className="flex gap-2">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--rel-primary)]" />
                  +012 345 6789
                </li>
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--rel-primary)]" />
                  info@realestate.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-base font-bold">Property</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#">Apartment</a>
                </li>
                <li>
                  <a href="#">Villa</a>
                </li>
                <li>
                  <a href="#">Office</a>
                </li>
                <li>
                  <a href="#">Rent</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-base font-bold">Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Property</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h4 className="mb-5 text-base font-bold">Newsletter</h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-5 pr-36 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[var(--rel-primary)]"
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-[var(--rel-primary)] px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[var(--rel-primary-dark)]"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
            <p>© {new Date().getFullYear()} RealEstate. All rights reserved.</p>
            <div className="flex gap-5 text-gray-400">
              <Facebook className="h-5 w-5 cursor-pointer transition hover:text-white" strokeWidth={1.75} />

              <Twitter className="h-5 w-5 cursor-pointer transition hover:text-white" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function PropertyCard({ image, title, location, price, beds, baths, area, status, statusRent }: PropertyItem) {
  return (
    <article className="rel-card text-left">
      <div className="rel-card__img">
        <img src={image} alt="" />
        <span className={`rel-badge ${statusRent ? 'rel-badge--rent' : 'rel-badge--sale'}`}>{status}</span>
      </div>
      <div className="p-6">
        <h3 className="mb-1.5 text-lg font-extrabold text-[var(--rel-ink)]">{title}</h3>
        <p className="mb-4 flex items-center gap-1.5 text-sm text-[var(--rel-muted)]">
          <MapPin className="h-4 w-4 shrink-0 text-[var(--rel-primary)]" strokeWidth={2.25} />
          {location}
        </p>
        <p className="mb-5 text-2xl font-extrabold text-[var(--rel-primary)]">{price}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5 text-xs font-semibold text-[var(--rel-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Bed className="h-4 w-4 opacity-70" />
            {beds} Beds
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4 opacity-70" />
            {baths} Baths
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LayoutGrid className="h-4 w-4 opacity-70" />
            {area}
          </span>
        </div>
      </div>
    </article>
  );
}

type CommercialProps = {
  image: string;
  title: string;
  price: string;
  status: 'For sale' | 'For rent';
  statusRent?: boolean;
};

function CommercialCard({ image, title, price, status, statusRent }: CommercialProps) {
  return (
    <article className="rel-card text-left">
      <div className="rel-card__img h-[200px]">
        <img src={image} alt="" />
        <span className={`rel-badge ${statusRent ? 'rel-badge--rent' : 'rel-badge--sale'}`}>{status}</span>
      </div>
      <div className="p-4">
        <h4 className="mb-1 font-bold text-[var(--rel-ink)]">{title}</h4>
        <p className="mb-3 text-base font-extrabold text-[var(--rel-primary)]">{price}</p>
        <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-wide text-[var(--rel-muted)]">
          <span className="inline-flex items-center gap-1">
            <LayoutGrid className="h-3 w-3" />
            400 sqm
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="h-3 w-3" />
            2 Bath
          </span>
          <span className="inline-flex items-center gap-1">
            <Bed className="h-3 w-3" />
            1 Garage
          </span>
        </div>
      </div>
    </article>
  );
}

type CityProps = {
  name: string;
  count: string;
  image: string;
  className?: string;
  tall?: boolean;
};

function CityCard({ name, count, image, className = '', tall }: CityProps) {
  return (
    <div
      className={`rel-city-card group ${tall ? 'rel-city-card--tall md:min-h-[280px]' : ''} ${className}`.trim()}
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute bottom-5 left-5 text-white">
        <h4 className="text-xl font-extrabold tracking-tight">{name}</h4>
        <p className="text-sm text-white/80">{count}</p>
      </div>
    </div>
  );
}

export default RealEstateLanding;
