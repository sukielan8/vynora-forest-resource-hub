
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const SmartProsthetics = () => {
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
            {t('article.smartProsthetics.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.smartProsthetics.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.smartProsthetics.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Johnny Matheny lost his arm to cancer, but gained something extraordinary in return: a prosthetic limb controlled directly by his thoughts. Using neural sensors implanted in his residual limb, he can move individual fingers, grasp objects with precision, and even feel texture through haptic feedback. His prosthetic isn't just a replacement — it's an upgrade, powered by AI and machine learning algorithms that adapt to his movements in real time.
            </p>

            <p className="mb-6">
              This is the new frontier of rehabilitation medicine, where computer science meets bioengineering to restore not just function, but dignity, independence, and hope. AI-powered prosthetics and algorithm-driven physical therapy are revolutionizing how we restore movement, strength, and quality of life for millions of people worldwide.
            </p>

            <p className="mb-6">
              Traditional prosthetics are mechanical devices that require users to learn complex muscle contractions to control basic movements. But smart prosthetics use machine learning to decode neural signals, electromyography (EMG) patterns, and even subtle muscle twitches to understand user intent. The LUKE Arm, developed by DARPA, can perform over 20 different grip patterns and provides sensory feedback so users can feel what they're touching (Resnik et al., JAMA Neurology, 2018).
            </p>

            <p className="mb-6">
              The key breakthrough is pattern recognition software that learns from each user's unique neural signatures. These algorithms continuously adapt, becoming more accurate over time as they learn to distinguish between different intended movements. Some systems achieve control accuracy rates of over 95%, allowing users to perform delicate tasks like typing on a keyboard or picking up an egg without breaking it.
            </p>

            <p className="mb-6">
              But the revolution extends beyond limb replacement. Smart prosthetics are being developed for every part of the body. Cochlear implants now use AI to filter background noise and enhance speech recognition in noisy environments. Retinal implants combined with computer vision algorithms can restore basic sight to people with certain types of blindness. Even prosthetic hearts are becoming smarter, with AI algorithms that adjust pumping patterns based on the user's activity level and physiological needs.
            </p>

            <p className="mb-6">
              Physical therapy is also being transformed by AI. Virtual reality systems combined with motion tracking allow patients to perform rehabilitation exercises in immersive environments while algorithms monitor their form, track progress, and adjust difficulty levels in real time. Companies like MindMaze have developed systems that use brain-computer interfaces to help stroke patients retrain their neural pathways, essentially rewiring the brain through targeted exercises and feedback (Biasiucci et al., Nature Communications, 2018).
            </p>

            <p className="mb-6">
              Gait rehabilitation is another area seeing remarkable progress. Smart exoskeletons powered by AI can assist people with spinal cord injuries in walking again. These systems use machine learning to predict user intent, providing assistance only when needed and gradually reducing support as the user's strength improves. Some patients who haven't walked in years are now able to stand, take steps, and even climb stairs with these devices.
            </p>

            <p className="mb-6">
              The software behind these advances is as important as the hardware. Computer vision algorithms analyze movement patterns to detect subtle compensations or asymmetries that could lead to injury. Natural language processing enables patients to communicate with their devices using voice commands. Machine learning models continuously optimize device performance based on usage patterns and outcomes data.
            </p>

            <p className="mb-6">
              One of the most exciting developments is in brain-controlled prosthetics. Researchers at the University of Pittsburgh have developed systems that allow paralyzed patients to control robotic arms using only their thoughts, achieving levels of dexterity that approach natural movement (Collinger et al., The Lancet, 2013). The key is machine learning algorithms that decode neural signals from motor cortex implants, translating brain activity into precise robotic movements.
            </p>

            <p className="mb-6">
              The impact on users' lives is profound. Beyond restored function, smart prosthetics are giving people back their sense of self, their independence, and their dreams. Athletes are competing in Paralympics with prosthetic limbs that are faster and stronger than biological ones. Musicians are playing instruments with prosthetic hands that respond to the subtlest neural commands. Artists are creating masterpieces with brain-controlled robotic arms.
            </p>

            <p className="mb-6">
              Challenges remain, including cost, durability, and the need for invasive surgery in some cases. Battery life is still limited, and the complexity of these systems requires ongoing technical support. But costs are falling as technology improves, and non-invasive options are being developed that don't require surgical implants.
            </p>

            <p className="mb-8 font-medium">
              For computer science students interested in biomedical applications, this field offers the chance to literally rebuild lives through code. Every algorithm that better decodes neural signals, every machine learning model that improves prosthetic control, every AI system that enhances rehabilitation — these are not just technical achievements. They are giving people their lives back, one line of code at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Resnik, L., et al. "Advanced upper limb prosthetic devices: Implications for upper limb prosthetic rehabilitation." JAMA Neurology, 2018.</li>
                <li>Biasiucci, A., et al. "Brain-actuated functional electrical stimulation elicits lasting arm motor recovery after stroke." Nature Communications, 2018.</li>
                <li>Collinger, J. L., et al. "High-performance neuroprosthetic control by an individual with tetraplegia." The Lancet, 2013.</li>
                <li>Jiang, N., et al. "Myoelectric control of artificial limbs: Is there a need to change focus?" IEEE Signal Processing Magazine, 2012.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SmartProsthetics;
