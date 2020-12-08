import React from 'react';
import { CoercibleDate } from '../types';
export interface RelativeDateProps {
    /** the date to represent */
    date: CoercibleDate;
    /**
     * (optional) other date to compare against
     * @default now
     */
    baseDate?: CoercibleDate;
    className?: string;
    testId?: string;
}
/**
 * Expresses a historical or upcoming date as a relative date/date time
 *
 * Forma36 usage guidelines: https://f36.contentful.com/guidelines/date-and-time/
 */
export declare const RelativeDate: React.FC<RelativeDateProps>;
export default RelativeDate;
