const whatsappNumber = '919035627036'
const whatsappMessage = "Hi White Narrative, I'd like to talk about a project."

export const site = {
  name: 'White Narrative',
  tagline: 'Stories Framed Forever',
  email: 'officialwhitenarrative@gmail.com',
  phone: '+91 90356 27036',
  whatsapp: whatsappNumber,
  whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  location: 'Bangalore, India',
  socials: [
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/white-narrative' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/whitenarrative/' },
    { name: 'Vimeo', icon: 'vimeo', href: 'https://vimeo.com/whitenarrative' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@whitenarrative' },
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/61592473236654/' },
    { name: 'Threads', icon: 'threads', href: 'https://www.threads.com/@whitenarrative' },
    { name: 'X', icon: 'x', href: 'https://x.com/white_narrative' },
  ],
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'The Challenge', to: '/#challenge' },
  { label: 'Services', to: '/#services' },
  { label: 'Meet The Team', to: '/#team' },
  { label: 'Our Work', to: '/work' },
]

export const hero = {
  kicker: 'A Film Production Studio · Bangalore',
  titleLines: ['Every film', 'begins with'],
  titleAccent: 'one story.',
  tagline: 'Stories Framed Forever',
  copy: "Whether it's a feature film, short film, web series, advertisement or music video, White Narrative brings ideas to life, from concept to release.",
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
      copy: 'Actors, crew, locations, equipment and schedules, coordination alone can become overwhelming.',
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
      copy: 'Finding the right story voice and keeping the vision consistent through production.',
    },
    {
      icon: 'megaphone',
      title: 'Reaching An Audience',
      copy: 'Finishing a film is only half the journey. The real test is helping it find its audience.',
    },
  ],
  resolution: 'We handle the chaos. You tell the story.',
}

