'use client';

import { useState, useEffect, Fragment, type ReactNode } from 'react';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================

interface NavLink {
  name: string;
  href: string;
}

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface BenefitItem {
  name: string;
  description: string;
}

interface Benefit {
  title: string;
  items: BenefitItem[];
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// ============================================================================
// SVG ICONS (Reusable Components)
// ============================================================================

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// ============================================================================
// DATA FOR SECTIONS
// ============================================================================

const navLinks: NavLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'About', href: '#about' },
];

const featureData: Feature[] = [
    { 
        icon: <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
        title: "Step-by-Step Guides", 
        description: "Clear instructions for every project phase, from initiation to closure.",
    },
    { 
        icon: <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
        title: "Editable Templates", 
        description: "Customize project plans, timelines, and budget sheets to fit your unique needs.",
    },
    { 
        icon: <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Interactive Checklists", 
        description: "Never miss a critical step with our comprehensive, phase-specific checklists.",
    },
    { 
        icon: <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        title: "Mobile-Friendly Access", 
        description: "Manage your projects from anywhere, anytime, on any device.",
    }
];

const benefitData: Benefit[] = [
    {
        title: "Functional Benefits",
        items: [
            { name: "Structured Planning", description: "Follow proven methodologies to build a solid foundation." },
            { name: "Time Optimization", description: "Save hours of research with ready-to-use templates." },
            { name: "Risk Mitigation", description: "Identify and address potential issues before they arise." },
        ],
    },
    {
        title: "Emotional Benefits",
        items: [
            { name: "Reduced Anxiety", description: "Eliminate the fear of the unknown with a clear roadmap." },
            { name: "Boosted Confidence", description: "Feel empowered by applying professional practices." },
            { name: "Enhanced Focus", description: "Stay organized, motivated, and on track to your goals." },
        ],
    },
    {
        title: "Career Benefits",
        items: [
            { name: "Professional Growth", description: "Build an impressive portfolio of successful projects." },
            { name: "Skill Development", description: "Master in-demand project management competencies." },
            { name: "Industry Recognition", description: "Stand out to employers with tangible results." },
        ],
    },
];

const testimonialData: Testimonial[] = [
    { quote: "TechMorph completely demystified project management for me. I went from feeling overwhelmed to confidently leading my final year project.", name: "Priya Sharma", title: "Engineering Student" },
    { quote: "As a new manager, these templates are a lifesaver. They&apos;ve saved me countless hours and helped my team stay aligned and on schedule.", name: "Rajesh Kumar", title: "Junior Project Manager" },
    { quote: "Finally, a toolkit that&apos;s actually designed for beginners. The step-by-step guides are clear, concise, and incredibly practical.", name: "Anjali Mehta", title: "Freelance Designer" },
];

const faqData: FAQ[] = [
    { question: "Who is TechMorph for?", answer: "TechMorph is designed for students, recent graduates, junior professionals, and anyone new to project management who needs a structured, easy-to-follow toolkit to manage their projects successfully." },
    { question: "What kind of templates are included?", answer: "We offer a wide range of templates including project proposals, Gantt charts, work breakdown structures (WBS), risk registers, stakeholder communication plans, and project closure reports." },
    { question: "Is this a software application?", answer: "Initially, TechMorph will be a comprehensive digital toolkit of downloadable templates, guides, and checklists. We are exploring the development of a full-fledged software platform based on user feedback from our waitlist." },
    { question: "How much will it cost?", answer: "We are still finalizing our pricing. By joining the waitlist, you&apos;ll be the first to know about our launch and will receive an exclusive early-bird discount." },
];


// ============================================================================
// PAGE COMPONENTS
// ============================================================================

