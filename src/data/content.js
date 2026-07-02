// Edit everything in this file — components just render it.

export const profile = {
  name: 'Muhammed',
  logoSuffix: '.dev',
  resumeUrl: '/resume.pdf', 
  email: 'muhammedar904@gmail.com',
  github: 'https://github.com/Muhammed-Ar90',
  linkedin: 'http://linkedin.com/in/muhammed-abdulrazak',
}

export const hero = {
  headlineParts: [
    'I turn messy data and rough ideas into ',
    { text: 'shipped', emphasis: true },
    ', working software.',
  ],
  lede: "AI Developer / Data Scientist / Data Analyst candidate with a Data Science internship and independent projects building LLM and RAG-powered applications — plus a habit of explaining every technical decision I make, not just the result.",
  console: [
    { type: 'comment', text: '-- querying candidates' },
    { type: 'line', text: "SELECT * FROM candidates", prompt: true },
    { type: 'line', text: "  WHERE skills @> ['Python','SQL','LLM']" },
    { type: 'line', text: "  AND status = 'actively_interviewing';" },
    { type: 'comment', text: '-- 1 row returned' },
    { type: 'kv', key: 'name', val: 'Muhammed Abdul Razak' },
    { type: 'kv', key: 'targets', val: 'AI\u00A0Developer · Data\u00A0Scientist · Data\u00A0Analyst' },
    { type: 'kv', key: 'flagship', val: 'AI Job Search Assistant' },
    { type: 'kv', key: 'status', val: 'open to work', cursor: true },
  ],
}

export const about = {
  paragraph:
    "I'm a developer transitioning into data and AI roles. My internship built the fundamentals — Python,SQL, Power BI, Tableau, machine learning, deep learning, computer vision, and NLP. Since then I've shipped two full-stack projects around LLMs and RAG independently. I care about the reasoning behind a decision, not just the result — which is why every project below documents both.",
  stats: [
    { value: '6-phase build', label: 'Flagship project, end-to-end' },
    { value: 'LLM + RAG', label: 'Independent project focus' },
    { value: 'React · FastAPI', label: 'Primary stack' },
  ],
}

