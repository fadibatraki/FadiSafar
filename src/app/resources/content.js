import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Fadi",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "photographer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Germany/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Deutschland"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Follow {person.firstName}'s Instagram Page</>,
  description: (
    <>
     Freelance photographer available for portraits, events, and branding. DM to book or collaborate!
     Follow for unique visuals, behind-the-scenes shots, and tips from the lens of a working photographer.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
   image: "/images/og/home.jpg",
  label: "Home",
  title: "Appledore Visuals",
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Every photo has a soul  I just help it to speak.</>,
  featured: {
    display: true,
    title: <>I am <strong className="ml-4">Fadi Safar</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Fadi Safar, a professional photographer driven by a passion for capturing moments that tell a story.
      <br />
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I’m Fadi Safar, a professional photographer driven by a passion for capturing moments that tell a story.
       Through my lens, I strive to document the beauty in every moment — whether it’s a spontaneous smile, a deep emotional connection, or a breathtaking natural view. With over 7 years of experience, I specialize in portraits, events, products, fashion.. Each project is an opportunity to create something timeless and unique, and I love working with individuals and brands to craft visuals that authentically represent who they are. If you are looking for a photographer who captures the essence of the moment with professionalism and passion — I’d be honored to be part of your story.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/images-fadi/7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/9.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/13.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/14.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/15.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/16.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/17.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/18.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/19.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/20.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/21.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/22.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/23.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/24.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/25.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/26.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/27.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/28.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/images-fadi/29.jpg",
      alt: "image",
      orientation: "vertical  ",
    },
    {
      src: "/images/projects/images-fadi/30.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
