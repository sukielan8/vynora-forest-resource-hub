
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const AlgorithmicCure = () => {
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
            The Algorithmic Cure: How AI is Redesigning Drug Discovery from Code to Cure
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Friday, May 9th, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              12 min read
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              It used to take a decade and over two billion dollars to bring a new drug to market. For rare diseases, that timeline was even longer — or worse, ignored altogether. But in the age of artificial intelligence, we are beginning to witness a revolution: computational models that can design, test, and optimize new medicines faster, cheaper, and more accurately than ever before. Welcome to the future of pharmacology, where molecules are discovered not just in test tubes, but in terabytes.
            </p>

            <p className="mb-6">
              At the heart of this transformation is deep learning — a class of machine learning algorithms that mimics how the human brain recognizes patterns. In the context of drug discovery, these algorithms analyze vast datasets of chemical structures, biological pathways, protein folding patterns, and clinical trial outcomes to predict which compounds are likely to succeed and which are destined to fail.
            </p>

            <p className="mb-6">
              One of the most game-changing moments in recent years came when DeepMind's AlphaFold cracked the protein folding problem — predicting the 3D structure of a protein from its amino acid sequence with astonishing accuracy (Jumper et al., Nature, 2021). Since proteins are the building blocks of all biological functions — and most drugs target specific proteins — this breakthrough gave scientists a molecular map previously unavailable to them.
            </p>

            <p className="mb-6">
              Now, AI isn't just interpreting proteins — it's generating new drugs. In 2020, the biotechnology company Insilico Medicine used AI to design a novel drug candidate for idiopathic pulmonary fibrosis in just 46 days — a process that normally takes years. The compound was developed entirely through a generative adversarial network (GAN), a type of AI that "imagines" new molecular structures and evaluates their potential effectiveness and safety.
            </p>

            <p className="mb-6">
              Another AI model, developed by Atomwise, screens millions of molecular candidates against disease targets using convolutional neural networks, similar to those used in facial recognition. It has already identified promising drug leads for conditions ranging from Ebola to leukemia (Stokes et al., Cell, 2020).
            </p>

            <p className="mb-6">
              But the implications stretch beyond speed. AI allows for precision medicine — the tailoring of drugs to an individual's genetics, microbiome, or lifestyle. By integrating genomic data with machine learning, researchers can predict how a specific patient might respond to a drug before they ever take it, potentially minimizing side effects and maximizing effectiveness. This is particularly vital in oncology, where personalized cancer treatments based on molecular profiles are becoming the new standard of care.
            </p>

            <p className="mb-6">
              There's also a growing movement to use AI for drug repurposing — identifying new uses for old medications. During the COVID-19 pandemic, researchers leveraged AI to scan thousands of existing drugs and quickly identify candidates for treatment. One study found that the AI platform BenevolentAI helped identify baricitinib, originally used for rheumatoid arthritis, as a potential COVID-19 treatment — later validated in clinical trials and added to treatment guidelines (Stebbing et al., The Lancet Infectious Diseases, 2020).
            </p>

            <p className="mb-6">
              Despite these advances, challenges remain. AI models are only as good as the data they're trained on. Biases in clinical trial data, gaps in public datasets, or poor-quality molecular data can lead to misleading predictions. Transparency, peer review, and interdisciplinary collaboration are essential to ensuring that these technologies benefit everyone — not just a few.
            </p>

            <p className="mb-6">
              But there's no denying the shift underway. For students passionate about both medicine and computer science, this field offers a chance to design the cures of the future using logic, data, and a sense of mission. Where chemists once worked with flasks and compounds, we now see coders working with simulations and sequences.
            </p>

            <p className="mb-8 font-medium">
              The lab coat is still here — but beside it sits a keyboard.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Citations:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Jumper, J., et al. "Highly accurate protein structure prediction with AlphaFold." Nature, 2021.</li>
                <li>Stokes, J. M., et al. "A deep learning approach to antibiotic discovery." Cell, 2020.</li>
                <li>Stebbing, J., et al. "Mechanism of baricitinib supports artificial intelligence-predicted testing in COVID-19 patients." The Lancet Infectious Diseases, 2020.</li>
                <li>Zhavoronkov, A., et al. "Deep learning enables rapid identification of potent DDR1 kinase inhibitors." Nature Biotechnology, 2019.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AlgorithmicCure;
