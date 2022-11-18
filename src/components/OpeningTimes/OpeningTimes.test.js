import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OpeningTimes from './OpeningTimes';

const nextPlannedTimeText = 'Nästa planerade broöppning:';
const commonTimeText = 'Vanlig tid för broöppning:';

describe('Next time component', () => {

    test('show next opening when time is 05:00', async () => {
        const time = new Date('20 Aug 2020 05:00:00 GMT+2').getTime();
        jest.useFakeTimers('modern');
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 05:35`);
    });

    test('show next opening when time is 09:00', async () => {
        const time = new Date('20 Aug 2020 09:00:00 GMT+2').getTime();
        jest.useFakeTimers('modern');
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${commonTimeText} 09:00 - 09:15`);
    });

});