const whatsappNumber = '919035627036'
const whatsappMessage = "Hi White Narrative, I'd like to talk about a project."

export const site = {
  name: 'White Narrative',
  tagline: 'Stories Framed Forever',
  email: 'hello@whitenarrative.studio',
  phone: '+91 90356 27036',
  whatsapp: whatsappNumber,
  whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  location: 'Bangalore, India',
  socials: [
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    { name: 'Vimeo', icon: 'vimeo', href: 'https://vimeo.com' },
  ],
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'The Challenge', to: '/#challenge' },
  { label: 'What We Do', to: '/#services' },
  { label: 'Our Journey', to: '/#journey' },
  { label: 'Meet The Team', to: '/#team' },
  { label: 'Our Work', to: '/work' },
]

export const hero = {
  kicker: 'A Film Production Studio · Bangalore',
  titleLines: ['Every film', 'begins with'],
  titleAccent: 'one story.',
  tagline: 'Stories Framed Forever',
  copy: "Whether it's a feature film, short film, web series, advertisement or music video — White Narrative brings ideas to life, from concept to release.",
  formats: ['Feature Films', 'Short Films', 'Web Series', 'Corporate Films', 'Ad Films', 'Music Videos'],
  ctaPrimary: 'Chat On WhatsApp',
  ctaSecondary: 'See Our Work',
}

export const challenge = {
  id: 'challenge',
  eyebrow: 'The Challenge',
  title: ['Filmmaking is hard.', 'We make it easier.'],
  sub: 'From the first spark of an idea to the final release, countless moving parts can turn your vision into stress. We bring clarity, structure and creativity to every step.',
  items: [
    {
      icon: 'puzzle',
      title: 'Too Many Moving Parts',
      copy: 'Actors, crew, locations, equipment and schedules — coordination alone can become overwhelming.',
    },
    {
      icon: 'rupee',
      title: 'Budget Limitations',
      copy: 'Every rupee has to count. Quality storytelling without overshooting what you planned.',
    },
    {
      icon: 'clock',
      title: 'Delays & Uncertainty',
      copy: 'Poor planning quietly turns into expensive setbacks and missed release windows.',
    },
    {
      icon: 'bulb',
      title: 'Creative Direction',
      copy: 'Finding the right story voice — and keeping the vision consistent through production.',
    },
    {
      icon: 'megaphone',
      title: 'Reaching An Audience',
      copy: 'Finishing a film is only half the journey. The real test is helping it find its audience.',
    },
  ],
  resolution: 'We handle the chaos. You tell the story.',
}

export const journey = {
  id: 'journey',
  eyebrow: 'Our Journey Together',
  title: ['From first spark', 'to final frame.'],
  sub: 'Every production moves through six chapters. We stand beside you in all of them.',
  stages: [
    {
      num: '1',
      icon: 'bulb',
      title: 'A Story Is Born',
      copy: 'Every film begins as a thought. We help transform raw ideas into productions audiences remember.',
      chips: ['Concept Development', 'Script Consultation', 'Creative Planning', 'Mood Boards'],
    },
    {
      num: '2',
      icon: 'pen',
      title: 'Ideas Need Structure',
      copy: 'A great story needs the right foundation. We shape ideas into powerful narratives and solid plans.',
      chips: ['Story Development', 'Screenplay Writing', 'Research & References', 'Pre-Production Planning'],
    },
    {
      num: '3',
      icon: 'users',
      title: 'Stories Need People',
      copy: 'The right people bring your story to life. We build the perfect cast and crew for your vision.',
      chips: ['Casting', 'Crew Selection', 'Location Scouting', 'Production Design', 'Costume Planning'],
    },
    {
      num: '4',
      icon: 'clapper',
      title: 'Lights. Camera. Action.',
      copy: 'Where preparation meets performance. Disciplined sets, creative freedom, and every frame with intent.',
      chips: ['Direction', 'Cinematography', 'Lighting', 'Art Direction', 'Sound Recording'],
    },
    {
      num: '5',
      icon: 'monitor',
      title: 'Where Stories Come Alive',
      copy: 'The edit room is where rhythm, colour and sound turn footage into a cinematic experience.',
      chips: ['Editing', 'Color Grading', 'VFX', 'Sound Design', 'Music & Mix', 'DI & Mastering'],
    },
    {
      num: '6',
      icon: 'megaphone',
      title: 'Every Story Deserves An Audience',
      copy: 'We take your film beyond completion — into festivals, platforms, theatres and the world.',
      chips: ['Trailer Editing', 'Poster Design', 'Festival Strategy', 'Digital Campaigns', 'Distribution Support'],
    },
  ],
}

