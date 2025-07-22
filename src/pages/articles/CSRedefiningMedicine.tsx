
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CSRedefiningMedicine = () => {
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
            {t('article.csRedefiningMedicine.title')}
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {t('article.csRedefiningMedicine.date')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {t('article.csRedefiningMedicine.readTime')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In a hospital room in Boston, a patient's vital signs are being monitored not just by nurses, but by machine learning algorithms that can predict complications hours before they occur. In a research lab in California, AI is designing new drug molecules at a pace that would have been impossible just a decade ago. In clinics around the world, algorithms are reading medical scans with accuracy that rivals the most experienced radiologists. From the hospital room to the research lab, algorithms and artificial intelligence are becoming the new instruments of healing.
            </p>

            <p className="mb-6">
              The transformation is quiet but profound. While the media focuses on flashy AI applications like self-driving cars and chatbots, some of the most impactful work in artificial intelligence is happening in healthcare. Computer science isn't just helping medicine — it's fundamentally redefining what's possible in diagnosis, treatment, and care.
            </p>

            <p className="mb-6">
              This revolution began with electronic health records, but it has evolved far beyond digital filing systems. Today's healthcare AI can analyze patterns across millions of patient records to identify optimal treatments, predict disease outbreaks, and discover new therapeutic targets. Machine learning models trained on vast datasets are revealing insights about human health that would have taken decades of traditional research to uncover.
            </p>

            <p className="mb-6">
              Consider radiology, where AI systems can now detect cancers, fractures, and other abnormalities with superhuman accuracy. Google's AI achieved a 94.5% accuracy rate in breast cancer detection, while reducing both false positives and false negatives compared to human radiologists. Similar systems are being deployed for lung cancer screening, diabetic retinopathy detection, and skin cancer diagnosis — extending specialist-level expertise to clinicians worldwide.
            </p>

            <p className="mb-6">
              Drug discovery, traditionally a 10-15 year process costing billions of dollars, is being accelerated by AI. Machine learning algorithms can predict how molecules will interact with biological targets, identify promising drug candidates, and optimize compound properties — all before stepping foot in a laboratory. Companies like Atomwise and DeepMind have demonstrated that AI can design effective drugs in months rather than years.
            </p>

            <p className="mb-6">
              Precision medicine is perhaps where computer science makes its most personal impact. By analyzing genetic data, medical history, and lifestyle factors, AI systems can predict which treatments will work best for individual patients. This approach is transforming cancer care, where molecular profiling combined with machine learning can identify targeted therapies that are most likely to be effective for each patient's unique tumor.
            </p>

            <p className="mb-6">
              Digital health monitoring is creating new possibilities for preventive care. Wearable devices equipped with AI can detect irregular heart rhythms, predict respiratory infections, and monitor chronic conditions continuously. These systems can alert healthcare providers to problems before patients even feel symptoms, enabling interventions that prevent hospitalizations and improve outcomes.
            </p>

            <p className="mb-6">
              Natural language processing is transforming how medical knowledge is accessed and applied. AI systems can read medical literature, extract relevant insights, and even generate clinical recommendations. IBM Watson for Oncology and similar platforms can process vast amounts of medical research to suggest treatment options based on the latest evidence and clinical guidelines.
            </p>

            <p className="mb-6">
              Surgical robotics enhanced by AI is enabling procedures that would have been impossible with human hands alone. These systems provide surgeons with enhanced precision, tremor elimination, and the ability to operate in confined spaces. AI algorithms can guide surgical instruments, identify anatomical structures in real-time, and even predict potential complications during procedures.
            </p>

            <p className="mb-6">
              Mental health, traditionally reliant on subjective assessments, is being transformed by objective AI analysis. Machine learning algorithms can detect depression from speech patterns, predict suicide risk from social media posts, and provide personalized cognitive behavioral therapy through chatbot interfaces. These tools are making mental health screening more accessible and intervention more timely.
            </p>

            <p className="mb-6">
              Healthcare administration, often overlooked but critically important, is being streamlined by AI. Machine learning can optimize hospital staffing, predict patient volumes, and reduce medical errors through decision support systems. These applications may not be glamorous, but they improve efficiency and safety across entire healthcare systems.
            </p>

            <p className="mb-6">
              The COVID-19 pandemic accelerated many of these trends. AI helped identify the virus structure, predict protein folding, discover potential treatments, and track disease spread. Algorithms analyzed chest CT scans to diagnose COVID-19, predicted patient outcomes, and optimized resource allocation in overwhelmed hospitals. The pandemic demonstrated both the potential and the necessity of AI in healthcare.
            </p>

            <p className="mb-6">
              But this transformation isn't without challenges. Healthcare AI must navigate strict regulatory requirements, address concerns about algorithmic bias, and maintain patient privacy while handling sensitive medical data. There are also questions about how AI decisions should be explained to patients and integrated into clinical workflows that have evolved over decades.
            </p>

            <p className="mb-6">
              The human element remains crucial. AI augments rather than replaces healthcare providers, enhancing their capabilities while leaving critical decisions about patient care in human hands. The most successful healthcare AI applications work in partnership with clinicians, providing insights and recommendations while preserving the human judgment and empathy that are central to healing.
            </p>

            <p className="mb-8 font-medium">
              For students considering careers at the intersection of computer science and healthcare, the opportunities are unprecedented. This field offers the chance to apply cutting-edge technology to humanity's most fundamental need — health and healing. Every algorithm that improves diagnosis, every system that accelerates drug discovery, every tool that makes healthcare more accessible — these technologies are not just advancing computer science. They're advancing human flourishing, one patient, one discovery, one life at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">{t('article.citations')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>McKinney, S. M., et al. "International evaluation of an AI system for breast cancer screening." Nature, 2020.</li>
                <li>Senior, A. W., et al. "Improved protein structure prediction using potentials from deep learning." Nature, 2020.</li>
                <li>Topol, E. J. "High-performance medicine: The convergence of human and artificial intelligence." Nature Medicine, 2019.</li>
                <li>Rajpurkar, P., et al. "AI in health and medicine." Nature Medicine, 2022.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CSRedefiningMedicine;