export const projects = [
  {
    name: 'AI Job Search Assistant',
    summary:
      'An end-to-end tool that scores how well a resume matches a job description and helps fix the gap — resume rewrite, cover letter generation, and an application tracker included.',
    liveUrl: 'https://ai-job-assistant-ruby.vercel.app',
    githubUrl: 'https://github.com/Muhammed-Ar90/ai-job-assistant',
    stack: [
      'React (Vite)', 'FastAPI', 'Groq API — LLaMA 3.3 70B',
      'PyMuPDF', 'python-docx', 'Vercel', 'Render',
    ],
    fields: [
      {
        key: 'Build',
        val: 'Shipped in six phases: React/FastAPI foundation → resume parsing (PDF & DOCX) → job description analysis → a match & ATS scoring engine → AI features (resume rewrite, cover letter generation) → an application tracker.',
      },
      {
        key: 'Key decision',
        val: "Chose Groq's API with LLaMA 3.3 70B specifically because it's free with no credit card required — kept iteration fast during development without adding billing risk.",
      },
      {
        key: 'Hard part',
        val: 'Model outputs were inconsistent early on. Fixed it through iterative prompt engineering: lowered temperature, added strict JSON templates, score-range anchors, seniority-detection rules, and plausibility checks for missing-skill assessments — catching and resolving real bugs during testing rather than assuming the first version was correct.',
      },
    ],
  },
  {
    name: 'Chat with PDF',
    summary:
      'A RAG-powered document assistant — upload a PDF, ask questions in plain English, and get answers with source page citations.',
    liveUrl: 'https://chat-with-pdf-doa4.onrender.com',
    githubUrl: 'https://github.com/Muhammed-Ar90/chat-with-pdf',
    stack: [
      'FastAPI', 'ChromaDB', 'HuggingFace Embeddings (all-MiniLM-L6-v2)',
      'LLaMA 3.1 8B — Groq', 'HTML/CSS/JS', 'Render',
    ],
    fields: [
      {
        key: 'Build',
        val: 'A full RAG pipeline: PDFs are parsed and split into overlapping chunks, embedded via HuggingFace, and stored in ChromaDB — one collection per PDF, supporting multiple documents with separate chat histories. At query time, the question is embedded and matched against stored chunks, and the top matches are passed to LLaMA 3.1 as context so answers cite the exact source page.',
      },
      {
        key: 'Key decision',
        val: "Used HuggingFace's hosted Inference API for embeddings instead of running a local model — kept the app lightweight enough to deploy on Render's free tier without needing a GPU.",
      },
      {
        key: 'Constraint',
        val: "Render's free tier has an ephemeral filesystem, so uploaded PDFs and ChromaDB data reset on every redeploy. Documented this clearly for reviewers rather than hiding it, with a paid disk or cloud vector DB noted as the production path.",
      },
    ],
  },
  {
    name: 'Water Potability Prediction',
    summary:
      'A machine learning classifier that predicts whether water is safe to drink from physicochemical measurements, deployed as a real-time Streamlit app with model-explainability built in.',

    githubUrl: 'https://github.com/Muhammed-Ar90/water-potability-prediction', // add your repo URL
    stack: ['Python', 'scikit-learn', 'Gradient Boosting', 'SHAP', 'Streamlit'],
    fields: [
      {
        key: 'Build',
        val: 'End-to-end pipeline on the Kaggle Water Potability dataset: preprocessing (missing values, StandardScaler), a Gradient Boosting classifier, hyperparameter tuning, and evaluation — deployed as a Streamlit app for real-time predictions.',
      },
      {
        key: 'Key decision',
        val: 'Chose Gradient Boosting over simpler models for its strength on tabular data and ability to capture non-linear feature interactions between the 9 water-quality measurements.',
      },
      {
        key: 'Result',
        val: '99% accuracy, 0.97 precision, 1.0 recall, 0.98 F1 — with SHAP-based explanations and feature importance shown alongside every prediction, not just a raw safe/unsafe label.',
      },
    ],
  },
  {
    name: 'Adidas Sales Dashboard',
    summary:
      'A Power BI dashboard analyzing Adidas US sales data — performance, profit trends, and product-level contribution across regions and retailers.', // link to a report view or screenshot page if you have one
    githubUrl: 'https://github.com/Muhammed-Ar90/Adidas-sales-dashboard-powerbi',
    stack: ['Power BI', 'DAX', 'Data Visualization'],
    fields: [
      {
        key: 'Build',
        val: 'KPI cards (sales, profit, units sold, profit margin), monthly sales trend analysis, a geographic sales map, product-wise performance breakdown, and a sales-method donut chart — all filterable by region, product, retailer, and date.',
      },
      {
        key: 'Key insight',
        val: "Men's Street Footwear emerged as the top-performing product (~$209M in sales), with a clear Q3 sales spike and most volume coming through in-store and outlet channels rather than online.",
      },
    ],
  },
  {
    name: '130 Years of Olympic Glory',
    summary:
      'An interactive Tableau dashboard exploring 120+ years of Olympic Games history — medals, athletes, and the rise of women in the Games.',
    liveUrl: 'https://public.tableau.com/app/profile/muhammed.ar1912/viz/olympics_17780628633460/OLYMPICS_DASHBOARD',
    githubUrl: 'https://github.com/Muhammed-Ar90/Olympics-Tableau-Dashboard',
    stack: ['Tableau', 'Data Visualization'],
    fields: [
      {
        key: 'Build',
        val: 'Five linked views built on 134,732 athlete records spanning 1896–2016: a medal tally world map, a country-dominance bump chart, a sports-growth timeline, a top-15 most-decorated-athletes chart, and a chart tracking female participation over time — all filterable by sport, gender, year range, and medal type.',
      },
      {
        key: 'Key insight',
        val: 'Female participation grew from 0% to 45% over the dataset\u2019s span, and Michael Phelps individually holds more medals than most competing nations.',
      },
    ],
  },
]

export const skills = [
  { category: 'Programming & Data', items: ['Python', 'R', 'MySQL', 'Pandas', 'NumPy'] },
  { category: 'Web Development', items: ['FastAPI', 'React'] },
  { category: 'LLM & GenAI', items: ['RAG', 'LLM', 'LLaMA', 'Groq API', 'Vector Databases', 'ChromaDB', 'Embeddings', 'Chunking', 'Semantic Search', 'Prompt Engineering'] },
  { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'OpenCV', 'Regression', 'Classification', 'Clustering', 'Feature Engineering', 'Hyperparameter Tuning', 'Model Evaluation'] },
  { category: 'BI & Visualization', items: ['Power BI (DAX, Data Modeling)', 'Tableau', 'Excel (Pivot Tables, Power Query)', 'Matplotlib', 'Seaborn'] },
  { category: 'Analysis & Statistics', items: ['Data Cleaning', 'EDA', 'KPI Analysis', 'Hypothesis Testing', 'Correlation Analysis'] },
]

export const experience = [
  {
    company: 'Techolas Technologies',
    location: 'Calicut',
    role: 'Data Scientist Intern',
    dates: 'Jun 2025 – Apr 2026',
    bullets: [
      'Built and deployed predictive machine learning models with Scikit-learn, boosting performance through feature engineering and hyperparameter tuning.',
      'Designed NLP pipelines using transformer-based models for text classification and sentiment analysis in Python, turning unstructured text into actionable insights.',
      'Applied computer vision with OpenCV for image classification and object detection, handling dataset preprocessing and augmentation for model training.',
      'Performed exploratory data analysis and statistical analysis in Python (Pandas, NumPy) and SQL, identifying data quality issues and surfacing patterns that informed model development.',
      'Wrote SQL queries to extract, join, and filter data from multiple tables, streamlining the data-gathering step of the analysis workflow.',
    ],
    tags: ['Python', 'Scikit-learn', 'NLP', 'Transformers', 'Computer Vision', 'OpenCV', 'Pandas', 'NumPy', 'SQL'],
  },
]