export const services = {
  id: 'services',
  eyebrow: 'What We Do',
  title: ['End-to-end filmmaking,', 'for every story.'],
  sub: 'Six formats, one promise — stories crafted with intent and finished to release standard.',
  items: [
    {
      icon: 'film',
      title: 'Feature Films',
      copy: 'From development to theatrical-ready production — stories built to leave a lasting impact.',
    },
    {
      icon: 'clapper',
      title: 'Short Films',
      copy: 'Bold, festival-ready films that make a powerful statement in a handful of minutes.',
    },
    {
      icon: 'tv',
      title: 'Web Series',
      copy: 'Episodic storytelling that hooks audiences from the cold open to the season finale.',
    },
    {
      icon: 'briefcase',
      title: 'Corporate Films',
      copy: "Your brand's story told with purpose, clarity and cinematic craft.",
    },
    {
      icon: 'spark',
      title: 'Ad Films',
      copy: 'Creative campaigns that grab attention in seconds — and drive real results.',
    },
    {
      icon: 'music',
      title: 'Music Videos',
      copy: 'Stunning visual experiences that elevate the music and stay with the listener.',
    },
  ],
}

export const why = {
  id: 'why',
  eyebrow: 'Why White Narrative',
  title: ['A partner for the', 'whole journey.'],
  items: [
    {
      icon: 'star',
      title: 'Creative Excellence',
      copy: 'A story-first approach with high production value in every single frame.',
    },
    {
      icon: 'network',
      title: 'Industry Network',
      copy: 'A strong network of talent, studios, technicians and industry partners.',
    },
    {
      icon: 'shield',
      title: 'Transparent Execution',
      copy: 'Clear communication, honest processes and on-time delivery — no surprises.',
    },
    {
      icon: 'infinity',
      title: 'End-To-End Partnership',
      copy: 'One long-term production partner for your entire filmmaking journey.',
    },
  ],
}

export const stats = [
  { icon: 'reel', value: 50, suffix: '+', label: 'Projects Completed' },
  { icon: 'smile', value: 25, suffix: '+', label: 'Happy Clients' },
]

export const workCategories = [
  'Feature Film',
  'Short Film',
  'Web Series',
  'Corporate Film',
  'Ad Film',
  'Music Video',
]

export const work = {
  id: 'work',
  eyebrow: 'Our Work',
  title: ['Stories that speak', 'for themselves.'],
  sub: 'A glimpse of the journeys we have framed — every project a different challenge, every frame earned.',
  items: [
    {
      title: 'Beyond The Silence',
      category: 'Feature Film',
      year: '2025',
      synopsis:
        'A father-daughter drama shot across 40 days in coastal Karnataka — developed with us from a two-page idea.',
      whatWeDid: 'Story development, full production and post-production, and festival strategy.',
    },
    {
      title: 'The Last Train',
      category: 'Short Film',
      year: '2025',
      synopsis: 'A single-location thriller crafted for the festival circuit — 20+ official selections and counting.',
      whatWeDid: 'Concept development, production, edit and festival distribution support.',
    },
    {
      title: 'Fault Lines',
      category: 'Web Series',
      year: '2024',
      synopsis: 'Six-episode ensemble drama — casting, production and post handled end-to-end by our team.',
      whatWeDid: 'Casting, production and post-production across all six episodes.',
    },
    {
      title: 'Inspire',
      category: 'Corporate Film',
      year: '2024',
      synopsis: 'A founder-story brand film that turned an internal milestone into a public moment.',
      whatWeDid: 'Script, direction, production and final edit.',
    },
    {
      title: 'Ignite',
      category: 'Ad Film',
      year: '2024',
      synopsis: 'A 40-second launch campaign, from script to broadcast master in three weeks.',
      whatWeDid: 'Concept, production and broadcast-ready delivery.',
    },
    {
      title: 'Chase The Light',
      category: 'Music Video',
      year: '2023',
      synopsis: 'A one-night neon chase through the city — planned to the minute, shot before sunrise.',
      whatWeDid: 'Concept, direction, production and colour grade.',
    },
  ],
}

export const team = {
  id: 'team',
  eyebrow: 'Meet The Team',
  title: ['The minds behind', 'the magic.'],
  sub: 'Filmmakers first. Producers, planners and problem-solvers right after.',
  members: [
    {
      name: 'Abinav Srinivas',
      role: 'Founder',
      quote: 'The story always comes first.',
      note: "Leads every production with a writer's instinct and a producer's discipline.",
    },
    {
      name: 'Srinivas',
      role: 'Founder & Marketing Head',
      quote: 'Building meaningful stories that reach audiences.',
      note: 'Makes sure every finished film finds the people it was made for.',
    },
    {
      name: 'Shivaraj Rathod',
      role: 'Creative Head',
      quote: 'Every frame should have purpose.',
      note: 'Shapes the visual language of each project, from look-book to final grade.',
    },
  ],
}

export const finalCta = {
  titleLines: ['Your story already exists.', "Let's frame it forever."],
  copy: "Tell us what you're dreaming of — a film, a series, a campaign — and we'll help you take the first step.",
  button: 'Contact Us',
}

export const workPage = {
  eyebrow: 'Gallery',
  title: ['Every project,', 'one archive.'],
  sub: 'Browse by format, or see everything we have framed — features, shorts, series, brand films and music videos.',
}

export const contactPage = {
  eyebrow: 'Contact',
  title: ['Let’s talk about', 'your project.'],
  sub: 'Reach out directly — WhatsApp is the fastest way to hear back from us.',
  detailsTitle: 'Reach Us Directly',
}
