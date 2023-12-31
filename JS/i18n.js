const langSwitcher = document.querySelector(".lang-switcher");
const html = document.querySelector("html");

const loader = document.querySelector(".loader");
const header = document.querySelector("header");

const i18n = document.querySelectorAll(".i18n");

let fr = [
  { switch: "English website" },
  { h1: "Marie Aballea: Sophrologie et Reiki. France/Irlande" },
  { navHome: "Accueil" },
  { navAbout: "Qui suis-je" },
  { navSophro: "Sophrologie" },
  { navDefSoprho: "Qu'est-ce que la sophrologie?" },
  { navAdultsSoprho: "Pour les adultes" },
  { navChildrenSoprho: "Pour les enfants et les adolescents" },
  { navBusinessSoprho: "En entreprise" },
  { navReiki: "Reiki" },
  { navDefReiki: "Qu'est-ce que le Reiki?" },
  { navBenefitsReiki: "Les bienfaits du Reiki" },
  { navDistanceReiki: "Reiki à distance" },
  { navContact: "Contact" },
  { homeTitle: "Bienvenue sur mon site web!" },
  { spin: "France / Irlande" },
  { homeSubTitle1: "La sophrologie" },
  {
    homePara1:
      "Créée dans les années 60 par Alfredo CAYCEDO Neuropsychiatre, la sophrologie s'inspire de plusieurs disciplines telles que l'hypnose ainsi que des  techniques orientales comme le yoga and le zen. L'union de techniques orientales et occidentales.",
  },
  {
    homePara2:
      "La sophrologie est une discipline qui aide chacun de nous à atteindre sérénité et bien-être via des techniques de développement personnel qui vont agir sur le corps et l'esprit. Elle combine des exercices axés sur la respiration et la concentration, la relaxation musculaire et l'imagerie mentale (visualisation).",
  },
  { homeReadMore: "En savoir plus" },
  { homeSubTitle2: "Le reiki" },
  {
    homePara3:
      "Le Reiki est une méthode de soins énergétiques qui s'adresse à tous. D'origine Japonaise, il a été fondé par le Japonais Mikao Usui dans les années 1920.",
  },
  {
    homePara4:
      "Le mot Reiki est composé de deux mots : “REI” signifiant l'énergie vitale universelle “KI” signifiant l'énergie qui est en nous.",
  },
  { aboutTitle: "Mon parcours" },
  {
    aboutPara1:
      "J'ai eu un parcours très courant, Boulot, Maison, Dodo et quelques semaines de vacances par an...",
  },
  {
    aboutPara2:
      "Je ressentais un mal être constant et j'ai recherché et essayé plusieurs approches jusqu'à ce qu' une rencontre joyeuse me fasse découvrir la sophrologie évolutive. L'école, qui enseigne la sophrologie évolutive, ne prend que des apprenant(e)s qui ont déjà fait un travail personnel très approfondi sur eux/elles.",
  },
  {
    aboutPara3:
      "Nous, thérapeutes, devons être pleinement attentifs aux besoins des personnes qui viennent nous voir. Pour aider quelqu'un il faut d'abord s'aider soi même.",
  },
  {
    aboutPara4:
      "Cette école prend des apprenant(e)s, quelques soient leurs origines sociales, scolaires, etc. Elle prend avant tout des humain(e)s qui souhaitent aider d'autres humain(e)s. Diplôme en poche, en 2010 j'ouvre mon premier cabinet de sophrologie à Saint Méen le Grand. J'ai réalisé que je désirais continuer ce cheminement de découverte personnelle et ai donc fait le choix de découvrir le Reiki.",
  },
  {
    aboutPara5:
      "Cependant, je me sentais attirée par l'Irlande depuis plusieurs années; j'ai donc écouté mon coeur et pris la décision de venir vivre en Irlande.",
  },
  {
    aboutPara6:
      "Je continue d'accompagner mes clients en Bretagne par Skype ou WhatsApp.",
  },
  {
    aboutPara7:
      "Je souhaite partager avec vous ce que la relaxation et le Reiki m'ont apporté. Je suis un être humain comme vous, avec également un chemin de vie qui a parfois été un peu compliqué. La sophrologie et le Reiki m'ont beaucoup aidée. Ce partage de connaissances que je veux faire avec vous, je souhaite le faire dans la joie, l'amour et la lumière.",
  },
  { sophroTitle: "Sophrologie." },
  { sophroSubTitle1: "Qu'est-ce que la sophrologie?" },
  {
    sophroPara1:
      "Créée dans les années 60 par Alfredo CAYCEDO Neuropsycholochiatriste, la sophrologie s'inspire de plusieurs disciplines comme l'hypnose, et des techniques orientales comme le yoga et le zen. Un vrai mélange de technique orientale et occidentale. ",
  },
  {
    sophroPara2:
      "La sophrologie combine des exercices de respiration, des mouvements simples et de la visualisation, guidés dans un état de relaxation, afin d'apporter une harmonie entre le corps et l'esprit pour accéder aux ressources intérieures. Cela  peut être facilement reproduit dans la vie de tous les jours - sur le lieu de travail, dans le train, lors d'un examen, en classe -afin aider à surmonter des obstacles spécifiques, tels que le stress et l'anxiété, et pour favoriser un état de calme et de positivité. ",
  },
  { sophroSubTitle2: "Les 5 principes de la Sophrologie" },
  { sophroUl1Li1: " 	\u2b27 Conscience corporelle" },
  { sophroUl1Li1Span: "	Nous apprenons à écouter notre corps" },
  { sophroUl1Li2: "\u2b27  Répétition" },
  {
    sophroUl1Li2Span:
      "Plus vous pratiquez, plus les avantages sont importants.",
  },
  { sophroUl1Li3: "\u2b27 Réalité objective" },
  {
    sophroUl1Li3Span:
      "Nous apprenons à accepter les choses telles qu'elles sont sans jugement.",
  },
  { sophroUl1Li4: "\u2b27 Adaptabilité" },
  {
    sophroUl1Li4Span:
      "Le sophrologue adapte sa séance (exercices, mots, rythme, logos terpnos) à son client ou groupe. Le client crée sa propre boîte à outils avec des exercices qui lui conviennent et qui fonctionnent pour lui.",
  },
  { sophroUl1Li5: "\u2b27 Action positive" },
  {
    sophroUl1Li5Span:
      "Nous attirons notre attention sur le positif, créant une réaction en chaîne positive.",
  },
  { sophroSubTitle3: "La sophrologie s'adapte à qui vous êtes." },
  { sophroPara3: "" },
  {
    sophroSubTitle4:
      "Adultes, sortez du stress de la vie moderne et prenez du temps pour vous afin de  rééquilibrer votre vie.",
  },
  {
    sophroUl2Li1:
      "\u2b27 Apprenez à vous détendre, à calmer l'esprit et à lâcher prise",
  },
  {
    sophroUl2Li2:
      "\u2b27 Retrouvez un sommeil réparateur et des niveaux d'énergie accrus",
  },
  { sophroUl2Li3: "\u2b27 Stimulez les fonctions des organes" },
  {
    sophroUl2Li4:
      "\u2b27 Augmentation de la confiance en soi, de l'estime de soi",
  },
  {
    sophroUl2Li5:
      "\u2b27 Faire face aux défis et aux changements de la vie: chômage, divorce, deuil…",
  },
  {
    sophroUl2Li6:
      "\u2b27 Préparez-vous à un événement particulier (naissance, représentation, chirurgie…)",
  },
  {
    sophroUl2Li7:
      "	\u2b27 Prendre conscience de soi de la pensée et la communication positives Sentez-vous plus concentré",
  },
  { sophroUl2Li8: "\u2b27 Développez la motivation et la créativité." },
  { sophroUl2Li9: "" },
  { sophroUl2Li10: "" },
  {
    sophroSubTitle5:
      "Parents, soignants et professionnels attentionnés, prenez le temps d'écouter prenez soin de vous afin de mieux vous occuper des autres.",
  },
  { sophroSubTitle6: "Enfants et adolescents" },
  {
    sophroSubTitle7:
      "Libérez les enfants et adolescents du stress et des limites.",
  },
  {
    sophroPara4:
      "Dans le monde rapide et pressurisé d'aujourd'hui, les enfants et les adolescents ont des vies exigeantes à la maison, à l'école et dans leur vie sociale. Ils apprennent dès leur plus jeune âge à écouter et à se conformer aux attentes. Cela peut créer des tensions qui se manifestent parfois à travers leur corps (maux de ventre, maux de tête, larmes, mouvements impulsifs).",
  },
  { sophroSubTitle8: "Comment la Sophrologie peut-elle aider?" },
  { sophroPara5: "La sophrologie est un outil qui leur permet de:" },
  {
    sophroUl3Li1:
      "\u2b27 Leur apprendre à être conscients et à utiliser leur respiration pour se calmer relâcher les tensions et se lier d'amitié avec leurs émotions",
  },
  {
    sophroUl3Li2:
      "\u2b27 Stimuler leur créativité, leur curiosité, leur imagination",
  },
  { sophroUl3Li3: "\u2b27 Augmenter leur concentration et leur mémoire" },
  { sophroUl3Li4: "\u2b27 Encourager leur indépendance" },
  { sophroUl3Li5: "\u2b27 Renforcer leur présence dans le monde" },
  {
    sophroUl3Li6:
      "\u2b27 Les sensibiliser et leur apprendre à «lire» le langage de leur corps et leurs perceptions sensorielles",
  },
  {
    sophroSubTitle9:
      "La sophrologie est utilisée pour la préparation aux examens, le sommeil, l'anxiété, la confiance en soi, la gestion du changement.",
  },
  { sophroSubTitle10: "Sophrologie pour l'entreprise " },
  { sophroSubTitle11: "Nourrir vos talents." },
  {
    sophroPara6:
      "La sophrologie est idéale pour le monde de l'entreprise. Il peut être facilement utilisé à un bureau et intégré à votre vie quotidienne ou à des moments de pression accrue.",
  },
  {
    sophroPara7:
      "Elle propose des outils et des stratégies pratiques pour augmenter le bien-être des collaborateurs mais aussi pour:",
  },
  { sophroUl4Li1: "\u2b27 Augmenter les performances et la créativité," },
  { sophroUl4Li2: "\u2b27 Éviter le burn out," },
  { sophroUl4Li3: "\u2b27 Diminuer l'impact du stress," },
  { sophroUl4Li4: "\u2b27 Renforcer les liens d'équipe," },
  { sophroUl4Li5: "\u2b27 Développer la motivation et la confiance," },
  { sophroUl4Li6: "\u2b27 Promouvoir une communication positive," },
  {
    sophroUl4Li7:
      "\u2b27 Attirer de nouveaux talents qui savent qu'ils atteindront l'excellence tout en étant pris en charge de manière holistique.",
  },
  { reikiTitle: "Reiki" },
  { reikiSubTitle1: "Qu'est-ce que le Reiki?" },
  {
    reikiPara1:
      " Le Reiki est une méthode de soins énergétiques qui s'adresse à tous. D'origine Japonaise, il a été fondé par le Japonais Mikao Usui dans les années 1920.",
  },
  { reikiPara2: "Le mot Reiki est composé de deux mots :" },
  { reikiPara3: "“REI” signifiant l'énergie vitale universelle" },
  { reikiPara4: "“KI” signifiant l'énergie qui est en nous." },
  {
    reikiPara5:
      "Le Reiki est reconnu comme un “Super Carburant”, il agit de manière harmonieuse sur tous les plans de l'être, physique, émotionnel, mental et spirituel pour une amélioration globale du bien-être.",
  },
  { reikiPara6: "" },
  { reikiPara7: "" },
  { reikiPara8: "" },
  { reikiPara9: "" },
  { reikiPara10: "" },
  { reikiPara11: "" },
  { reikiPara12: "" },
  { reikiPara13: "" },
  { reikiSubTitle2: "Les bienfaits du Reiki:" },
  { reikiUl1Li1: "\u2b27 Renforce le système immunitaire" },
  { reikiUl1Li2: "\u2b27 Réduit le stress" },
  { reikiUl1Li3: "\u2b27 Augmente l'énergie" },
  { reikiUl1Li4: "\u2b27 Permet la relaxation" },
  { reikiUl1Li5: "\u2b27 Améliore la concentration et la clarté d'esprit" },
  { reikiUl1Li6: "\u2b27 Accroit la confiance en soi" },
  { reikiUl1Li7: "\u2b27 Aide à faire son deuil" },
  { reikiUl1Li8: "\u2b27 Complète d'autres thérapies" },
  {
    reikiUl1Li9:
      "\u2b27 Accélère la cicatrisation après une blessure ou une opération",
  },
  {
    reikiUl1Li10: "\u2b27 Bénéfique pour des pathologies chroniques ou aiguës",
  },
  {
    reikiUl1Li11:
      "\u2b27 Aide à se maintenir en bonne santé et dans le bien-être",
  },
  { reikiUl1Li112: "\u2b27 Complète les thérapies conventionnelles" },
  { reikiSubTitle3: "Soin Reiki à distance" },
  {
    reikiPara14:
      "L'énergie ne connaît ni la notion de temps, ni celle d'espace.",
  },
  {
    reikiPara15:
      "Les soins à distance permettent donc d'être programmés et reçus quand vous le souhaitez, au meilleur moment de votre journée ou soirée. </br> L'énergie Reiki est mise à disposition de la personne.",
  },
  {
    reikiPara16:
      "C'est un moment privilégié, un instant de CALME et de BIEN-ÊTRE. Vous n'avez plus qu'à vous détendre, fermer les yeux, vous laisser aller en vous accordant quelques minutes juste pour vous. Après un premier contact par téléphone, vous m'exposez votre situation et vos attentes par rapport aux soins.",
  },
  {
    reikiPara17:
      "En fonction de vos besoins, nous pouvons travailler sur un programme de soins, établi sur la semaine ou le mois. Il est intéressant de travailler sur la durée. Le soin à distance va vous accompagner dans votre PROCESSUS. Quel que soit votre problème, le reiki agira globalement sur tout votre corps et tout votre être.",
  },
  { reikiSubTitle4: "Précision sur le fonctionnement du Reiki à distance" },
  {
    reikiPara18:
      "L'ÉNERGIE va où L'INTENTION la porte, sans les limites humaines du TEMPS et de L'ESPACE . Cela peut surprendre mais les faits sont là.",
  },
  {
    reikiPara19:
      "Le principe des soins à distance est de mettre l'énergie Reiki à la disposition d'une personne dans le PASSÉ, le PRÉSENT ou le FUTUR. L'énergie suit la pensée donc le Reiki ira où l'intention est émise.",
  },
  {
    reikiPara20:
      "On peut ainsi travailler sur la LIBÉRATION des MÉMOIRES CELLULAIRES la plupart du temps inconscientes, ancrées dans notre corps par des conditionnements.",
  },
  {
    reikiPara21:
      "L'énergie transmise pour les soins à distance est établie avec les symboles. Les symboles du Reiki sont des dessins sacrés utilisés pour donner et recevoir l'énergie de la force de vie universelle. Ils sont comme une antenne pour activer et recevoir l'énergie. Ainsi, on peut transmettre le reiki À L'AUTRE BOUT DE LA TERRE.",
  },
  {
    reikiPara22:
      "Le traitement à distance peut, pour certaines personnes, favoriser un lâcher prise (plus rapide et plus facile) pour recevoir l'énergie Reiki sans résistances mentales. La durée d'un soin à distance est comprise entre 15 et 20 min. Les soins sont plus courts mais tout aussi efficaces qu'un soin classique par imposition des mains. Il faut savoir que l'efficacité du Reiki n'est pas proportionnelle à la durée du soin pratiqué.",
  },
  { reikiPara23: "" },
  {
    contactTitle:
      "Vous pouvez me contacter via ce formulaire ou via les liens ci-dessous.",
  },
  {
    contactForm:
      '<a target="_blank"  href="https://forms.gle/uNt3CuQX9QPtZv318" aria-label="formulaire de contact"><img loading="lazy"  src="/assets/images/formfr-s.webp" alt=""></a>',
  },
  {
    contactPara1:
      "Cliquez sur l'image pour être redirigé vers le formulaire de contact.",
  },
  {
    contactPhone: `<a class="btn btn-icon btn-phone" href="tel:+33650335412"><i class="fas fa-phone"></i><span>+33650335412</span></a>`,
  },
];

