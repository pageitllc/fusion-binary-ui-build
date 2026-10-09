import { default as countries } from 'world-countries';
export default countries;
export declare function countryCodeToEmoji(code: string | undefined | null): string;
export type CountryOption = {
    value: string;
    label: string;
};
export declare const getCountryOptions: (only?: (c: any) => boolean) => CountryOption[];
