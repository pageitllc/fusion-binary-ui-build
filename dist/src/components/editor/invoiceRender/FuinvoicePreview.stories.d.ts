import { Meta, StoryObj } from '@storybook/vue3';
import { default as FuInvoicePreview } from './FuInvoicePreview.vue';
declare const meta: Meta<typeof FuInvoicePreview>;
export default meta;
type Story = StoryObj<typeof FuInvoicePreview>;
/** Classic layout — the default. Logo and company details on the left, invoice meta on the right. */
export declare const Classic: Story;
/** Minimal layout — typographic treatment, company name as the visual headline. */
export declare const Minimal: Story;
/** Modern layout — dark header band with an indigo accent strip and inverted total row. */
export declare const Modern: Story;
/** Detailed layout — large logo, tabular meta grid, double ruled section dividers. */
export declare const Detailed: Story;
/** Classic with a custom brand colour on the header background and divider. */
export declare const ClassicBranded: Story;
/** Modern with a deep teal brand colour overriding the default dark band. */
export declare const ModernBranded: Story;
/** All optional columns hidden — name and total only. Useful for simple deliverable invoices. */
export declare const SimpleColumns: Story;
/** Service image thumbnails hidden — cleaner for service-only invoices. */
export declare const NoImages: Story;
/** No discounts, no tax — flat subtotal equals the total. */
export declare const NoDiscountNoTax: Story;
/** Multiple stacked discounts. */
export declare const MultipleDiscounts: Story;
/** USD currency. */
export declare const USD: Story;
/** EUR currency. */
export declare const EUR: Story;
/** Most header fields toggled off — confirms the layout holds without them. */
export declare const SparseHeader: Story;
/** Single line item, no sub items, no discount. */
export declare const SingleLineItem: Story;
/** No service blocks at all — confirms the summary renders £0.00 gracefully. */
export declare const Empty: Story;
/**
 * Live variant switcher — click between all four layouts with the same data.
 * Useful for quickly comparing how a real invoice payload looks across variants.
 */
export declare const VariantSwitcher: Story;
