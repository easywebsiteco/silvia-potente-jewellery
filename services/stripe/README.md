# Stripe Integration (Future Implementation)

This directory contains placeholder functions and utilities for Stripe integration.

## Structure

- `paymentService.ts` - Payment processing functions (TODO)
- `depositService.ts` - Bespoke deposit handling (TODO)
- `voucherService.ts` - Gift voucher system (TODO)
- `types.ts` - TypeScript interfaces for Stripe

## Implementation Notes

### Payment Processing
- Product checkout flow
- Secure payment intent creation
- Webhook handling for payment confirmation
- Email receipts

### Bespoke Deposits
- Calculate 50% deposit amount
- Create payment intent for deposit
- Track deposit status
- Workflow integration

### Gift Vouchers
- Generate unique voucher codes
- Process voucher payments
- Redemption logic
- Expiry management

## TODO Items

- [ ] Install `stripe` and `@stripe/react-stripe-js` packages
- [ ] Set up Stripe API keys in environment variables
- [ ] Implement payment intent creation
- [ ] Create webhook handlers
- [ ] Build checkout components
- [ ] Add payment confirmation emails
- [ ] Set up error handling
- [ ] Test with Stripe test keys

## API Keys

Store in `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Environment Setup

1. Create Stripe account at https://stripe.com
2. Get API keys from Dashboard → Developers → API Keys
3. Create webhook endpoint for: `domain.com/api/webhooks/stripe`
4. Copy webhook signing secret
