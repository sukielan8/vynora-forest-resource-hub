
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const HeartAttackPrediction = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
            Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Friday, January 3rd, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              10 min read
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Michael's annual checkup showed normal cholesterol, good blood pressure, and no obvious risk factors for heart disease. But when his ECG was fed into an AI system developed at Mayo Clinic, the algorithm detected subtle abnormalities that predicted a 75% chance of heart failure within four years. His doctors started preventive treatment immediately. Three years later, when follow-up tests confirmed early signs of heart dysfunction, the intervention had already begun working. A single ECG reading had predicted his future with stunning accuracy — and potentially saved his life.
            </p>

            <p className="mb-6">
              Heart attacks remain one of the leading causes of death worldwide, often striking without warning. But what if we could predict them years in advance? What if a routine medical test could reveal your cardiovascular future with mathematical precision? Machine learning and artificial intelligence are making this vision a reality, analyzing subtle patterns in medical data that can predict heart attacks, strokes, and other cardiac events long before symptoms appear.
            </p>

            <p className="mb-6">
              The Mayo Clinic AI system represents a breakthrough in predictive cardiology. By analyzing over 600,000 ECGs, machine learning algorithms learned to identify patients at risk for atrial fibrillation — a dangerous heart rhythm disorder that significantly increases stroke risk. The AI achieved 85% accuracy in predicting who would develop AFib within one year, often detecting risk in patients with completely normal-appearing ECGs (Attia et al., Nature Medicine, 2019).
            </p>

            <p className="mb-6">
              Deep learning models are revolutionizing how we interpret cardiac imaging. AI systems can analyze echocardiograms, cardiac MRIs, and CT angiograms to detect early signs of heart disease that human observers might miss. These algorithms can measure heart function, identify wall motion abnormalities, and predict future cardiac events with remarkable accuracy — often outperforming experienced cardiologists.
            </p>

            <p className="mb-6">
              Wearable devices are becoming powerful tools for continuous cardiac monitoring. The Apple Watch's ECG feature has detected thousands of cases of atrial fibrillation in people who had no idea they had a heart rhythm problem. Machine learning algorithms analyze heart rate variability, detect irregular rhythms, and can even predict cardiac arrest hours before it occurs by identifying subtle changes in heart rate patterns.
            </p>

            <p className="mb-6">
              Risk prediction models are becoming increasingly sophisticated. Traditional cardiovascular risk calculators use a few key factors like age, cholesterol, and blood pressure. But AI systems can analyze hundreds of variables simultaneously — from genetic markers and inflammatory proteins to lifestyle factors and environmental exposures — to create personalized risk profiles with unprecedented accuracy.
            </p>

            <p className="mb-6">
              The Framingham Risk Score, developed decades ago, estimates 10-year cardiovascular risk using basic clinical variables. But modern machine learning models can achieve much higher accuracy by incorporating additional data sources. Studies show that AI-based risk models can improve prediction accuracy by 15-20% compared to traditional approaches, potentially identifying thousands more people who need preventive treatment.
            </p>

            <p className="mb-6">
              Retinal imaging is emerging as an unexpected window into cardiovascular health. AI systems can analyze photographs of the retina — the light-sensitive tissue at the back of the eye — to predict cardiovascular risk factors with remarkable accuracy. Google's AI system can determine a person's age, gender, smoking status, blood pressure, and even predict future cardiovascular events just by looking at retinal images (Poplin et al., Nature Biomedical Engineering, 2018).
            </p>

            <p className="mb-6">
              Blood test interpretation is being enhanced by machine learning. AI algorithms can analyze patterns in routine lab results to identify hidden cardiovascular risk. These systems can detect subtle abnormalities in biomarker combinations that might not trigger alarms individually but together indicate increased cardiac risk. This approach could turn routine blood work into powerful screening tools.
            </p>

            <p className="mb-6">
              Emergency department triage is being revolutionized by AI. When patients arrive with chest pain, machine learning algorithms can analyze their symptoms, vital signs, ECG, and medical history to predict their risk of heart attack with greater accuracy than traditional assessment tools. This helps doctors prioritize the highest-risk patients and make faster treatment decisions when every minute counts.
            </p>

            <p className="mb-6">
              Genetic risk prediction is advancing rapidly. AI systems can analyze polygenic risk scores — combining the effects of thousands of genetic variants — to predict cardiovascular disease risk from birth. This information could guide lifelong prevention strategies, helping people make informed decisions about diet, exercise, and medical monitoring based on their genetic predisposition.
            </p>

            <p className="mb-6">
              Population health surveillance is being enhanced by AI analysis of electronic health records. Machine learning algorithms can identify patients at high risk for cardiovascular events across entire healthcare systems, enabling proactive outreach and preventive interventions before problems occur. This population-level approach could prevent thousands of heart attacks and strokes.
            </p>

            <p className="mb-6">
              The implications are profound: a future where heart attacks become predictable and largely preventable events rather than sudden, life-threatening emergencies. But challenges remain, including ensuring algorithms work across diverse populations, integrating predictions into clinical workflows, and addressing the psychological impact of knowing one's cardiovascular future.
            </p>

            <p className="mb-8 font-medium">
              For computer science students passionate about cardiovascular health, this field offers the opportunity to prevent some of medicine's most devastating events. Every algorithm that predicts heart disease more accurately, every system that identifies at-risk patients earlier, every tool that guides preventive treatment — these technologies are not just processing data. They're rewriting destinies, turning fatal heart attacks into preventable conditions, one prediction at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Citations:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Attia, Z. I., et al. "Screening for cardiac contractile dysfunction using an artificial intelligence–enabled electrocardiogram." Nature Medicine, 2019.</li>
                <li>Poplin, R., et al. "Prediction of cardiovascular risk factors from retinal fundus photographs via deep learning." Nature Biomedical Engineering, 2018.</li>
                <li>Somani, S., et al. "Deep learning and the electrocardiogram: Review of the current state-of-the-art." Europace, 2021.</li>
                <li>Krittanawong, C., et al. "Machine learning prediction in cardiovascular diseases: A meta-analysis." Scientific Reports, 2020.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HeartAttackPrediction;
