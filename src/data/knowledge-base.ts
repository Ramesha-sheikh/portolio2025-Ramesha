// Knowledge Base for RAG Chatbot - Training Data about Ramesha Javed

export interface KnowledgeItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const knowledgeBase: KnowledgeItem[] = [
  // ===== BASIC INFO =====
  {
    id: "basic-1",
    category: "basic",
    question: "Who is Ramesha Javed?",
    answer: "Ramesha Javed is a Certified Agentic AI Developer and Founder of VisionDX AI. He specializes in building production-grade autonomous agents, RAG systems, and AI-powered applications. He has 4 professional certifications from Presidential Initiative for AI & Computing (PIAIC) and PAFLA.",
    keywords: ["who", "ramesha", "javed", "intro", "introduction", "kaun", "hai"],
  },
  {
    id: "basic-2",
    category: "basic",
    question: "What does Ramesha do?",
    answer: "Ramesha builds intelligent web applications and AI systems. He specializes in Agentic AI, multi-agent orchestration, RAG systems, and AI-powered chatbots. He's also the Founder of VisionDX AI, a medical imaging platform.",
    keywords: ["what", "does", "do", "work", "job", "profession", "karta", "hai"],
  },
  {
    id: "basic-3",
    category: "basic",
    question: "Where is Ramesha based?",
    answer: "Ramesha is based in Pakistan and works remotely with clients globally.",
    keywords: ["where", "location", "based", "country", "city", "kahan", "rehta"],
  },
  {
    id: "basic-4",
    category: "basic",
    question: "Is Ramesha available for projects?",
    answer: "Yes! Ramesha is available for freelance projects and collaborations. You can contact him through the contact form on this website or reach out via email.",
    keywords: ["available", "hire", "project", "freelance", "work", "collaboration"],
  },
  
  // ===== CERTIFICATIONS =====
  {
    id: "cert-1",
    category: "certifications",
    question: "What certifications does Ramesha have?",
    answer: "Ramesha has 4 professional certifications:\n1. Agentic AI Level 1 Developer (PIAIC)\n2. Agentic AI Professional Level 2 Developer (PIAIC)\n3. Prompt and Context Engineering Level 1 (PIAIC)\n4. From Freelancers to Founder 3.0 (PAFLA)",
    keywords: ["certification", "certificate", "degree", "qualification", "education"],
  },
  {
    id: "cert-2",
    category: "certifications",
    question: "What is Agentic AI certification?",
    answer: "Agentic AI certification is from Presidential Initiative for AI & Computing (PIAIC). It covers building autonomous AI agents, multi-agent systems, AI orchestration, and production-grade agentic AI development.",
    keywords: ["agentic", "ai", "certification", "piaic", "level"],
  },
  {
    id: "cert-3",
    category: "certifications",
    question: "When did Ramesha get certified?",
    answer: "Ramesha received his certifications in 2026. The Agentic AI and Prompt Engineering certifications are dated January 30, 2026, and the PAFLA certification is from August 18, 2025.",
    keywords: ["when", "date", "year", "certification", "passed"],
  },
  
  // ===== SKILLS & EXPERTISE =====
  {
    id: "skills-1",
    category: "skills",
    question: "What are Ramesha's technical skills?",
    answer: "Ramesha's tech stack includes:\n• Languages: Python, TypeScript, JavaScript\n• Frontend: Next.js, React, Tailwind CSS\n• Backend: Node.js, FastAPI\n• AI/ML: Agentic AI, RAG Systems, LangChain, LLMs\n• Databases: MongoDB, PostgreSQL\n• Cloud: AWS, Vercel\n• Tools: Git, Docker, MCP Server",
    keywords: ["skills", "technology", "tech", "stack", "expertise", "proficient"],
  },
  {
    id: "skills-2",
    category: "skills",
    question: "What AI technologies does Ramesha specialize in?",
    answer: "Ramesha specializes in:\n• Agentic AI & Multi-Agent Systems\n• RAG (Retrieval Augmented Generation)\n• LLM Integration (Gemini, Claude, Grok)\n• AI Vision & Medical Imaging\n• Prompt Engineering\n• Autonomous AI Agents\n• AI-Powered Chatbots",
    keywords: ["ai", "artificial", "intelligence", "ml", "machine", "learning", "specialization"],
  },
  {
    id: "skills-3",
    category: "skills",
    question: "What frameworks does Ramesha use?",
    answer: "Ramesha primarily uses Next.js and React for frontend development, FastAPI and Node.js for backend, and various AI frameworks like LangChain for AI development.",
    keywords: ["framework", "react", "nextjs", "fastapi", "nodejs", "use"],
  },
  
  // ===== PROJECTS =====
  {
    id: "projects-1",
    category: "projects",
    question: "What projects has Ramesha built?",
    answer: "Ramesha has built 10+ projects including:\n• VisionDX AI - Medical Imaging Platform (NIC Karachi)\n• AI-Native Autonomous Agent Suite\n• CRM Digital FTE Factory\n• Multi-agent systems with real-time model routing\n• AI-powered diagnostic tools for medical imaging",
    keywords: ["project", "built", "created", "developed", "portfolio", "work"],
  },
  {
    id: "projects-2",
    category: "projects",
    question: "What is VisionDX AI?",
    answer: "VisionDX AI is Ramesha's medical imaging startup registered at NIC Karachi. It analyzes X-rays, MRI, CT scans, and 25+ medical imaging types with AI-driven diagnostic reports. The platform uses advanced AI vision technology for medical diagnostics.",
    keywords: ["visiondx", "medical", "imaging", "startup", "nic", "karachi"],
  },
  {
    id: "projects-3",
    category: "projects",
    question: "Tell me about Ramesha's AI projects",
    answer: "Ramesha's AI projects include:\n• Multi-agent orchestration systems\n• AI CRM with 24/7 digital employees\n• Medical imaging diagnostics\n• RAG systems with persistent memory\n• Autonomous agents with real-time model routing between Gemini, Claude, and Grok",
    keywords: ["ai", "project", "agent", "multi-agent", "automation"],
  },
  {
    id: "projects-4",
    category: "projects",
    question: "How many projects has Ramesha completed?",
    answer: "Ramesha has completed 10+ projects and deployed 25+ AI models. His work has impacted 50K+ users across various applications.",
    keywords: ["how many", "projects", "completed", "count", "total"],
  },
  
  // ===== EXPERIENCE =====
  {
    id: "exp-1",
    category: "experience",
    question: "What is Ramesha's experience level?",
    answer: "Ramesha is a professional AI developer with expertise in building production-grade AI systems. He has experience with multi-agent orchestration, RAG systems, and has founded VisionDX AI, a medical imaging startup.",
    keywords: ["experience", "level", "senior", "junior", "years", "expert"],
  },
  {
    id: "exp-2",
    category: "experience",
    question: "What companies has Ramesha worked with?",
    answer: "Ramesha is the Founder of VisionDX AI (registered at NIC Karachi). He has worked with various clients on freelance projects and is certified by Presidential Initiative for AI & Computing (PIAIC) and PAFLA.",
    keywords: ["company", "companies", "work", "client", "founder", "ceo"],
  },
  
  // ===== CONTACT =====
  {
    id: "contact-1",
    category: "contact",
    question: "How can I contact Ramesha?",
    answer: "You can contact Ramesha through:\n• Contact form on this website\n• Email (check the contact section)\n• LinkedIn profile\n• GitHub\n• Social media links available on the website",
    keywords: ["contact", "reach", "email", "phone", "social", "linkedin", "connect"],
  },
  {
    id: "contact-2",
    category: "contact",
    question: "Can I hire Ramesha for my project?",
    answer: "Yes! Ramesha is available for freelance projects and collaborations. He specializes in AI development, web applications, and agentic systems. Use the contact form to discuss your project requirements.",
    keywords: ["hire", "project", "freelance", "collaboration", "work", "available"],
  },
  
  // ===== MISC =====
  {
    id: "misc-1",
    category: "misc",
    question: "What makes Ramesha unique?",
    answer: "Ramesha is unique because:\n• 4x Certified in cutting-edge AI technologies\n• Specializes in Agentic AI (future of AI)\n• Built production medical AI at NIC Karachi\n• Expert in multi-agent systems\n• Combines technical skills with entrepreneurship (PAFLA certified)\n• 50K+ users impacted by his work",
    keywords: ["unique", "special", "different", "why", "choose", "best"],
  },
  {
    id: "misc-2",
    category: "misc",
    question: "What is Ramesha's approach to AI development?",
    answer: "Ramesha focuses on building production-grade, scalable AI systems. He specializes in agentic AI, multi-agent orchestration, and practical AI applications that solve real-world problems. His approach combines technical excellence with business value.",
    keywords: ["approach", "methodology", "development", "process", "how"],
  },
  {
    id: "misc-3",
    category: "misc",
    question: "Does Ramesha work with clients internationally?",
    answer: "Yes, Ramesha works with clients globally. He's based in Pakistan but provides remote services to international clients.",
    keywords: ["international", "global", "worldwide", "client", "remote"],
  },
  
  // ===== ROMAN URDU / HINDI =====
  {
    id: "urdu-1",
    category: "urdu",
    question: "Ramesha Javed kaun hai?",
    answer: "Ramesha Javed ek Certified Agentic AI Developer hain aur VisionDX AI ke Founder hain. Unhone Presidential Initiative for AI & Computing (PIAIC) se 4 professional certifications hasil ki hain.",
    keywords: ["ramesha", "kaun", "hai", "intro", "taaruf"],
  },
  {
    id: "urdu-2",
    category: "urdu",
    question: "Ramesha kahan rehta hai?",
    answer: "Ramesha Pakistan mein rehta hai aur globally clients ke saath remote work karta hai.",
    keywords: ["kahan", "rehta", "hai", "location", "jagah"],
  },
  {
    id: "urdu-3",
    category: "urdu",
    question: "Ramesha ke paas kaun si certifications hain?",
    answer: "Ramesha ke paas 4 certifications hain:\n1. Agentic AI Level 1 Developer (PIAIC)\n2. Agentic AI Professional Level 2 (PIAIC)\n3. Prompt Engineering Level 1 (PIAIC)\n4. Freelancers to Founder 3.0 (PAFLA)",
    keywords: ["certification", "degree", "qualification", "padhai"],
  },
  {
    id: "urdu-4",
    category: "urdu",
    question: "Ramesha kya kaam karta hai?",
    answer: "Ramesha intelligent web applications aur AI systems banata hai. Usko Agentic AI, multi-agent systems, RAG systems, aur AI chatbots mein expertise hai. Woh VisionDX AI ka Founder bhi hai.",
    keywords: ["kya", "kaam", "karta", "hai", "work", "job"],
  },
  {
    id: "urdu-5",
    category: "urdu",
    question: "Kya main Ramesha ko hire kar sakta hoon?",
    answer: "Haan! Ramesha freelance projects aur collaborations ke liye available hai. Aap contact form se usse contact kar sakte hain.",
    keywords: ["hire", "project", "kaam", "karwana", "available"],
  },
  {
    id: "urdu-6",
    category: "urdu",
    question: "Ramesha ne kitne projects banaye hain?",
    answer: "Ramesha ne 10+ projects complete kiye hain aur 25+ AI models deploy kiye hain. Uske work se 50K+ users impact hue hain.",
    keywords: ["kitne", "projects", "banaye", "complete", "kiye"],
  },
  {
    id: "urdu-7",
    category: "urdu",
    question: "VisionDX AI kya hai?",
    answer: "VisionDX AI Ramesha ki medical imaging startup hai jo NIC Karachi mein registered hai. Yeh X-rays, MRI, CT scans aur 25+ medical imaging types ko AI se analyze karta hai.",
    keywords: ["visiondx", "kya", "hai", "startup", "medical"],
  },
  {
    id: "urdu-8",
    category: "urdu",
    question: "Ramesha ko contact kaise karun?",
    answer: "Aap Ramesha ko contact form, email, LinkedIn, ya GitHub ke through contact kar sakte hain. Saare contact details website par available hain.",
    keywords: ["contact", "kaise", "karun", "raabta", "sampark"],
  },
  {
    id: "urdu-9",
    category: "urdu",
    question: "Ramesha ki skills kya hain?",
    answer: "Ramesha ko aati hai:\n• Python, TypeScript, JavaScript\n• Next.js, React, Tailwind CSS\n• Node.js, FastAPI\n• Agentic AI, RAG Systems, LangChain\n• MongoDB, PostgreSQL\n• AWS, Vercel",
    keywords: ["skills", "kya", "aati", "technology", "tech"],
  },
  {
    id: "urdu-10",
    category: "urdu",
    question: "Ramesha unique kyun hai?",
    answer: "Ramesha unique hai kyunki:\n• 4x Certified AI technologies mein\n• Agentic AI mein expertise (future of AI)\n• NIC Karachi mein medical AI banaya\n• Multi-agent systems ka expert\n• Technical + Entrepreneurship skills\n• 50K+ users impact kiye",
    keywords: ["unique", "khaas", "alag", "kyun", "best"],
  },
];

