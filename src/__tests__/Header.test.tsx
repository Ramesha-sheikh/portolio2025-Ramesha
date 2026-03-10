import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock external dependencies
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('@/hooks/useScrollListener', () => () => ({ y: 0 }));

jest.mock('gsap', () => ({
  fromTo: jest.fn(),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ref, ...rest }: React.ComponentProps<'div'>) => (
      <div className={className} {...rest}>{children}</div>
    ),
    button: ({ children, className, onClick, type, title, ref, 'aria-live': ariaLive, ...rest }: React.ComponentProps<'button'>) => (
      <button className={className} onClick={onClick} type={type as 'button' | 'submit' | 'reset'} title={title} aria-live={ariaLive} {...rest}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('@/components/NavDropdown', () => {
  const MockNavDropdown = ({ label }: { label: string; icon: string; items: unknown[]; isActive: boolean }) => (
    <div data-testid="nav-dropdown">{label}</div>
  );
  MockNavDropdown.displayName = 'MockNavDropdown';
  return MockNavDropdown;
});

jest.mock('next/link', () => {
  const MockLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

import Header from '@/components/Header';

describe('Header', () => {
  it('renders the logo brand name "Ramesha"', () => {
    render(<Header />);
    expect(screen.getByText('Ramesha')).toBeInTheDocument();
  });

  it('renders the ".ai" part of logo', () => {
    render(<Header />);
    expect(screen.getByText('.ai')).toBeInTheDocument();
  });

  it('renders Home navigation link', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders About navigation link', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders Blog navigation link', () => {
    render(<Header />);
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders Contact navigation link', () => {
    render(<Header />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Work dropdown', () => {
    render(<Header />);
    expect(screen.getByTestId('nav-dropdown')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Header />);
    const themeBtn = screen.getByTitle('Toggle theme');
    expect(themeBtn).toBeInTheDocument();
  });

  it('Home link points to /', () => {
    render(<Header />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('About link points to /about', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('Blog link points to /blog', () => {
    render(<Header />);
    const blogLink = screen.getByText('Blog').closest('a');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('Contact link points to /contact', () => {
    render(<Header />);
    const contactLink = screen.getByText('Contact').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('logo links to homepage', () => {
    render(<Header />);
    const logoLink = screen.getByText('Ramesha').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('mobile nav shows Projects, Experience, Certifications', () => {
    render(<Header />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('active Home link has active styling', () => {
    render(<Header />);
    const homeLink = screen.getByText('Home').closest('a');
    // Home is active (pathname = '/'), should have gradient class
    expect(homeLink).toHaveClass('bg-gradient-to-r');
  });
});
