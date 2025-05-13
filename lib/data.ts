type Module = {
  title: string
  description: string
  presentation: boolean
  showNotes?: boolean
}

export const subjectData = [
  {
    name: "Indian Constitution",
    slug: "indian-constitution",
    modules: 6,
    description: "Study of the Constitution of India, its evolution, features, and structure. This course covers the fundamental rights, directive principles, and the organization of Indian government including legislative, executive, and judicial branches at both Union and State levels.",
    moduleList: [
      {
        title: "Evolution of Indian Constitution",
        description: "Evolution of the Constitution, Objective Resolution, Preamble, Fundamental Rights, Fundamental Duties, and Directive Principles of State Policy.",
        presentation: false,
        showNotes: true
      },
      {
        title: "Union Legislature and State Legislature",
        description: "Indian Parliament (Lok Sabha and Rajya Sabha), State Legislative bodies, lawmaking procedures, budget processes, and committee systems.",
        presentation: false,
        showNotes: true
      },
      {
        title: "The Union and State Executive",
        description: "President, Vice-President, Prime Minister, Union Council of Ministers, Governor, Chief Minister, and State Council of Ministers.",
        presentation: false,
        showNotes: true
      },
      {
        title: "The Judiciary",
        description: "Supreme Court, High Courts, Judicial Review, Writ powers, Judicial Activism, Lok Adalats, and Public Interest Litigation.",
        presentation: false,
        showNotes: true
      },
      {
        title: "Issues",
        description: "Indian Federalism, distribution of powers, Human Rights, Environmental Protection, special provisions for Dalits, Backward Classes, Children, Women, and Secularism in India.",
        presentation: false,
        showNotes: true
      },
      {
        title: "Coalition Government",
        description: "Concept of Coalition Government, features, examples at national and state levels, merits and demerits, and types of coalitions.",
        presentation: false,
        showNotes: true
      },
    ] as Module[],
    facultyQuestions: "Comprehensive questions covering constitutional principles and government structures.",
    avalonPredictions: "AI-predicted questions based on previous exam patterns and current syllabus focus areas.",
    showAdditionalMaterials: false
  },
  {
    name: "Open Elective",
    slug: "open-elective",
    modules: 5,
    description: "This open elective course introduces students to the world of entrepreneurship, covering its principles, planning processes, business models, government support systems, and reasons for entrepreneurial failure. It aims to nurture entrepreneurial thinking and provide insights into real-world ventures.",
    moduleList: [
      {
        title: "The Entrepreneurship – A Perspective",
        description: "Introduction to the concept of Entrepreneur, Entrepreneur vs. Intrapreneur, Attributes and Characteristics of a Successful Entrepreneur, Concept of Women Entrepreneurship, Reasons for Few/No Women Entrepreneurs, Problems and Prospects, Case Studies of Successful Women Entrepreneurial Ventures",
        presentation: true,
      },
      {
        title: "Entrepreneurial Venture",
        description: "Business Planning Process, Environmental Analysis – PESTEL, Identifying Problems and Opportunities, Defining Business Idea, Feasibility: Technical, Financial, Marketing, Personnel, and Management, Basic Government Procedures to be Complied With",
        presentation: true,
      },
      {
        title: "Business Models",
        description: "Legal Forms of Business: Single Ownership, Partnership, Joint Stock Company, Cooperative, Public Sector Enterprises, Expansion and Diversification Strategies, Mergers and Acquisitions, Franchising, Intellectual Property: Patents, Copyrights, Trademarks, Licensing, Sources of Capital: Personal Funds, Bank Loans, Venture Capital, Angel Investors, Crowdfunding",
        presentation: true,
      },
      {
        title: "Entrepreneurship Development and Government",
        description: "Role of Entrepreneurship in Economic Development, Need and Importance of Support Functions, Financial and Non-Financial Support: NSIC, SIDC, SFCs, SIDBI, IFCI, SISI, DIC, Government Incentives, Subsidies, Policies, and Tax Concessions",
        presentation: true,
      },
      {
        title: "Entrepreneurs Failure",
        description: "Why Do Entrepreneurs Fail?, The FOUR Entrepreneurial Pitfalls (Peter Drucker), Preventive and Remedial Measures for Industrial Sickness, Case Studies: Failed Ventures and Turnaround Ventures",
        presentation: true,
      },
    ],
    facultyQuestions: "Faculty-provided questions covering key concepts and applications of entrepreneurship.",
    avalonPredictions: "AI-predicted questions focusing on practical applications and theoretical understanding of entrepreneurship.",
    showAdditionalMaterials: false,
    hasCombinedNotes: true
  },
  {
    name: "Probability and Statistics",
    slug: "probability-statistics",
    modules: 5,
    description:
      "A foundational course in probability theory and statistical methods essential for data analysis. This course covers univariate and bivariate analysis, probability rules, random variables, and statistical inference including estimation and hypothesis testing.",
    moduleList: [
      {
        title: "Univariate and Bivariate Data Analysis",
        description:
          "Types of data: qualitative and quantitative; Frequency distribution and classification; Graphical representation: histograms, cumulative curves; Central tendency: mean, median, mode (arithmetic, geometric, harmonic); Dispersion: range, mean deviation, variance, standard deviation; Bivariate correlation: scatter plots, Pearson and Spearman coefficients.",
        presentation: true,
      },
      {
        title: "Statistical Inference",
        description:
          "Introduction to inferential statistics; Parameter estimation; Hypothesis formulation and testing.",
        presentation: true,
      },
      {
        title: "Basics of Probability",
        description:
          "Random experiments, sample space, types of events; Axiomatic definition of probability; Basic problems and elementary computations.",
        presentation: true,
      },
      {
        title: "Probability Rules and Bayes' Theorem",
        description:
          "Addition and multiplication rules for probability; Independent and conditional events; Bayes' Theorem and practical applications.",
        presentation: true,
      },
      {
        title: "Random Variables",
        description:
          "Discrete and continuous random variables; PMF (Probability Mass Function) and PDF (Probability Density Function); CDF (Cumulative Distribution Function) and its properties; Examples and applications.",
        presentation: true,
      },
    ] as Module[],
    facultyQuestions: "Curated questions by your instructors to align with expected exam patterns.",
    avalonPredictions: "Predicted questions based on previous exams and current syllabus focus.",
  },
  {
    name: "Introduction to Data Analytics",
    slug: "data-analytics",
    modules: 5,
    description: "This course builds foundational knowledge in data analytics, covering the complete process from data acquisition to introductory machine learning. It equips students with essential tools and techniques used in modern data-driven decision-making.\n\nKey Focus Areas:\n\n• Core concepts and types of analytics\n• Data sourcing, cleaning, and preparation\n• Exploratory data analysis (EDA) techniques\n• Principles of effective data visualization\n• Introduction to machine learning for analytics",
    moduleList: [
      {
        title: "Introduction to Data Analytics",
        description: "What is Data Analytics? Importance across industries.\n\nTypes: Descriptive, Diagnostic, Predictive, Prescriptive.\n\nDifference: Data Analytics vs Data Science vs BI.\n\nAnalytics Lifecycle: Define → Prepare → Plan → Build → Deploy → Feedback.",
        presentation: true,
        showNotes: false
      },
      {
        title: "Data Sources & Preprocessing",
        description: "Data Collection: Surveys, APIs, Web Scraping.\n\nIssues: Missing values, noise, inconsistency.\n\nCleaning: Imputation, normalization, discretization.\n\nETL Process: Extract → Transform → Load.",
        presentation: true,
        showNotes: false
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        description: "Purpose: Spot patterns, outliers, insights.\n\nTechniques: Univariate, Bivariate, Multivariate analysis.\n\nTools: Histograms, Boxplots, Scatterplots, Correlation matrix.\n\nFeature Engineering: Extraction & Selection.",
        presentation: true,
        showNotes: false
      },
      {
        title: "Data Visualization",
        description: "Good Visuals: Clear, accurate, purposeful.\n\nChart Types: Bar, Line, Pie, Heatmap, Treemap.\n\nTools: Excel, Tableau, Power BI, Python (Matplotlib/Seaborn).\n\nStorytelling: Align visuals with audience needs.",
        presentation: true,
        showNotes: false
      },
      {
        title: "Intro to Machine Learning",
        description: "Concepts: Supervised vs Unsupervised Learning.\n\nAlgorithms: Regression, Decision Trees, k-NN, k-Means.\n\nEvaluation: Accuracy, Precision, Recall, F1-Score.\n\nUse in Analytics: Predictive insights & automation.",
        presentation: true,
        showNotes: false
      },
    ],
    facultyQuestions: "Faculty-provided questions on data analytics concepts, methods, and applications.",
    avalonPredictions: "AI-predicted questions focusing on practical data analysis scenarios and techniques.",
  },
  {
    name: "Programming in Python",
    slug: "python-programming",
    modules: 5,
    description:
      "Introduction to programming using Python, focusing on syntax, data structures, and algorithms. This course includes practical applications in data analysis and manipulation.",
    moduleList: [
      {
        title: "Introduction to Python",
        description: "Basic syntax, variables, and control structures.",
        presentation: true,
      },
      {
        title: "Data Structures",
        description: "Lists, dictionaries, tuples, and sets in Python.",
        presentation: true,
      },
      {
        title: "Functions and Modules",
        description: "Creating and using functions and modules in Python.",
        presentation: true,
      },
      {
        title: "File Handling and Exception Handling",
        description: "Reading and writing files, handling exceptions.",
        presentation: true,
      },
      {
        title: "Python for Data Analysis",
        description: "Using NumPy, Pandas, and Matplotlib for data analysis.",
        presentation: true,
      },
    ] as Module[],
    facultyQuestions: "Faculty-curated questions on Python programming concepts and practical applications.",
    avalonPredictions: "AI-predicted questions focusing on coding challenges and data manipulation tasks.",
  },
]
