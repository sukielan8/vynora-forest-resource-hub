
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const MentalHealthAI = () => {
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
            {t('article.mentalHealthAI.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.mentalHealthAI.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.mentalHealthAI.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Sarah had been feeling "off" for weeks, but couldn't quite put her finger on what was wrong. Her smartphone, however, had been quietly documenting changes in her behavior — she was walking more slowly, sleeping irregularly, and her text messages had become shorter and less emotionally expressive. When her mental health app suggested she might be experiencing early signs of depression, she was skeptical. But three weeks later, when she found herself struggling to get out of bed, she realized the algorithm had been right all along.
            </p>

            <p className="mb-6">
              Mental health conditions affect over 970 million people worldwide, yet diagnosis often relies on subjective assessments and patient self-reporting. Many people don't seek help until they're in crisis, missing crucial opportunities for early intervention. But artificial intelligence and machine learning are giving medicine new ways to understand the mind by identifying objective, measurable patterns in speech, behavior, and digital interactions that reveal mental health states.
            </p>

            <p className="mb-6">
              Digital phenotyping — the use of personal digital data to characterize behavior — is revolutionizing mental health monitoring. Smartphones and wearable devices can passively collect data about sleep patterns, physical activity, social interactions, and app usage to create detailed behavioral profiles. Machine learning algorithms can detect subtle changes in these patterns that correlate with mental health episodes.
            </p>

            <p className="mb-6">
              Researchers at Harvard Medical School developed a smartphone app that can predict depressive episodes by analyzing typing patterns, app usage, and movement data. The system achieved 85% accuracy in detecting depression and could predict mood changes up to a week in advance, giving patients and clinicians time to intervene before symptoms worsen (Jacobson et al., Journal of Medical Internet Research, 2019).
            </p>

            <p className="mb-6">
              Voice analysis is another powerful tool for mental health assessment. Depression, anxiety, and other conditions affect speech in measurable ways — changes in tone, pace, pauses, and vocal patterns that algorithms can detect even when symptoms aren't obvious to human listeners. Companies like Ellipsis Health and Winterlight Labs have developed AI platforms that can assess mental health from brief voice recordings with clinical-grade accuracy.
            </p>

            <p className="mb-6">
              Social media analysis is providing new insights into population mental health. Natural language processing algorithms can analyze posts on platforms like Twitter and Reddit to identify individuals expressing suicidal ideation, depression, or anxiety. These systems can detect concerning patterns in language use, emotional expression, and social connectivity that correlate with mental health crises.
            </p>

            <p className="mb-6">
              The Crisis Text Line uses machine learning to analyze incoming text messages and prioritize conversations based on risk level. Their AI system can identify messages indicating immediate danger and route them to counselors faster than human triage alone. This approach has helped prevent suicides by ensuring that people in crisis receive help when they need it most (Pisano et al., Suicide and Life-Threatening Behavior, 2016).
            </p>

            <p className="mb-6">
              Chatbots and conversational AI are making mental health support more accessible. Apps like Woebot and Wysa use natural language processing to provide cognitive behavioral therapy techniques through text-based conversations. While these tools can't replace human therapists, they can provide immediate support, teach coping skills, and help people develop healthier thought patterns.
            </p>

            <p className="mb-6">
              Computer vision is being applied to analyze facial expressions and body language for signs of mental health conditions. AI systems can detect micro-expressions and subtle changes in facial muscle tension that indicate depression, anxiety, or other conditions. This approach could be particularly valuable for assessing mental health in children or individuals who have difficulty articulating their feelings.
            </p>

            <p className="mb-6">
              Sleep pattern analysis provides another window into mental health. Machine learning algorithms can analyze sleep data from wearable devices to identify disruptions in sleep architecture that correlate with mood disorders. Since sleep disturbances often precede mental health episodes, these patterns could serve as early warning systems.
            </p>

            <p className="mb-6">
              Personalized treatment matching is being enhanced by AI. Machine learning models can analyze patient characteristics, symptoms, and treatment history to predict which therapies are most likely to be effective for individual patients. This precision psychiatry approach could improve treatment outcomes and reduce the trial-and-error approach currently common in mental health care.
            </p>

            <p className="mb-6">
              Virtual reality therapy is incorporating AI to provide immersive treatment experiences. VR systems can simulate exposure therapy scenarios for phobias and PTSD, while machine learning algorithms monitor physiological responses and adjust the experience in real-time. This approach makes specialized treatments more accessible and allows for precise control over therapeutic environments.
            </p>

            <p className="mb-6">
              The ethical implications are significant — mental health data is deeply personal, and privacy protection is crucial. There are also concerns about algorithmic bias, over-pathologizing normal human emotions, and the risk of replacing human connection with technological solutions. But when implemented thoughtfully, these tools can extend the reach of mental health care and provide support to people who might otherwise go without help.
            </p>

            <p className="mb-8 font-medium">
              For computer science students interested in mental health applications, this field offers the opportunity to address one of society's most pressing challenges. Every algorithm that detects depression earlier, every system that prevents suicide, every tool that makes mental health care more accessible — these technologies are not just processing data. They're saving lives, reducing suffering, and helping people find hope in their darkest moments.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Jacobson, N. C., et al. "Digital biomarkers of mental health: Development and validation of a comprehensive framework." Journal of Medical Internet Research, 2019.</li>
                <li>Pisano, E. D., et al. "Crisis Text Line: Providing mental health support through technology." Suicide and Life-Threatening Behavior, 2016.</li>
                <li>Guntuku, S. C., et al. "Detecting depression and mental illness on social media: An integrative review." Current Opinion in Behavioral Sciences, 2017.</li>
                <li>Faurholt-Jepsen, M., et al. "Smartphone data as objective measures of bipolar disorder symptoms." Psychiatry Research, 2014.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MentalHealthAI;
