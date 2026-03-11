export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  salary: string;
  postedAt: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build next-generation user interfaces with React and Next.js. Focus on performance, accessibility, and pixel-perfect design.",
    salary: "$140k - $180k",
    postedAt: "2 days ago"
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description: "Shape the future of our product experience. Work closely with engineering and product management to deliver stunning visuals.",
    salary: "$120k - $160k",
    postedAt: "3 days ago"
  },
  {
    id: "3",
    title: "Backend Developer",
    department: "Engineering",
    location: "London, UK",
    type: "Contract",
    description: "Design and implement scalable APIs and microservices using Node.js and Go. Optimize database queries for high throughput.",
    salary: "$90/hr",
    postedAt: "1 week ago"
  },
  {
    id: "4",
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead our growth marketing initiatives. Plan and execute campaigns across multiple channels to drive user acquisition.",
    salary: "$110k - $140k",
    postedAt: "2 weeks ago"
  },
  {
    id: "5",
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    description: "Analyze complex datasets to uncover actionable insights. Build predictive models to improve our core product offerings.",
    salary: "$150k - $200k",
    postedAt: "1 day ago"
  },
  {
    id: "6",
    title: "UX Researcher",
    department: "Design",
    location: "Austin, TX",
    type: "Part-time",
    description: "Conduct user interviews and usability testing. Translate findings into actionable recommendations for the design team.",
    salary: "$60/hr",
    postedAt: "4 days ago"
  },
  {
    id: "7",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Maintain and scale our cloud infrastructure. Implement CI/CD pipelines and ensure high availability of our services.",
    salary: "$130k - $170k",
    postedAt: "5 days ago"
  },
  {
    id: "8",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "Define the product roadmap and prioritize features. Work cross-functionally to deliver value to our users.",
    salary: "$140k - $190k",
    postedAt: "1 week ago"
  }
];
