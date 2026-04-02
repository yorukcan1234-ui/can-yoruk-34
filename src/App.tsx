import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, Music, BookOpen, GraduationCap, ChevronDown, PlayCircle, Headphones, PenTool, Twitter, Sun, Moon, Globe } from 'lucide-react';

const translations = {
  tr: {
    nav: { about: 'Hakkımda', music: 'Müzik', blog: 'Blog', contact: 'İletişim' },
    hero: {
      badge: 'Yeni Medya & İletişim Öğrencisi | Müzisyen',
      title1: 'Dijital Dünyayı',
      title2: 'Notalarla Buluşturuyorum.',
      desc: 'Merhaba, ben Can Yörük. Üsküdar Üniversitesi\'nde Yeni Medya ve İletişim okuyor, aynı zamanda müzik üretiyorum. İletişimin gücünü sanatla harmanlıyorum.',
      btnMusic: 'Müziklerimi Dinle',
      btnBlog: 'Blog Yazılarım'
    },
    about: {
      title: 'Ben Kimim?',
      p1: 'Üsküdar Üniversitesi\'nde Yeni Medya ve İletişim bölümünde eğitimime devam ediyorum. Dijital çağın getirdiği iletişim dinamiklerini anlamak ve bu alanda içerik üretmek en büyük tutkularımdan biri.',
      p2: 'Akademik hayatımın yanı sıra müzikle iç içeyim. Duygularımı ve düşüncelerimi notalara dökmek, benim için kelimelerle iletişim kurmak kadar doğal ve güçlü bir ifade biçimi.',
      eduTitle: 'Üsküdar Üniversitesi',
      eduDesc: 'Yeni Medya ve İletişim Öğrencisi',
      musicTitle: 'Bağımsız Müzisyen',
      musicDesc: 'Beste, Prodüksiyon & Performans'
    },
    music: {
      title: 'Müzik Çalışmalarım',
      desc: 'Kendi yazdığım ve bestelediğim parçalarla duygusal bir yolculuk.',
      single: 'Tekli',
      songTitle: 'Gecenin Sesi',
      genre: 'Alternatif Rock / Indie',
      btnAll: 'Tümünü Spotify\'da Dinle'
    },
    blog: {
      title: 'Son Yazılar',
      desc: 'Yeni medya, iletişim trendleri, dijital kültür ve müzik üzerine düşüncelerim.',
      btnAll: 'Tüm Yazıları Gör',
      readMore: 'Devamını Oku',
      posts: [
        {
          title: "Yeni Medya Çağında Müzik Üretimi ve Dağıtımı",
          excerpt: "Dijital platformların yükselişiyle birlikte bağımsız müzisyenlerin kendi kitlelerini yaratma süreçleri nasıl değişti?",
          date: "12 Nisan 2026",
          category: "Yeni Medya & Müzik"
        },
        {
          title: "Z Kuşağı ve Dijital İletişim Alışkanlıkları",
          excerpt: "Sosyal medya platformlarının evrimi ve Z kuşağının bu platformları kullanım biçimlerindeki sosyolojik değişimler.",
          date: "28 Mart 2026",
          category: "İletişim"
        },
        {
          title: "Yapay Zeka ve Sanatsal Yaratıcılık",
          excerpt: "Üretken yapay zeka araçları sanatçıların yerini mi alacak, yoksa onlara yeni bir ifade alanı mı açacak?",
          date: "15 Mart 2026",
          category: "Teknoloji"
        },
        {
          title: "Üsküdar Üniversitesi'nde Bir Günüm",
          excerpt: "Yeni Medya ve İletişim bölümünde okumanın avantajları, kampüs hayatı ve projelerimiz hakkında kısa bir özet.",
          date: "02 Mart 2026",
          category: "Kişisel"
        }
      ]
    },
    contact: {
      title: 'İletişime Geçelim',
      desc: 'Ortak projeler, müzik çalışmaları veya sadece sohbet etmek için bana ulaşabilirsiniz.',
      email: 'E-posta Gönder',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      tags: ['Yeni Medya & İletişim', 'Müzik']
    }
  },
  en: {
    nav: { about: 'About', music: 'Music', blog: 'Blog', contact: 'Contact' },
    hero: {
      badge: 'New Media & Comm. Student | Musician',
      title1: 'Connecting the Digital World',
      title2: 'Through Notes.',
      desc: 'Hi, I\'m Can Yörük. I study New Media and Communication at Üsküdar University, and I also produce music. I blend the power of communication with art.',
      btnMusic: 'Listen to My Music',
      btnBlog: 'Read My Blog'
    },
    about: {
      title: 'Who Am I?',
      p1: 'I am continuing my education in the New Media and Communication department at Üsküdar University. Understanding the communication dynamics brought by the digital age and producing content in this field is one of my biggest passions.',
      p2: 'Alongside my academic life, I am deeply involved in music. Pouring my feelings and thoughts into notes is as natural and powerful a form of expression for me as communicating with words.',
      eduTitle: 'Üsküdar University',
      eduDesc: 'New Media and Communication Student',
      musicTitle: 'Independent Musician',
      musicDesc: 'Composition, Production & Performance'
    },
    music: {
      title: 'My Music',
      desc: 'An emotional journey with tracks I wrote and composed myself.',
      single: 'Single',
      songTitle: 'Sound of the Night',
      genre: 'Alternative Rock / Indie',
      btnAll: 'Listen to All on Spotify'
    },
    blog: {
      title: 'Latest Posts',
      desc: 'My thoughts on new media, communication trends, digital culture, and music.',
      btnAll: 'See All Posts',
      readMore: 'Read More',
      posts: [
        {
          title: "Music Production and Distribution in the New Media Age",
          excerpt: "How have the processes of independent musicians creating their own audiences changed with the rise of digital platforms?",
          date: "April 12, 2026",
          category: "New Media & Music"
        },
        {
          title: "Gen Z and Digital Communication Habits",
          excerpt: "The evolution of social media platforms and sociological changes in how Gen Z uses these platforms.",
          date: "March 28, 2026",
          category: "Communication"
        },
        {
          title: "Artificial Intelligence and Artistic Creativity",
          excerpt: "Will generative AI tools replace artists, or will they open up a new space of expression for them?",
          date: "March 15, 2026",
          category: "Technology"
        },
        {
          title: "A Day at Üsküdar University",
          excerpt: "A brief summary of the advantages of studying New Media and Communication, campus life, and our projects.",
          date: "March 02, 2026",
          category: "Personal"
        }
      ]
    },
    contact: {
      title: 'Let\'s Connect',
      desc: 'You can reach out to me for joint projects, music collaborations, or just to chat.',
      email: 'Send Email',
      instagram: 'Instagram',
      twitter: 'Twitter',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'All rights reserved.',
      tags: ['New Media & Comm.', 'Music']
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const t = translations[lang];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'music', label: t.nav.music },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold text-zinc-900 dark:text-white tracking-tight cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            Can Yörük<span className="text-indigo-500">.</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.id)}
                className={`hover:text-zinc-900 dark:hover:text-white transition-colors ${activeSection === item.id ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'}`}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <button 
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                title="Change Language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase text-xs font-bold">{lang}</span>
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                title="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen transition-colors duration-300"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-300 mb-8 shadow-sm dark:shadow-none"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              {t.hero.badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight"
            >
              {t.hero.title1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                {t.hero.title2}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => scrollTo('music')} className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-lg dark:shadow-none">
                <PlayCircle className="w-5 h-5" />
                {t.hero.btnMusic}
              </button>
              <button onClick={() => scrollTo('blog')} className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm dark:shadow-none">
                <PenTool className="w-5 h-5" />
                {t.hero.btnBlog}
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
            onClick={() => scrollTo('about')}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800/30 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-6">{t.about.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-lg">
                  {t.about.p1}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-lg">
                  {t.about.p2}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-zinc-900 dark:text-white font-medium">{t.about.eduTitle}</h4>
                      <p className="text-sm text-zinc-500">{t.about.eduDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                      <Music className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-zinc-900 dark:text-white font-medium">{t.about.musicTitle}</h4>
                      <p className="text-sm text-zinc-500">{t.about.musicDesc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-xl dark:shadow-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1516280440502-65f536af1270?q=80&w=1000&auto=format&fit=crop" 
                    alt="Can Yörük" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 dark:opacity-50"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 dark:opacity-50"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4"
              >
                {t.music.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
              >
                {t.music.desc}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop&sig=${item}`} 
                      alt="Music Cover" 
                      className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:opacity-100 dark:group-hover:opacity-80 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                      <Headphones className="w-4 h-4" />
                      {t.music.single}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t.music.songTitle} #{item}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{t.music.genre}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 shadow-sm dark:shadow-none">
                {t.music.btnAll}
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800/30 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-4"
                >
                  {t.blog.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg"
                >
                  {t.blog.desc}
                </motion.p>
              </div>
              <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium flex items-center gap-2"
              >
                {t.blog.btnAll} <BookOpen className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {t.blog.posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm hover:shadow-md dark:shadow-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                    {t.blog.readMore} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-6"
            >
              {t.contact.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 max-w-2xl mx-auto"
            >
              {t.contact.desc}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <a href="mailto:hello@example.com" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all text-zinc-900 dark:text-white shadow-sm dark:shadow-none">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>{t.contact.email}</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all text-zinc-900 dark:text-white shadow-sm dark:shadow-none">
                <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                <span>{t.contact.instagram}</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all text-zinc-900 dark:text-white shadow-sm dark:shadow-none">
                <Twitter className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>{t.contact.twitter}</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all text-zinc-900 dark:text-white shadow-sm dark:shadow-none">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span>{t.contact.linkedin}</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-950 text-center transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Can Yörük. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-600">
            <span className="text-sm">{t.footer.tags[0]}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="text-sm">{t.footer.tags[1]}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