let en = [
  { switch: "Site en français" },
  { h1: "Marie Aballea: Sophrology and Reiki.  Eire/France" },
  { navHome: "Home" },
  { navAbout: "Who am I?" },
  { navSophro: "Sophrology" },
  { navDefSoprho: "What is sophrology?" },
  { navAdultsSoprho: "For adults" },
  { navChildrenSoprho: "For children and adolescents" },
  { navBusinessSoprho: "For corporate" },
  { navReiki: "Reiki" },
  { navDefReiki: "What is Reiki?" },
  { navBenefitsReiki: "Reported benefits of Reiki" },
  { navDistanceReiki: "Reiki distance" },
  { navContact: "Contact me" },
  { homeTitle: "Welcome on my website!" },
  { spin: "Ireland / France" },
  { homeSubTitle1: "Sophrology" },
  {
    homePara1:
      "Created in the 60 by Alfredo CAYCEDO Neuropsycholochiatriste, sophrology is inspired by several disciplines such as hypnosis, and eastern techniques such as yoga and zen. A real mix of eastern and western technique.",
  },
  {
    homePara2:
      "Sophrology it's a discipline that help every one of us to develop to have serenity and well-being through personal development based techniques that will affect the body and the mind .It combines exercises that s focus on breathing and concentration, muscle relaxation and mental imagery (also visualisation).",
  },
  { homeReadMore: "read more" },
  { homeSubTitle2: "Reiki" },
  {
    homePara3:
      "Rei meaning Universal.  Ki meaning energy or life force. Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    homePara4:
      "The energy involved in Reiki healing is the universal energy that surrounds all life. You cannot see this energy as it operates on a frequency that is too fast for the naked eye to see, yet Reiki energy flows freely through you.",
  },
  { aboutTitle: "I'm qualified sophrologist and in reiki as well." },
  {
    aboutPara1:
      "I had a very common career, Work, Home, Dodo and a few weeks of vacation per year... ",
  },
  {
    aboutPara2:
      "I felt a constant uneasiness and I researched and tried several approaches until a joyful meeting made me discover progressive sophrology.",
  },
  {
    aboutPara3:
      "Once graduated in 2010 I opened my first sophrology practice in Saint Méen le Grand in Brittany (France). As I went along, I realized that I wanted to continue this beautiful path of self-discovery. So I made the choice to go to meet reiki. ",
  },
  {
    aboutPara4:
      "Meeting also very joyful and surprising. And so I trained in level 1 and 2 of reiki in Brittany, where I practiced these two complementary approaches in my office in order to allow clients to meet themselves.",
  },
  {
    aboutPara5:
      "However for several years Ireland called me. So I listened to my heart and made the decision to live in Ireland. I continue to support clients in Brittany via Skype or WhatsApp.",
  },
  {
    aboutPara6:
      "Today I want to share with you what relaxation therapy and reiki have given me. I am a human being like you and I also had a life path which at times could have been a little complicated.",
  },
  {
    aboutPara7:
      "Sophrology and reiki have helped me a lot. This sharing of knowledge that I want to do with you, I want to do it in joy, love and light.",
  },
  { sophroTitle: "Sophrology" },
  { sophroSubTitle1: "What is sophrology?" },
  {
    sophroPara1:
      "Created in the 60 by Alfredo CAYCEDO Neuro­psycholo­chiatriste, sophrology is inspired by several disciplines such as hypnosis, and eastern techniques such as yoga and zen. A real mix of eastern and western technique.",
  },
  {
    sophroPara2:
      "The study of the consciousness in harmony Sophrology combines breathing exercises, simple movements and visualisation, guided in a state of relaxation, to bring better awareness and harmony to the body and mind and to reach inner resources. It can be easily re-enacted in everyday life – in the workplace, on the train, in an exam, in the classroom – to help overcome specific obstacles, such as stress and anxiety, and to help foster a state of calmness and positivity.",
  },
  { sophroSubTitle2: "The 5 principles of Sophrology" },
  { sophroUl1Li1: "\u2b27 Body awareness" },
  { sophroUl1Li1Span: "We learn to listen to our body" },
  { sophroUl1Li2: "\u2b27 Repetition" },
  { sophroUl1Li2Span: "The more you practice the greater the benefits." },
  { sophroUl1Li3: "\u2b27 Objective Reality" },
  {
    sophroUl1Li3Span:
      "We learn to accept things as they are with no judgement.",
  },
  { sophroUl1Li4: "\u2b27 Adaptability" },
  {
    sophroUl1Li4Span:
      "The sophrologist adapts his session (exercises, words, pace, terpnos logos) to his client or group – the client creates his own tool box with exercises that suit and work for him.",
  },
  { sophroUl1Li5: "\u2b27 Positive Action" },
  {
    sophroUl1Li5Span:
      "We bring our attention on the positive, creating a positive-chain reaction.",
  },
  { sophroSubTitle3: "WHO IS IT FOR?" },
  {
    sophroPara3:
      "Activity based on “Sophrology for Life” for children, adolescents, adults Accessible to all, sophrology adapts perfectly to the individual's needs using simple and effective exercises.",
  },
  {
    sophroSubTitle4:
      "Adults, take a time out of the stress of modern life and time IN to rebalance your life and yourself.",
  },
  { sophroUl2Li1: "\u2b27 Learn to relax, calm the mind and let go" },
  { sophroUl2Li2: "\u2b27 Feel calmer and learn to respond rather than react" },
  { sophroUl2Li3: "Regain restful sleep and increased energy levels" },
  { sophroUl2Li4: "\u2b27 Stimulate organ functions" },
  { sophroUl2Li5: "\u2b27 Increased self-confidence, self esteem" },
  {
    sophroUl2Li6:
      "\u2b27 Face life challenges and changes: unemployment, divorce, mourning…",
  },
  {
    sophroUl2Li7:
      "\u2b27 Prepare for a particular event (birth, performance, surgery…)",
  },
  {
    sophroUl2Li8:
      "	\u2b27 Promote self-awareness and positive thinking and communication",
  },
  { sophroUl2Li9: "\u2b27 Feel more focused" },
  { sophroUl2Li10: "\u2b27 Build motivation and creativity" },
  {
    sophroSubTitle5:
      "Parents, carers and caring professionals, take a time to listen in - care for yourself first - so you can care for others better.",
  },
  { sophroSubTitle6: "Children and adolescents" },
  {
    sophroSubTitle7:
      "Free our children and adolescents from stress and limitations.",
  },
  {
    sophroPara4:
      "In today's fast and pressurised world, our children and teenagers have demanding lives at home, in schools and in their social life. They are taught from an early age to listen out and conform to expectations. This can create tensions that sometimes manifest through their body (belly ache, headaches, tears, impulsive movements).",
  },
  { sophroSubTitle8: "How can Sophrology help ?" },
  { sophroPara5: "Sophrology is a tool that empowers them by:" },
  {
    sophroUl3Li1:
      "\u2b27 Teaching them to be aware and use their breathing to calm down, release tensions and befriend their emotions",
  },
  {
    sophroUl3Li2:
      "\u2b27 Stimulating their creativity, their curiosity, their imagination",
  },
  { sophroUl3Li3: "\u2b27 Increase their concentration and memory" },
  { sophroUl3Li4: "\u2b27 Encouraging their independence" },
  { sophroUl3Li5: "\u2b27 Strengthening their presence to the world" },
  {
    sophroUl3Li6:
      "\u2b27 Making them aware and teach them to “read” the language of their body, and their sensorial perceptions",
  },
  {
    sophroSubTitle9:
      "Sophrology is used for exam preparation, sleep, anxiety, self-confidence, change management.",
  },
  { sophroSubTitle10: "Sophrology for Corporate" },
  { sophroSubTitle11: "Nurturing your talents" },
  {
    sophroPara6:
      "Sophrology is great for the corporate world. It can be easily used at a desk and incorporated into your daily life or at moments of increased pressure.",
  },
  {
    sophroPara7:
      " It offers practical tools and strategies to increase the wellbeing of employees but also to:",
  },
  { sophroUl4Li1: "\u2b27 Increase performance and creativity," },
  { sophroUl4Li2: "\u2b27 Prevent burn out," },
  { sophroUl4Li3: "\u2b27 Decrease impact of stress," },
  { sophroUl4Li4: "\u2b27 Reinforce team bonding," },
  { sophroUl4Li5: "\u2b27 Build motivation and confidence," },
  { sophroUl4Li6: "\u2b27 Promote positive communication," },
  {
    sophroUl4Li7:
      "\u2b27 Attract new talents who know they will achieve excellence whilst being taking care of in a holistic way.",
  },
  { reikiTitle: "Reiki" },
  { reikiSubTitle1: "About REIKI" },
  { reikiPara1: "" },
  { reikiPara2: "" },
  { reikiPara3: "Rei meaning Universal" },
  { reikiPara4: "Ki meaning energy or life force" },
  {
    reikiPara5:
      "Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    reikiPara6:
      "Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    reikiPara7:
      "The energy involved in Reiki healing is the universal energy that surrounds all life. You cannot see this energy as it operates on a frequency that is too fast for the naked eye to see, yet Reiki energy flows freely through you.",
  },
  {
    reikiPara8:
      "Reiki has proved to be of great benefit for a broad range of conditions. It is used to complement conventional therapies in hospitals across the world.",
  },
  {
    reikiPara9:
      "Reiki Treatmentscan be given anywhere at anytime as no special equipment is needed. The practitioner is a channel which the energy is drawn through by the need or imbalance in the recipient. Neither person has to use any effortof willor concentration during this process.",
  },
  {
    reikiPara10:
      "Reiki is for everyone from the youngest baby to the most senior “senior citizen”.",
  },
  {
    reikiPara11:
      "Reiki has a very positive effect on all ailments and can be used veryeffectively in conjunction with other medical treatments.",
  },
  {
    reikiPara12:
      "The method of receiving a Reiki treatment from a practitioner is a very simple process. The recipient simply lies on a Reiki table (plinth) andif they are unable to lie down the treatment can be given in a sitting position. The mainconcern is for the recipient to be as comfortable as possible and there is no need to remove any clothing as Reiki willpass through anything. The practitioner gentlyplaces their hands non-intrusivelyin a sequence of positions which cover theentire body. Theperson is treated rather than specific symptoms and the person giving the treatment does not diagnose or try to control what happens.",
  },
  {
    reikiPara13:
      "A full treatment usually takes 1 hour and 15 minutes to 1½ hours.It is importantto take four treatments in a row of four days for maximum benefit.",
  },
  { reikiSubTitle2: "The reported Benefits of Reiki:" },
  { reikiUl1Li1: "\u2b27 Boost the immune system" },
  { reikiUl1Li2: "\u2b27 Reduce Stress" },
  { reikiUl1Li3: "\u2b27 Increase energy" },
  { reikiUl1Li4: "\u2b27 Promote relaxation" },
  { reikiUl1Li5: "\u2b27 Improve focus and clarity of mind." },
  { reikiUl1Li6: "\u2b27 Enhance self-confidence" },
  { reikiUl1Li7: "\u2b27 Help with the grieving process" },
  { reikiUl1Li8: "\u2b27 Complement other therapies" },
  {
    reikiUl1Li9:
      "\u2b27 Accelerate the healing process after injuries and surgery",
  },
  { reikiUl1Li10: "\u2b27 Benefit chronic and acute medical conditions" },
  { reikiUl1Li11: "\u2b27 Help to maintain health and well-being" },
  { reikiUl1Li112: "\u2b27 Compliments conventional therapies" },
  { reikiSubTitle3: "Reiki Distance" },
  { reikiPara14: "The energy knows no concept of time, or space." },
  {
    reikiPara15:
      "Reiki distance therefore allows you to be scheduled and received when you want, at the best time of your day or evening. Reiki energy is made available to the person.",
  },
  {
    reikiPara16:
      "This is a special moment, a moment of CALM and WELLNESS. You just have to relax, close your eyes, you let go by giving you a few minutes just for you. After a first contact by phone, you tell me about your situation and your expectations regarding care.",
  },
  {
    reikiPara17:
      "Depending on your needs, we can work on a treatment program, established over the week or the month. It is interesting to work over time. The reiki distance will accompany you in your PROCESS. Whatever your problem,reiki will act globally on your whole body and your whole being.",
  },
  { reikiSubTitle4: "Clarification on how Reiki works from a distance" },
  {
    reikiPara18:
      "ENERGY goes where INTENT takes it, without the human limitations of TIME and SPACE. It may come as a surprise, but the facts are there.",
  },
  {
    reikiPara19:
      "We can thus work on the LIBERATION of CELLULAR MEMORIES most of the time unconscious, anchored in our body by conditioning.",
  },
  {
    reikiPara20:
      "The principle of distance healing is to make Reiki energy available to a person in the PAST, PRESENT or FUTURE. The energy follows the thought so Reiki will go where the intention is.",
  },
  {
    reikiPara21:
      "The energy transmitted for reiki distance is established with the symbols. Reiki symbols are sacred designs used to give and receive the energy of the universal life force. They are like an antenna to activate and receive energy. Thus, one cantransmit reiki ACROSS THE EARTH.",
  },
  {
    reikiPara22:
      "Reiki distance can, for some people, promote letting go (faster and easier) to receive Reiki energy without mental resistance.",
  },
  {
    reikiPara23:
      "The duration of reiki distance treatment is between 15 and 20 min. The treatments are shorter but just as effective as a traditional treatment by laying on of hands. You should know that the effectiveness of Reiki is not proportional to the duration of the treatment performed.",
  },
  { contactTitle: "You can contact me via this form or via the links below." },
  {
    contactForm: `<a target="_blank"  href="https://forms.gle/42yqmJ26zecSsn5i9" aria-label="contact form"><img loading="lazy"   src="/assets/images/formen-s.webp" alt=""></a>`,
  },
  { contactPara1: "Click on the image to be redirected to the contact form." },
  {
    contactPhone: `<a class="btn btn-icon btn-phone" href="tel:+353870623425"><i class="fas fa-phone"></i><span>+353870623425</span></a>`,
  },
];

