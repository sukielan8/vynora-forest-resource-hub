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
  
  // Article translations
  'article.backToArticles': {
    en: 'Back to Articles',
    es: 'Volver a Artículos',
    fr: 'Retour aux Articles'
  },
  'article.citations': {
    en: 'Citations:',
    es: 'Citas:',
    fr: 'Citations:'
  },
  
  // Algorithmic Cure Article
  'article.algorithmicCure.title': {
    en: 'The Algorithmic Cure: How AI is Redesigning Drug Discovery from Code to Cure',
    es: 'La Cura Algorítmica: Cómo la IA está Rediseñando el Descubrimiento de Medicamentos del Código a la Cura',
    fr: 'Le Remède Algorithmique: Comment l\'IA Redéfinit la Découverte de Médicaments du Code au Remède'
  },
  'article.algorithmicCure.date': {
    en: 'Friday, May 9th, 2025',
    es: 'Viernes, 9 de Mayo, 2025',
    fr: 'Vendredi, 9 Mai 2025'
  },
  'article.algorithmicCure.readTime': {
    en: '12 min read',
    es: '12 min de lectura',
    fr: '12 min de lecture'
  },
  
  // Remote Surgery Article
  'article.remoteSurgery.title': {
    en: 'Scalpel, Stream, Success: How Robotics and Remote Surgery Are Reprogramming the Operating Room',
    es: 'Bisturí, Transmisión, Éxito: Cómo la Robótica y la Cirugía Remota están Reprogramando el Quirófano',
    fr: 'Scalpel, Flux, Succès: Comment la Robotique et la Chirurgie à Distance Reprogramment la Salle d\'Opération'
  },
  'article.remoteSurgery.date': {
    en: 'Friday, May 23rd, 2025',
    es: 'Viernes, 23 de Mayo, 2025',
    fr: 'Vendredi, 23 Mai 2025'
  },
  'article.remoteSurgery.readTime': {
    en: '14 min read',
    es: '14 min de lectura',
    fr: '14 min de lecture'
  },
  
  // Wearable Biosensors Article
  'article.wearableBiosensors.title': {
    en: 'The Pulse of the Future: How Wearable Biosensors Are Rewiring Preventive Medicine',
    es: 'El Pulso del Futuro: Cómo los Biosensores Portátiles están Reconfigurando la Medicina Preventiva',
    fr: 'Le Pouls du Futur: Comment les Biocapteurs Portables Reconfigurent la Médecine Préventive'
  },
  'article.wearableBiosensors.date': {
    en: 'Friday, June 6th, 2025',
    es: 'Viernes, 6 de Junio, 2025',
    fr: 'Vendredi, 6 Juin 2025'
  },
  'article.wearableBiosensors.readTime': {
    en: '13 min read',
    es: '13 min de lectura',
    fr: '13 min de lecture'
  },
  
  // Mental Health NLP Article
  'article.mentalHealthNLP.title': {
    en: 'Decoding the Mind: How Algorithms Are Listening to Save Lives',
    es: 'Decodificando la Mente: Cómo los Algoritmos Están Escuchando para Salvar Vidas',
    fr: 'Décoder l\'Esprit: Comment les Algorithmes Écoutent pour Sauver des Vies'
  },
  'article.mentalHealthNLP.date': {
    en: 'Friday, April 25th, 2025',
    es: 'Viernes, 25 de Abril, 2025',
    fr: 'Vendredi, 25 Avril 2025'
  },
  'article.mentalHealthNLP.readTime': {
    en: '9 min read',
    es: '9 min de lectura',
    fr: '9 min de lecture'
  },
  
  // Smart Prosthetics Article
  'article.smartProsthetics.title': {
    en: 'Rebuilding the Human Body: The Rise of Smart Prosthetics and Code-Driven Rehabilitation',
    es: 'Reconstruyendo el Cuerpo Humano: El Auge de las Prótesis Inteligentes y la Rehabilitación Dirigida por Código',
    fr: 'Reconstruire le Corps Humain: L\'Essor des Prothèses Intelligentes et de la Réhabilitation Pilotée par Code'
  },
  'article.smartProsthetics.date': {
    en: 'Friday, April 11th, 2025',
    es: 'Viernes, 11 de Abril, 2025',
    fr: 'Vendredi, 11 Avril 2025'
  },
  'article.smartProsthetics.readTime': {
    en: '12 min read',
    es: '12 min de lectura',
    fr: '12 min de lecture'
  },
  
  // Outbreak Prediction Article
  'article.outbreakPrediction.title': {
    en: 'Digital Foresight: How Code is Catching Outbreaks Before They Happen',
    es: 'Previsión Digital: Cómo el Código está Detectando Brotes Antes de que Ocurran',
    fr: 'Prévision Numérique: Comment le Code Détecte les Épidémies Avant qu\'Elles n\'Arrivent'
  },
  'article.outbreakPrediction.date': {
    en: 'Friday, March 28th, 2025',
    es: 'Viernes, 28 de Marzo, 2025',
    fr: 'Vendredi, 28 Mars 2025'
  },
  'article.outbreakPrediction.readTime': {
    en: '8 min read',
    es: '8 min de lectura',
    fr: '8 min de lecture'
  },
  
  // AI Surgery Article
  'article.aiSurgery.title': {
    en: 'Code in the Operating Room: How Algorithms Are Reshaping Modern Surgery',
    es: 'Código en el Quirófano: Cómo los Algoritmos están Remodelando la Cirugía Moderna',
    fr: 'Code dans la Salle d\'Opération: Comment les Algorithmes Remodèlent la Chirurgie Moderne'
  },
  'article.aiSurgery.date': {
    en: 'Friday, March 14th, 2025',
    es: 'Viernes, 14 de Marzo, 2025',
    fr: 'Vendredi, 14 Mars 2025'
  },
  'article.aiSurgery.readTime': {
    en: '10 min read',
    es: '10 min de lectura',
    fr: '10 min de lecture'
  },
  
  // Alzheimers AI Article
  'article.alzheimersAI.title': {
    en: 'Decoding the Mind: How Algorithms Are Advancing the Fight Against Alzheimer\'s',
    es: 'Decodificando la Mente: Cómo los Algoritmos están Avanzando la Lucha contra el Alzheimer',
    fr: 'Décoder l\'Esprit: Comment les Algorithmes Font Progresser la Lutte contre Alzheimer'
  },
  'article.alzheimersAI.date': {
    en: 'Friday, February 28th, 2025',
    es: 'Viernes, 28 de Febrero, 2025',
    fr: 'Vendredi, 28 Février 2025'
  },
  'article.alzheimersAI.readTime': {
    en: '11 min read',
    es: '11 min de lectura',
    fr: '11 min de lecture'
  },
  
  // Cardiovascular AI Article
  'article.cardiovascularAI.title': {
    en: 'Rewriting the Heartbeat: How Code Is Saving Lives in Cardiovascular Medicine',
    es: 'Reescribiendo el Latido: Cómo el Código está Salvando Vidas en Medicina Cardiovascular',
    fr: 'Réécrire le Battement de Cœur: Comment le Code Sauve des Vies en Médecine Cardiovasculaire'
  },
  'article.cardiovascularAI.date': {
    en: 'Friday, February 14th, 2025',
    es: 'Viernes, 14 de Febrero, 2025',
    fr: 'Vendredi, 14 Février 2025'
  },
  'article.cardiovascularAI.readTime': {
    en: '9 min read',
    es: '9 min de lectura',
    fr: '9 min de lecture'
  },
  
  // Cancer Detection AI Article
  'article.cancerDetectionAI.title': {
    en: 'Precision, Not Guesswork: How Algorithms Are Revolutionizing Cancer Detection',
    es: 'Precisión, No Conjeturas: Cómo los Algoritmos están Revolucionando la Detección del Cáncer',
    fr: 'Précision, Pas de Conjecture: Comment les Algorithmes Révolutionnent la Détection du Cancer'
  },
  'article.cancerDetectionAI.date': {
    en: 'Friday, January 31st, 2025',
    es: 'Viernes, 31 de Enero, 2025',
    fr: 'Vendredi, 31 Janvier 2025'
  },
  'article.cancerDetectionAI.readTime': {
    en: '13 min read',
    es: '13 min de lectura',
    fr: '13 min de lecture'
  },
  
  // Mental Health AI Article
  'article.mentalHealthAI.title': {
    en: 'Signal in the Silence: How Code is Cracking the Mental Health Crisis',
    es: 'Señal en el Silencio: Cómo el Código está Resolviendo la Crisis de Salud Mental',
    fr: 'Signal dans le Silence: Comment le Code Résout la Crise de Santé Mentale'
  },
  'article.mentalHealthAI.date': {
    en: 'Friday, January 17th, 2025',
    es: 'Viernes, 17 de Enero, 2025',
    fr: 'Vendredi, 17 Janvier 2025'
  },
  'article.mentalHealthAI.readTime': {
    en: '11 min read',
    es: '11 min de lectura',
    fr: '11 min de lecture'
  },
  
  // Heart Attack Prediction Article
  'article.heartAttackPrediction.title': {
    en: 'Encoded Pulse: How AI and Algorithms Are Quietly Preventing the Next Heart Attack',
    es: 'Pulso Codificado: Cómo la IA y los Algoritmos están Previniendo Silenciosamente el Próximo Infarto',
    fr: 'Pouls Encodé: Comment l\'IA et les Algorithmes Préviennent Silencieusement la Prochaine Crise Cardiaque'
  },
  'article.heartAttackPrediction.date': {
    en: 'Friday, January 3rd, 2025',
    es: 'Viernes, 3 de Enero, 2025',
    fr: 'Vendredi, 3 Janvier 2025'
  },
  'article.heartAttackPrediction.readTime': {
    en: '10 min read',
    es: '10 min de lectura',
    fr: '10 min de lecture'
  },
  
  // CS Redefining Medicine Article
  'article.csRedefiningMedicine.title': {
    en: 'Reprogramming Healthcare: How Computer Science is Quietly Redefining Medicine',
    es: 'Reprogramando la Salud: Cómo la Informática está Redefiniendo Silenciosamente la Medicina',
    fr: 'Reprogrammer les Soins de Santé: Comment l\'Informatique Redéfinit Silencieusement la Médecine'
  },
  'article.csRedefiningMedicine.date': {
    en: 'Friday, December 20th, 2024',
    es: 'Viernes, 20 de Diciembre, 2024',
    fr: 'Vendredi, 20 Décembre 2024'
  },
  'article.csRedefiningMedicine.readTime': {
    en: '12 min read',
    es: '12 min de lectura',
    fr: '12 min de lecture'
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