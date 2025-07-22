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
    en: 'Articles',
    es: 'Artículos',
    fr: 'Articles'
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
  'home.impact.title': {
    en: 'Our Growing Impact',
    es: 'Nuestro Impacto Creciente',
    fr: 'Notre Impact Croissant'
  },
  'home.impact.visitors': {
    en: 'Website Visitors',
    es: 'Visitantes del Sitio Web',
    fr: 'Visiteurs du Site Web'
  },
  'home.impact.projects': {
    en: 'Projects Launched',
    es: 'Proyectos Lanzados',
    fr: 'Projets Lancés'
  },
  'home.impact.reads': {
    en: 'Blog Reads',
    es: 'Lecturas del Blog',
    fr: 'Lectures du Blog'
  },
  'home.impact.attendees': {
    en: 'Workshop Attendees',
    es: 'Asistentes al Taller',
    fr: 'Participants à l\'Atelier'
  },
  'home.impact.downloads': {
    en: 'Tool Downloads',
    es: 'Descargas de Herramientas',
    fr: 'Téléchargements d\'Outils'
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
  'articles.page.title': {
    en: 'Articles & Resources',
    es: 'Artículos y Recursos',
    fr: 'Articles et Ressources'
  },
  'articles.page.description': {
    en: 'Explore our comprehensive collection of articles covering the intersection of computer science and healthcare. From technical tutorials to research insights.',
    es: 'Explora nuestra colección integral de artículos que cubren la intersección de la informática y la salud. Desde tutoriales técnicos hasta perspectivas de investigación.',
    fr: 'Explorez notre collection complète d\'articles couvrant l\'intersection de l\'informatique et de la santé. Des tutoriels techniques aux perspectives de recherche.'
  },
  'articles.featured.title': {
    en: 'Featured Projects',
    es: 'Proyectos Destacados',
    fr: 'Projets en Vedette'
  },
  'articles.loadMore': {
    en: 'Load More Articles',
    es: 'Cargar Más Artículos',
    fr: 'Charger Plus d\'Articles'
  },
  'articles.readArticle': {
    en: 'Read Article',
    es: 'Leer Artículo',
    fr: 'Lire l\'Article'
  },
  'articles.backToArticles': {
    en: 'Back to Articles',
    es: 'Volver a Artículos',
    fr: 'Retour aux Articles'
  },
  'articles.minRead': {
    en: 'min read',
    es: 'min de lectura',
    fr: 'min de lecture'
  },
  
  // About page
  'about.title': {
    en: 'About Vynorra',
    es: 'Acerca de Vynorra',
    fr: 'À propos de Vynorra'
  },
  'about.subtitle': {
    en: 'Where anonymous innovation meets healthcare transformation',
    es: 'Donde la innovación anónima se encuentra con la transformación sanitaria',
    fr: 'Où l\'innovation anonyme rencontre la transformation des soins de santé'
  },
  'about.whoWeAre.title': {
    en: 'Who We Are',
    es: 'Quiénes Somos',
    fr: 'Qui Nous Sommes'
  },
  'about.different.title': {
    en: 'What Makes Us Different',
    es: 'Lo Que Nos Hace Diferentes',
    fr: 'Ce Qui Nous Rend Différents'
  },
  'about.values.title': {
    en: 'Our Values',
    es: 'Nuestros Valores',
    fr: 'Nos Valeurs'
  },
  'about.faq.title': {
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes',
    fr: 'Questions Fréquemment Posées'
  },
  
  // Contact page
  'contact.title': {
    en: 'Get In Touch',
    es: 'Ponte en Contacto',
    fr: 'Entrer en Contact'
  },
  'contact.subtitle': {
    en: 'Have a question or idea? Want to collaborate? We\'d love to hear from you. Drop us a message and we\'ll get back to you soon.',
    es: '¿Tienes una pregunta o idea? ¿Quieres colaborar? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos pronto.',
    fr: 'Vous avez une question ou une idée ? Vous voulez collaborer ? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons bientôt.'
  },
  'contact.conversation.title': {
    en: 'Let\'s Start a Conversation',
    es: 'Comencemos una Conversación',
    fr: 'Commençons une Conversation'
  },
  'contact.form.title': {
    en: 'Send Us a Message',
    es: 'Envíanos un Mensaje',
    fr: 'Envoyez-nous un Message'
  },
  'contact.form.name': {
    en: 'Full Name',
    es: 'Nombre Completo',
    fr: 'Nom Complet'
  },
  'contact.form.email': {
    en: 'Email Address',
    es: 'Dirección de Email',
    fr: 'Adresse Email'
  },
  'contact.form.subject': {
    en: 'Subject',
    es: 'Asunto',
    fr: 'Sujet'
  },
  'contact.form.message': {
    en: 'Message',
    es: 'Mensaje',
    fr: 'Message'
  },
  'contact.form.send': {
    en: 'Send Message',
    es: 'Enviar Mensaje',
    fr: 'Envoyer le Message'
  },
  'contact.form.namePlaceholder': {
    en: 'Your name',
    es: 'Tu nombre',
    fr: 'Votre nom'
  },
  'contact.form.emailPlaceholder': {
    en: 'your.email@example.com',
    es: 'tu.email@ejemplo.com',
    fr: 'votre.email@exemple.com'
  },
  'contact.form.messagePlaceholder': {
    en: 'Tell us about your question, idea, or how we can help...',
    es: 'Cuéntanos sobre tu pregunta, idea, o cómo podemos ayudar...',
    fr: 'Parlez-nous de votre question, idée, ou comment nous pouvons aider...'
  },
  'contact.privacy.title': {
    en: 'Our Commitment to Privacy',
    es: 'Nuestro Compromiso con la Privacidad',
    fr: 'Notre Engagement envers la Confidentialité'
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
  'common.all': {
    en: 'All',
    es: 'Todos',
    fr: 'Tous'
  },
  'common.settings': {
    en: 'Settings',
    es: 'Configuración',
    fr: 'Paramètres'
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
  },

  // Project status
  'project.comingSoon': {
    en: 'Coming Soon',
    es: 'Próximamente',
    fr: 'Bientôt Disponible'
  },
  'project.inProgress': {
    en: 'In Progress',
    es: 'En Progreso',
    fr: 'En Cours'
  },
  'project.planning': {
    en: 'Planning',
    es: 'Planificación',
    fr: 'Planification'
  },

  // Categories
  'category.aiHealthcare': {
    en: 'AI in Healthcare',
    es: 'IA en Salud',
    fr: 'IA en Santé'
  },
  'category.csPremed': {
    en: 'CS for Pre-Med',
    es: 'Informática para Pre-Med',
    fr: 'Informatique pour Pré-Med'
  },
  'category.biotechInnovations': {
    en: 'Biotech Innovations',
    es: 'Innovaciones Biotecnológicas',
    fr: 'Innovations Biotechnologiques'
  },
  'category.researchTools': {
    en: 'Research Tools',
    es: 'Herramientas de Investigación',
    fr: 'Outils de Recherche'
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