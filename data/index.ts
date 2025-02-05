export const teamMembers = [
  {
    id: 1,
    name: "Marley",
    role: "Branding Lead",
    image: "/Brandidentity.jpg",
    instagram: "https://www.instagram.com/marlee_me_/profilecard/?igsh=MWpheDlpajQ3OTl1OA==",
    linkedin: "https://www.linkedin.com/in/marley-ogwe-00162a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Dumto",
    role: "Software Team Lead",
    image: "/dumto.jpeg",
    instagram: "https://www.instagram.com/small_llieee",
    linkedin: "www.linkedin.com/in/david-ejere-5056161a1",
  },
  {
    id: 3,
    name: "Success",
    role: "Social Media Lead",
    image: "/Contentwriter.jpeg",
    instagram: "https://www.instagram.com/intentional_mimi/profilecard/?igsh=b3V3NzNuZHRjd2Zk",
    linkedin: "https://www.linkedin.com/in/success-nwajie-seocontentwriter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Priscilla",
    role: "Event planner",
    image: "/Eventplanner.jpg",
    instagram: "https://www.instagram.com/grillzbynonny?igsh=MXdrNXNtOG05YXd2&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/priscilla-ononye-08320a303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    id: 5,
    name: "John",
    role: " Product Design Lead",
    image: "/johnDesigner.jpg",
    instagram: "https://www.instagram.com/the.lex.jo/",
    linkedin: "https://www.linkedin.com/in/john-achimugu-4341b2214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

// data.ts
import { BlogCardData, CoreValue, TestimonialDetails } from "@/types";

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Accessible Education",
    backgroundColor: "bg-dark-green",
    sticker: "/Logo Sticker Curved Orange (1).svg",
    padding: "py-7",
  },
  {
    id: 2,
    title: "Innovation",
    backgroundColor: "bg-orange-500",
    sticker: "/Logo Sticker Curved Orange (2).svg",
    padding: "py-7",
  },
  {
    id: 3,
    title: "Nurturing Potential",
    backgroundColor: "bg-[#F2A300]",
    sticker: "/Logo Sticker Curved Orange (3).svg",
    padding: "py-7",
  },
  {
    id: 4,
    title: "Excellence",
    backgroundColor: "bg-black",
    sticker: "/Logo Sticker Curved Orange (4).svg",
    padding: "py-7",
  },
];
export const blogCards: BlogCardData[] = [
  {
    category: ["Education", "Courses"],
    title: "How to Stay Motivated During Online Courses",
    date: "December 5, 2024",
    description:
      "Staying motivated in online courses can be tough, but with the right strategies, it’s possible to stay on track. In this post, we share 8 effective tips to help you stay focused, organized, and engaged in your studies. From setting goals to managing distractions, these actionable ideas will keep you motivated and on the path to success in your online learning.",
    image: "/news_and_blog_1.svg",
    author: {
      name: "Success Nwajie",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "How to Stay Motivated During Online Courses: 4 Effective Tips That Work",
        content:
          "Balancing online courses with other responsibilities like schoolwork, house chores, and personal distractions can be overwhelming. It is easy to get sidetracked by movies, video games, or social media, and staying motivated can feel like an impossible task. If you are struggling to find the energy or focus to stay on track, you are not alone. In this article, we will share practical tips to help you stay motivated during your online courses. From setting achievable goals to celebrating small wins, these simple strategies will keep you focused and energized throughout your learning journey.",
      },
      {
        title: "1. Start Small",
        content:
          "If you have ever wondered what causes a lack of motivation in online learning, I will tell you for free—it is because too often, we start with too many expectations. Do not get me wrong; having high expectations is great, but starting something new with an overwhelming workload sends the wrong signals to your brain. This often makes you feel defeated even before you begin. Instead of overburdening yourself, start small. Break your tasks into smaller, manageable bits depending on the timeline given for the course. For example, if a course module is meant to be completed in two weeks, focus on finishing one section a day rather than attempting to finish half the module in one sitting. This approach reduces stress and makes the process of learning online more enjoyable.",
      },
      {
        title: "2. Create a Workable Schedule and Stick to it",
        content:
          "To stay motivated during your online course, you need to create a schedule that works for you—and more importantly, stick to it. Do not try to be overly ambitious with your routine. Your schedule should account for your energy levels, other responsibilities, and your concentration span. For instance, if you are more productive in the morning, schedule your study sessions during that time. Break your learning into manageable time blocks and take regular breaks. The Pomodoro Technique is a great way to structure your study sessions. Study for 25 minutes, then take a 5-minute break. After four cycles, take a longer break of 15 to 20 minutes. Consistency is the key. Once you establish a routine and stick to it, studying becomes a habit rather than a chore.",
      },
      {
        title: "3. Make Your Goals Realistic",
        content:
          "One major reason students lose motivation is setting unrealistic goals. Sure, you want to finish the course quickly, but is it realistic given your current schedule and workload? Set clear, achievable goals. For example, instead of saying, “I will finish this 10-hour course in one day,” aim for something more realistic, like, “I will complete two lessons each day.” Write down your goals and place them where you can see them daily. Breaking your bigger goals into smaller milestones will give you a sense of accomplishment and keep you motivated.",
      },
      {
        title: "4. Attach a Reward System to Your Milestones",
        content:
          "Everybody loves free gifts and rewards. You can use this to your advantage. Celebrating small wins can be a huge motivation booster in your online course journey. Whenever you finish a module in your course, you can attach a reward. For instance, after completing a module, treat yourself to something you enjoy—a favorite snack, an episode of your favorite show, or a short walk outside. This gives your brain enough time to rest while getting it excited for the next round of action. These little rewards act as positive reinforcement, keeping you excited and motivated to tackle the next section of your course.",
        imageContent: {
          image: "/onlinecourse.jpg",

          alt: "Picture of Someone doing an online course",
        },

        moreContent:
          "Final Thoughts: Staying motivated during online courses isn’t always easy, but it’s entirely possible with the right approach. Start small, set realistic goals, stick to a schedule, and reward yourself along the way. Also, do not forget to surround yourself with supportive peers, create an inspiring workspace, and minimize all forms of distractions. Every little step you take daily in studying your online course brings you closer to completing it and gaining the skills you desire. The journey may be challenging, but the results will be worth it. So, keep your head up, stay consistent, and finish strong.",
      },
    ],
  },
  {
    category: ["Product", "Courses"],
    title: "The Importance of Networking in Building a Successful Career",
    date: "August 28, 2024",
    description:
      " Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future. In today's fast-paced world, financial literacy is an essential skill for students to master early in life.  ",
    image: "/news_and_blog_2.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Product", "Education", "Ecosystem"],
    title: "Balancing School and Life: Tips for Effective Time Management",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_3.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "Preparing for College: A Comprehensive Guide",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_4.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "The Power of Mentorship: How to Find and Benefit from a Mentor",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_5.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "Financial Literacy for Students: Building a Strong Foundation",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_6.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "The Role of Soft Skills in Career Success",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_7.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "Top Skills Employers Look for in 2024",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_8.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
  {
    category: ["Company", "Courses"],
    title: "How to Balance Academics and Extracurricular Activities",
    date: "August 23, 2024",
    description:
      "Financial literacy is a critical life skill that often isn't taught in schools. This blog aims to fill that gap by providing students with the knowledge they need to manage their finances wisely. Learn about budgeting, saving, and investing to build a strong financial foundation for your future.",
    image: "/news_and_blog_9.svg",
    author: {
      name: "Young & Skilled Admin",
      image: "/icons/photo-card.svg",
      socials: {
        "twitter(X)": "https://x.com/",
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
      },
    },
    moreDescription: [
      {
        title: "Why Financial Literacy Matters",
        content:
          "Financial literacy empowers students to take control of their finances. It involves understanding basic financial concepts such as saving, investing, credit management, and debt reduction. With this knowledge, students can avoid common financial pitfalls, like accumulating unnecessary debt or overspending, and instead focus on building a solid financial foundation.",
      },
      {
        title: "Starting Early",
        content:
          "The earlier students start learning about money, the better prepared they'll be to handle the financial challenges that come their way. Simple habits like tracking expenses, saving a portion of their income, and understanding the difference between wants and needs can make a significant impact over time.",
      },
      {
        title: "Budgeting and Saving",
        content:
          "Budgeting is a fundamental skill that helps students manage their money effectively. By creating a budget, they can plan for expenses, save for future goals, and avoid living beyond their means. Additionally, establishing a savings habit early on ensures that students are prepared for unexpected expenses and future financial needs.",
      },
      {
        title: "The Power of Compound Interest",
        content:
          "One of the most valuable lessons in financial literacy is understanding compound interest. By starting to save and invest early, students can take advantage of the power of compounding, where their money grows exponentially over time. This can lead to significant financial gains in the long run.",
      },
      {
        title: "Making Informed Financial Decisions",
        content:
          "Financial literacy also involves making informed decisions about credit and debt. Students should understand how credit works, the importance of maintaining a good credit score, and the long-term impact of taking on debt. By being financially literate, they can avoid high-interest debt and make choices that support their financial well-being.",
        imageContent: {
          image: "/images/finance.png",
          alt: "Image 1: Student making financial plans",
        },
        moreContent:
          "Building a strong financial foundation through literacy is one of the most important steps students can take towards a secure future. By learning how to manage money, budget wisely, and make informed financial decisions, they equip themselves with the tools needed to achieve financial success and stability throughout their lives.",
      },
    ],
  },
];
export const testimonials: TestimonialDetails[] = [
  {
    quote: "Platform's flexibility allowed me to learn at my own pace",
    company: "/testimonial_young_and_skilled.svg",
    quoteImage: "/testimonial_quote_green.svg",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/testimonial_maria_obioma.svg",
    bgColor: "#114F3C",
    extra: "/testimonial_star_2.svg",
    companyWidth: 80,
    companyHeight: 44,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "/testimonial_google.svg",
    quoteImage: "/testimonial_quote_mint.svg",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/testimonial_david_oluah.svg",
    bgColor: "#98BC6D",
    extra: "/testimonial_star.svg",
    companyWidth: 114,
    companyHeight: 37,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "Young and Skilled Initiative opened my eyes to new possibilities",
    company: "/testimonial_microsoft.svg",
    quoteImage: "/testimonial_quote_red.svg",
    description:
      "Young and Skilled Initiative opened my eyes to new possibilities. The skills I learned here have helped me launch my own app!",
    name: "Sarah Macklin",
    position: "Program Alumna, Microsoft",
    image: "/testimonial_sarah_macklin.svg",
    bgColor: "#EF4C0D",
    extra: "/testimonial_semicircle.svg",
    companyWidth: 135,
    companyHeight: 29,
    extraWidth: 65,
    extraHeight: 32,
  },
  // Add more testimonials here...
];

export const content = [
  {
    title: "We are Young &",
    highlight: "inspired.",
    highlightColor: "text-light-green",
  },
  {
    title: "We are Young &",
    highlight: "Loaded.",
    highlightColor: "text-light-green",
  },
  {
    title: "We are Young &",
    highlight: "skilled.",
    highlightColor: "text-dark-green",
  },
];