// Helper function to find relevant knowledge
export function findRelevantKnowledge(query: string): KnowledgeItem[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
  
  // Score each knowledge item based on keyword matching
  const scored = knowledgeBase.map(item => {
    let score = 0;
    
    // Check keywords
    item.keywords.forEach(keyword => {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += 3;
      }
    });
    
    // Check question words
    const questionWords = item.question.toLowerCase().split(/\s+/);
    questionWords.forEach(word => {
      if (queryWords.includes(word) && word.length > 3) {
        score += 2;
      }
    });
    
    // Check category match
    if (queryLower.includes(item.category)) {
      score += 5;
    }
    
    return { item, score };
  });
  
  // Filter and sort by score
  const relevant = scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
  
  // Return top 3 most relevant items
  return relevant.slice(0, 3);
}

// Generate response based on query
export function generateResponse(query: string): string {
  const relevant = findRelevantKnowledge(query);
  
  if (relevant.length === 0) {
    return "I don't have specific information about that. However, I can tell you that Ramesha Javed is a Certified Agentic AI Developer and Founder of VisionDX AI, specializing in building production-grade AI systems. Feel free to ask about his certifications, skills, projects, or experience!";
  }
  
  // Combine relevant information
  const responses = relevant.map(item => item.answer);
  
  if (responses.length === 1) {
    return responses[0];
  }
  
  return responses.join("\n\n");
}
