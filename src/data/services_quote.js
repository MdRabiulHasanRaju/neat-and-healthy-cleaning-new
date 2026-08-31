export const services = [
    {
  slug: 'apartment-deep-cleaning',
  name: 'Apartment Deep Cleaning',

  priceRanges: {
    Studio: {
      low: 300,
      high: 500,
    },

    '1 Bedroom': {
      low: 350,
      high: 600,
    },

    '2 Bedrooms': {
      low: 500,
      high: 800,
    },

    '3 Bedrooms': {
      low: 800,
      high: 1200,
      // plus: true,
    },
  },
},
{
  slug: 'villa-deep-cleaning',
  name: 'Villa Deep Cleaning',

  priceRanges: {
    '2 Bedrooms': {
      low: 500,
      high: 900,
    },

    '3 Bedrooms': {
      low: 700,
      high: 1200,
      // plus: true,
    },

    '4 Bedrooms': {
      low: 800,
      high: 1500,
      // plus: true,
    },
  },
}
]