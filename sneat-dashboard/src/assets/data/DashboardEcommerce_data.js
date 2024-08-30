//award
export const AwardData = { sales: 48.9, percentage: 78 };

//conversion
export const ConversionRateData = [
  {
    change: "positive",
    changePercent: 12.8,
    title: "Impressions",
    subtitle: "12.4k Visits",
  },
  {
    change: "negative",
    changePercent: 8.3,
    title: "Added To Cart",
    subtitle: "32 Product in cart",
  },
  {
    title: "Checkout",
    change: "positive",
    changePercent: 9.12,
    subtitle: "21 Product checkout",
  },
  {
    title: "Purchased",
    change: "positive",
    changePercent: 2.24,
    subtitle: "12 Orders",
  },
];
export const ConversionRateSeries = [{ data: [30, 58, 45, 68] }];

//expense bar
export const ExpenseBarSeries = [
  {
    name: `${new Date().getFullYear() - 1}`,
    data: [12, 32, 12, 27, 39, 27, 17, 9, 12, 20],
  },
  {
    name: `${new Date().getFullYear() - 2}`,
    data: [-28, -20, -27, -15, -21, -17, -19, -12, -30, -18],
  },
];
//expense radial bar
export const ExpenseRadialBarData = { expensediff: 2, percentage: 72 };

//New visitors
export const NewVisitorData = {
  series: [{ data: [20, 60, 53, 25, 42, 86, 55] }],
  percentage: 23,
  growth: -8.75,
};

export const ActivityData = {
  series: [{ data: [14, 22, 17, 40, 12, 35, 25] }],
  percentage: 82,
  growth: 19.6,
};

//performance
export const PerformanceSeries = [
  { name: "Income", data: [26, 29, 31, 40, 29, 24] },
  { name: "Earning", data: [30, 26, 24, 26, 24, 40] },
];
export const PerformanceData = { earning: 846.17, sales: 25.7 };

//profit
export const ProfitSeries = [
  { data: [11, 7, 11, 20] },
  { data: [9, 5, 15, 18] },
];
export const ProfitData = { profit: 624 };

//sales target
export const SalesTargetData = { sales: 482, target: 78, growth: 34 };

//total income
export const TotalIncomeSeries = [
  {
    name: "Income",
    data: [
      3350, 3350, 4800, 4800, 2950, 2950, 1800, 1800, 3750, 3750, 5700, 5700,
    ],
  },
];
export const TotalIncomeData = {
  data: [
    {
      title: "Income",
      avatarWidth: 20,
      stats: "$42,845",
      trendNumber: 2.7,
      avatarHeight: 22,
      avatarSrc:
        "https://greakproject.vercel.app/images/cards/paypal-primary.png",
    },
    {
      avatarWidth: 20,
      title: "Expense",
      stats: "$38,658",
      avatarHeight: 22,
      trend: "negative",
      trendNumber: 1.15,
      avatarSrc:
        "https://greakproject.vercel.app/images/cards/shopping-bag.png",
    },
    {
      title: "Profit",
      avatarWidth: 22,
      stats: "$18,220",
      avatarHeight: 21,
      trendNumber: 1.34,
      avatarSrc: "https://greakproject.vercel.app/images/cards/wallet-info.png",
    },
  ],
};
