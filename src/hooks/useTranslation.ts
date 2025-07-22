import { useApp } from '@/contexts/AppContext';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil'
  },
  'nav.resources': {
    en: 'Resources',
    es: 'Recursos',
    fr: 'Ressources'
  },
  'nav.about': {
    en: 'About',
    es: 'Acerca de',
    fr: 'À propos'
  },
  'nav.contact': {
    en: 'Contact',
    es: 'Contacto',
    fr: 'Contact'
  },
  
  // Home page
  'home.title': {
    en: 'Vynorra',
    es: 'Vynorra',
    fr: 'Vynorra'
  },
  'home.subtitle': {
    en: 'Where Computer Science Meets Healthcare',
    es: 'Donde la Informática se Encuentra con la Salud',
    fr: 'Où l\'Informatique Rencontre la Santé'
  },
  'home.description': {
    en: 'Discover comprehensive resources for the intersection of technology and medicine. From AI applications to pre-med programming guides.',
    es: 'Descubre recursos integrales para la intersección de tecnología y medicina. Desde aplicaciones de IA hasta guías de programación pre-médica.',
    fr: 'Découvrez des ressources complètes pour l\'intersection de la technologie et de la médecine. Des applications d\'IA aux guides de programmation pré-médicale.'
  },
  'home.explore': {
    en: 'Explore Resources',
    es: 'Explorar Recursos',
    fr: 'Explorer les Ressources'
  },
  'home.learn': {
    en: 'Learn About Vynorra',
    es: 'Conoce Vynorra',
    fr: 'En savoir plus sur Vynorra'
  },
  'home.mission.title': {
    en: 'Our Core Mission',
    es: 'Nuestra Misión Principal',
    fr: 'Notre Mission Principale'
  },
  'home.mission.description': {
    en: 'To use technology and creativity to improve access to health knowledge, spark innovation, and empower the next generation of students to shape the future of care.',
    es: 'Usar tecnología y creatividad para mejorar el acceso al conocimiento de salud, generar innovación y empoderar a la próxima generación de estudiantes para dar forma al futuro del cuidado.',
    fr: 'Utiliser la technologie et la créativité pour améliorer l\'accès aux connaissances en santé, stimuler l\'innovation et autonomiser la prochaine génération d\'étudiants pour façonner l\'avenir des soins.'
  },
  
  // Featured Resources
  'resources.title': {
    en: 'Featured Resources',
    es: 'Recursos Destacados',
    fr: 'Ressources en Vedette'
  },
  'resources.description': {
    en: 'Explore our curated collection of resources at the intersection of computer science and healthcare.',
    es: 'Explora nuestra colección curada de recursos en la intersección de la informática y la salud.',
    fr: 'Explorez notre collection organisée de ressources à l\'intersection de l\'informatique et de la santé.'
  },
  'resources.ai.title': {
    en: 'AI in Healthcare',
    es: 'IA en Salud',
    fr: 'IA en Santé'
  },
  'resources.ai.description': {
    en: 'Explore cutting-edge applications of artificial intelligence in medical diagnosis and treatment.',
    es: 'Explora aplicaciones de vanguardia de inteligencia artificial en diagnóstico médico y tratamiento.',
    fr: 'Explorez les applications de pointe de l\'intelligence artificielle dans le diagnostic médical et le traitement.'
  },
  'resources.premed.title': {
    en: 'CS for Pre-Med',
    es: 'Informática para Pre-Med',
    fr: 'Informatique pour Pré-Med'
  },
  'resources.premed.description': {
    en: 'Bridge computer science and medicine with our comprehensive academic guidance.',
    es: 'Conecta la informática y la medicina con nuestra guía académica integral.',
    fr: 'Reliez l\'informatique et la médecine avec nos conseils académiques complets.'
  },
  'resources.biotech.title': {
    en: 'Biotech Innovations',
    es: 'Innovaciones Biotecnológicas',
    fr: 'Innovations Biotechnologiques'
  },
  'resources.biotech.description': {
    en: 'Stay updated on the latest breakthroughs in biotechnology and computational biology.',
    es: 'Mantente actualizado sobre los últimos avances en biotecnología y biología computacional.',
    fr: 'Restez informé des dernières percées en biotechnologie et biologie computationnelle.'
  },
  'resources.tools.title': {
    en: 'Research Tools',
    es: 'Herramientas de Investigación',
    fr: 'Outils de Recherche'
  },
  'resources.tools.description': {
    en: 'Access essential tools and methodologies for interdisciplinary research.',
    es: 'Accede a herramientas esenciales y metodologías para investigación interdisciplinaria.',
    fr: 'Accédez aux outils essentiels et aux méthodologies pour la recherche interdisciplinaire.'
  },
  
  // Articles
  'articles.title': {
    en: 'Latest Articles',
    es: 'Últimos Artículos',
    fr: 'Derniers Articles'
  },
  'articles.description': {
    en: 'Stay updated with the latest insights, research, and developments in healthcare technology.',
    es: 'Mantente actualizado con las últimas perspectivas, investigación y desarrollos en tecnología de salud.',
    fr: 'Restez informé des dernières perspectives, recherches et développements en technologie de santé.'
  },
  'articles.viewAll': {
    en: 'View All Articles',
    es: 'Ver Todos los Artículos',
    fr: 'Voir Tous les Articles'
  },
  
  // Common
  'common.explore': {
    en: 'Explore',
    es: 'Explorar',
    fr: 'Explorer'
  },
  'common.readMore': {
    en: 'Read More',
    es: 'Leer Más',
    fr: 'Lire Plus'
  },
  'common.subscribe': {
    en: 'Subscribe',
    es: 'Suscribirse',
    fr: 'S\'abonner'
  },
  'common.email': {
    en: 'Enter your email',
    es: 'Ingresa tu email',
    fr: 'Entrez votre email'
  },
  
  // Stay Connected
  'connect.title': {
    en: 'Stay Connected',
    es: 'Mantente Conectado',
    fr: 'Restez Connecté'
  },
  'connect.description': {
    en: 'Get updates on our latest projects and insights. No spam. Unsubscribe anytime.',
    es: 'Recibe actualizaciones sobre nuestros últimos proyectos e ideas. Sin spam. Cancela en cualquier momento.',
    fr: 'Recevez des mises à jour sur nos derniers projets et idées. Pas de spam. Désabonnez-vous à tout moment.'
  }
};

export const useTranslation = () => {
  const { language } = useApp();

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  return { t };
};