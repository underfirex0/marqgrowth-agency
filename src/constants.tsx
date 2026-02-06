import { 
  Rocket, 
  Search, 
  Palette, 
  BarChart3, 
  Video, 
  MessageSquare,
  Globe,
  Zap,
  Monitor,
  Megaphone
} from 'lucide-react';
import { NavLink, Stat, Service, CaseStudy, TeamMember, FAQItem, PricingTier } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { label: 'Projects Delivered', value: '950+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Combined Experience', value: '12+' },
];

export const ABOUT_STATS: Stat[] = [
  { value: '10+', label: 'Years Experience', description: 'Helping businesses grow through strategic marketing.' },
  { value: '250+', label: 'Projects Done', description: 'Delivered impactful marketing campaigns globally.' },
  { value: '98%', label: 'Client Satisfaction', description: 'Trusted by startups and growing brands.' },
  { value: '24/7', label: 'Support', description: 'Always there when you need us most.' },
];

export const SERVICES: Service[] = [
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'We build brands people recognize, remember, and trust.',
    features: ['Visual Strategy', 'Brand Positioning', 'Identity Systems', 'Tone of Voice']
  },
  {
    icon: Monitor,
    title: 'Web Design & Development',
    description: 'Websites designed to guide users, tell a story, and convert.',
    features: ['High-Converting UX', 'Mobile-First Design', 'Speed Optimization', 'CMS Solutions']
  },
  {
    icon: BarChart3,
    title: 'SEO & Performance',
    description: 'Visibility built for long-term growth, not quick tricks.',
    features: ['Technical Audits', 'Content Architecture', 'Authority Building', 'Data Analytics']
  },
  {
    icon: Megaphone,
    title: 'Paid Media & Video',
    description: 'Campaigns that respect attention and deliver ROI.',
    features: ['Meta & LinkedIn Ads', 'Creative Production', 'Retargeting Funnels', 'ROI Tracking']
  },
  {
    icon: MessageSquare,
    title: 'Content & Social Strategy',
    description: 'Content that positions your brand as a reference, not noise.',
    features: ['Thought Leadership', 'Community Growth', 'Multi-Channel Strategy', 'Engagement']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: 'Aura Digital',
    industry: 'SaaS / Web Analytics',
    category: 'Web Design & Experience',
    // Optimized: w=1200, q=75
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=75&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=75&w=800&auto=format&fit=crop'
    ],
    
    resultHook: "+140% Conversion Rate in 60 Days",
    summary: "High-performance web experience for a SaaS brand targeting enterprise clients.",
    
    problem: "Aura Digital had a legacy website that failed to convert enterprise traffic. Despite strong technology, their digital presence lacked authority, clarity, and performance.",
    painPoints: [
      "Low enterprise trust",
      "Poor conversion flow",
      "No visual differentiation",
      "Underperforming site speed"
    ],

    strategy: "We approached Aura Digital as a conversion engineering problem, not a design task. Our goal was to build a high-authority digital experience that communicates trust, clarity, and performance within the first 5 seconds of user interaction.",
    strategyBullets: [
      "Authority-driven layout and hierarchy",
      "Conversion-first user journey",
      "Performance as a competitive advantage",
      "Visual storytelling for enterprise credibility"
    ],

    execution: [
      "Conversion-focused UX architecture",
      "High-performance front-end build",
      "Immersive interactive experience"
    ],
    technical: [
      "WebGL Interactions",
      "Next.js Headless Build",
      "3D Asset Integration"
    ],

    results: [
      { label: 'Conversion Rate', value: '+140%', subLabel: '(vs previous site)' },
      { label: 'Avg. Time on Site', value: '3.5m' },
      { label: 'Lighthouse Score', value: '99/100', subLabel: 'Performance' }
    ],
    resultContext: "The new experience repositioned Aura Digital as a premium, enterprise-ready SaaS brand."
  },
  {
    id: 2,
    client: 'NexSys Analytics',
    industry: 'Big Data / Enterprise',
    category: 'SaaS Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=75&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=75&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=75&w=800&auto=format&fit=crop'
    ],

    resultHook: "3x More Demo Requests",
    summary: "A complete brand overhaul for a Series B data analytics platform.",

    problem: "NexSys had powerful tech but a boring website that failed to explain their value to C-level buyers. Complex data visualization was lost in dense text.",
    painPoints: [
      "High bounce rate on product pages",
      "Complex messaging",
      "Outdated visual identity",
      "Weak lead capture"
    ],

    strategy: "Simplify the complex. We used interactive data visualization to show, not tell, the power of their platform. We shifted the focus from features to business outcomes.",
    strategyBullets: [
      "Outcome-based messaging",
      "Interactive data storytelling",
      "Simplified navigation structure",
      "High-contrast dark mode aesthetic"
    ],

    execution: [
      "Interactive Product Demos",
      "Complete Brand Identity Refresh",
      "Lead-gen Funnel Optimization"
    ],
    technical: [
      "React.js",
      "D3.js Data Viz",
      "HubSpot Integration"
    ],

    results: [
      { label: 'Demo Requests', value: '+300%' },
      { label: 'Bounce Rate', value: '25%', subLabel: '(Down from 65%)' },
      { label: 'Avg. Session', value: '4m' }
    ],
    resultContext: "A website that looks as advanced as the software it sells."
  },
  {
    id: 3,
    client: 'SoukArt Morocco',
    industry: 'E-commerce / Art',
    category: 'Branding & Shopify Experience',
    
    // Note: To use your exact screenshots, replace these URLs with your local file paths.
    // e.g., '/assets/soukart-home.png'
    
    // Mockup 1: Represents the "Home" screenshot (Man painting)
    image: 'https://images.unsplash.com/photo-1599894603880-6c435a5a133d?q=80&w=1200&auto=format&fit=crop', 
    
    gallery: [
        // Mockup 2: Represents the "Most Popular" Shop Grid screenshot
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop',
        
        // Mockup 3: Represents the "Bring Moroccan Art Into Your Home" Interior screenshot
        'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1200&auto=format&fit=crop',
        
        // Mockup 4: Represents the Detail View
        'https://images.unsplash.com/photo-1544253303-3114d59f37c3?q=80&w=1200&auto=format&fit=crop'
    ],

    resultHook: "+300% Global Sales",
    summary: "Discover authentic Moroccan paintings handcrafted by local artists.",

    problem: "SoukArt Morocco needed to transition from a local gallery to a global digital brand. The challenge was to translate the vibrant, tactile experience of Moroccan art into a seamless e-commerce journey.",
    painPoints: [
      "Limited local foot traffic",
      "Need for international shipping logic",
      "Conveying authenticity digitally",
      "High-ticket trust building"
    ],

    strategy: "We designed 'Explore Our Exquisite Moroccan Paintings' as a digital narrative. We focused on high-fidelity gallery views and storytelling that brings the artist's workshop to the customer's home.",
    strategyBullets: [
      "Immersive Gallery Layouts",
      "Artist Storytelling Integration",
      "Cross-border Currency & Shipping",
      "SEO for Art Collectors"
    ],

    execution: [
      "Custom Shopify Theme Development",
      "Virtual Gallery Experience",
      "Automated Logistics Integration"
    ],
    technical: [
      "Shopify Plus",
      "Liquid & React",
      "Multi-Currency Payments"
    ],

    results: [
      { label: 'Online Revenue', value: '€640k+', subLabel: '(Year 1)' },
      { label: 'Avg Order Value', value: '€450', subLabel: '(High Ticket)' },
      { label: 'Conversion Rate', value: '3.2%', subLabel: '(Art Sector High)' }
    ],
    resultContext: "Bringing the soul of Moroccan art to homes worldwide."
  },
  {
    id: 4,
    client: 'FinFlow App',
    industry: 'Fintech / Consumer App',
    category: 'App Launch Strategy',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=75&w=1200&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1616077168712-fc6c788cab4a?q=75&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=75&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1565514020176-dbf2277e3c97?q=75&w=800&auto=format&fit=crop'
    ],

    resultHook: "500k Downloads in 90 Days",
    summary: "Go-to-market strategy for a personal finance application.",

    problem: "Launching in a saturated market required a viral loop. Traditional ads were too expensive for the unit economics to work.",
    painPoints: [
      "High competition",
      "Expensive user acquisition",
      "Low organic visibility",
      "Need for rapid trust building"
    ],

    strategy: "We focused on influencer marketing and App Store Optimization (ASO) to drive organic and referral growth. We turned users into advocates.",
    strategyBullets: [
      "TikTok Influencer Campaign",
      "Aggressive ASO Strategy",
      "Referral Loop Gamification",
      "Social Proof Engineering"
    ],

    execution: [
      "Influencer Partnership Management",
      "App Store Visuals & Copy",
      "Paid Social Scaling"
    ],
    technical: [
      "Appsflyer Attribution",
      "TikTok Ads Manager",
      "Viral Loops"
    ],

    results: [
      { label: 'Downloads', value: '500k+' },
      { label: 'Active Users', value: '65%', subLabel: '(30-day retention)' },
      { label: 'CPI', value: '$1.20', subLabel: '(Cost Per Install)' }
    ],
    resultContext: "Top 10 Finance App on iOS App Store within 3 months."
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Marwane Benmchich',
    role: 'CEO & Founder',
    // Optimized: w=600, q=75
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=75&w=600&auto=format&fit=crop',
    socials: { linkedin: '#' }
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Creative',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=75&w=600&auto=format&fit=crop',
    socials: { linkedin: '#' }
  },
  {
    name: 'David Chen',
    role: 'Lead Strategist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=75&w=600&auto=format&fit=crop',
    socials: { linkedin: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=75&w=600&auto=format&fit=crop',
    socials: { linkedin: '#' }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do you start a project?",
    answer: "We begin with a discovery phase to understand your goals, followed by a strategic roadmap tailored to your specific needs."
  },
  {
    question: "Do you handle ongoing maintenance?",
    answer: "Yes, we offer monthly retainer packages to ensure your digital assets remain secure, updated, and performing optimally."
  },
  {
    question: "What makes you different from competitors?",
    answer: "We don't just deliver services; we partner with you for growth. Our data-driven approach ensures measurable ROI."
  },
  {
    question: "How long until I see results?",
    answer: "Timelines vary by service. SEO typically takes 3-6 months, while paid ads and social campaigns can show results within weeks."
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Launch',
    price: '$2,900',
    period: '/mo',
    description: 'Essential growth tools for startups establishing their digital footprint.',
    features: [
      'Visual Identity System',
      'Basic SEO Audit & Setup',
      'Social Media Templates',
      'Monthly Performance Report',
      'Email Support'
    ],
    highlighted: false
  },
  {
    name: 'Scale',
    price: '$5,900',
    period: '/mo',
    description: 'Comprehensive strategies for brands ready to capture market share.',
    features: [
      'Advanced SEO & Content Strategy',
      'Paid Media Management (Ads)',
      'Conversion Rate Optimization',
      'Bi-weekly Strategy Calls',
      'Slack Access'
    ],
    highlighted: true
  },
  {
    name: 'Dominance',
    price: 'Custom',
    period: '',
    description: 'Bespoke digital transformation for market leaders.',
    features: [
      'Dedicated Growth Squad',
      'Full-Stack Development',
      'Omnichannel Campaigns',
      'Custom Data Dashboards',
      '24/7 Priority Support'
    ],
    highlighted: false
  }
];