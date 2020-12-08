import React from 'react';
import { DateTimeFormat } from '../dateUtils';
import { CoercibleDate } from '../types';
export interface DateTimeProps {
    /**
     * The date to display as a JS Date, an ISO8601 Timestamp, or Unix Epoch Milliseconds
     *
     * @example '2020-08-13T01:23:45.000Z'
     * @example new Date()
     * @example Date.now()
     */
    date: CoercibleDate;
    /**
     * Which display format to use
     *
     * @default 'FULL'
     **/
    format?: DateTimeFormat;
    className?: string;
    testId?: string;
}
/**
 * Formats a JS Date object to an absolute date and time inside of a <time /> tag
 */
export declare const DateTime: React.FC<DateTimeProps>;
export default DateTime;
