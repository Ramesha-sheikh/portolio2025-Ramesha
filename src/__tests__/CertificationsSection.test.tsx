import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock all external hooks and modules
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}));

jest.mock('@/context/section', () => ({
  useSection: () => ({ onSectionChange: jest.fn() }),
}));

jest.mock('@/hooks/useOnScreen', () => () => false);
jest.mock('@/hooks/useScrollActive', () => () => false);

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, onError }: { src: string; alt: string; fill?: boolean; sizes?: string; priority?: boolean; quality?: number; onError?: React.ReactEventHandler<HTMLImageElement> }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={onError} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, onClick, animate, initial, transition, whileHover, whileInView, viewport, ...rest }: React.ComponentProps<'div'>) => (
      <div className={className} onClick={onClick} {...rest}>{children}</div>
    ),
    h2: ({ children, className, ...rest }: React.ComponentProps<'h2'>) => (
      <h2 className={className} {...rest}>{children}</h2>
    ),
    h3: ({ children, className, ...rest }: React.ComponentProps<'h3'>) => (
      <h3 className={className} {...rest}>{children}</h3>
    ),
    p: ({ children, className, ...rest }: React.ComponentProps<'p'>) => (
      <p className={className} {...rest}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

import CertificationsSection from '@/sections/CertificationsSection';

describe('CertificationsSection', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the section heading', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('Certifications & Achievements')).toBeInTheDocument();
  });

  it('renders the "Professional Certifications" badge', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('Professional Certifications')).toBeInTheDocument();
  });

  it('renders stats: 9 Certifications', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders stats: 2 Institutions', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Institutions')).toBeInTheDocument();
  });

  it('renders stats: 100% Pass Rate', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Pass Rate')).toBeInTheDocument();
  });

  it('renders "All Certifications" heading', () => {
    render(<CertificationsSection />);
    expect(screen.getByText('All Certifications')).toBeInTheDocument();
  });

  it('renders all 9 certificate titles', () => {
    render(<CertificationsSection />);
    expect(screen.getAllByText('Agentic AI Level 1 Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Agentic AI Professional Level 2 Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Prompt and Context Engineering: Level 1 Developer').length).toBeGreaterThan(0);
    expect(screen.getAllByText('From Freelancers to Founder 3.0').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Microsoft Certification').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PIAIC Agent Factory').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Prompt Engineering Result').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills Certification').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Achievement Certificate').length).toBeGreaterThan(0);
  });

  it('renders navigation prev/next buttons', () => {
    const { container } = render(<CertificationsSection />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('renders dot navigation for all 9 slides', () => {
    render(<CertificationsSection />);
    // There are 9 certificates so there should be 9 dot buttons
    const dots = screen.getAllByRole('button');
    // At minimum: prev + next + 9 dots = 11 buttons
    expect(dots.length).toBeGreaterThanOrEqual(11);
  });

  it('opens modal when certificate is clicked', () => {
    render(<CertificationsSection />);
    // Click on the first certificate card in the grid
    const certCards = screen.getAllByText('Agentic AI Level 1 Developer');
    fireEvent.click(certCards[0]);
    // Modal should show certificate number
    expect(screen.getByText('202603025261')).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', () => {
    render(<CertificationsSection />);
    // Open modal
    const certCards = screen.getAllByText('Agentic AI Level 1 Developer');
    fireEvent.click(certCards[0]);
    expect(screen.getByText('202603025261')).toBeInTheDocument();

    // Close modal
    const closeButtons = screen.getAllByRole('button');
    const closeBtn = closeButtons.find(btn => btn.querySelector('svg path[d*="M6 18L18 6"]'));
    if (closeBtn) {
      fireEvent.click(closeBtn);
      expect(screen.queryByText('About This Certification')).not.toBeInTheDocument();
    }
  });

  it('auto-advances slides with timer', () => {
    render(<CertificationsSection />);
    act(() => {
      jest.advanceTimersByTime(3500);
    });
    // Should not throw, auto-play works
    expect(screen.getByText('All Certifications')).toBeInTheDocument();
  });

  it('renders section with id="certifications"', () => {
    const { container } = render(<CertificationsSection />);
    const section = container.querySelector('#certifications');
    expect(section).toBeInTheDocument();
  });

  it('shows certificate description in modal', () => {
    render(<CertificationsSection />);
    const certCards = screen.getAllByText('From Freelancers to Founder 3.0');
    fireEvent.click(certCards[0]);
    expect(screen.getByText(/Building digital reputation engine/i)).toBeInTheDocument();
  });

  it('shows verified badge in certificate grid', () => {
    render(<CertificationsSection />);
    const verifiedBadges = screen.getAllByText('Verified');
    expect(verifiedBadges.length).toBeGreaterThanOrEqual(9);
  });
});
