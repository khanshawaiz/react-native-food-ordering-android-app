// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { stripe } from '../_utils/stripe.ts';

console.log('Hello from Functions!');

serve(async (req) => {
  try {
    const { amount } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    const res = {
      paymentIntent: paymentIntent.client_secret,
      publishableKey: Deno.env.get('EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY'),
    };

    return new Response(JSON.stringify(res), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});

/* 
========================================================================
 ?? HOW TO RUN & TEST THIS FUNCTION LOCALLY
 ========================================================================

 STEP 1: Start the local Supabase stack (if not already running)
 ------------------------------------------------------------------------
 Open a terminal and run:
     npx supabase start

 STEP 2: Serve the function locally (keep this terminal open)
 ------------------------------------------------------------------------
 Run this command in a terminal:
     npx supabase functions serve --env-file .env payment-sheet

 STEP 3: Test the function (Windows PowerShell)
 ------------------------------------------------------------------------
 Run this PowerShell command in a new terminal:

     Invoke-RestMethod -Uri "http://127.0.0.1:54321/functions/v1/payment-sheet" `
       -Method Post `
       -Headers @{"apikey" = "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH"} `
       -Body '{"amount":1150}' `
       -ContentType "application/json"

 ? Expected response: A JSON object with "paymentIntent" and "publishableKey".
 NOTE: The `amount` should be in cents (e.g., 1150 = $11.50).
========================================================================
*/
