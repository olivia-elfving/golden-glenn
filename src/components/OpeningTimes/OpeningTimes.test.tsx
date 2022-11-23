import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OpeningTimes from './OpeningTimes';

const nextPlannedTimeText = 'Nästa planerade broöppning:';
const commonTimeText = 'Vanlig tid för broöppning:';

describe('Next time component', () => {

    test('show next opening when time is 05:00', async () => {
        const time = new Date('20 Aug 2020 05:00:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 05:35`);
    });

    test('show next opening when time is 07:30 (weekend)', async () => {
        const time = new Date('22 Aug 2020 07:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 07:35`);
    });

    test('show next opening when time is 09:00', async () => {
        const time = new Date('20 Aug 2020 09:00:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${commonTimeText} 09:00 - 09:15`);
    });

    test('show next opening when time is 09:30', async () => {
        const time = new Date('20 Aug 2020 09:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 09:35`);
    });

    test('show next opening when time is 11:30', async () => {
        const time = new Date('20 Aug 2020 11:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 11:35`);
    });

    test('show next opening when time is 14:30', async () => {
        const time = new Date('20 Aug 2020 14:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 14:35`);
    });

    test('show next opening when time is 16:30 (weekend)', async () => {
        const time = new Date('22 Aug 2020 16:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render (<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 16:35`);
    });

    test('show next opening when time is 18:00', async () => {
        const time = new Date('20 Aug 2020 18:00:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${commonTimeText} 18:00 - 18:15`);
    });

    test('show next opening when time is 18:30', async () => {
        const time = new Date('20 Aug 2020 18:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 18:35`);
    });

    test('show next opening when time is 20:30', async () => {
        const time = new Date('20 Aug 2020 20:30:00').getTime();
        jest.useFakeTimers();
        jest.setSystemTime(time);
        render(<OpeningTimes />);

        await screen.getByTestId('next_time');

        expect(screen.getByTestId('next_time')).toHaveTextContent(`${nextPlannedTimeText} 20:35`);
    });
});