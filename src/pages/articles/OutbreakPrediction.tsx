
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const OutbreakPrediction = () => {
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
            Digital Foresight: How Code is Catching Outbreaks Before They Happen
          </h1>
          <div className="flex items-center gap-4 text-secondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Friday, March 28th, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              8 min read
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Nine days before the first official case of COVID-19 was reported in the United States, an algorithm was already tracking unusual respiratory illness patterns in emergency departments across the country. By analyzing millions of electronic health records, pharmacy purchases, and even social media posts, AI systems had detected the early signals of what would become a global pandemic — sometimes before a single diagnosis was made.
            </p>

            <p className="mb-6">
              This is the promise of digital epidemiology: using computer science to detect, track, and prevent disease outbreaks faster than traditional public health surveillance ever could. In an interconnected world where diseases can spread across continents in hours, algorithms have become our early warning system — digital sentinels watching for the first signs of trouble.
            </p>

            <p className="mb-6">
              Traditional disease surveillance relies on healthcare providers reporting cases to public health authorities — a process that can take days or weeks. But digital surveillance systems can detect outbreaks in real time by analyzing data streams that reflect population health: emergency department visits, medication sales, school absenteeism, internet searches, and social media posts.
            </p>

            <p className="mb-6">
              Google Flu Trends was one of the earliest examples, using search query patterns to predict influenza outbreaks up to two weeks before traditional surveillance systems (Ginsberg et al., Nature, 2009). While it had limitations, it proved that digital data could provide valuable insights into disease patterns at population scale.
            </p>

            <p className="mb-6">
              Modern systems are far more sophisticated. HealthMap, developed at Boston Children's Hospital, continuously monitors thousands of online sources — news reports, official health communications, social media, and local media — using natural language processing to identify and map disease outbreaks in real time. During the 2014 Ebola outbreak, HealthMap detected the first cases nine days before the World Health Organization's official announcement (Brownstein et al., PLoS Medicine, 2008).
            </p>

            <p className="mb-6">
              Machine learning models are particularly powerful for outbreak prediction because they can identify subtle patterns across multiple data sources that human analysts might miss. These algorithms can detect when emergency room visits for respiratory symptoms spike above normal levels, when pharmacy sales of fever reducers increase in specific geographic areas, or when social media mentions of illness symptoms cluster in concerning ways.
            </p>

            <p className="mb-6">
              BlueDot, a Canadian AI company, famously identified the COVID-19 outbreak on December 31, 2019 — the same day Chinese authorities informed the World Health Organization. Their system automatically scans news reports, official health statements, and airline ticketing data to track disease spread patterns and predict where outbreaks might occur next (Khan et al., The Lancet Digital Health, 2020).
            </p>

            <p className="mb-6">
              Social media platforms have become unexpected but valuable sources of epidemiological data. Researchers analyze Twitter posts, Facebook check-ins, and even Yelp reviews to track disease spread. During flu season, people often post about feeling sick before they visit a doctor, providing an early signal that algorithms can detect and map geographically.
            </p>

            <p className="mb-6">
              Mobile phone data adds another layer of insight. Anonymized location data can show how people move during outbreaks, helping predict where diseases might spread next. During COVID-19, mobility data helped public health officials understand the effectiveness of lockdowns and predict which areas might see case surges based on movement patterns.
            </p>

            <p className="mb-6">
              The technology is also being used to predict antimicrobial resistance patterns. By analyzing prescription data, laboratory results, and hospital records, machine learning models can identify where drug-resistant infections are likely to emerge, helping hospitals prepare and adjust treatment protocols proactively.
            </p>

            <p className="mb-6">
              One of the most promising applications is in vector-borne disease prediction. Algorithms that combine weather data, satellite imagery, and historical disease patterns can predict where mosquito-borne diseases like dengue, Zika, and malaria are likely to emerge. This gives public health authorities time to implement vector control measures before outbreaks occur.
            </p>

            <p className="mb-6">
              Challenges remain, including data privacy, algorithmic bias, and the need to validate digital signals with traditional epidemiological methods. False alarms can cause panic or lead to unnecessary resource allocation. But when implemented thoughtfully, these systems provide crucial intelligence that can save lives and prevent pandemics.
            </p>

            <p className="mb-8 font-medium">
              For computer science students interested in public health, this field offers the opportunity to build systems that protect entire populations. Every algorithm that detects an outbreak earlier, every model that predicts disease spread more accurately, every system that connects health data more effectively — these are the tools that help us stay one step ahead of the next pandemic.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Citations:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ginsberg, J., et al. "Detecting influenza epidemics using search engine query data." Nature, 2009.</li>
                <li>Brownstein, J. S., et al. "Digital disease detection — Harnessing the Web for public health surveillance." New England Journal of Medicine, 2008.</li>
                <li>Khan, K., et al. "The use of digital technologies for outbreak detection and response." The Lancet Digital Health, 2020.</li>
                <li>Salathé, M., et al. "Digital epidemiology." PLoS Computational Biology, 2012.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OutbreakPrediction;
