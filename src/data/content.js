export const site = {
  name: 'White Narrative',
  tagline: 'Stories Framed Forever',
  email: 'hello@whitenarrative.studio',
  phone: '+91 98765 43210',
  location: 'Bangalore, India',
  socials: [
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    { name: 'Vimeo', icon: 'vimeo', href: 'https://vimeo.com' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Challenge', href: '#challenge' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'What We Do', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Meet The Team', href: '#team' },
]

export const hero = {
  kicker: 'A Film Production Studio · Bangalore',
  titleLines: ['Every film', 'begins with'],
  titleAccent: 'one story.',
  tagline: 'Stories Framed Forever',
  copy: "Whether it's a feature film, short film, web series, advertisement or music video — White Narrative brings ideas to life, from concept to release.",
  formats: ['Feature Films', 'Short Films', 'Web Series', 'Corporate Films', 'Ad Films', 'Music Videos'],
  ctaPrimary: 'Start Your Story',
  ctaSecondary: 'Watch Our Reel',
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
      num: '01',
      icon: 'bulb',
      title: 'A Story Is Born',
      copy: 'Every film begins as a thought. We help transform raw ideas into productions audiences remember.',
      chips: [
        { icon: 'spark', label: 'Concept Development' },
        { icon: 'chat', label: 'Script Consultation' },
        { icon: 'compass', label: 'Creative Planning' },
        { icon: 'board', label: 'Mood Boards' },
      ],
    },
    {
      num: '02',
      icon: 'pen',
      title: 'Ideas Need Structure',
      copy: 'A great story needs the right foundation. We shape ideas into powerful narratives and solid plans.',
      chips: [
        { icon: 'pen', label: 'Story Development' },
        { icon: 'script', label: 'Screenplay Writing' },
        { icon: 'search', label: 'Research & References' },
        { icon: 'calendar', label: 'Pre-Production Planning' },
      ],
    },
    {
      num: '03',
      icon: 'users',
      title: 'Stories Need People',
      copy: 'The right people bring your story to life. We build the perfect cast and crew for your vision.',
      chips: [
        { icon: 'star', label: 'Casting' },
        { icon: 'users', label: 'Crew Selection' },
        { icon: 'pin', label: 'Location Scouting' },
        { icon: 'layers', label: 'Production Design' },
        { icon: 'costume', label: 'Costume Planning' },
      ],
    },
    {
      num: '04',
      icon: 'clapper',
      title: 'Lights. Camera. Action.',
      copy: 'Where preparation meets performance. Disciplined sets, creative freedom, and every frame with intent.',
      chips: [
        { icon: 'clapper', label: 'Direction' },
        { icon: 'camera', label: 'Cinematography' },
        { icon: 'light', label: 'Lighting' },
        { icon: 'layers', label: 'Art Direction' },
        { icon: 'mic', label: 'Sound Recording' },
      ],
    },
    {
      num: '05',
      icon: 'monitor',
      title: 'Where Stories Come Alive',
      copy: 'The edit room is where rhythm, colour and sound turn footage into a cinematic experience.',
      chips: [
        { icon: 'cut', label: 'Editing' },
        { icon: 'palette', label: 'Color Grading' },
        { icon: 'wand', label: 'VFX' },
        { icon: 'wave', label: 'Sound Design' },
        { icon: 'music', label: 'Music & Mix' },
        { icon: 'film', label: 'DI & Mastering' },
      ],
    },
    {
      num: '06',
      icon: 'megaphone',
      title: 'Every Story Deserves An Audience',
      copy: 'We take your film beyond completion — into festivals, platforms, theatres and the world.',
      chips: [
        { icon: 'play', label: 'Trailer Editing' },
        { icon: 'board', label: 'Poster Design' },
        { icon: 'award', label: 'Festival Strategy' },
        { icon: 'megaphone', label: 'Digital Campaigns' },
        { icon: 'globe', label: 'Distribution Support' },
      ],
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
      tint: 'amber',
    },
    {
      icon: 'clapper',
      title: 'Short Films',
      copy: 'Bold, festival-ready films that make a powerful statement in a handful of minutes.',
      tint: 'copper',
    },
    {
      icon: 'tv',
      title: 'Web Series',
      copy: 'Episodic storytelling that hooks audiences from the cold open to the season finale.',
      tint: 'teal',
    },
    {
      icon: 'briefcase',
      title: 'Corporate Films',
      copy: "Your brand's story told with purpose, clarity and cinematic craft.",
      tint: 'bronze',
    },
    {
      icon: 'spark',
      title: 'Ad Films',
      copy: 'Creative campaigns that grab attention in seconds — and drive real results.',
      tint: 'crimson',
    },
    {
      icon: 'music',
      title: 'Music Videos',
      copy: 'Stunning visual experiences that elevate the music and stay with the listener.',
      tint: 'violet',
    },
  ],
}