// choix de la langue dans localstorage
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "fr");
}
const chosenLang = localStorage.getItem("lang");

//event pour chargement ou changement de la langue
window.addEventListener("load", setLang);
langSwitcher.addEventListener("click", switchLang);

//au load

window.addEventListener("load", stopLoader);
let loaded = sessionStorage.getItem("loaded") || false;
console.log(loaded);
if (loaded) {
  loader.style.display = "none";
}
sessionStorage.setItem("loaded", loaded);
function stopLoader() {
  setTimeout(() => {
    loaded = true;
    sessionStorage.setItem("loaded", loaded);
  }, 3000);
}
setTimeout(() => {
  loader.classList.add("loader-hidden");
}, "3000");

function setLang() {
  if (!loaded) {
    loader.style.display = "block";
  }
  window.scrollTo(0, 0);

  setTimeout(function () {
    loader.style.display = "none";
    header.style.zIndex = "999";
  }, 1000);
  html.setAttribute("lang", chosenLang);
  if (html.getAttribute("lang") === "fr") {
    writeInFrench();
  } else if (html.getAttribute("lang") === "en") {
    writeInEnglish();
  }
}
//au switch
function switchLang() {
  if (html.getAttribute("lang") === "fr") {
    html.setAttribute("lang", "en");
    localStorage.setItem("lang", "en");
    writeInEnglish();
  } else {
    html.setAttribute("lang", "fr");
    localStorage.setItem("lang", "fr");
    writeInFrench();
  }
}
function writeInFrench() {
  i18n.forEach((element) => {
    let attribut = element.getAttribute("data-i18n");
    let objetCorrespondant = fr.find(
      (item) => Object.keys(item)[0] === attribut
    );
    if (objetCorrespondant) {
      let valeur = Object.values(objetCorrespondant)[0];
      element.innerHTML = valeur;
    }
  });
}

function writeInEnglish() {
  i18n.forEach((element) => {
    let attribut = element.getAttribute("data-i18n");
    let objetCorrespondant = en.find(
      (item) => Object.keys(item)[0] === attribut
    );
    if (objetCorrespondant) {
      let valeur = Object.values(objetCorrespondant)[0];
      element.innerHTML = valeur;
    }
  });
}
