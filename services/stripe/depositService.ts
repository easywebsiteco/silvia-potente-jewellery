/**
 * Bespoke Jewellery Deposit Service
 * TODO: Implement full Stripe integration for 50% deposits
 */

import { createPaymentIntent } from './paymentService';

/**
 * Calculate 50% deposit for bespoke jewellery
 * @param totalAmount - Total estimated cost
 * @returns 50% of total amount
 */
export function calculateDeposit(totalAmount: number): number {
  return Math.round(totalAmount * 0.5);
}

/**
 * Create deposit payment intent for bespoke inquiry
 * TODO: Implement with full workflow
 * @param bespoqueId - Unique bespoke inquiry ID
 * @param estimatedTotal - Total estimated cost
 * @param clientEmail - Client email for receipt
 */
export async function createDepositPayment(
  bespoqueId: string,
  estimatedTotal: number,
  clientEmail: string
) {
  try {
    const depositAmount = calculateDeposit(estimatedTotal);

    // TODO: Create payment intent with metadata
    // const paymentIntent = await createPaymentIntent(
    //   depositAmount * 100, // Convert to cents
    //   'gbp',
    //   {
    //     bespoke_id: bespoqueId,
    //     type: 'bespoke_deposit',
    //     estimated_total: estimatedTotal.toString(),
    //   }
    // );

    console.warn('Stripe integration not implemented yet');

    return {
      depositAmount,
      remainingBalance: estimatedTotal - depositAmount,
      paymentIntentId: 'pi_placeholder',
    };
  } catch (error) {
    console.error('Error creating deposit payment:', error);
    throw error;
  }
}

/**
 * Track deposit payment status
 * TODO: Implement with database and webhook handling
 */
export async function getDepositStatus(bespoqueId: string) {
  try {
    // TODO: Query database for deposit status
    console.warn('Stripe integration not implemented yet');
    return { status: 'pending', depositAmount: 0 };
  } catch (error) {
    console.error('Error getting deposit status:', error);
    throw error;
  }
}
