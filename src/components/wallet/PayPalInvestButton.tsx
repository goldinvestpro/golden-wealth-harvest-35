import React from 'react';

export function PayPalInvestButton() {
  return (
    <div className="mt-4">
      <style>
        {`.pp-U6W5BKE573P4W{
          text-align:center;
          border:none;
          border-radius:0.25rem;
          min-width:11.625rem;
          padding:0 2rem;
          height:2.625rem;
          font-weight:bold;
          background-color:#FFD140;
          color:#000000;
          font-family:"Helvetica Neue",Arial,sans-serif;
          font-size:1rem;
          line-height:1.25rem;
          cursor:pointer;
        }`}
      </style>
      <form 
        action="https://www.paypal.com/ncp/payment/U6W5BKE573P4W" 
        method="post" 
        target="_top" 
        style={{
          display: 'inline-grid',
          justifyItems: 'center',
          alignContent: 'start',
          gap: '0.5rem'
        }}
      >
        <input className="pp-U6W5BKE573P4W" type="submit" value="Invest Now" />
        <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="cards" />
        <section>
          Powered by{' '}
          <img 
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
            alt="paypal" 
            style={{ height: '0.875rem', verticalAlign: 'middle' }}
          />
        </section>
      </form>
    </div>
  );
}