const Navbar = ({ isScrolled, isMenuOpen, setIsMenuOpen }: { isScrolled: boolean, isMenuOpen: boolean, setIsMenuOpen: (isOpen: boolean) => void }) => {
    const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`;
    const linkColor = isScrolled ? 'text-gray-700' : 'text-white';

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="#" className={`font-bold text-2xl tracking-tight transition-colors ${linkColor}`}>
                    TechMorph
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className={`hover:text-blue-600 transition-colors ${linkColor}`}>{link.name}</a>
                    ))}
                    <a href="#cta" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                        Join Waitlist
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${linkColor}`}>
                        {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
                    <div className="flex flex-col items-center gap-4 py-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-700 text-lg hover:text-blue-600 transition-colors">{link.name}</a>
                        ))}
                        <a href="#cta" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white px-8 py-3 mt-4 rounded-full hover:bg-blue-700 transition">
                            Join Waitlist
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ onShowVideo }: { onShowVideo: () => void }) => (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center md:text-left">
                    <div className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-medium">🚀 Launching Soon</div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Turn Ideas into Reality. Confidently.
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Stop guessing, start structuring. Our beginner-friendly toolkit provides the expert-crafted templates, guides, and checklists you need to manage any project from start to finish.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#cta" className="group bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                            Get Early Access
                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <button onClick={onShowVideo} className="group bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                            Watch Demo
                            <PlayIcon className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="relative p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl">
                         <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center p-8">
                            <div className="text-center space-y-4">
                               <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-white/30">
                                   <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                               </div>
                                <h3 className="text-xl font-bold">Project Plan Template</h3>
                                <p className="text-blue-100 text-sm">Visualize your path to success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-20 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">Core Features</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your All-in-One Project Starter Kit</h2>
                <p className="text-lg text-gray-600">We've combined all essential tools into one simple, intuitive toolkit to ensure you never feel lost.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featureData.map((feature, index) => (
                    <div key={index} className="group bg-gray-50 p-8 rounded-xl border border-gray-200/80 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
                        <div className="mb-6">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Benefits = () => (
    <section id="benefits" className="py-20 sm:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">The Outcome</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achieve More Than Just Project Completion</h2>
                <p className="text-lg text-gray-600">Using TechMorph doesn't just get the job done—it transforms how you work and accelerates your career.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {benefitData.map((benefit, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200/80">
                         <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                         <ul className="space-y-4">
                            {benefit.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                                        <CheckIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <span className="font-semibold block text-gray-800">{item.name}</span>
                                        <span className="text-gray-600 text-sm">{item.description}</span>
                                    </div>
                                </li>
                            ))}
                         </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section id="about" className="py-20 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by Ambitious Beginners</h2>
                <p className="text-lg text-gray-600">Don't just take our word for it. Hear from early adopters who have transformed their project approach.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200/80 flex flex-col">
                        <div className="text-5xl text-blue-300 font-serif">“</div>
                        <blockquote className="text-gray-700 flex-grow">
                            {testimonial.quote}
                        </blockquote>
                        <footer className="mt-6">
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-gray-500">{testimonial.title}</div>
                        </footer>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQ = () => (
    <section id="faq" className="py-20 sm:py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
            </div>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <details key={index} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 cursor-pointer">
                        <summary className="flex items-center justify-between font-semibold text-gray-800 text-lg list-none">
                            {faq.question}
                            <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);

const CallToAction = () => (
    <section id="cta" className="py-20 sm:py-32 px-4 bg-blue-700">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Control of Your Projects?</h2>
            <p className="text-lg text-blue-100 mb-8">
                Join our waitlist today to get exclusive early access and a special launch-day discount. Be the first to transform your ideas into successful projects.
            </p>
            <form 
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    // Add your form submission logic here
                    console.log('Form submitted with email:', email);
                    form.reset();
                }}
            >
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address" 
                    className="flex-grow px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    aria-label="Email Address"
                    required
                />
                <button 
                    type="submit" 
                    className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                    Join the Waitlist
                </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">Join 125+ early adopters. No spam, ever.</p>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-4">
                <a href="#" className="font-bold text-2xl text-white">TechMorph</a>
                <p className="text-gray-400 text-sm">Empowering the next generation of builders, managers, and leaders.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-8">
                 <div>
                    <h3 className="font-semibold text-white mb-4">Navigate</h3>
                    <ul className="space-y-2">
                        {navLinks.map(link => (
                             <li key={link.name}><a href={link.href} className="hover:text-white transition">{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2">
                         <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                         <li><a href="#" className="hover:text-white transition">Blog</a></li>
                         <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                         <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                         <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} TechMorph. All rights reserved.</p>
        </div>
    </footer>
);

const VideoModal = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-4xl transform transition-all animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">TechMorph in Action</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-3xl transition">&times;</button>
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                    {/* In a real app, you would embed a YouTube/Vimeo iframe here */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                               <PlayIcon className="w-8 h-8 text-white"/>
                            </div>
                            <p className="text-gray-600 font-semibold">Our demo video is coming soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showVideo || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showVideo, isMenuOpen]);

  return (
    // Using Fragment to avoid extra div
    <Fragment>
        {/* The font is assumed to be imported in your global CSS or layout file. e.g., using next/font */}
        <div className="font-sans bg-white"> 
            <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <Hero onShowVideo={() => setShowVideo(true)} />
                <Features />
                <Benefits />
                <Testimonials />
                <FAQ />
                <CallToAction />
            </main>
            <Footer />
        </div>
        <VideoModal show={showVideo} onClose={() => setShowVideo(false)} />

        {/* CSS for animations if not using a tailwind plugin */}
        <style jsx global>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
        `}</style>
    </Fragment>
  );
}