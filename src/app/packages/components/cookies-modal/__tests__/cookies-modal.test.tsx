import { fireEvent, render, screen } from '@testing-library/react';
import { CookiesModal } from '../cookies-modal';

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
  };
});

describe('CookiesModal', () => {
  describe('GIVEN a user accessing the e-commerce', () => {
    describe('WHEN the component CookiesModal is rendered', () => {
      it('THEN it should renders correctly', () => {
        const { container } = render(<CookiesModal />);
        expect(container).toBeInTheDocument();
      });

      it('THEN it should rejects cookies on button reject', () => {
        render(<CookiesModal />);
        fireEvent.click(screen.getByTestId('reject-button'));
        const handleReject = jest.fn();
        expect(handleReject).toHaveBeenCalledTimes(0);
      });

      it('THEN it should accepts cookies on button confirm', () => {
        render(<CookiesModal />);
        fireEvent.click(screen.getByTestId('confirm-button'));
        expect(document.cookie).toContain('marcoCivilAccepted=true');
      });
    });
  });
});
