declare const formatTokens: {
    FULL: string;
    DATE_ONLY: string;
    TIME_ONLY: string;
    WEEKDAY_DATE: string;
};
export declare type DateTimeFormat = keyof typeof formatTokens;
/**
 * @example
 * > formatDateTime(date)
 * 13 Aug 2019 at 10:00 am
 *
 * @example
 * > formatDateTime(date, 'DATE_ONLY')
 * 13 Aug 2019
 */
export declare const formatDateTime: (date: string | number | Date, token?: "FULL" | "DATE_ONLY" | "TIME_ONLY" | "WEEKDAY_DATE") => string;
/**
 * @example
 * > formatDate(date)
 * 13 Aug 2019
 */
export declare const formatDate: (date: string | number | Date) => string;
/**
 * @example
 * > formatTime(date)
 * 8:00 am
 */
export declare const formatTime: (date: string | number | Date) => string;
/**
 * @example
 * > formatWeekdayDate(date)
 * Mon, 12 Aug
 */
export declare const formatWeekdayDate: (date: string | number | Date) => string;
export declare const formatRelativeDateTime: (date: string | number | Date, baseDate?: string | number | Date) => string;
export {};
