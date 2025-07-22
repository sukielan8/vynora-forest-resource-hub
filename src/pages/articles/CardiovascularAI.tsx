
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CardiovascularAI = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="inline-flex items-center text-secondary hover:text-white transition-colors duration-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('article.backToArticles')}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
            {t('article.cardiovascularAI.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.cardiovascularAI.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.cardiovascularAI.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A routine ECG at David's annual checkup looked completely normal to the human eye. His doctor saw a regular heart rhythm, normal wave patterns, and no obvious signs of concern. But when the same ECG was analyzed by an AI algorithm developed at Stanford University, it detected subtle abnormalities that predicted a 90% chance of atrial fibrillation developing within the next year. Six months later, David was diagnosed with the exact condition the algorithm had predicted — and received life-saving treatment before a stroke could occur.
            </p>

            <p className="mb-6">
              Cardiovascular disease remains the leading cause of death worldwide, but computer science is transforming how we detect, predict, and treat heart conditions. From detecting arrhythmias to predicting heart attacks, AI algorithms are becoming powerful allies in the fight against heart disease — often seeing patterns in data that even experienced cardiologists miss.
            </p>

            <p className="mb-6">
              ECG analysis has been revolutionized by deep learning. Traditional ECG interpretation relies on pattern recognition by trained clinicians, but AI systems can detect far more subtle abnormalities. Google's AI team developed an algorithm that can identify 12 different types of arrhythmias from ECG data with cardiologist-level accuracy, processing thousands of heartbeats in seconds (Hannun et al., Nature Medicine, 2019).
            </p>

            <p className="mb-6">
              Wearable devices have democratized heart monitoring. Apple Watch, Fitbit, and other consumer devices now include ECG capabilities powered by machine learning algorithms. These systems can detect atrial fibrillation — a major risk factor for stroke — during routine daily activities. The Apple Heart Study enrolled over 400,000 participants and demonstrated that wearable ECG monitoring could identify previously undiagnosed heart rhythm problems in real-world settings.
            </p>

            <p className="mb-6">
              Computer vision is transforming cardiac imaging. AI algorithms can analyze echocardiograms, CT scans, and MRI images to assess heart function, detect structural abnormalities, and predict future cardiac events. These systems can measure ejection fraction, identify wall motion abnormalities, and detect valve problems with accuracy that rivals human experts — but in a fraction of the time.
            </p>

            <p className="mb-6">
              Predictive modeling is perhaps the most exciting application. Machine learning algorithms can analyze vast amounts of patient data — lab results, vital signs, imaging studies, and electronic health records — to predict which patients are at highest risk for heart attacks, strokes, or sudden cardiac death. These risk stratification tools help doctors prioritize interventions and allocate resources where they'll have the greatest impact.
            </p>

            <p className="mb-6">
              One groundbreaking study used machine learning to analyze retinal photographs — pictures of the back of the eye taken during routine eye exams. The algorithm could predict cardiovascular risk factors like blood pressure, cholesterol levels, and diabetes status just by looking at blood vessels in the retina. This approach could turn routine eye exams into cardiovascular screening tools (Poplin et al., Nature Biomedical Engineering, 2018).
            </p>

            <p className="mb-6">
              Smart pacemakers and defibrillators are incorporating AI to provide more personalized therapy. These devices can learn each patient's unique heart rhythm patterns and adjust their settings automatically. Machine learning algorithms can distinguish between dangerous arrhythmias that require shock therapy and benign rhythm changes that don't need intervention, reducing unnecessary shocks and improving quality of life.
            </p>

            <p className="mb-6">
              Drug discovery for cardiovascular disease is also being accelerated by AI. Machine learning models can identify promising drug targets, predict how compounds will interact with cardiac ion channels, and optimize drug dosing regimens. This approach is particularly valuable for developing personalized therapies based on genetic factors that affect drug metabolism.
            </p>

            <p className="mb-6">
              Telemedicine platforms are using AI to extend cardiac care to underserved areas. Remote monitoring systems can analyze ECG data transmitted from home devices and alert healthcare providers to concerning changes. Natural language processing can help interpret patient symptoms reported through telehealth platforms, helping doctors prioritize urgent cases.
            </p>

            <p className="mb-6">
              Surgical planning for cardiac procedures is being enhanced by AI. Virtual reality systems can create 3D models of patients' hearts from imaging data, allowing surgeons to practice complex procedures before entering the operating room. Machine learning algorithms can predict surgical outcomes and help optimize procedural approaches for individual patients.
            </p>

            <p className="mb-6">
              The integration of AI in cardiovascular medicine isn't without challenges. Algorithms must be trained on diverse datasets to avoid bias, and clinical validation requires extensive testing. Regulatory approval for AI-powered medical devices is complex and time-consuming. But the potential benefits — earlier detection, more accurate diagnosis, and personalized treatment — make these challenges worth addressing.
            </p>

            <p className="mb-8 font-medium">
              For computer science students interested in cardiovascular applications, this field offers the opportunity to directly impact millions of lives. Every algorithm that detects heart disease earlier, every system that predicts cardiac events more accurately, every tool that helps doctors provide better care — these technologies are literally helping hearts beat stronger and longer, one patient at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hannun, A. Y., et al. "Cardiologist-level arrhythmia detection and classification in ambulatory electrocardiograms using a deep neural network." Nature Medicine, 2019.</li>
                <li>Poplin, R., et al. "Prediction of cardiovascular risk factors from retinal fundus photographs via deep learning." Nature Biomedical Engineering, 2018.</li>
                <li>Attia, Z. I., et al. "Screening for cardiac contractile dysfunction using an artificial intelligence–enabled electrocardiogram." Nature Medicine, 2019.</li>
                <li>Johnson, K. W., et al. "Artificial intelligence in cardiology." Journal of the American College of Cardiology, 2018.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardiovascularAI;
