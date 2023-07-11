import { brand, collaborative, dywan, entertain, felix, flexibility, personalized, quote1, quote2, quote3 } from "../Assets";

const NavLinks = [
    {
      id: "home",
      to: "/",
      title: "Home",
    },
    {
      id: "about",
      to: "/about",
      title: "About",
    },
    {
      id: "courses",
      to: "/courses",
      title: "Courses",
    },
    {
      id: "blog",
      to: "/blog",
      title: "Blog",
    },
    {
      id: "contact",
      to: "/contact",
      title: "Contact",
    },
  ];

  const Features = [
    {
      id: 1,
      image: personalized,
      title: "Personalised",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments"
    },
    {
      id: 2,
      image: flexibility,
      title: "Flexibility",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments"
    },
    {
      id: 3,
      image: collaborative,
      title: "Collaborative",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments"
    },
    {
      id: 4,
      image: entertain,
      title: "Entertaining",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments"
    },
  ]

  const Feedback = [
    {
      id: 1,
      avatar: dywan,
      name: "Dywan Malcom",
      country: "Ireland",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments",
      quote: quote1,
    },
    {
      id: 2,
      avatar: brand,
      name: "Brand Smith",
      country: "Chicago",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments",
      quote: quote2,
    },
    {
      id: 3,
      avatar: felix,
      name: "Felix Ogini",
      country: "Amsterdam",
      content: "Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments",
      quote: quote3,
    }

  ]

  export {
    NavLinks, Features, Feedback,
  }