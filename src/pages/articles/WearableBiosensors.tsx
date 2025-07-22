
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const WearableBiosensors = () => {
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
            {t('article.wearableBiosensors.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.wearableBiosensors.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.wearableBiosensors.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              What if your smartwatch knew you were sick before you did? What if your shirt could alert your doctor to a dangerous drop in oxygen levels? Or if your earbuds quietly recorded early signs of a heart arrhythmia — and sent help before your symptoms even appeared?
            </p>

            <p className="mb-6">
              This isn't speculation. It's happening now. Wearable biosensors, combined with powerful computer science algorithms, are reshaping how we monitor health — not occasionally at the doctor's office, but continuously, passively, and in real time. The body has become a source of rich data. And increasingly, code is the stethoscope.
            </p>

            <p className="mb-6">
              At the center of this movement are devices many of us already wear daily: smartwatches, fitness bands, and rings. These tools measure key biometric signals — heart rate variability, blood oxygen levels, skin temperature, galvanic skin response, and more — and feed them into machine learning models trained to detect early signs of illness, stress, dehydration, and even infection.
            </p>

            <p className="mb-6">
              For example, a 2020 study led by Stanford University found that smartwatches could detect COVID-19 infection up to 9 days before symptoms began, simply by monitoring deviations in resting heart rate, step count, and sleep patterns (Mishra et al., Nature Biomedical Engineering, 2020). These subtle physiological shifts, unnoticeable to the wearer, became clear through algorithms trained to recognize abnormal patterns.
            </p>

            <p className="mb-6">
              Companies like WHOOP, Apple, and Fitbit are integrating increasingly advanced biosensors and partnering with research institutions to detect irregular heart rhythms, early-stage diabetes risk, atrial fibrillation, and chronic stress levels. More impressively, software models trained on longitudinal data — months or years of a person's daily baseline — can personalize alerts based on an individual's unique physiology.
            </p>

            <p className="mb-6">
              One of the most promising applications is in cardiovascular disease, still the leading cause of death globally. Using wearable EKG monitors, paired with AI-powered mobile apps, cardiologists can remotely monitor patients recovering from heart surgery or at high risk for stroke. This reduces hospital visits, catches complications early, and empowers patients to engage with their care actively.
            </p>

            <p className="mb-6">
              Even mental health is being explored through wearable tech. Devices now analyze micro-changes in heart rate, sweat, and temperature to assess emotional arousal, helping users detect the onset of panic attacks or depressive episodes. With AI, these systems can learn an individual's triggers and patterns, recommending interventions like breathwork or calling a loved one.
            </p>

            <p className="mb-6">
              But none of this would be possible without software — the algorithms that transform raw physiological signals into actionable insights. The development of time-series analysis models, anomaly detection frameworks, and personalized thresholds requires deep knowledge of both health sciences and machine learning. It's in this intersection — medicine and code — where the real breakthroughs are born.
            </p>

            <p className="mb-6">
              Still, challenges remain. Data privacy is a growing concern. If biosensors are monitoring every breath and beat, who owns that data? How do we prevent it from being misused by insurance companies or advertisers? Regulations like HIPAA and GDPR are trying to catch up, but technologists must lead with ethics at the forefront of design.
            </p>

            <p className="mb-6">
              Yet the potential is profound. As biosensors shrink and computational power grows, we're heading toward ambient healthcare — where the body communicates with doctors in real-time, without interrupting life. A world where hospitalization becomes rarer, prevention becomes standard, and health becomes as easy to monitor as a weather forecast.
            </p>

            <p className="mb-8 font-medium">
              For students blending medicine and computer science, this isn't just wearable tech. It's human insight, made visible. And in that visibility lies the chance to act, early and effectively.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mishra, T., et al. "Pre-symptomatic detection of COVID-19 from smartwatch data." Nature Biomedical Engineering, 2020.</li>
                <li>Radin, J. M., et al. "Harnessing wearable device data to improve state-level real-time surveillance of influenza-like illness in the USA." The Lancet Digital Health, 2020.</li>
                <li>Topol, E. "The future of medicine is in your smartphone." Nature Biotechnology, 2019.</li>
                <li>Li, X., et al. "Digital health: Tracking physiomes and activity using wearable biosensors reveals useful health-related information." PLOS Biology, 2017.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WearableBiosensors;