export const services = {
  id: 'services',
  eyebrow: 'Services',
  title: ['Every craft your', 'story needs.'],
  sub: 'From the first idea to the final master, our crew brings every part of the production under one roof.',
  items: [
    {
      icon: 'pen',
      title: 'Scripting',
      copy: 'Clear, compelling scripts shaped around your story, audience and format.',
    },
    {
      icon: 'script',
      title: 'Screenplay',
      copy: 'Cinematic narratives with the structure, rhythm and emotional pull to stay with viewers.',
    },
    {
      icon: 'clapper',
      title: 'Production',
      copy: 'The people, planning and on-set precision that bring the whole vision together.',
    },
    {
      icon: 'compass',
      title: 'Direction',
      copy: 'A focused creative vision that guides every performance, frame and choice.',
    },
    {
      icon: 'camera',
      title: 'Cinematography',
      copy: 'Images with intent, built through composition, movement and light.',
    },
    {
      icon: 'cut',
      title: 'Editing',
      copy: 'The pace, performance and emotion shaped into one seamless final story.',
    },
    {
      icon: 'palette',
      title: 'Color Grading',
      copy: 'A refined visual world that gives every frame its final mood and texture.',
    },
    {
      icon: 'mic',
      title: 'Dubbing',
      copy: 'Natural, precise voice work prepared for the audiences you want to reach.',
    },
    {
      icon: 'wave',
      title: 'SFX',
      copy: 'Layered sound design that makes the world on screen feel fully alive.',
    },
    {
      icon: 'music',
      title: 'Mix & Mastering',
      copy: 'Fine tuning the audio and ensuring a balance between the music and sound effects while ensuring dialogues are audible.',
    },
    {
      icon: 'cubeViewport',
      title: '3D Animation',
      copy: 'Bringing depth, movement and dimension to stories that live beyond the lens.',
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
      copy: 'Clear communication, honest processes and on-time delivery, no surprises.',
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
  'Upcoming',
  'Released',
]

export const work = {
  id: 'work',
  eyebrow: 'Our Work',
  title: ['Stories that speak', 'for themselves.'],
  sub: 'A glimpse of the journeys we have framed.',
  items: [
    {
      title: 'Until We Meet Again',
      category: 'Upcoming',
      year: 'Upcoming',
      synopsis: 'A forthcoming romance about bonds that endure beyond time.',
      posterUrl: '/work/until-we-meet-again.png',
      credits: {
        director: 'Arunachalam',
        cinematographer: 'Bhuvanesh Thasma',
        editor: 'Abinav Srinivas',
        colorist: 'Abinav Srinivas (DI)',
        musicDirector: 'Sarovar R',
      },
      cast: ['Arunachalam', 'Megha Kammaje'],
      missingInfo: 'A trailer, release date, and public external listings have not been announced yet.',
    },
    {
      title: 'Hoovadagitthi',
      category: 'Released',
      year: '2026',
      synopsis: 'A quirky Kannada rom-com about Kotresha, whose job hunt and bus ride turn into a daydream-fuelled crush on a florist.',
      posterUrl: 'https://i.ytimg.com/vi/wCSafswwyg8/maxresdefault.jpg',
      watchUrl: 'https://youtu.be/wCSafswwyg8?si=uOezrXH1pgzp_HxM',
      credits: {
        director: 'Not publicly credited',
        cinematographer: 'Shivaraj Rathod',
        editor: 'Shivaraj Rathod',
        colorist: 'Shivaraj Rathod',
        musicDirector: 'South End Circle',
      },
      cast: ['Deekshith N C', 'Anoushka Gupta', 'Rajalakshmi', 'Sachin'],
      missingInfo: 'A director credit and public IMDb or booking listing were not found.',
    },
    {
      title: 'Byaate',
      category: 'Released',
      year: '2025',
      synopsis: 'A Kannada short film about the difficult phase of life and the drive to pursue aspirations despite hardship.',
      posterUrl: 'https://i.ytimg.com/vi/ForT3MmS5hw/maxresdefault.jpg',
      watchUrl: 'https://www.youtube.com/watch?v=ForT3MmS5hw&t=4s',
      credits: {
        director: 'Sri Raghu',
        cinematographer: 'Shivaraj Rathod',
        editor: 'Not publicly credited',
        colorist: 'Not publicly credited',
        musicDirector: 'Prince Joseph',
      },
      cast: ['Karthik', 'Shruthi', 'Selvan'],
      missingInfo: 'Editor, colorist, IMDb, and booking links were not listed publicly.',
    },
    {
      title: 'Agalike',
      category: 'Released',
      year: '2025',
      synopsis: 'A Kannada song about two people drifting apart, and the memories and quiet ache that remain after separation.',
      posterUrl: 'https://i.ytimg.com/vi/q6bxCikcg_Q/maxresdefault.jpg',
      watchUrl: 'https://youtu.be/q6bxCikcg_Q?si=Qkqz74mymd_fg3l2',
      credits: {
        director: 'Arha Studios (video production)',
        cinematographer: 'Shivaraj Rathod',
        editor: 'Shivaraj Rathod',
        colorist: 'Shivaraj Rathod',
        musicDirector: 'South End Circle',
      },
      cast: ['Deekshith N C', 'Anoushka Gupta'],
      missingInfo: 'An individual director credit and public IMDb or booking listing were not found.',
    },
    {
      title: 'Jackfruit',
      category: 'Released',
      year: 'Not announced',
      synopsis: 'Official teaser for an action thriller written, directed and produced by Yash.',
      posterUrl: 'https://i.ytimg.com/vi/AG34xy5vbS0/maxresdefault.jpg',
      watchUrl: 'https://youtu.be/AG34xy5vbS0?si=koSuOqjE7b4OvnsT',
      credits: {
        director: 'Yash',
        cinematographer: 'Shivaraj Rathod',
        editor: 'Shivaraj Rathod',
        colorist: 'Shivaraj Rathod',
        musicDirector: 'Prince Joseph',
      },
      cast: ['Sri Raghu', 'Rakesh', 'Prajwal', 'Adarsh Raj', 'Sanjay Ram', 'Deepak', 'Harshith', 'Sagar Gumballi', 'Venkatesh', 'Akash'],
      missingInfo: 'Only the teaser is publicly available; a release year, IMDb, and booking listing were not found.',
    },
    {
      title: 'A Day in the Life of a Dispatcher in India',
      category: 'Released',
      year: '2022',
      synopsis: 'A profile of Zubair, a Hyderabad-based dispatcher who coordinates jobs and parts for field computer engineers.',
      posterUrl: 'https://i.ytimg.com/vi/6yGUiqkzQBo/maxresdefault.jpg',
      watchUrl: 'https://www.youtube.com/watch?v=6yGUiqkzQBo',
      credits: {
        director: 'Not publicly credited',
        cinematographer: 'Not publicly credited',
        editor: 'Not publicly credited',
        colorist: 'Not publicly credited',
        musicDirector: 'Not publicly credited',
      },
      cast: ['Zubair'],
      missingInfo: 'The public description only identifies Zubair and the project synopsis; no production credits or external listings were found.',
    },
    {
      title: 'Mind Reader',
      category: 'Released',
      year: '2026',
      synopsis: 'A crime investigation involving a suspect and a police officer that gradually uncovers who committed the crime.',
      posterUrl: 'https://i.ytimg.com/vi/JFeSmgEwoK4/maxresdefault.jpg',
      watchUrl: 'https://www.youtube.com/watch?v=JFeSmgEwoK4',
      credits: {
        director: 'Vijay Mohan',
        cinematographer: 'Richard Danial',
        editor: 'Richard Danial',
        colorist: 'Shivaraj Rathod',
        musicDirector: 'Chandan Heggade, Arjun Heggade',
      },
      cast: ['Yashwanth Shetty', 'Dhanu Harsha', 'Shashank'],
      missingInfo: 'Public IMDb and booking links were not found.',
    },
    {
      title: 'Onty Bunty Love Story',
      category: 'Released',
      type: 'Feature Film',
      year: '2024',
      synopsis: 'Onty is desperately in need of a girlfriend. To fulfill his wish he takes help from his best friend Bunty but finds shocking twists and turns which might put their friendship in danger.',
      posterUrl: '/work/onty-bunty-love-story.jpg',
      credits: {
        director: 'Yatish Pannasamudra',
        cinematographer: 'Hrithik Roshan Shivraj Rathod',
        editor: 'Abinav Srinivas',
        colorist: 'Shivraj Rathod',
        musicDirector: 'Shrihari Shresty',
      },
      cast: ['Yatish Pannasamudra', 'Vaibhav Vardhan', 'Shweta S Bhat', 'Shrusthi Chandrashekar', 'Ragavendra Henri'],
      links: [
        { label: 'IMDb', href: 'https://www.imdb.com/title/tt30587816/' },
      ],
    },
    {
      title: 'PISHAACHI',
      category: 'Released',
      type: 'Music Video',
      year: null,
      synopsis: "Music Video based on lyrics by Shri. Da Ra Bendre's Kurudu Kanchana reimagined by C Joyson Rony.",
      posterUrl: 'https://i.ytimg.com/vi/2LBzLLle5QE/maxresdefault.jpg',
      watchUrl: 'https://youtu.be/2LBzLLle5QE',
      credits: {
        director: 'C Joyson Rony',
        cinematographer: 'Charan',
        editor: 'Abinav Srinivas',
        colorist: 'Abinav Srinivas',
        musicDirector: 'C Joyson Rony',
      },
      cast: ['C Joyson Rony', 'Joyson Rony', 'Neha Goyal', 'Vinod Kumar Thangavelu', 'Divarshana Saxena', 'Bhavani Gopi'],
      links: [
        { label: 'Watch on YouTube', href: 'https://youtu.be/2LBzLLle5QE' },
      ],
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
      name: 'Alathur Srinivas',
      role: 'Founder & Marketing Head',
      quote: 'Building meaningful stories that reach audiences.',
      note: 'Makes sure every finished film finds the people it was made for.',
      image: '/team/alathur-srinivas.png',
      socials: [],
    },
    {
      name: 'Abinav Srinivas',
      role: 'Founder',
      quote: 'The story always comes first.',
      note: "Leads every production with a writer's instinct and a producer's discipline.",
      image: '/team/abinav-srinivas.png',
      socials: [
        { icon: 'instagram', href: 'https://www.instagram.com/abinavsrinivas_517/', label: 'Instagram' },
        { icon: 'linkedin', href: 'https://www.linkedin.com/in/abinav-srinivas/', label: 'LinkedIn' },
      ],
    },
    {
      name: 'Shivaraj Rathod',
      role: 'Creative Head',
      quote: 'Every frame should have purpose.',
      note: 'Shapes the visual language of each project, from look-book to final grade.',
      image: '/team/shivraj-rathod.png',
      socials: [
        { icon: 'instagram', href: 'https://www.instagram.com/practical_theory', label: 'Instagram' },
        { icon: 'linkedin', href: 'https://www.linkedin.com/in/shivaraj-rathod', label: 'LinkedIn' },
      ],
    },
  ],
}

export const finalCta = {
  titleLines: ['Your story already exists.', "Let's frame it forever."],
  copy: "Tell us what you're dreaming of, a film, a series, a campaign, and we'll help you take the first step.",
  button: 'Contact Us',
}

export const workPage = {
  eyebrow: 'Gallery',
  title: ['Every project,', 'one archive.'],
  sub: 'Browse by format, or see everything we have framed: features, shorts, series, brand films and music videos.',
}

export const contactPage = {
  eyebrow: 'Contact',
  title: ['Let’s talk about', 'your project.'],
  sub: 'Reach out directly. WhatsApp is the fastest way to hear back from us.',
  detailsTitle: 'Reach Us Directly',
}
