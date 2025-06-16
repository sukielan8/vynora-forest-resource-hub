
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const CancerDetectionAI = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="inline-flex items-centers text-secondary hover:text-white transition-colors duration-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
            Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Friday, January 31st, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              13 min read
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The mammogram looked normal to three different radiologists. But when the same image was analyzed by Google's AI system, it detected a tiny cluster of malignant cells that would have been missed in a traditional screening. Six months later, that early detection saved a woman's life — catching breast cancer at Stage 1 instead of Stage 3, transforming a potentially fatal diagnosis into a highly treatable condition. This is the promise of AI in oncology: precision, not guesswork.
            </p>

            <p className="mb-6">
              Cancer affects millions of people worldwide, and early detection remains the most critical factor in survival rates. But human eyes, no matter how well-trained, can miss subtle signs that algorithms can spot with mathematical precision. AI is becoming one of oncology's most powerful allies, detecting cancer patterns too subtle for even the most experienced oncologists to see.
            </p>

            <p className="mb-6">
              Medical imaging has been revolutionized by deep learning. Convolutional neural networks — the same technology that powers facial recognition — can analyze medical images with superhuman accuracy. Google's AI system achieved a 94.5% accuracy rate in breast cancer detection, reducing both false positives by 5.7% and false negatives by 9.4% compared to human radiologists (McKinney et al., Nature, 2020).
            </p>

            <p className="mb-6">
              Skin cancer detection through smartphone apps represents another breakthrough. Stanford University developed an AI system that can diagnose skin cancer from smartphone photos as accurately as dermatologists. The algorithm was trained on over 130,000 skin images and can distinguish between benign moles and melanomas in seconds, potentially bringing expert-level screening to anyone with a smartphone (Esteva et al., Nature, 2017).
            </p>

            <p className="mb-6">
              Pathology — the microscopic analysis of tissue samples — is being transformed by computer vision. Traditional pathology requires highly trained specialists to examine tissue slides under microscopes, looking for cellular abnormalities that indicate cancer. AI systems can now analyze these same slides, identifying cancer cells, predicting treatment response, and even detecting genetic mutations from tissue morphology alone.
            </p>

            <p className="mb-6">
              Google's PathAI system can detect prostate cancer in tissue samples with 99% accuracy, while also predicting how aggressive the cancer is likely to be. This information helps doctors choose the most appropriate treatment approach — from active surveillance for slow-growing tumors to aggressive therapy for high-risk cases (Nagpal et al., Nature Medicine, 2019).
            </p>

            <p className="mb-6">
              Liquid biopsies represent the cutting edge of early cancer detection. These blood tests can detect circulating tumor DNA — tiny fragments of genetic material shed by cancers into the bloodstream. Machine learning algorithms analyze these DNA patterns to identify cancer presence, determine cancer type, and even predict which organ the cancer originated from, all from a simple blood draw.
            </p>

            <p className="mb-6">
              GRAIL, a biotechnology company, has developed an AI-powered blood test that can detect over 50 types of cancer, often before symptoms appear. Their machine learning models analyze methylation patterns in circulating DNA to identify cancer signals and predict the tissue of origin with high accuracy. This approach could revolutionize cancer screening, making it as routine as cholesterol testing.
            </p>

            <p className="mb-6">
              Radiomics — the extraction of quantitative features from medical images — is revealing hidden patterns in cancer imaging. AI algorithms can analyze texture, shape, and intensity patterns in CT scans, MRIs, and PET scans to predict treatment response, assess tumor aggressiveness, and monitor treatment effectiveness. These image-based biomarkers can provide insights that aren't visible to human observers.
            </p>

            <p className="mb-6">
              Precision oncology is being enabled by AI analysis of genomic data. Machine learning models can analyze tumor genetics to predict which treatments are most likely to be effective for individual patients. IBM Watson for Oncology and similar systems can process vast amounts of medical literature and patient data to recommend personalized treatment options based on each patient's unique molecular profile.
            </p>

            <p className="mb-6">
              Drug discovery for cancer is being accelerated by AI. Machine learning algorithms can identify promising drug targets, predict how cancer cells will respond to different treatments, and optimize combination therapies. This approach is particularly valuable for rare cancers where traditional clinical trials are difficult to conduct due to small patient populations.
            </p>

            <p className="mb-6">
              Treatment monitoring is another area where AI excels. Algorithms can analyze follow-up scans to detect cancer recurrence earlier than traditional methods. Machine learning models can distinguish between treatment-related changes and cancer regrowth, helping doctors make more informed decisions about ongoing care.
            </p>

            <p className="mb-6">
              The challenges are significant — AI systems must be trained on diverse datasets to avoid bias, validated across different populations, and integrated into existing clinical workflows. Regulatory approval for AI-powered diagnostic tools requires extensive testing and documentation. But the potential impact is enormous: earlier detection, more accurate diagnosis, and personalized treatment for millions of cancer patients worldwide.
            </p>

            <p className="mb-8 font-medium">
              For computer science students passionate about making a difference, cancer research offers the opportunity to directly impact survival rates and quality of life. Every algorithm that detects cancer earlier, every system that predicts treatment response more accurately, every tool that helps oncologists provide better care — these technologies are fighting cancer one pixel, one data point, one patient at a time.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Citations:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>McKinney, S. M., et al. "International evaluation of an AI system for breast cancer screening." Nature, 2020.</li>
                <li>Esteva, A., et al. "Dermatologist-level classification of skin cancer with deep neural networks." Nature, 2017.</li>
                <li>Nagpal, K., et al. "Development and validation of a deep-learning algorithm for improving Gleason scoring of prostate cancer." Nature Medicine, 2019.</li>
                <li>Liu, M. C., et al. "Sensitive and specific multi-cancer detection and localization using methylation signatures in cell-free DNA." Annals of Oncology, 2020.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CancerDetectionAI;
