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
      "Introduction to probability theory and statistical methods essential for data analysis. This course covers probability distributions, hypothesis testing, and statistical inference.",
    moduleList: [
      {
        title: "Introduction to Probability",
        description: "Basic concepts, axioms, and theorems of probability.",
        presentation: true,
      },
      {
        title: "Random Variables",
        description: "Discrete and continuous random variables, expectation, and variance.",
        presentation: true,
      },
      {
        title: "Probability Distributions",
        description: "Common probability distributions and their applications.",
        presentation: true,
      },
      {
        title: "Sampling and Estimation",
        description: "Sampling methods, point estimation, and interval estimation.",
        presentation: true,
      },
      {
        title: "Hypothesis Testing",
        description: "Statistical hypothesis testing and significance levels.",
        presentation: true,
      },
    ] as Module[],
    facultyQuestions: "Faculty-curated questions on probability concepts, distributions, and statistical methods.",
    avalonPredictions: "AI-predicted questions focusing on problem-solving and statistical analysis techniques.",
  },
  {
    name: "Introduction to Data Analytics",
    slug: "data-analytics",
    modules: 5,
    description: "This course introduces the core principles and methods of data analytics, covering the complete lifecycle from data collection to basic machine learning. It aims to build a solid foundation for students pursuing advanced studies or careers in data science.\n\nKey Areas Covered:\n\n• Fundamentals of data analytics\n• Data sourcing, cleaning, and preprocessing\n• Exploratory techniques for pattern discovery\n• Data visualization principles\n• Introduction to machine learning applications",
    moduleList: [
      {
        title: "Introduction to Data Analytics",
        description: "• Definition and Scope: Introduction to analytics, differentiation between data, information, and knowledge.\n\n• Importance: Significance of data analytics in business, healthcare, finance, marketing, etc.\n\n• Types of Analytics:\n  - Descriptive Analytics\n  - Diagnostic Analytics\n  - Predictive Analytics\n  - Prescriptive Analytics\n\n• Data Analytics vs Data Science vs Business Intelligence\n\n• Analytics Lifecycle:\n  - Problem Definition\n  - Data Preparation\n  - Model Planning\n  - Model Building\n  - Deployment\n  - Feedback",
        presentation: true,
        showNotes: false
      },
      {
        title: "Data Sources and Data Preprocessing",
        description: "• Data Collection Methods:\n  - Primary and Secondary Data\n  - Web Scraping, APIs, Surveys, Sensors\n\n• Data Quality Issues:\n  - Missing Data, Noise, Inconsistency\n\n• Data Cleaning Techniques:\n  - Handling Missing Values\n  - Smoothing Noisy Data\n  - Data Transformation (Normalization, Discretization)\n  - Data Reduction (Dimensionality Reduction, Sampling)\n\n• ETL Process: Extract, Transform, Load pipeline",
        presentation: true,
        showNotes: false
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        description: "• Purpose: Understand data patterns, detect anomalies, test hypotheses\n\n• Techniques:\n  - Univariate Analysis: Mean, Median, Mode, Standard Deviation, Variance\n  - Bivariate and Multivariate Analysis\n\n• Visual Tools:\n  - Histograms, Boxplots, Scatterplots, Correlation Matrix\n\n• Outlier Detection and Treatment\n\n• Feature Engineering:\n  - Feature Extraction\n  - Feature Selection",
        presentation: true,
        showNotes: false
      },
      {
        title: "Data Visualization",
        description: "• Principles of Good Visualization:\n  - Clarity, Accuracy, Efficiency\n\n• Types of Charts:\n  - Bar Chart, Line Graph, Pie Chart, Heatmap, Treemap, Dashboard Elements\n\n• Tools for Visualization:\n  - Excel, Tableau, Power BI, Python (Matplotlib, Seaborn)\n\n• Storytelling with Data:\n  - Aligning visuals with audience and context\n\n• Design Guidelines:\n  - Color Usage, Chart Selection, Avoiding Misleading Visuals",
        presentation: true,
        showNotes: false
      },
      {
        title: "Introduction to Machine Learning",
        description: "• Basic ML Concepts:\n  - Supervised Learning vs Unsupervised Learning\n  - Features and Labels\n\n• Algorithms Overview:\n  - Supervised: Linear Regression, Decision Trees, k-NN\n  - Unsupervised: k-Means Clustering, Hierarchical Clustering\n\n• Model Evaluation Metrics:\n  - Accuracy, Precision, Recall, F1-Score, Confusion Matrix\n\n• Training vs Testing vs Validation\n\n• Role of ML in Analytics:\n  - Augmenting Decision Making\n  - Automation of Predictions",
        presentation: true,
        showNotes: false
      },
    ],
    facultyQuestions: "Faculty-provided questions on data analytics concepts, methods, and applications.",
    avalonPredictions: "AI-predicted questions focusing on practical data analysis scenarios and techniques.",
    referenceDocsPerModule: 1
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
