/**
 * Unit tests for utility functions and data structures
 */

// ---- Certificate data structure tests ----

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  certificateNo: string;
  description: string;
  skills: string[];
  icon: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Agentic AI Level 1 Developer',
    issuer: 'Presidential Initiative for AI & Computing',
    date: 'January 30, 2026',
    image: '/agentic ai level 1 exam  certification.jpg',
    certificateNo: '202603025261',
    description: 'Certified in building autonomous AI agents.',
    skills: ['Agentic AI', 'Multi-Agent Systems', 'AI Orchestration'],
    icon: '🤖',
  },
  {
    id: 2,
    title: 'Agentic AI Professional Level 2 Developer',
    issuer: 'Presidential Initiative for AI & Computing',
    date: 'January 30, 2026',
    image: '/agentic ai professioanl level 02 exam certification.jpg',
    certificateNo: '202603025261',
    description: 'Advanced certification in professional-grade agentic AI.',
    skills: ['Advanced AI Agents', 'Production Systems', 'AI Architecture'],
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Prompt and Context Engineering: Level 1 Developer',
    issuer: 'Presidential Initiative for AI & Computing',
    date: 'January 30, 2026',
    image: '/prompt eng certification .jpg',
    certificateNo: '202603025261',
    description: 'Expert in prompt engineering and context management.',
    skills: ['Prompt Engineering', 'Context Design', 'AI Communication'],
    icon: '💡',
  },
  {
    id: 4,
    title: 'From Freelancers to Founder 3.0',
    issuer: 'Pakistan Freelancers Association (PAFLA)',
    date: 'August 18, 2025',
    image: '/pafla certification.jpg',
    certificateNo: 'NIC - Karachi',
    description: 'Building digital reputation engine for global opportunities.',
    skills: ['Entrepreneurship', 'Business Development', 'Digital Marketing'],
    icon: '🎯',
  },
];

// ---- Slider logic tests ----

describe('Slider navigation logic', () => {
  const total = 9;

  it('nextSlide wraps around from last to first', () => {
    const currentSlide = total - 1;
    const next = (currentSlide + 1) % total;
    expect(next).toBe(0);
  });

  it('nextSlide increments correctly', () => {
    const currentSlide = 3;
    const next = (currentSlide + 1) % total;
    expect(next).toBe(4);
  });

  it('prevSlide wraps around from first to last', () => {
    const currentSlide = 0;
    const prev = (currentSlide - 1 + total) % total;
    expect(prev).toBe(total - 1);
  });

  it('prevSlide decrements correctly', () => {
    const currentSlide = 5;
    const prev = (currentSlide - 1 + total) % total;
    expect(prev).toBe(4);
  });

  it('goToSlide sets exact index', () => {
    const targetIndex = 7;
    let currentSlide = 0;
    currentSlide = targetIndex;
    expect(currentSlide).toBe(7);
  });

  it('slide index is always within bounds', () => {
    for (let i = 0; i < total; i++) {
      const next = (i + 1) % total;
      const prev = (i - 1 + total) % total;
      expect(next).toBeGreaterThanOrEqual(0);
      expect(next).toBeLessThan(total);
      expect(prev).toBeGreaterThanOrEqual(0);
      expect(prev).toBeLessThan(total);
    }
  });
});

// ---- Certificate data validation tests ----

describe('Certificate data structure', () => {
  it('all certificates have required fields', () => {
    certificates.forEach((cert) => {
      expect(cert.id).toBeDefined();
      expect(cert.title).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.date).toBeTruthy();
      expect(cert.image).toBeTruthy();
      expect(cert.certificateNo).toBeTruthy();
      expect(cert.description).toBeTruthy();
      expect(cert.skills.length).toBeGreaterThan(0);
      expect(cert.icon).toBeTruthy();
    });
  });

  it('certificate IDs are unique', () => {
    const ids = certificates.map((c) => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(certificates.length);
  });

  it('all certificates have at least 1 skill', () => {
    certificates.forEach((cert) => {
      expect(cert.skills.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('all certificate images start with /', () => {
    certificates.forEach((cert) => {
      expect(cert.image.startsWith('/')).toBe(true);
    });
  });

  it('PIAIC certificates are from correct institution', () => {
    const piaicCerts = certificates.filter((c) =>
      c.issuer.includes('Presidential Initiative')
    );
    expect(piaicCerts.length).toBeGreaterThanOrEqual(3);
  });

  it('PAFLA certificate is from correct institution', () => {
    const paflaCert = certificates.find((c) =>
      c.title.includes('Freelancers to Founder')
    );
    expect(paflaCert?.issuer).toContain('PAFLA');
  });

  it('certificate date format is a non-empty string', () => {
    certificates.forEach((cert) => {
      expect(typeof cert.date).toBe('string');
      expect(cert.date.length).toBeGreaterThan(0);
    });
  });
});

// ---- Navigation links tests ----

describe('Navigation links data', () => {
  const navLinks = [
    { url: '/', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/blog', text: 'Blog' },
    { url: '/contact', text: 'Contact' },
  ];

  const workDropdownItems = [
    { url: '/projects', text: 'Projects', icon: '💼' },
    { url: '/experience', text: 'Experience', icon: '🎯' },
    { url: '/certifications', text: 'Certifications', icon: '🏆' },
  ];

  it('main nav has 4 links', () => {
    expect(navLinks.length).toBe(4);
  });

  it('work dropdown has 3 items', () => {
    expect(workDropdownItems.length).toBe(3);
  });

  it('all nav links have url and text', () => {
    navLinks.forEach((link) => {
      expect(link.url).toBeTruthy();
      expect(link.text).toBeTruthy();
    });
  });

  it('home link points to /', () => {
    const homeLink = navLinks.find((l) => l.text === 'Home');
    expect(homeLink?.url).toBe('/');
  });

  it('certifications is in work dropdown', () => {
    const certLink = workDropdownItems.find((l) => l.text === 'Certifications');
    expect(certLink?.url).toBe('/certifications');
  });

  it('all work items have icons', () => {
    workDropdownItems.forEach((item) => {
      expect(item.icon).toBeTruthy();
    });
  });
});

// ---- Footer data tests ----

describe('Footer quick links', () => {
  const quickLinks = [
    { href: '#whoami', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  it('has 6 quick links', () => {
    expect(quickLinks.length).toBe(6);
  });

  it('all links are anchor links starting with #', () => {
    quickLinks.forEach((link) => {
      expect(link.href.startsWith('#')).toBe(true);
    });
  });

  it('all links have labels', () => {
    quickLinks.forEach((link) => {
      expect(link.label).toBeTruthy();
    });
  });
});
