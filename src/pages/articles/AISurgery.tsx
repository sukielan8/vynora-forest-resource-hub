
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const AISurgery = () => {
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
            {t('article.aiSurgery.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.aiSurgery.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.aiSurgery.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In a busy operating room at Johns Hopkins Hospital, a surgeon prepares to remove a brain tumor. But she's not working alone. An AI system analyzes real-time MRI scans, highlighting the tumor's exact boundaries and identifying critical neural pathways to avoid. Computer vision algorithms guide robotic instruments with sub-millimeter precision. Machine learning models predict potential complications before they occur. Artificial intelligence is now embedded in the very fabric of modern surgery — guiding scalpels, interpreting scans, and preventing errors.
            </p>

            <p className="mb-6">
              Surgery has always been about precision, timing, and decision-making under pressure. Today, algorithms are augmenting human surgeons in all three areas, creating safer procedures, better outcomes, and new possibilities that were unimaginable just a decade ago. From pre-operative planning to post-operative care, AI is transforming every aspect of surgical medicine.
            </p>

            <p className="mb-6">
              Pre-operative planning has been revolutionized by computer vision and 3D modeling. Surgeons can now create detailed virtual models of a patient's anatomy from CT and MRI scans, allowing them to rehearse complex procedures before making the first incision. AI algorithms automatically segment organs, identify anatomical structures, and even predict how tissues will respond to surgical manipulation.
            </p>

            <p className="mb-6">
              Companies like Surgical Theater have developed virtual reality platforms that allow surgeons to "fly through" a patient's brain, planning the optimal surgical approach and identifying potential risks. These systems use machine learning to continuously improve their anatomical recognition, becoming more accurate with each procedure (Pelargos et al., World Neurosurgery, 2017).
            </p>

            <p className="mb-6">
              During surgery, computer vision systems provide real-time guidance and safety checks. Smart surgical instruments equipped with sensors can detect when they're approaching critical structures like blood vessels or nerves. AI algorithms analyze video feeds from surgical cameras to identify anatomical landmarks, track instrument positions, and alert surgeons to potential complications.
            </p>

            <p className="mb-6">
              Robotic surgery systems like the da Vinci platform have incorporated AI to enhance precision and reduce surgeon fatigue. These systems use machine learning to compensate for hand tremors, scale down large movements into micro-movements, and provide haptic feedback that helps surgeons "feel" what they're touching through robotic instruments. The result is greater precision, smaller incisions, and faster recovery times for patients.
            </p>

            <p className="mb-6">
              One of the most promising applications is in cancer surgery, where algorithms help surgeons achieve complete tumor removal while preserving healthy tissue. AI systems can analyze tissue samples in real-time during surgery, determining whether all cancer cells have been removed and guiding surgeons to areas that need additional attention. This has led to lower recurrence rates and better long-term outcomes (Lu et al., Nature Medicine, 2020).
            </p>

            <p className="mb-6">
              Natural language processing is also finding its way into operating rooms. AI-powered surgical assistants can respond to voice commands, adjusting lighting, camera angles, or instrument settings without requiring sterile team members to break scrub. These systems can also transcribe surgical notes in real-time, automatically documenting procedures and reducing administrative burden on surgical teams.
            </p>

            <p className="mb-6">
              Machine learning models are being trained to predict surgical complications before they occur. By analyzing patient data, vital signs, and intraoperative parameters, these algorithms can alert surgical teams to potential problems like bleeding, infection risk, or adverse reactions to anesthesia. Early warning systems give clinicians time to intervene before complications become life-threatening.
            </p>

            <p className="mb-6">
              Post-operative care is also being enhanced by AI. Computer vision systems can analyze surgical wounds through smartphone cameras, detecting early signs of infection or poor healing. Machine learning models can predict which patients are at risk for complications like blood clots or pneumonia, enabling targeted interventions that prevent problems before they occur.
            </p>

            <p className="mb-6">
              Training the next generation of surgeons is being transformed by AI as well. Virtual reality surgical simulators use machine learning to provide personalized feedback, identifying areas where trainees need improvement and adapting training scenarios to address specific weaknesses. Some systems can even predict a trainee's future surgical performance based on simulator data (Krebs et al., Surgery, 2018).
            </p>

            <p className="mb-6">
              The integration of AI in surgery raises important questions about human skill, judgment, and the role of technology in medicine. While algorithms can enhance precision and reduce errors, surgery remains fundamentally a human endeavor requiring empathy, adaptability, and clinical judgment that no machine can replicate.
            </p>

            <p className="mb-8 font-medium">
              For computer science students interested in surgical applications, this field offers the opportunity to directly impact patient outcomes through code. Every algorithm that improves surgical precision, every system that prevents complications, every AI tool that helps surgeons make better decisions — these technologies are literally saving lives on the operating table, one procedure at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pelargos, P. E., et al. "Utilizing virtual and augmented reality for educational and clinical enhancements in neurosurgery." World Neurosurgery, 2017.</li>
                <li>Lu, M. Y., et al. "AI-based pathology predicts origins for cancers of unknown primary." Nature Medicine, 2020.</li>
                <li>Krebs, E. D., et al. "Machine learning approaches to predict surgical outcomes." Surgery, 2018.</li>
                <li>Hashimoto, D. A., et al. "Artificial intelligence in surgery: Promises and perils." Annals of Surgery, 2018.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AISurgery;
