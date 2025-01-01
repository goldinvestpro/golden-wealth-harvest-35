import axios from "axios";

export interface GoldPriceResponse {
  rates: {
    XAU: {
      USD: number;
    };
  };
}

export const fetchGoldPrice = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://gold.g.apised.com/v1/latest?metals=XAU&base_currency=USD&currencies=USD&weight_unit=kg',
    headers: { 
      'x-api-key': 'sk_cB23D42EebfbB25d6CeA1b750aAF5fCEA65fEB9A00e2Ebd8'
    }
  };

  const response = await axios.request(config);
  console.log('Gold API Response:', response.data);
  
  if (response.data?.rates?.XAU) {
    return response.data as GoldPriceResponse;
  }
  
  throw new Error('Invalid API response structure');
};