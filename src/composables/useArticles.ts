export interface Article {
    slug: string,
    title: string,
    date: string,
    pictureURL: string,
    pictureDescription: string,
    tags: string[],
    content: string,
    comments: string[],
}

const articles: Article[] = [
    {
        slug: "5-tips-for-improving-your-productivity",
        title: "5 Tips for Improving Your Productivity",
        date: "26/02/2024",
        pictureURL: "/pictures/productivity.jpg",
        pictureDescription: "An IMac displaying 'Do more'",
        tags: ["productivity", "time-management", "efficiency"],
        content: "In today's fast-paced world, productivity is key to success. Learn five actionable tips to improve your productivity and accomplish more in less time.",
        comments: []
    },
    {
        slug: "mastering-the-art-of-effective-communication",
        title: "Mastering the Art of Effective Communication",
        date: "14/01/2024",
        pictureURL: "/pictures/communication.jpg",
        pictureDescription: "Someone holding a smartphone in front of a laptop",
        tags: ["communication", "leadership", "teamwork"],
        content: "Effective communication is essential in both personal and professional life. Discover strategies and techniques to enhance your communication skills and build stronger relationships.",
        comments: ["Nice !", "I do not agree"]
    },
    {
        slug: "the-power-of-positive-thinking",
        title: "The Power of Positive Thinking",
        date: "20/12/2023",
        pictureURL: "/pictures/positive.jpg",
        pictureDescription: "'Do something great' written in neon",
        tags: ["mindset", "positivity", "self-improvement"],
        content: "Positive thinking can transform your life and lead to greater happiness and success. Explore the benefits of cultivating a positive mindset and practical ways to adopt a more optimistic outlook.",
        comments: ["I do not think that being positive is a positive way of positiving your life."]
    },
    {
        slug: "beginner's-guide-to-machine-learning",
        title: "Beginner's Guide to Machine Learning",
        date: "06/10/2023",
        pictureURL: "/pictures/machine-learning.jpg",
        pictureDescription: "A typing-machine with a paper saying 'Machine learning'",
        tags: ["machine-learning", "data-science", "artificial-intelligence"],
        content: "Machine learning is a fascinating field with endless possibilities. Dive into the basics of machine learning, understand key concepts, and embark on your journey to becoming a proficient machine learning practitioner.",
        comments: []
    },
    {
        slug: "10-healthy-habits-for-a-balanced-lifestyle",
        title: "10 Healthy Habits for a Balanced Lifestyle",
        date: "15/09/2023",
        pictureURL: "/pictures/lifestyle.jpg",
        pictureDescription: "Someone writing on a paper in front of a laptop",
        tags: ["health", "wellness", "self-care"],
        content: "Achieving a balanced lifestyle is essential for overall well-being. Discover ten simple yet effective habits that can help you lead a healthier, happier, and more fulfilling life.",
        comments: ["This kind of lifestyle is for noobs", "Eat 5 fruits and vegetables per day", "There are only 9 !"]
    }
];

export const useArticles = (): Article[] => articles;

export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug == slug);
}