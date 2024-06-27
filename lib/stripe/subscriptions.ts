export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  price: number;
  features: Array<string>;
}

export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'pro',
    name: 'Pro',
    description: 'Pro tier.',
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID ?? '',
    price: 10,
    features: ['Feature A', 'Feature B', 'Feature C'],
  },
];
