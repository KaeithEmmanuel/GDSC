export const SelectTravellerList=[
    {
        id:1,
        title:'Just Me',
        desc:"A Sole Traveller in exploring world",
        icon:'person',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:"A Couple Traveller in exploring world",
        icon:'people',
        people:'2 People'
    },{
        id:3,
        title:'Family',
        desc:"A Group of fun loving adventures",
        icon:'family-restroom',
        people:'3 to 5'
    },{
        id:4,
        title:'Friends',
        desc:"A Bunch of thrill seakers",
        icon:'group',
        people:'5 to 10 People'
    }
]

export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Stay conscious of costs',
      icon: 'attach-money', // Icon for cheap budget
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Stay on budget',
      icon: 'account-balance-wallet', // Icon for moderate budget
    },
    {
      id: 3,
      title: 'Luxury',
      desc: "Don't worry about cost",
      icon: 'monetization-on', // Icon for luxury budget
    },
  ];

  export const AI_PROMPT='Generate Travel Plan for Location: {location},for {totalDays} Days and {totalNight} Nights for {traveller} with a {budget} budget ,with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time  travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'
  