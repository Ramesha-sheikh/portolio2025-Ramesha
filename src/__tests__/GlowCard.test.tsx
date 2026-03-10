import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlowCard from '@/components/GlowCard';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, onMouseMove, onMouseEnter, onMouseLeave, whileHover, transition, initial, animate, viewport, whileInView, ...rest }: React.ComponentProps<'div'> & { whileHover?: unknown; transition?: unknown; initial?: unknown; animate?: unknown; viewport?: unknown; whileInView?: unknown }) => (
      <div
        className={className}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      >
        {children}
      </div>
    ),
  },
}));

describe('GlowCard', () => {
  it('renders children correctly', () => {
    render(
      <GlowCard>
        <p>Test Content</p>
      </GlowCard>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <GlowCard className="custom-class">
        <p>Content</p>
      </GlowCard>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('shows glow effect on mouse enter', () => {
    const { container } = render(
      <GlowCard>
        <p>Content</p>
      </GlowCard>
    );
    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);
    // After hover, glow div should appear
    const glowDivs = container.querySelectorAll('.blur-2xl');
    expect(glowDivs.length).toBeGreaterThan(0);
  });

  it('hides glow effect on mouse leave', () => {
    const { container } = render(
      <GlowCard>
        <p>Content</p>
      </GlowCard>
    );
    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);
    const glowDivs = container.querySelectorAll('.blur-2xl');
    expect(glowDivs.length).toBe(0);
  });

  it('renders with default glowColor when not provided', () => {
    const { container } = render(
      <GlowCard>
        <span>Default glow</span>
      </GlowCard>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children inside relative z-10 container', () => {
    render(
      <GlowCard>
        <span data-testid="inner-content">Inner</span>
      </GlowCard>
    );
    const inner = screen.getByTestId('inner-content');
    expect(inner.closest('.relative.z-10')).toBeInTheDocument();
  });

  it('has overflow-hidden class for clip effect', () => {
    const { container } = render(
      <GlowCard>
        <p>Overflow test</p>
      </GlowCard>
    );
    expect(container.firstChild).toHaveClass('overflow-hidden');
  });

  it('updates mouse position on mouse move', () => {
    const { container } = render(
      <GlowCard>
        <p>Mouse move test</p>
      </GlowCard>
    );
    const card = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(card);
    fireEvent.mouseMove(card, { clientX: 100, clientY: 150 });
    // Should not throw, state updates correctly
    const glowDivs = container.querySelectorAll('.blur-2xl');
    expect(glowDivs.length).toBeGreaterThan(0);
  });
});