export const who = {
  id: 'who',
  eyebrow: 'Who We Are',
  quote: "We don't just produce films. We build stories that deserve to be remembered.",
  copy: 'White Narrative exists for filmmakers, dreamers, brands and storytellers looking for a partner who understands every stage of the filmmaking journey.',
}

export const why = {
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
  { icon: 'award', value: 20, suffix: '+', label: 'Festival Selections' },
  { icon: 'globe', value: 5, suffix: '', label: 'Countries Reached' },
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
      note: 'A father-daughter drama shot across 40 days in coastal Karnataka — developed with us from a two-page idea.',
      scene: 'poster-a',
    },
    {
      title: 'The Last Train',
      category: 'Short Film',
      year: '2025',
      note: 'A single-location thriller crafted for the festival circuit — 20+ official selections and counting.',
      scene: 'poster-b',
    },
    {
      title: 'Fault Lines',
      category: 'Web Series',
      year: '2024',
      note: 'Six-episode ensemble drama — casting, production and post handled end-to-end by our team.',
      scene: 'poster-c',
    },
    {
      title: 'Inspire',
      category: 'Corporate Film',
      year: '2024',
      note: 'A founder-story brand film that turned an internal milestone into a public moment.',
      scene: 'poster-d',
    },
    {
      title: 'Ignite',
      category: 'Ad Film',
      year: '2024',
      note: 'A 40-second launch campaign, from script to broadcast master in three weeks.',
      scene: 'poster-e',
    },
    {
      title: 'Chase The Light',
      category: 'Music Video',
      year: '2023',
      note: 'A one-night neon chase through the city — planned to the minute, shot before sunrise.',
      scene: 'poster-f',
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
    {
      name: 'Srikkanth Govindaraajan',
      role: 'Creative Head',
      quote: 'Cinema is emotion crafted into visuals.',
      note: 'Turns scripts into shot-lists and moments into memories.',
    },
  ],
}

export const testimonials = {
  id: 'testimonials',
  eyebrow: 'Testimonials & Partners',
  title: ['Trusted by storytellers', 'and brands alike.'],
  items: [
    {
      quote: 'White Narrative understood our vision better than we did. They turned our idea into a film we are incredibly proud of.',
      name: 'Rohit Mehra',
      role: 'Director',
    },
    {
      quote: 'They treated our brand film like cinema — every rough cut came with reasoning, and the final film moved our own team to tears.',
      name: 'Ananya Iyer',
      role: 'Brand Marketing Lead',
    },
    {
      quote: 'From storyboard to release night, the process was calm and completely transparent. My music video looks bigger than its budget.',
      name: 'Karthik Rao',
      role: 'Independent Musician',
    },
  ],
  partners: ['Google', 'TATA', 'Swiggy', 'Sony Music', 'OLA'],
}

export const bts = {
  id: 'bts',
  eyebrow: 'Behind The Scenes',
  title: ['The passion behind', 'every production.'],
  sub: 'Films are made long before the première — in rehearsals, recces, lighting tests and late-night edit sessions.',
  moments: [
    { icon: 'users', label: 'Table Reads & Rehearsals', scene: 'bts-a', size: 'wide' },
    { icon: 'light', label: 'Lighting Setups', scene: 'bts-b', size: '' },
    { icon: 'camera', label: 'On-Set Moments', scene: 'bts-c', size: '' },
    { icon: 'monitor', label: 'Edit Sessions', scene: 'bts-d', size: '' },
    { icon: 'chat', label: 'Production Meetings', scene: 'bts-e', size: 'wide' },
  ],
}

export const finalCta = {
  id: 'contact',
  titleLines: ['Your story already exists.', "Let's frame it forever."],
  copy: "Tell us what you're dreaming of — a film, a series, a campaign — and we'll help you take the first step.",
  button: 'Start Your Production',
}
