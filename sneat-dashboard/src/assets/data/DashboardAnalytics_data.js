import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const CongradsData = { sales: 72 };

//Income Stats
export const IncomeData = {
  income: {
    difference: 39,
    title: "Income",
    stats: "$459.1k",
    trendNumber: 42.9,
    progressValue: 6.5,
    avatarSrc:
      "https://greakproject.vercel.app/images/cards/wallet-with-bg.png",
    series: [{ name: "Income", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
  expenses: {
    difference: 16,
    stats: "$316.5k",
    title: "Expenses",
    trend: "negative",
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc:
      "https://greakproject.vercel.app/images/cards/wallet-with-bg.png",
    series: [{ name: "Expenses", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
  profit: {
    difference: 28,
    title: "Profit",
    stats: "$147.9k",
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: "https://greakproject.vercel.app/images/cards/chart.png",
    series: [{ name: "Profit", data: [24, 21, 30, 22, 42, 26, 35, 29] }],
  },
};

export const IncomeSeries = [{ data: [24, 21, 30, 22, 42, 26, 35, 29] }];

//order card&stats
export const OrderSeries = [{ data: [30, 70, 35, 55, 45, 70] }];
export const OrderData = [
  {
    amount: "82.5k",
    title: "Electronic",
    avatarColor: "rgb(105, 108, 255)",
    subtitle: "Mobile, Earbuds, TV",
    avatarIcon: <SmartphoneIcon />,
    bgColor: "rgba(105, 108, 255, 0.16)",
  },
  {
    amount: "23.8k",
    title: "Fashion",
    avatarColor: "rgb(113, 221, 55)",
    subtitle: "Tshirt, Jeans, Shoes",
    avatarIcon: <CheckroomIcon />,
    bgColor: "rgba(113, 221, 55, 0.16)",
  },
  {
    amount: 849,
    title: "Decor",
    avatarColor: "rgb(3, 195, 236)",
    subtitle: "Fine Art, Dining",
    avatarIcon: <HomeIcon />,
    bgColor: "rgba(3, 195, 236, 0.16)",
  },
  {
    amount: 99,
    title: "Sports",
    avatarColor: "rgb(133, 146, 163)",
    subtitle: "Football, Cricket Kit",
    avatarIcon: <SportsSoccerIcon />,
    bgColor: "rgb(133, 146, 163,0.16)",
  },
];

//Payment
export const PaymentData = { payment: 2468, percentage: -14.82 };

//Profit Report
export const ProfitReportSeries = [{ data: [30, 58, 35, 53, 50, 68] }];
export const ProfitReportData = { profit: 84686, percentage: 68.2 };

//Revenue card
export const RevenueSeries = [{ data: [23, 81, 70, 31, 99, 46, 73] }];
export const RevenueData = { revenue: 425 };

//Sales card
export const SalesData = { payment: 4679, percentage: 28.14 };

//Total revenue
export const TotalRevenueSeries = [
  { name: `${new Date().getFullYear() - 1}`, data: [18, 7, 15, 29, 18, 12, 9] },
  {
    name: `${new Date().getFullYear() - 2}`,
    data: [-13, -18, -9, -14, -5, -17, -15],
  },
];
export const TotalRevenueData = {
  revenue_cy: 32.5,
  revenue_py: 41.2,
  growth_company: 62,
  growth: 78,
};

//transactions
export const TransactionsData = [
  {
    title: "Paypal",
    amount: "+82.6",
    subtitle: "Send money ",
    imgSrc: "https://greakproject.vercel.app/images/cards/paypal.png",
  },
  {
    title: "Wallet",
    amount: "+270.69",
    subtitle: "Mac'D",
    imgSrc: "https://greakproject.vercel.app/images/cards/wallet.png",
  },
  {
    title: "Transfer",
    amount: "+637.91",
    subtitle: "Refund",
    imgSrc: "https://greakproject.vercel.app/images/cards/chart.png",
  },
  {
    amount: "-838.71",
    title: "Credit Card",
    subtitle: "Ordered Food",
    imgSrc: "https://greakproject.vercel.app/images/cards/credit-card.png",
  },
  {
    title: "Wallet",
    amount: "+203.33",
    subtitle: "Starbucks",
    imgSrc: "https://greakproject.vercel.app/images/cards/wallet.png",
  },
  {
    amount: "-92.45",
    title: "Mastercard",
    subtitle: "Ordered Food",
    imgSrc: "https://greakproject.vercel.app/images/cards/atm-card.png",
  },
];
