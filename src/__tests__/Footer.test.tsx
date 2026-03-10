import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    a: ({ children, className, href, title, target, rel, ...rest }: React.ComponentProps<'a'>) => (
      <a className={className} href={href} title={title} target={target} rel={rel} {...rest}>
        {children}
      </a>
    ),
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Ramesha Javed')).toBeInTheDocument();
  });

  it('renders company tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/AI-Native Full Stack Developer/i)).toBeInTheDocument();
  });

  it('renders email contact link', () => {
    render(<Footer />);
    const emailLink = screen.getByText('Rameshajaved1@gmail.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:Rameshajaved1@gmail.com');
  });

  it('renders phone contact link', () => {
    render(<Footer />);
    const phoneLink = screen.getByText('+92 313-0384064');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+923130384064');
  });

  it('renders location - Karachi, Pakistan', () => {
    render(<Footer />);
    expect(screen.getByText('Karachi, Pakistan')).toBeInTheDocument();
  });

  it('renders Quick Links heading', () => {
    render(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('renders Contact heading', () => {
    render(<Footer />);
    const contactHeadings = screen.getAllByText('Contact');
    expect(contactHeadings.length).toBeGreaterThanOrEqual(1);
  });

  it('renders current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('renders social links for GitHub', () => {
    render(<Footer />);
    const githubLink = screen.getByTitle("Ramesha's Github Profile");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Ramesha-sheikh');
  });

  it('renders social links for LinkedIn', () => {
    render(<Footer />);
    const linkedinLink = screen.getByTitle("Ramesha's LinkedIn Profile");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/rameesha20');
  });

  it('renders social links for Facebook', () => {
    render(<Footer />);
    const facebookLink = screen.getByTitle("Ramesha's Facebook Profile");
    expect(facebookLink).toBeInTheDocument();
  });

  it('renders Privacy Policy link', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders Terms of Service link', () => {
    render(<Footer />);
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('renders with noPadding prop', () => {
    const { container } = render(<Footer noPadding={true} />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('pb-4');
    expect(footer).not.toHaveClass('pb-24');
  });

  it('renders with default padding (noPadding = false)', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('pb-24');
  });

  it('social links open in new tab', () => {
    render(<Footer />);
    const githubLink = screen.getByTitle("Ramesha's Github Profile");
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
