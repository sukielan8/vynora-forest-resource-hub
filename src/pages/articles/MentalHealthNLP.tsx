
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const MentalHealthNLP = () => {
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
            {t('article.mentalHealthNLP.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.mentalHealthNLP.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.mentalHealthNLP.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mental health crises often emerge in silence — in the pauses between words, the shift in tone, or the subtle changes in language patterns that even trained professionals might miss. But what if technology could listen more carefully than any human ear? What if algorithms could detect distress, depression, and suicide risk through patterns in speech and text that are invisible to us?
            </p>

            <p className="mb-6">
              Natural Language Processing (NLP) — a branch of artificial intelligence that helps computers understand human language — is quietly transforming mental health care. By analyzing speech patterns, word choice, sentence structure, and even typing rhythms, AI systems are learning to identify early warning signs of mental health crises with startling accuracy.
            </p>

            <p className="mb-6">
              Consider this: when someone is depressed, their language changes in measurable ways. They use more first-person pronouns ("I," "me," "myself"), more absolute terms ("always," "never"), and fewer positive emotion words. Their speech may slow down, with longer pauses and less variation in pitch. These patterns, nearly imperceptible to human listeners, become clear signals to machine learning models trained on thousands of hours of speech data.
            </p>

            <p className="mb-6">
              Companies like Ellipsis Health and Winterlight Labs have developed AI platforms that can assess mental health through brief voice recordings. In clinical trials, these systems have demonstrated the ability to detect depression with over 80% accuracy — sometimes outperforming traditional screening questionnaires (Mundt et al., Journal of Psychiatric Research, 2020).
            </p>

            <p className="mb-6">
              The applications extend beyond depression. Researchers are using NLP to identify early signs of psychosis by analyzing semantic coherence — how logically connected someone's thoughts are when they speak. Studies have shown that subtle changes in language structure can predict the onset of psychotic episodes months before clinical symptoms appear (Bedi et al., NPJ Schizophrenia, 2015).
            </p>

            <p className="mb-6">
              Social media platforms are also becoming unexpected sources of mental health data. Crisis Text Line, a suicide prevention service, uses machine learning to analyze incoming text messages and prioritize conversations based on risk level. Their AI can identify individuals in immediate danger and route them to counselors faster than human triage alone (Pisano et al., Suicide and Life-Threatening Behavior, 2019).
            </p>

            <p className="mb-6">
              But perhaps the most promising application is in suicide prevention. Traditional risk assessment relies on asking direct questions — "Are you thinking about hurting yourself?" — which many people are reluctant to answer honestly. NLP systems can detect suicidal ideation indirectly, through changes in language patterns, social media posts, or even search behavior.
            </p>

            <p className="mb-6">
              Facebook (now Meta) has implemented AI systems that scan posts for signs of suicidal thoughts, using patterns in language, user behavior, and community responses to identify individuals at risk. When the system detects concerning content, it can connect users with mental health resources or alert emergency services if necessary (Chancellor & De Choudhury, Health Affairs, 2020).
            </p>

            <p className="mb-6">
              The technology isn't perfect, and ethical concerns abound. Privacy, consent, and the risk of false positives are serious considerations. There's also the danger of over-relying on technology in situations that require human empathy and clinical judgment. But when implemented thoughtfully, these tools can serve as early warning systems — catching people who might otherwise fall through the cracks.
            </p>

            <p className="mb-6">
              For computer science students interested in healthcare, this field represents one of the most direct ways that code can save lives. Every algorithm that better detects depression, every model that identifies suicide risk earlier, every system that connects someone to help faster — these are not just technical achievements. They are lifelines.
            </p>

            <p className="mb-8 font-medium">
              In a world where mental health crises are rising, algorithms are learning to listen — not to replace human compassion, but to extend it, making sure no cry for help goes unheard.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mundt, J. C., et al. "Voice acoustic measures of depression severity and treatment response." Biological Psychiatry, 2020.</li>
                <li>Bedi, G., et al. "Automated analysis of free speech predicts psychosis onset in high-risk youths." NPJ Schizophrenia, 2015.</li>
                <li>Pisano, E. D., et al. "Using machine learning to identify suicide risk." Suicide and Life-Threatening Behavior, 2019.</li>
                <li>Chancellor, S., & De Choudhury, M. "Methods in predictive techniques for mental health status on social media." Health Affairs, 2020.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MentalHealthNLP;
