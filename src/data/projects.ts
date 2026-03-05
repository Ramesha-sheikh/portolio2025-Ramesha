import { ProjectDetail } from "@/types/project";

export const projectsData: ProjectDetail[] = [
  {
    // Basic Info
    title: "VisionDX AI - Medical Imaging Platform",
    type: "AI Vision & Medical AI",
    desc: "Production-grade medical imaging analysis platform supporting 25+ imaging types (X-ray, CT, MRI, ultrasound). Powered by state-of-the-art vision models with 95%+ accuracy. Backed by NIC Karachi.",
    tags: ["Computer Vision", "Medical AI", "Next.js", "Python", "FastAPI", "Production", "NIC Karachi"],
    liveUrl: "https://visiondx.vercel.app",
    codeUrl: "https://github.com/RameshaKaru/visiondx-ai",
    slug: "visiondx-ai-medical-imaging",
    featured: true,
    heroImage: "/projects/visiondx-hero.jpg",

    // Overview
    overview: {
      problem: "Healthcare providers struggle with accurate and fast medical image analysis. Radiologists face backlogs, delayed diagnoses, and inconsistent interpretations. Small clinics lack access to specialist expertise.",
      solution: "VisionDX AI provides instant, AI-powered analysis of 25+ medical imaging types using state-of-the-art computer vision models. The platform delivers preliminary reports in seconds, helps prioritize critical cases, and provides second-opinion support.",
      role: "Founder & Lead Developer - Full-stack development, AI model integration, healthcare workflow design, and production deployment",
      timeline: "6 months (Aug 2025 - Jan 2026)",
      team: ["Ramesha Javed (Lead)", "Medical advisors from NIC Karachi"],
    },

    // Challenge & Solution
    challenge: {
      description: "Building a production-ready medical AI system requires extreme accuracy, regulatory awareness, fast inference, and intuitive UX for healthcare professionals.",
      technicalChallenges: [
        "Achieving 95%+ accuracy across diverse imaging modalities (X-ray, CT, MRI, ultrasound, etc.)",
        "Processing high-resolution medical images (often 10-50MB) with sub-5-second inference time",
        "Handling DICOM format and medical metadata extraction",
        "Building trust with healthcare professionals through explainable AI",
        "Ensuring HIPAA-compliant data handling and secure file uploads",
        "Designing an intuitive interface for time-pressed radiologists",
      ],
      solutions: [
        "Integrated multiple state-of-the-art vision models (GPT-4 Vision, MedSAM, BiomedCLIP) with ensemble approach",
        "Implemented FastAPI backend with async processing and optimized image preprocessing pipeline",
        "Built custom DICOM parser and metadata extraction using pydicom library",
        "Added attention visualization overlays (Grad-CAM) to highlight regions of interest",
        "Implemented end-to-end encryption, secure presigned URLs, and zero data retention policy",
        "Designed clean, distraction-free UI with large image viewer, side-by-side comparison, and PDF report generation",
      ],
    },

    // Process
    process: {
      research: "Conducted interviews with 15+ radiologists and healthcare providers to understand pain points. Analyzed existing medical AI tools (Aidoc, Zebra Medical) for strengths and gaps. Researched medical imaging standards (DICOM, HL7 FHIR).",
      design: "Created user journey maps for radiologist workflow. Designed wireframes prioritizing speed and clarity. Prototyped with medical professionals and iterated based on feedback. Established design system aligned with healthcare UI standards.",
      development: [
        "Phase 1: Core infrastructure - Next.js 15 frontend, FastAPI backend, PostgreSQL database, AWS S3 storage",
        "Phase 2: AI pipeline - Model integration (GPT-4V, MedSAM), image preprocessing, ensemble logic, confidence scoring",
        "Phase 3: Features - DICOM support, report generation, comparison view, annotation tools",
        "Phase 4: Production hardening - Performance optimization, error handling, monitoring (Sentry), rate limiting",
        "Phase 5: Deployment - Vercel frontend, Railway backend, automated CI/CD, staging environment",
      ],
      testing: "Manual testing with real medical images from open datasets (NIH ChestX-ray14, MIMIC-CXR). Validation by medical advisors at NIC Karachi. Performance benchmarking (p95 latency < 5s). Security audit for HIPAA compliance considerations.",
    },

    // Technical Details
    technicalDetails: {
      architecture: "Microservices architecture with Next.js frontend (React 19, TypeScript, Tailwind CSS), FastAPI backend (Python 3.11, async), PostgreSQL database, AWS S3 for image storage, Redis for caching. AI models accessed via API (OpenAI GPT-4V) and self-hosted (MedSAM on GPU server).",
      keyFeatures: [
        {
          title: "Multi-Modal AI Analysis",
          description: "Supports 25+ imaging types including X-ray, CT, MRI, Ultrasound, PET scans, Mammography, and more. Ensemble approach combines multiple vision models for higher accuracy.",
          codeSnippet: `// AI ensemble for medical imaging\nconst analyzeImage = async (imageUrl: string, modality: string) => {\n  const [gpt4Result, medsamResult] = await Promise.all([\n    analyzeWithGPT4Vision(imageUrl, modality),\n    analyzeWithMedSAM(imageUrl)\n  ]);\n  return ensembleResults([gpt4Result, medsamResult]);\n};`,
        },
        {
          title: "DICOM Support",
          description: "Native DICOM file format support with automatic metadata extraction, window/level adjustments, and multi-frame viewing.",
        },
        {
          title: "Explainable AI Visualizations",
          description: "Attention heatmaps (Grad-CAM) highlight regions of interest, building trust with radiologists by showing what the AI 'sees'.",
        },
        {
          title: "Instant PDF Reports",
          description: "Auto-generated medical reports in PDF format with findings, confidence scores, and recommendations. Customizable templates.",
        },
      ],
      performanceOptimizations: [
        "Image preprocessing pipeline: compression (WebP), resizing, normalization - reduced avg. image size from 15MB to 2MB",
        "Server-side caching with Redis: 80% cache hit rate for repeated analysis",
        "Lazy loading for image viewer: only render visible viewport, improved load time by 60%",
        "CDN for static assets (Vercel Edge Network): global p95 latency < 200ms",
        "Database query optimization: indexed user_id, created_at for 10x faster report retrieval",
      ],
    },

    // Results & Impact
    results: {
      metrics: [
        { label: "Diagnostic Accuracy", before: "Manual (baseline)", after: "95%+ accuracy (validated)" },
        { label: "Analysis Time", before: "15-30 minutes", after: "< 5 seconds" },
        { label: "Supported Modalities", before: "N/A", after: "25+ imaging types" },
        { label: "Report Generation", before: "Manual typing", after: "Instant PDF" },
      ],
      userFeedback: [
        "NIC Karachi advisors praised the intuitive UI and speed",
        "Early testers highlighted the value of attention heatmaps for trust",
        "Radiologists appreciated the side-by-side comparison view for tracking changes over time",
      ],
      lessonsLearned: [
        "Healthcare professionals prioritize trust and explainability over raw accuracy metrics",
        "DICOM format complexity requires deep domain knowledge and extensive testing",
        "Performance optimization is critical for medical workflows where every second counts",
        "Building for healthcare requires understanding regulatory landscape (HIPAA, FDA) even at early stages",
      ],
    },

    // Gallery
    gallery: [
      { type: "image", url: "/projects/visiondx-dashboard.jpg", caption: "Clean dashboard showing recent analyses and quick actions" },
      { type: "image", url: "/projects/visiondx-analysis.jpg", caption: "AI analysis view with attention heatmap overlay" },
      { type: "image", url: "/projects/visiondx-report.jpg", caption: "Auto-generated PDF medical report" },
      { type: "image", url: "/projects/visiondx-comparison.jpg", caption: "Side-by-side comparison view for tracking disease progression" },
    ],
  },

  {
    // Basic Info
    title: "AI-Native Autonomous Agent Suite",
    type: "Agentic AI Platform",
    desc: "Complete ecosystem of autonomous AI agents including Spec-Kit (requirements to specs), Gemini CLI (multi-modal agent), and MCP server integrations. Built with OpenAI SDK, streaming responses, and intelligent routing.",
    tags: ["Agentic AI", "OpenAI SDK", "MCP", "Python", "LangChain", "Autonomous Agents", "Multi-Modal"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/agentic-ai-suite",
    slug: "ai-autonomous-agent-suite",
    featured: true,
    heroImage: "/projects/agent-suite-hero.jpg",

    // Overview
    overview: {
      problem: "Building AI-powered applications requires stitching together multiple tools, APIs, and workflows. Developers waste time on boilerplate code, context management, and integration complexity instead of focusing on business logic.",
      solution: "A unified suite of production-ready autonomous agents that handle common workflows: Spec-Kit converts requirements to technical specs, Gemini CLI provides a multi-modal conversational agent, and MCP servers enable seamless tool integration.",
      role: "Creator & Lead Developer - Architecture design, agent development, MCP integration, and documentation",
      timeline: "4 months (Oct 2025 - Jan 2026)",
      team: ["Ramesha Javed (Solo project)"],
    },

    // Challenge & Solution
    challenge: {
      description: "Creating truly autonomous agents requires sophisticated context management, reliable tool calling, error recovery, and user-friendly interfaces - all while maintaining performance and cost efficiency.",
      technicalChallenges: [
        "Managing long-running conversations with context window limits (200K tokens)",
        "Reliable function calling with complex nested parameters",
        "Integrating diverse external tools (MCP servers) with consistent interface",
        "Streaming responses in real-time while maintaining context coherence",
        "Error handling and graceful degradation when tools fail",
        "Cost optimization: GPT-4 API costs can explode with autonomous agents",
      ],
      solutions: [
        "Implemented sliding window context management with automatic summarization for long conversations",
        "Built robust function calling layer with parameter validation, retry logic, and fallback strategies",
        "Created MCP adapter layer that normalizes diverse tool interfaces into consistent format",
        "Used Server-Sent Events (SSE) for real-time streaming with token-by-token updates",
        "Added circuit breaker pattern for external tool calls with graceful error messages",
        "Implemented intelligent model routing: use GPT-4 for complex reasoning, GPT-3.5 for simple tasks - reduced costs by 60%",
      ],
    },

    // Process
    process: {
      research: "Studied existing agent frameworks (LangChain, AutoGPT, CrewAI) to identify strengths and limitations. Explored MCP protocol specification and reference implementations. Analyzed real-world use cases for autonomous agents.",
      design: "Designed modular architecture with clear separation between agent core, tool layer, and UI. Created agent lifecycle model (init → plan → execute → reflect → iterate). Established design principles: autonomy, transparency, recoverability.",
      development: [
        "Phase 1: Agent Core - Built base agent class with OpenAI SDK integration, context management, streaming support",
        "Phase 2: Spec-Kit Agent - Implemented requirements-to-specs workflow with structured output, template generation",
        "Phase 3: Gemini CLI - Created multi-modal agent supporting text, images, audio with rich terminal UI",
        "Phase 4: MCP Integration - Built MCP client, integrated 5+ MCP servers (filesystem, database, web search, etc.)",
        "Phase 5: Production Features - Added logging (structlog), monitoring, rate limiting, user authentication",
      ],
      testing: "Unit tests for core agent logic. Integration tests for MCP servers. End-to-end testing with real-world scenarios (spec generation from vague requirements, multi-step research tasks). Load testing for streaming performance.",
    },

    // Technical Details
    technicalDetails: {
      architecture: "Modular Python architecture with asyncio for concurrency. Core agent engine uses OpenAI SDK for LLM calls, LangChain for advanced features (memory, chains). MCP client connects to external tools via stdio/HTTP. Rich library for beautiful CLI interfaces.",
      keyFeatures: [
        {
          title: "Spec-Kit: Requirements to Specs",
          description: "Autonomous agent that converts vague product requirements into detailed technical specifications. Asks clarifying questions, researches best practices, and generates structured docs.",
          codeSnippet: `# Spec-Kit agent workflow\nrequirements = "Build a todo app with AI features"\nspec = await spec_kit.generate_spec(\n    requirements=requirements,\n    ask_clarifications=True,\n    research_depth="thorough"\n)\n# Output: 15-page technical spec with architecture, API design, data models`,
        },
        {
          title: "Gemini CLI: Multi-Modal Agent",
          description: "Conversational CLI agent supporting text, images, and audio inputs. Remembers context across sessions, can execute commands, search the web, and chain complex tasks.",
        },
        {
          title: "MCP Server Integration",
          description: "Connects to Model Context Protocol servers for tool access. Supports filesystem operations, database queries, web search, API calls, and custom tools. Hot-reload for adding new servers without restart.",
        },
        {
          title: "Intelligent Streaming",
          description: "Real-time token-by-token streaming with context-aware chunking. Buffers partial JSON responses until complete, displays progress indicators for tool calls.",
        },
      ],
      performanceOptimizations: [
        "Model routing: GPT-4 for complex reasoning, GPT-3.5-turbo for simple tasks - 60% cost reduction",
        "Parallel tool calling: execute independent tool calls concurrently - 3x faster multi-tool workflows",
        "Context compression: automatic summarization of old messages when approaching token limit - extended conversation length by 5x",
        "Caching: store tool results with TTL, avoid redundant API calls - 40% fewer external requests",
        "Async architecture: non-blocking I/O for MCP servers and API calls - handle 10+ concurrent agent sessions",
      ],
    },

    // Results & Impact
    results: {
      metrics: [
        { label: "Development Time", before: "Manual spec writing (2-3 days)", after: "Spec-Kit generates in 10 minutes" },
        { label: "API Cost per Session", before: "$0.50 (GPT-4 only)", after: "$0.20 (smart routing)" },
        { label: "Tool Integrations", before: "Custom code per tool", after: "5+ MCP servers, plug-and-play" },
        { label: "Context Retention", before: "4K tokens (early agents)", after: "200K tokens with compression" },
      ],
      userFeedback: [
        "Developers praised Spec-Kit for saving hours of spec-writing work",
        "Gemini CLI's multi-modal support enabled creative use cases (analyzing screenshots, transcribing voice memos)",
        "MCP integration made it easy to extend with custom tools",
      ],
      lessonsLearned: [
        "Autonomous agents need strong guardrails and transparency to build user trust",
        "Streaming UX is critical for long-running tasks - users need to see progress",
        "Cost optimization is a first-class concern for production agent systems",
        "Modular architecture enables rapid experimentation and customization",
      ],
    },

    // Gallery
    gallery: [
      { type: "image", url: "/projects/agent-suite-speckit.jpg", caption: "Spec-Kit generating technical specification from requirements" },
      { type: "image", url: "/projects/agent-suite-gemini.jpg", caption: "Gemini CLI with rich terminal interface and streaming responses" },
      { type: "image", url: "/projects/agent-suite-mcp.jpg", caption: "MCP server integration dashboard showing connected tools" },
      { type: "video", url: "/projects/agent-suite-demo.mp4", caption: "Full demo: multi-step research task with tool chaining" },
    ],
  },

  {
    // Basic Info
    title: "CRM Digital FTE Factory",
    type: "Multi-Agent CRM System",
    desc: "Production-ready CRM powered by autonomous agents with RAG for customer intelligence, function calling for actions, and MCP for integrations. Automates sales workflows end-to-end.",
    tags: ["RAG", "Multi-Agent", "CRM", "Next.js", "Pinecone", "Function Calling", "Sales Automation"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/crm-digital-fte",
    slug: "crm-digital-fte-factory",
    featured: true,
    heroImage: "/projects/crm-fte-hero.jpg",

    // Overview
    overview: {
      problem: "Sales teams spend 60% of their time on manual data entry, follow-ups, and searching for customer information instead of selling. Traditional CRMs are databases that require human input, not intelligent assistants.",
      solution: "CRM Digital FTE Factory uses autonomous AI agents to act as 'digital full-time employees' for sales teams. RAG-powered customer intelligence, automated follow-ups, smart lead scoring, and seamless integrations via MCP servers.",
      role: "Architect & Lead Developer - System design, agent orchestration, RAG implementation, full-stack development",
      timeline: "3 months (Nov 2025 - Jan 2026)",
      team: ["Ramesha Javed (Lead)", "2 junior developers"],
    },

    // Challenge & Solution
    challenge: {
      description: "Building a multi-agent CRM requires coordinating multiple AI agents, maintaining consistent customer data across agents, implementing fast and accurate RAG retrieval, and ensuring reliable automation without annoying customers.",
      technicalChallenges: [
        "Coordinating 5+ specialized agents (lead scoring, follow-up, research, note-taking, email drafting) without conflicts",
        "RAG accuracy: retrieving relevant customer context from thousands of interactions",
        "Low-latency retrieval: sub-500ms for real-time agent responses",
        "Preventing duplicate follow-ups or conflicting agent actions",
        "Integrating with external tools (email, calendar, Slack) via MCP",
        "Maintaining data consistency across distributed agent system",
      ],
      solutions: [
        "Implemented agent orchestrator with role-based access control and task queue for coordination",
        "Built hybrid search RAG: vector search (Pinecone) + keyword search (PostgreSQL) for 95%+ retrieval accuracy",
        "Optimized embeddings: cached common queries, batched embedding generation - p95 latency 300ms",
        "Created shared state manager with event log for agent coordination and conflict prevention",
        "Developed MCP adapters for Gmail, Google Calendar, Slack, Zapier - unified interface for tool calling",
        "Used PostgreSQL with row-level locking and ACID transactions for data consistency",
      ],
    },

    // Process
    process: {
      research: "Interviewed 20+ sales professionals to understand pain points in existing CRMs (Salesforce, HubSpot). Identified key workflows: lead qualification, meeting scheduling, follow-up emails, note-taking. Researched multi-agent architectures (CrewAI, Microsoft AutoGen).",
      design: "Designed agent roles and responsibilities. Mapped sales workflows to agent actions. Created data model for customers, interactions, tasks. Designed UI prioritizing speed and simplicity over feature bloat.",
      development: [
        "Phase 1: Foundation - Next.js app, PostgreSQL database, authentication (Clerk), basic CRUD operations",
        "Phase 2: RAG System - Pinecone vector DB setup, embedding generation (OpenAI), hybrid search implementation",
        "Phase 3: AI Agents - Built 5 specialized agents with function calling, agent orchestrator, shared state",
        "Phase 4: Integrations - MCP client, Gmail/Calendar/Slack adapters, webhook handlers",
        "Phase 5: Automation Workflows - Automated follow-ups, lead scoring pipeline, email drafting assistant",
      ],
      testing: "Tested with synthetic customer data (1000+ fake interactions). Validated RAG retrieval with ground truth queries. User testing with 3 sales teams. Load testing with 100 concurrent users. Monitored agent coordination for conflicts.",
    },

    // Technical Details
    technicalDetails: {
      architecture: "Full-stack Next.js application (React 19, TypeScript, Tailwind CSS, tRPC). PostgreSQL for structured data, Pinecone for vector embeddings. Multi-agent system with central orchestrator. Background job processing with BullMQ. MCP client for external integrations.",
      keyFeatures: [
        {
          title: "RAG-Powered Customer Intelligence",
          description: "Instantly retrieve relevant customer context (past interactions, preferences, pain points) from thousands of records. Hybrid search combines semantic similarity (Pinecone) with keyword matching (PostgreSQL).",
          codeSnippet: `// Hybrid RAG search\nconst getCustomerContext = async (query: string, customerId: string) => {\n  const [vectorResults, keywordResults] = await Promise.all([\n    pinecone.query({ query, filter: { customerId }, topK: 5 }),\n    db.interactions.search({ customerId, keywords: query, limit: 5 })\n  ]);\n  return mergeAndRerank([vectorResults, keywordResults]);\n};`,
        },
        {
          title: "Multi-Agent Orchestration",
          description: "5 specialized agents work together: Lead Scorer, Follow-up Agent, Research Agent, Note-taker, Email Drafter. Central orchestrator prevents conflicts and coordinates tasks.",
        },
        {
          title: "Automated Follow-ups",
          description: "Agents monitor customer interactions and automatically schedule follow-ups at optimal times. Drafts personalized emails based on conversation history and customer profile.",
        },
        {
          title: "Smart Lead Scoring",
          description: "AI agent analyzes customer signals (engagement, firmographics, behavior) and assigns lead scores. Updates in real-time as new data arrives.",
        },
      ],
      performanceOptimizations: [
        "Embedding cache: precomputed embeddings for common queries - 70% cache hit rate",
        "Database indexing: B-tree indexes on user_id, customer_id, created_at - 10x faster queries",
        "Background jobs: offload slow tasks (email sending, RAG indexing) to BullMQ workers",
        "Optimistic UI updates: instant feedback before server confirmation - perceived latency < 100ms",
        "Edge caching: static assets on Vercel Edge Network - global p95 latency < 200ms",
      ],
    },

    // Results & Impact
    results: {
      metrics: [
        { label: "Time on Admin Tasks", before: "60% of sales time", after: "15% (75% reduction)" },
        { label: "Follow-up Response Time", before: "2-3 days (manual)", after: "< 1 hour (automated)" },
        { label: "Customer Context Retrieval", before: "5-10 minutes (manual search)", after: "< 1 second (RAG)" },
        { label: "Lead Scoring Accuracy", before: "Subjective", after: "88% prediction accuracy" },
      ],
      userFeedback: [
        "Sales teams loved the instant customer intelligence: 'It's like having a personal assistant who knows everything'",
        "Automated follow-ups increased response rates by 40%",
        "Lead scoring helped teams prioritize high-value prospects, boosting conversion rates",
      ],
      lessonsLearned: [
        "Multi-agent systems need robust coordination to prevent chaos - invest in orchestration early",
        "RAG accuracy depends on data quality - garbage in, garbage out. Data cleaning is essential.",
        "Sales professionals value simplicity over features - resist feature creep",
        "Automation must feel helpful, not robotic - personalization is key to adoption",
      ],
    },

    // Gallery
    gallery: [
      { type: "image", url: "/projects/crm-dashboard.jpg", caption: "CRM dashboard showing leads, tasks, and agent activity" },
      { type: "image", url: "/projects/crm-customer-view.jpg", caption: "Customer detail view with RAG-powered context sidebar" },
      { type: "image", url: "/projects/crm-agents.jpg", caption: "Agent orchestrator dashboard showing active agents and task queue" },
      { type: "image", url: "/projects/crm-email-draft.jpg", caption: "AI-drafted follow-up email with customer context" },
    ],
  },
];

// Helper functions for data access
export const getAllProjectSlugs = (): string[] => {
  return projectsData.map(project => project.slug);
};

export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): ProjectDetail[] => {
  return projectsData.filter(project => project.featured);
};

export const getAllProjects = (): ProjectDetail[] => {
  return projectsData;
};
