export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  projectRelated?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Ahmed Hassan",
    role: "Chief Radiologist",
    company: "NIC Karachi",
    image: "/testimonials/avatar1.jpg",
    quote: "VisionDX AI has transformed our diagnostic workflow. The accuracy is remarkable, and the attention heatmaps build trust with our medical team. This is the future of medical imaging.",
    rating: 5,
    projectRelated: "VisionDX AI",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    company: "TechVentures Inc",
    image: "/testimonials/avatar2.jpg",
    quote: "Working with Ramesha on our AI agent suite was exceptional. His deep understanding of autonomous systems and ability to deliver production-grade code ahead of schedule impressed our entire team.",
    rating: 5,
    projectRelated: "AI Agent Suite",
  },
  {
    name: "Muhammad Asif",
    role: "Product Manager",
    company: "Digital Solutions",
    image: "/testimonials/avatar3.jpg",
    quote: "The CRM system Ramesha built reduced our sales team's admin work by 75%. The RAG-powered customer intelligence is a game-changer for our business.",
    rating: 5,
    projectRelated: "CRM Digital FTE",
  },
  {
    name: "Jennifer Chen",
    role: "Engineering Lead",
    company: "AI Innovations",
    image: "/testimonials/avatar4.jpg",
    quote: "Ramesha's expertise in Agentic AI and full-stack development is world-class. He doesn't just write code - he architects intelligent systems that solve real business problems.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    role: "Instructor",
    company: "PIAIC",
    image: "/testimonials/avatar5.jpg",
    quote: "One of the most talented developers I've taught. His grasp of AI concepts and ability to implement complex systems is outstanding. A true professional.",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Startup Founder",
    company: "MedTech Innovations",
    image: "/testimonials/avatar6.jpg",
    quote: "Ramesha delivered our MVP in half the expected time without compromising quality. His proactive communication and problem-solving skills make him an invaluable partner.",
    rating: 5,
  },
];
