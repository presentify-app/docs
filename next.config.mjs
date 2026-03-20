import { createMDX } from 'fumadocs-mdx/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withMDX(withNextIntl(nextConfig));
