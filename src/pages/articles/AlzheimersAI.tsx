
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const AlzheimersAI = () => {
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
            {t('article.alzheimersAI.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.alzheimersAI.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.alzheimersAI.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mary's voice carried subtle changes that her family didn't notice — tiny pauses, word-finding difficulties, and shifts in speaking rhythm. But an AI system designed to analyze speech patterns detected these early signs of cognitive decline two years before her Alzheimer's diagnosis. By the time traditional cognitive tests showed problems, machine learning algorithms had already identified the neurological changes beginning to unfold in her brain.
            </p>

            <p className="mb-6">
              Alzheimer's disease affects over 55 million people worldwide, and by the time symptoms become obvious, significant brain damage has already occurred. But machine learning is uncovering subtle biomarkers in speech, gait, brain activity, and even digital behavior that can detect neurodegenerative diseases years before clinical symptoms appear — potentially opening a crucial window for early intervention.
            </p>

            <p className="mb-6">
              Speech analysis has emerged as one of the most promising approaches. Researchers have found that Alzheimer's affects language in predictable ways: increased pauses, reduced vocabulary diversity, more frequent use of generic words, and changes in semantic fluency. Machine learning models trained on thousands of speech samples can detect these patterns with remarkable accuracy.
            </p>

            <p className="mb-6">
              A study at IBM Research developed an AI system that could predict Alzheimer's onset with 71% accuracy just by analyzing writing samples — years before clinical diagnosis. The algorithm identified subtle changes in language complexity, grammatical structure, and word choice that human readers couldn't detect (Fraser et al., Journal of Alzheimer's Disease, 2016).
            </p>

            <p className="mb-6">
              Computer vision is also playing a crucial role in early detection. AI algorithms can analyze brain scans to identify microscopic changes in brain structure and function that precede cognitive symptoms. These systems can detect amyloid plaques and tau tangles — the hallmark proteins of Alzheimer's — with greater sensitivity than human radiologists.
            </p>

            <p className="mb-6">
              Digital biomarkers are another frontier. Researchers are finding that early-stage Alzheimer's affects how people interact with technology — from typing patterns and mouse movements to GPS navigation and smartphone usage. Algorithms can detect these subtle changes in digital behavior, potentially turning everyday devices into early warning systems (Dagum, npj Digital Medicine, 2018).
            </p>

            <p className="mb-6">
              Gait analysis represents another breakthrough. Studies show that walking patterns change in early Alzheimer's — stride length decreases, variability increases, and dual-task performance (like walking while talking) becomes impaired. Wearable sensors combined with machine learning can detect these changes during routine activities, providing continuous monitoring outside clinical settings.
            </p>

            <p className="mb-6">
              Eye-tracking technology is revealing new insights into cognitive decline. AI systems can analyze eye movement patterns during reading or visual tasks to detect attention and memory problems that precede clinical symptoms. These non-invasive tests could become routine screening tools in primary care settings.
            </p>

            <p className="mb-6">
              Sleep analysis is another promising area. Alzheimer's disrupts sleep patterns years before memory problems become apparent. Machine learning algorithms can analyze sleep data from wearable devices to identify disruptions in sleep architecture that correlate with future cognitive decline, potentially providing an early warning system that works while people sleep.
            </p>

            <p className="mb-6">
              Drug discovery for Alzheimer's is also being accelerated by AI. Machine learning models can analyze molecular structures, predict drug-target interactions, and identify promising therapeutic compounds faster than traditional methods. Companies like Atomwise and BenevolentAI are using AI to discover new Alzheimer's treatments, significantly reducing the time and cost of drug development.
            </p>

            <p className="mb-6">
              Personalized treatment is another area where AI shows promise. Machine learning models can analyze patient data to predict which individuals are most likely to respond to specific treatments, helping doctors choose the most effective interventions. This precision medicine approach could dramatically improve outcomes for Alzheimer's patients.
            </p>

            <p className="mb-6">
              The implications extend beyond diagnosis and treatment. AI-powered cognitive training programs are being developed to help maintain brain health and potentially slow cognitive decline. These systems adapt in real-time to each user's abilities, providing personalized mental exercises that target specific cognitive domains.
            </p>

            <p className="mb-8 font-medium">
              For computer science students passionate about making a difference, Alzheimer's research offers the opportunity to tackle one of humanity's greatest health challenges. Every algorithm that detects the disease earlier, every system that identifies new treatments, every tool that improves patient care — these advances bring us closer to a world where Alzheimer's can be prevented, treated, or cured.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Fraser, K. C., et al. "Linguistic features identify Alzheimer's disease in narrative speech." Journal of Alzheimer's Disease, 2016.</li>
                <li>Dagum, P. "Digital biomarkers of cognitive function." npj Digital Medicine, 2018.</li>
                <li>Toth, A., et al. "Machine learning approaches for early detection of Alzheimer's disease." Current Alzheimer Research, 2020.</li>
                <li>König, A., et al. "Automatic speech analysis for the assessment of patients with predementia and Alzheimer's disease." Alzheimer's & Dementia: Diagnosis, Assessment & Disease Monitoring, 2015.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AlzheimersAI;
