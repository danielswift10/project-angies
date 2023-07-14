import { africa, arabic, blog2, blog3, brand, collaborative, dutch, dywan, entertain, felix, finland, flexibility, french, german, korean, listening, paris, personalized, portugues, quote1, quote2, quote3, reading, writing } from "../Assets";

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

  const FooterLinks = [
    {
      id: 1,
      to: "/about",
      text: "About",
    },
    {
      id: 2,
      to: "/courses",
      text: "Courses",
    },
    {
      id: 3,
      to: "/",
      text: "Career",
    },
  ];

  const Countries = [
    {
      id: 1,
      name: "French",
      image: french,
    },
    {
      id: 2,
      name: "German",
      image: german,
    },
    {
      id: 3,
      name: "Korean",
      image: korean,
    },
    {
      id: 4,
      name: "Africa",
      image: africa,
    },
    {
      id: 5,
      name: "Arabic",
      image: arabic,
    },
    {
      id: 6,
      name: "Finland",
      image: finland,
    },
    {
      id: 7,
      name: "Portuges",
      image: portugues,
    },
    {
      id: 8,
      name: "Dutch",
      image: dutch,
    },
  ]

  const InsightContent = [
    {
      id: 1,
      title: "Listening",
      heading1: "Get started with",
      heading2: "understanding",
      heading3: "a new language",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: listening,
    },
    {
      id: 2,
      title: "Reading",
      heading1: "Our team of experts will guide to",
      heading2: "read",
      heading3: ".",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      image: reading,
    },
    {
      id: 3,
      title: "Writing",
      heading1: "We will help you",
      heading2: "speak",
      heading3: "link a local in any language",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      image: writing,
    }
  ]

  const BlogPost = [
    {
      id: 1,
      title: "Apr 4, 2023",
      heading: "Learn to speak & write  French like a Local  in 3 Weeks",
      content: "Finding a language exchange partner is a great way to improve your language skills and gain confidence in speaking with a native speaker.",
      image: paris,
    },
    {
      id: 2,
      title: "May 5, 2023",
      heading: "Language learning apps are a convenient and effective way to start",
      content: "Language learning apps are a convenient and effective way to improve your language skills. With a wide variety of apps available for different languages and skill levels, you can find...",
      image: blog2,
    },
    {
      id: 3,
      title: "May 2, 2023",
      heading: "Communication starts with the basics",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      image: blog3,
    }
  ]
  export {
    NavLinks, Features, Feedback, FooterLinks, Countries, InsightContent, BlogPost,
  }