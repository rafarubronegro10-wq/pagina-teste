import { useState, useEffect, useRef, RefObject } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Home,
  HelpCircle,
  MessageSquare,
  ShoppingCart,
  Search,
  Sparkles,
  Mail,
  PhoneCall,
  ShieldCheck,
  Heart,
  Star,
  Check,
  X,
  Share2,
  Copy,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';

export default function App() {
  // UI States
  const [isZoomed, setIsZoomed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // Section refs for smooth scrolling
  const faqRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Clipboard copy helper
  const handleShare = (platform: string) => {
    const currentUrl = window.location.href;
    if (platform === 'copy') {
      navigator.clipboard.writeText(currentUrl);
      setToastMessage('Link copiado com sucesso! 📋✨');
      setShowToast(true);
    } else {
      let shareUrl = '';
      if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      } else if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Confira%20este%20maravilhoso%20Painel%20de%20F%C3%A9rias!`;
      } else if (platform === 'whatsapp') {
        shareUrl = `https://api.whatsapp.com/send?text=Confira%20este%20maravilhoso%20Painel%20de%20F%C3%A9rias!%20${encodeURIComponent(currentUrl)}`;
      } else if (platform === 'linkedin') {
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Auto hide toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-100 font-sans selection:bg-[#ff6f91] selection:text-white relative overflow-x-hidden">
      {/* Mobile viewport view shell */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col relative z-10 border-x border-zinc-200">
        
        {/* 1. HEADER COMPONENT */}
        <header className="bg-white border-b border-gray-100 shadow-xs sticky top-0 z-40">
          
          {/* Upper warning/tag promo */}
          <div className="bg-[#e91e63] text-white text-center py-1.5 px-3 text-[10px] sm:text-xs font-extrabold tracking-wide uppercase flex items-center justify-center gap-1.5 shadow-sm">
            <Award className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>O recurso mais amado do Brasil</span>
            <span className="bg-black/20 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] text-[#ffeb3b] font-black select-none">
              Sucesso garantido!
            </span>
          </div>

          {/* Main Header Brand Row */}
          <div className="flex flex-col items-center justify-center pt-5 pb-3 relative">

            {/* Logo Container */}
            <div className="w-[330px] h-auto flex justify-center items-center">
              <img 
                src="/logo_pedagogico.jpg" 
                alt="Educa Arte Logo" 
                className="w-full h-auto object-contain max-h-[140px] select-none"
                onError={(e) => {
                  // Fallback if image doesn't load
                  (e.target as HTMLImageElement).src = "https://placehold.co/330x140/ffffff/ff6f91?text=Educa+Arte";
                }}
              />
            </div>
          </div>

          {/* Quick action pink ribbon promo */}
          <div className="bg-[#ff6f91] py-1 text-center font-display font-bold text-[8px] sm:text-[9px] uppercase tracking-widest text-white">
            ✨ Materiais Pedagógicos Criativos de Alta Qualidade ✨
          </div>


        </header>

        {/* CONTENT BODY CONTAINER */}
        <main className="flex-1 px-4 py-6 space-y-6 flex flex-col justify-start">
          
          {/* 2. IMAGE GALLERY (Centered Product Showcase with interactive zoom) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-gray-150 bg-white shadow-sm w-full">
              <img
                id="main-product-showcase"
                src="https://educaartemateriaisoficial.com.br/wp-content/uploads/2026/06/29-1.webp"
                alt="Painel Cantinho da Leitura Era Uma Vez"
                className="w-full h-auto object-contain select-none transition-all duration-300 rounded-3xl cursor-zoom-in scale-100 hover:opacity-95"
                onClick={() => setIsZoomed(true)}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/600x400/ff6f91/ffffff?text=Painel+Cantinho+da+Leitura";
                }}
              />

              {/* Magnifier glass absolute icon */}
              <button 
                id="btn-magnify"
                onClick={() => setIsZoomed(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-750 hover:bg-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 z-10 cursor-pointer flex items-center justify-center border border-gray-100"
              >
                <Search className="w-4 h-4 text-gray-800 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

          {/* 3. PRODUCT DETAILS AND CHECKOUT BOX */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 font-sans"
          >
            
            {/* Heading Title Banner */}
            <div className="bg-cyan-50 border border-cyan-100 text-[#00838f] text-xs sm:text-[13px] font-black py-2.5 px-3 rounded-2xl leading-relaxed flex flex-col items-center justify-center text-center shadow-xs">
              <span className="tracking-wide uppercase text-[11px] opacity-75">CANTINHO DA LEITURA ERA UMA VEZ</span>
              <span className="text-sm sm:text-base font-extrabold mt-1">📚✨ Painel Cantinho da Leitura “Era Uma Vez” ✨📚</span>
            </div>

            <p className="text-xs sm:text-[13px] text-gray-600 font-semibold leading-relaxed px-1">
              Transforme sua sala de aula em um verdadeiro mundo encantado da imaginação! 🌟
            </p>

            <p className="text-xs sm:text-[13px] text-gray-600 font-semibold leading-relaxed px-1">
              Este lindo painel decorativo foi criado especialmente para deixar o Cantinho da Leitura ainda mais acolhedor, colorido e mágico, despertando nas crianças o amor pelos livros e pela fantasia.
            </p>

            {/* Bullet lists feature */}
            <div className="bg-white/50 border border-gray-100/70 rounded-2xl p-4 space-y-3.5 text-xs sm:text-[13px] text-gray-600 font-bold leading-normal shadow-xs">
              <div className="flex items-center gap-3 text-[#e91e63]">
                <span className="text-lg leading-none select-none">🩷</span>
                <span className="font-extrabold">O arquivo contém:</span>
              </div>
              <div className="flex items-center gap-3 pl-1">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                <span>Painel em PDF de alta qualidade</span>
              </div>
              <div className="flex items-center gap-3 pl-1">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                <span>38 páginas em tamanho A4</span>
              </div>
              <div className="flex items-center gap-3 pl-1">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                <span>Medida aproximada montado: 1,70 m x 1,10 m</span>
              </div>
              
              <div className="pt-2 border-t border-gray-100 flex items-center gap-3 text-[#2e7d32]">
                <span className="text-lg leading-none select-none">💰</span>
                <span className="font-extrabold text-[#2e7d32]">Valor: R$ 7,90</span>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-start gap-3 text-[#d81b60] leading-normal font-extrabold">
                <span className="text-lg leading-none select-none mt-0.5">✨</span>
                <span>Leve mais encanto, imaginação e amor pela leitura para seus pequenos leitores! ❤️📖</span>
              </div>
            </div>

            {/* Centered High-Conversion Purchase Buy Box */}
            <div className="bg-emerald-50/40 border border-emerald-100/50 rounded-3xl p-6 flex flex-col items-center justify-center space-y-4 max-w-sm mx-auto shadow-md">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Preço de Lançamento</span>
                <span className="text-3xl font-black text-gray-800 font-sans mt-0.5">
                  R$ 7,90
                </span>
                <span className="text-[9px] text-emerald-600 font-bold mt-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  Liberado na hora via Pix ou Cartão
                </span>
              </div>
              
              <a
                id="btn-checkout-cta"
                href="https://pagamento.educaartemateriaisoficial.com.br/checkout/v2/baHLdmSwxp7nPjg7dv4e"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00bcd4] hover:bg-[#0097a7] text-white font-black text-xs sm:text-sm uppercase py-3.5 rounded-full tracking-wider transition-all active:scale-95 shadow-md hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Sparkles className="w-4 h-4 fill-white animate-pulse" />
                COMPRAR AGORA
              </a>
            </div>

            {/* FAQ: COMO VOU BAIXAR APÓS A COMPRA? Section */}
            <div ref={faqRef} id="faq-section" className="pt-6 text-center scroll-mt-24">
              <h3 className="text-xs sm:text-[13px] font-black text-gray-800 uppercase tracking-widest leading-none">
                COMO VOU BAIXAR APÓS A COMPRA?
              </h3>
            </div>

            {/* FAQ Bright Pink Card Layout */}
            <div className="bg-[#ff6f91] border-2 border-white rounded-2xl p-5 text-white text-[11px] sm:text-xs font-semibold leading-relaxed space-y-3 shadow-md relative overflow-hidden">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-white/10 rounded-full select-none pointer-events-none"></div>
              <p>
                Os recursos vendidos acima são produtos digitais no formato PDF.
              </p>
              <p>
                Para baixar, você receberá um e-mail após a compra, só clicar e acessar o material e fazer o download para seu celular ou computador!
              </p>
              <p>
                Além disso, o arquivo também será enviado pelo WhatsApp para o número cadastrado na hora da compra para facilitar o seu acesso.
              </p>
              <p className="font-black block border-t border-white/20 pt-3 text-center uppercase tracking-wider text-[10px] sm:text-[11px]">
                Lembrando que este produto não é enviado pelos Correios.
              </p>
            </div>

            {/* Social Share Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-500 font-bold bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-gray-400" />
                <span>Compartilhe com as amigas:</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-8 h-8 rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-xs"
                  title="Compartilhar no Facebook"
                >
                  <span className="font-bold text-xs">F</span>
                </button>
                <button 
                  onClick={() => handleShare('whatsapp')}
                  className="w-8 h-8 rounded-full bg-[#25d366] hover:bg-[#128c7e] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-xs"
                  title="Compartilhar no WhatsApp"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-8 h-8 rounded-full bg-[#1da1f2] hover:bg-[#0c85d0] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-xs"
                  title="Compartilhar no Twitter"
                >
                  <span className="font-bold text-xs">X</span>
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="w-8 h-8 rounded-full bg-[#00bcd4] hover:bg-[#0097a7] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-xs"
                  title="Copiar Link da Página"
                >
                  <Copy className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* 4. REVIEWS SECTION */}
            <div ref={reviewsRef} id="reviews-section" className="pt-6 scroll-mt-24 space-y-4">
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                  <Star className="w-4 h-4 fill-current text-amber-400" />
                </div>
                <h2 className="text-xs sm:text-[13px] font-black text-gray-800 uppercase tracking-widest pt-1">
                  Opinião de quem já comprou
                </h2>
                <p className="text-[10px] sm:text-xs text-gray-500 font-bold">
                  4 avaliações reais de clientes satisfeitos
                </p>
              </div>

              {/* Reviews Container Grid */}
              <div className="space-y-4">
                
                {/* Review 1 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs sm:text-[13px] font-black text-gray-800">Mariana Silva de Souza</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-sans mt-0.5">Professora de Educação Infantil</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-400">16/06/2026</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    Ficou simplesmente maravilhoso! Montei o painel no nosso cantinho da leitura e fez o maior sucesso com as crianças. As ilustrações são lindas e os pais elogiaram muito a iniciativa. Super fácil de montar! 📚❤️✨
                  </p>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 py-0.5 px-2 rounded-full w-fit">
                    <ThumbsUp className="w-2.5 h-2.5" />
                    <span>Compra verificada</span>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs sm:text-[13px] font-black text-gray-800">Kátia C. Medeiros</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-sans mt-0.5">Coordenadora e Professora do 2º Ano</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-400">14/06/2026</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    Perfeito para incentivar o hábito da leitura! Usei para decorar minha sala de aula e o resultado ficou encantador. O tamanho é excelente, as cores são vivas e a impressão ficou impecável. Recomendo demais! 📖🌟
                  </p>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 py-0.5 px-2 rounded-full w-fit">
                    <ThumbsUp className="w-2.5 h-2.5" />
                    <span>Compra verificada</span>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs sm:text-[13px] font-black text-gray-800">Ana Beatriz Ramos</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-sans mt-0.5">Professora do 1º Ano</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-400">11/06/2026</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    Material lindo e de ótima qualidade! Imprimi em papel sulfite mesmo e as cores ficaram perfeitas. As crianças amaram os personagens do "Era Uma Vez" e ficaram super motivadas para ler. Vale muito a pena! 📚🎨
                  </p>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 py-0.5 px-2 rounded-full w-fit">
                    <ThumbsUp className="w-2.5 h-2.5" />
                    <span>Compra verificada</span>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs sm:text-[13px] font-black text-gray-800">Débora Fonseca L.</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-sans mt-0.5">Psicopedagoga Clínica</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-400">08/06/2026</span>
                  </div>
                  
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    Prático e encantador! Recebi o PDF na hora após a compra, a montagem foi muito fácil e o painel deixou o ambiente super alegre e acolhedor. Foi um diferencial fantástico na nossa escola! 🥰📖
                  </p>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 py-0.5 px-2 rounded-full w-fit">
                    <ThumbsUp className="w-2.5 h-2.5" />
                    <span>Compra verificada</span>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </main>

        {/* 5. FOOTER COMPONENT */}
        <footer className="bg-gray-950 text-gray-300 border-t-4 border-[#ff6f91]">
          <div className="px-4 py-10 space-y-8">
            
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="inline-block max-w-[170px] bg-white rounded-xl p-2 select-none">
                <img
                  src="/logo_pedagogico.jpg"
                  alt="Educa Arte Logo"
                  className="w-full h-auto object-contain max-h-[50px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/170x45/ffffff/00bcd4?text=Educa+Arte";
                  }}
                />
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Criamos materiais pedagógicos ilustrados e interativos de altíssima qualidade para facilitar o dia a dia dos professores e tornar a aprendizagem surpreendentemente divertida.
              </p>
            </div>

            {/* Links Column */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                Categorias Populares
              </h4>
              <div className="flex flex-col gap-2 text-xs text-gray-400">
                <a href="#" className="hover:text-[#ff6f91] transition-colors flex items-center gap-1.5 font-semibold">
                  <Heart className="w-3 h-3 fill-current text-[#ff6f91]" />
                  <span>Decorações de Sala de Aula</span>
                </a>
                <a href="#" className="hover:text-[#ff6f91] transition-colors flex items-center gap-1.5 font-semibold">
                  <Heart className="w-3 h-3 fill-current text-[#ff6f91]" />
                  <span>Volta às Aulas / Recesso</span>
                </a>
                <a href="#" className="hover:text-[#ff6f91] transition-colors flex items-center gap-1.5 font-semibold">
                  <Heart className="w-3 h-3 fill-current text-[#ff6f91]" />
                  <span>Alfabetização de Crianças</span>
                </a>
                <a href="#" className="hover:text-[#ff6f91] transition-colors flex items-center gap-1.5 font-semibold">
                  <Heart className="w-3 h-3 fill-current text-[#ff6f91]" />
                  <span>Apostilas e Desafios Lúdicos</span>
                </a>
              </div>
            </div>

            {/* Support Info */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                Central de Atendimento
              </h4>
              <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-semibold">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ff6f91] shrink-0" />
                  <span className="break-all text-[11px]">educaarte.materials.pedagogicos@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#00bcd4] shrink-0" />
                  <a href="https://wa.me/5521959050815" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6f91] transition-colors break-all">
                    WhatsApp: (21) 95905-0815
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Seg. a Sex. das 08h às 18h</span>
                </div>
              </div>
            </div>

            {/* Security and Payments */}
            <div className="space-y-4">
              <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                Segurança e Pagamentos
              </h4>
              
              <div className="p-3.5 rounded-xl bg-gray-900 border border-gray-800/80 flex items-center gap-2.5 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 animate-pulse" />
                <div className="leading-tight">
                  <p className="text-[10px] font-black text-white uppercase tracking-wider">Compra 100% Segura</p>
                  <p className="text-[9px] text-gray-500 mt-0.5">Certificado SSL de proteção ativo</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-black text-gray-500 tracking-wider">Formas aceitas:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-900 text-[9px] font-extrabold px-2 py-1 rounded border border-gray-800 text-[#00bcd4] select-none tracking-wider">PIX</span>
                  <span className="bg-gray-900 text-[9px] font-extrabold px-2 py-1 rounded border border-gray-800 text-[#ff6f91] select-none tracking-wider">CRÉDITO</span>
                  <span className="bg-gray-900 text-[9px] font-extrabold px-2 py-1 rounded border border-gray-800 text-amber-500 select-none tracking-wider">BOLETO</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar Copyright */}
            <div className="pt-6 border-t border-gray-900 text-center text-[10px] sm:text-[11px] text-gray-500 space-y-2">
              <p className="flex items-center justify-center gap-1 flex-wrap font-semibold leading-relaxed">
                <span>Educa Arte © 2026. Todos os direitos reservados. Feito com</span>
                <Heart className="w-3 h-3 text-[#ff6f91] fill-[#ff6f91] shrink-0 inline animate-bounce" />
                <span>para nossos queridos professores brasileiros.</span>
              </p>
              <p className="text-[9px] font-mono hover:text-gray-400 transition-colors pt-1">
                CNPJ: 00.345.987/0001-20 | Termos de Serviço | Política de Privacidade
              </p>
            </div>

          </div>
        </footer>

      </div>

      {/* 6. INTERACTIVE ZOOM LIGHTBOX MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out select-none"
            onClick={() => setIsZoomed(false)}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center border border-white/10 z-50"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Lightbox panel info text */}
            <div className="absolute top-4 left-4 text-white text-xs font-black uppercase tracking-wider bg-black/40 py-1.5 px-3 rounded-full border border-white/5 select-none hidden sm:block">
              🔎 Ampliar Painel do Cantinho
            </div>

            {/* Centered zoomed image */}
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              <img
                src="https://educaartemateriaisoficial.com.br/wp-content/uploads/2026/06/29-1.webp"
                alt="Painel Cantinho da Leitura Era Uma Vez Zoom"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl select-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/1200x800/ff6f91/ffffff?text=Painel+Cantinho+da+Leitura";
                }}
              />
              {/* Overlay description in modal */}
              <div className="bg-black/70 backdrop-blur-xs text-white p-3 text-center text-xs sm:text-[13px] font-bold border-t border-white/5 font-sans leading-relaxed select-none">
                📚 Painel Cantinho da Leitura “Era Uma Vez” • Tamanho: 1,70 m x 1,10 m
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. NOTIFICATION TOAST FEEDBACK */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 z-50 max-w-sm px-4 select-none pointer-events-none"
          >
            <div className="bg-[#00bcd4] text-white py-3 px-6 rounded-full shadow-2xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 border border-cyan-300/20">
              <Check className="w-4 h-4 stroke-[3] animate-bounce shrink-0" />
              <span>{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
