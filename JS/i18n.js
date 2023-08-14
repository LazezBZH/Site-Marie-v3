const langSwitcher = document.querySelector(".lang-switcher");
const html = document.querySelector("html");
// const contact2 = document.querySelector(".contact2");
// const contact4 = document.querySelector(".contact4");
const loader = document.querySelector(".loader");
const header = document.querySelector("header");
// let lang = "";

const i18n = document.querySelectorAll(".i18n");

let fr = [
  { switch: "English website" },
  { h1: "Marie Aballea: Sophrologie et Reiki. France/Irlande" },
  { navHome: "Accueil" },
  { navAbout: "Qui suis-je" },
  { navSophro: "Sophrologie" },
  { navDefs: "Qu'est-ce que la sophrologie?" },
  { navAdults: "Pour les adultes" },
  { navChildren: "Pour les enfants et les adolescents" },
  { navBusiness: "En entreprise" },
  { navReiki: "Reiki" },
  { navDefr: "Qu'est-ce que le Reiki?" },
  { navBenefitsr: "Les bienfaits du Reiki" },
  { navDistancer: "Reiki à distance" },
  { navContact: "Contact" },
  { home0: "Bienvenue sur mon site web!" },
  { home1: "La sophrologie" },
  {
    home2:
      "Créée dans les années 60 par Alfredo CAYCEDO Neuropsychiatre, la sophrologie s'inspire de plusieurs disciplines telles que l'hypnose ainsi que des  techniques orientales comme le yoga and le zen. L'union de techniques orientales et occidentales.",
  },
  {
    home3:
      "La sophrologie est une discipline qui aide chacun de nous à atteindre sérénité et bien-être via des techniques de développement personnel qui vont agir sur le corps et l'esprit. Elle combine des exercices axés sur la respiration et la concentration, la relaxation musculaire et l'imagerie mentale (visualisation).",
  },
  { home4: "En savoir plus" },
  { home5: "Le reiki" },
  {
    home6:
      "Le Reiki est une méthode de soins énergétiques qui s'adresse à tous. D'origine Japonaise, il a été fondé par le Japonais Mikao Usui dans les années 1920.",
  },
  {
    home7:
      "Le mot Reiki est composé de deux mots : “REI” signifiant l'énergie vitale universelle “KI” signifiant l'énergie qui est en nous.",
  },
  { about1: "Mon parcours" },
  {
    about2:
      "J'ai eu un parcours très courant, Boulot, Maison, Dodo et quelques semaines de vacances par an...",
  },
  {
    about22:
      "Je ressentais un mal être constant et j'ai recherché et essayé plusieurs approches jusqu'à ce qu' une rencontre joyeuse me fasse découvrir la sophrologie évolutive. L'école, qui enseigne la sophrologie évolutive, ne prend que des apprenant(e)s qui ont déjà fait un travail personnel très approfondi sur eux/elles.",
  },
  {
    about3:
      "Nous, thérapeutes, devons être pleinement attentifs aux besoins des personnes qui viennent nous voir. Pour aider quelqu'un il faut d'abord s'aider soi même.",
  },
  {
    about4:
      "Cette école prend des apprenant(e)s, quelques soient leurs origines sociales, scolaires, etc. Elle prend avant tout des humain(e)s qui souhaitent aider d'autres humain(e)s. Diplôme en poche, en 2010 j'ouvre mon premier cabinet de sophrologie à Saint Méen le Grand. J'ai réalisé que je désirais continuer ce cheminement de découverte personnelle et ai donc fait le choix de découvrir le Reiki.",
  },
  {
    about42:
      "Cependant, je me sentais attirée par l'Irlande depuis plusieurs années; j'ai donc écouté mon coeur et pris la décision de venir vivre en Irlande.",
  },
  {
    about43:
      "Je continue d'accompagner mes clients en Bretagne par Skype ou WhatsApp.",
  },
  {
    about5:
      "Je souhaite partager avec vous ce que la relaxation et le Reiki m'ont apporté. Je suis un être humain comme vous, avec également un chemin de vie qui a parfois été un peu compliqué. La sophrologie et le Reiki m'ont beaucoup aidée. Ce partage de connaissances que je veux faire avec vous, je souhaite le faire dans la joie, l'amour et la lumière.",
  },
  { sophro0: "Sophrologie." },
  { sophro1: "Qu'est-ce que la sophrologie?" },
  {
    sophro2:
      "Créée dans les années 60 par Alfredo CAYCEDO Neuropsycholochiatriste, la sophrologie s'inspire de plusieurs disciplines comme l'hypnose, et des techniques orientales comme le yoga et le zen. Un vrai mélange de technique orientale et occidentale. ",
  },
  {
    sophro3:
      "La sophrologie combine des exercices de respiration, des mouvements simples et de la visualisation, guidés dans un état de relaxation, afin d'apporter une harmonie entre le corps et l'esprit pour accéder aux ressources intérieures. Cela  peut être facilement reproduit dans la vie de tous les jours - sur le lieu de travail, dans le train, lors d'un examen, en classe -afin aider à surmonter des obstacles spécifiques, tels que le stress et l'anxiété, et pour favoriser un état de calme et de positivité. ",
  },
  { sophro4: "Les 5 principes de la Sophrologie" },
  { sophro6: " 	\u2b27 Conscience corporelle" },
  { sophro6et2: "	Nous apprenons à écouter notre corps" },
  { sophro7: "\u2b27  Répétition" },
  { sophro7et2: "Plus vous pratiquez, plus les avantages sont importants." },
  { sophro8: "\u2b27 Réalité objective" },
  {
    sophro8et2:
      "Nous apprenons à accepter les choses telles qu'elles sont sans jugement.",
  },
  { sophro9: "\u2b27 Adaptabilité" },
  {
    sophro9et2:
      "Le sophrologue adapte sa séance (exercices, mots, rythme, logos terpnos) à son client ou groupe. Le client crée sa propre boîte à outils avec des exercices qui lui conviennent et qui fonctionnent pour lui.",
  },
  { sophro10: "\u2b27 Action positive" },
  {
    sophro10et2:
      "Nous attirons notre attention sur le positif, créant une réaction en chaîne positive.",
  },
  { sophro11: "La sophrologie s'adapte à qui vous êtes." },
  { sophro11et2: "" },
  {
    sophro12:
      "Adultes, sortez du stress de la vie moderne et prenez du temps pour vous afin de  rééquilibrer votre vie.",
  },
  {
    sophro13:
      "\u2b27 Apprenez à vous détendre, à calmer l'esprit et à lâcher prise",
  },
  {
    sophro14:
      "\u2b27 Retrouvez un sommeil réparateur et des niveaux d'énergie accrus",
  },
  { sophro15: "\u2b27 Stimulez les fonctions des organes" },
  {
    sophro16: "\u2b27 Augmentation de la confiance en soi, de l'estime de soi",
  },
  {
    sophro17:
      "\u2b27 Faire face aux défis et aux changements de la vie: chômage, divorce, deuil…",
  },
  {
    sophro18:
      "\u2b27 Préparez-vous à un événement particulier (naissance, représentation, chirurgie…)",
  },
  {
    sophro19:
      "	\u2b27 Prendre conscience de soi de la pensée et la communication positives Sentez-vous plus concentré",
  },
  { sophro20: "\u2b27 Développez la motivation et la créativité." },
  { sophro20et2: "" },
  { sophro20et3: "" },
  {
    sophro21:
      "Parents, soignants et professionnels attentionnés, prenez le temps d'écouter prenez soin de vous afin de mieux vous occuper des autres.",
  },
  { sophro22: "Enfants et adolescents" },
  { sophro23: "Libérez les enfants et adolescents du stress et des limites." },
  {
    sophro24:
      "Dans le monde rapide et pressurisé d'aujourd'hui, les enfants et les adolescents ont des vies exigeantes à la maison, à l'école et dans leur vie sociale. Ils apprennent dès leur plus jeune âge à écouter et à se conformer aux attentes. Cela peut créer des tensions qui se manifestent parfois à travers leur corps (maux de ventre, maux de tête, larmes, mouvements impulsifs).",
  },
  { sophro25: "Comment la Sophrologie peut-elle aider?" },
  { sophro26: "La sophrologie est un outil qui leur permet de:" },
  {
    sophro27:
      "\u2b27 Leur apprendre à être conscients et à utiliser leur respiration pour se calmer relâcher les tensions et se lier d'amitié avec leurs émotions",
  },
  {
    sophro28:
      "\u2b27 Stimuler leur créativité, leur curiosité, leur imagination",
  },
  { sophro29: "\u2b27 Augmenter leur concentration et leur mémoire" },
  { sophro30: "\u2b27 Encourager leur indépendance" },
  { sophro31: "\u2b27 Renforcer leur présence dans le monde" },
  {
    sophro32:
      "\u2b27 Les sensibiliser et leur apprendre à «lire» le langage de leur corps et leurs perceptions sensorielles",
  },
  {
    sophro33:
      "La sophrologie est utilisée pour la préparation aux examens, le sommeil, l'anxiété, la confiance en soi, la gestion du changement.",
  },
  { sophro34: "Sophrologie pour l'entreprise " },
  { sophro35: "Nourrir vos talents." },
  {
    sophro36:
      "La sophrologie est idéale pour le monde de l'entreprise. Il peut être facilement utilisé à un bureau et intégré à votre vie quotidienne ou à des moments de pression accrue.",
  },
  {
    sophro37:
      "Il propose des outils et des stratégies pratiques pour augmenter le bien-être des collaborateurs mais aussi pour:",
  },
  { sophro38: "\u2b27 Augmenter les performances et la créativité," },
  { sophro39: "\u2b27 Éviter le burn out," },
  { sophro40: "\u2b27 Diminuer l'impact du stress," },
  { sophro41: "\u2b27 Renforcer les liens d'équipe," },
  { sophro42: "\u2b27 Développer la motivation et la confiance," },
  { sophro43: "\u2b27 Promouvoir une communication positive," },
  {
    sophro44:
      "\u2b27 Attirer de nouveaux talents qui savent qu'ils atteindront l'excellence tout en étant pris en charge de manière holistique.",
  },
  { reiki1: "Reiki" },
  { reiki2: "Qu'est-ce que le Reiki?" },
  {
    reiki3:
      " Le Reiki est une méthode de soins énergétiques qui s'adresse à tous. D'origine Japonaise, il a été fondé par le Japonais Mikao Usui dans les années 1920.",
  },
  { reiki4: "Le mot Reiki est composé de deux mots :" },
  { reiki5: "“REI” signifiant l'énergie vitale universelle" },
  { reiki6: "“KI” signifiant l'énergie qui est en nous." },
  {
    reiki7:
      "Le Reiki est reconnu comme un “Super Carburant”, il agit de manière harmonieuse sur tous les plans de l'être, physique, émotionnel, mental et spirituel pour une amélioration globale du bien-être.",
  },
  { reiki72: "" },
  { reiki73: "" },
  { reiki74: "" },
  { reiki75: "" },
  { reiki76: "" },
  { reiki77: "" },
  { reiki78: "" },
  { reiki79: "" },
  { reiki8: "Les bienfaits du Reiki:" },
  { reiki9: "\u2b27 Renforce le système immunitaire" },
  { reiki10: "\u2b27 Réduit le stress" },
  { reiki11: "\u2b27 Augmente l'énergie" },
  { reiki12: "\u2b27 Permet la relaxation" },
  { reiki13: "\u2b27 Améliore la concentration et la clarté d'esprit" },
  { reiki14: "\u2b27 Accroit la confiance en soi" },
  { reiki15: "\u2b27 Aide à faire son deuil" },
  { reiki16: "\u2b27 Complète d'autres thérapies" },
  {
    reiki17:
      "\u2b27 Accélère la cicatrisation après une blessure ou une opération",
  },
  { reiki18: "\u2b27 Bénéfique pour des pathologies chroniques ou aiguës" },
  { reiki19: "\u2b27 Aide à se maintenir en bonne santé et dans le bien-être" },
  { reiki20: "\u2b27 Complète les thérapies conventionnelles" },
  { reiki21: "Soin Reiki à distance" },
  { reiki22: "L'énergie ne connaît ni la notion de temps, ni celle d'espace." },
  {
    reiki23:
      "Les soins à distance permettent donc d'être programmés et reçus quand vous le souhaitez, au meilleur moment de votre journée ou soirée. </br> L'énergie Reiki est mise à disposition de la personne.",
  },
  {
    reiki24:
      "C'est un moment privilégié, un instant de CALME et de BIEN-ÊTRE. Vous n'avez plus qu'à vous détendre, fermer les yeux, vous laisser aller en vous accordant quelques minutes juste pour vous. Après un premier contact par téléphone, vous m'exposez votre situation et vos attentes par rapport aux soins.",
  },
  {
    reiki25:
      "En fonction de vos besoins, nous pouvons travailler sur un programme de soins, établi sur la semaine ou le mois. Il est intéressant de travailler sur la durée. Le soin à distance va vous accompagner dans votre PROCESSUS. Quel que soit votre problème, le reiki agira globalement sur tout votre corps et tout votre être.",
  },
  { reiki26: "Précision sur le fonctionnement du Reiki à distance" },
  {
    reiki27:
      "L'ÉNERGIE va où L'INTENTION la porte, sans les limites humaines du TEMPS et de L'ESPACE . Cela peut surprendre mais les faits sont là.",
  },
  {
    reiki28:
      "Le principe des soins à distance est de mettre l'énergie Reiki à la disposition d'une personne dans le PASSÉ, le PRÉSENT ou le FUTUR. L'énergie suit la pensée donc le Reiki ira où l'intention est émise.",
  },
  {
    reiki29:
      "On peut ainsi travailler sur la LIBÉRATION des MÉMOIRES CELLULAIRES la plupart du temps inconscientes, ancrées dans notre corps par des conditionnements.",
  },
  {
    reiki30:
      "L'énergie transmise pour les soins à distance est établie avec les symboles. Les symboles du Reiki sont des dessins sacrés utilisés pour donner et recevoir l'énergie de la force de vie universelle. Ils sont comme une antenne pour activer et recevoir l'énergie. Ainsi, on peut transmettre le reiki À L'AUTRE BOUT DE LA TERRE.",
  },
  {
    reiki31:
      "Le traitement à distance peut, pour certaines personnes, favoriser un lâcher prise (plus rapide et plus facile) pour recevoir l'énergie Reiki sans résistances mentales. La durée d'un soin à distance est comprise entre 15 et 20 min. Les soins sont plus courts mais tout aussi efficaces qu'un soin classique par imposition des mains. Il faut savoir que l'efficacité du Reiki n'est pas proportionnelle à la durée du soin pratiqué.",
  },
  { reiki32: "" },
  {
    contact1:
      "Vous pouvez me contacter via ce formulaire ou via les liens ci-dessous.",
  },
  {
    contact2:
      '<a href="https://forms.gle/uNt3CuQX9QPtZv318"><img src="/images/formfr.jpg" alt=""></a>',
  },
  {
    contact3:
      "Cliquez sur l'image pour être redirigé vers le formulaire de contact.",
  },
  {
    contact4: `<a class="btn btn-icon btn-phone" href="tel:+33650335412"><i class="fas fa-phone"></i><span>+33650335412</span></a>`,
  },
];

let en = [
  { switch: "Site en français" },
  { h1: "Marie Aballea: Sophrology and Reiki.  Eire/France" },
  { navHome: "Home" },
  { navAbout: "Who am I?" },
  { navSophro: "Sophrology" },
  { navDefs: "What is sophrology?" },
  { navAdults: "For adults" },
  { navChildren: "For children and adolescents" },
  { navBusiness: "For corporate" },
  { navReiki: "Reiki" },
  { navDefr: "What is Reiki?" },
  { navBenefitsr: "Reported benefits of Reiki" },
  { navDistancer: "Reiki distance" },
  { navContact: "Contact me" },
  { home0: "Welcome on my website!" },
  { home1: "Sophrology" },
  {
    home2:
      "Created in the 60 by Alfredo CAYCEDO Neuropsycholochiatriste, sophrology is inspired by several disciplines such as hypnosis, and eastern techniques such as yoga and zen. A real mix of eastern and western technique.",
  },
  {
    home3:
      "Sophrology it's a discipline that help every one of us to develop to have serenity and well-being through personal development based techniques that will affect the body and the mind .It combines exercises that s focus on breathing and concentration, muscle relaxation and mental imagery (also visualisation).",
  },
  { home4: "read more" },
  { home5: "Reiki" },
  {
    home6:
      "Rei meaning Universal.  Ki meaning energy or life force. Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    home7:
      "The energy involved in Reiki healing is the universal energy that surrounds all life. You cannot see this energy as it operates on a frequency that is too fast for the naked eye to see, yet Reiki energy flows freely through you.",
  },
  { about1: "I'm qualified sophrologist and in reiki as well." },
  {
    about2:
      "I had a very common career, Work, Home, Dodo and a few weeks of vacation per year... ",
  },
  {
    about22:
      "I felt a constant uneasiness and I researched and tried several approaches until a joyful meeting made me discover progressive sophrology.",
  },
  {
    about3:
      "Once graduated in 2010 I opened my first sophrology practice in Saint Méen le Grand in Brittany (France). As I went along, I realized that I wanted to continue this beautiful path of self-discovery. So I made the choice to go to meet reiki. ",
  },
  {
    about4:
      "Meeting also very joyful and surprising. And so I trained in level 1 and 2 of reiki in Brittany, where I practiced these two complementary approaches in my office in order to allow clients to meet themselves.",
  },
  {
    about42:
      "However for several years Ireland called me. So I listened to my heart and made the decision to live in Ireland. I continue to support clients in Brittany via Skype or WhatsApp.",
  },
  {
    about43:
      "Today I want to share with you what relaxation therapy and reiki have given me. I am a human being like you and I also had a life path which at times could have been a little complicated.",
  },
  {
    about5:
      "Sophrology and reiki have helped me a lot. This sharing of knowledge that I want to do with you, I want to do it in joy, love and light.",
  },
  { sophro0: "Sophrology" },
  { sophro1: "What is sophrology?" },
  {
    sophro2:
      "Created in the 60 by Alfredo CAYCEDO Neuro­psycholo­chiatriste, sophrology is inspired by several disciplines such as hypnosis, and eastern techniques such as yoga and zen. A real mix of eastern and western technique.",
  },
  {
    sophro3:
      "The study of the consciousness in harmony Sophrology combines breathing exercises, simple movements and visualisation, guided in a state of relaxation, to bring better awareness and harmony to the body and mind and to reach inner resources. It can be easily re-enacted in everyday life – in the workplace, on the train, in an exam, in the classroom – to help overcome specific obstacles, such as stress and anxiety, and to help foster a state of calmness and positivity.",
  },
  { sophro4: "The 5 principles of Sophrology" },
  { sophro6: "\u2b27 Body awareness" },
  { sophro6et2: "We learn to listen to our body" },
  { sophro7: "\u2b27 Repetition" },
  { sophro7et2: "The more you practice the greater the benefits." },
  { sophro8: "\u2b27 Objective Reality" },
  { sophro8et2: "We learn to accept things as they are with no judgement." },
  { sophro9: "\u2b27 Adaptability" },
  {
    sophro9et2:
      "The sophrologist adapts his session (exercises, words, pace, terpnos logos) to his client or group – the client creates his own tool box with exercises that suit and work for him.",
  },
  { sophro10: "\u2b27 Positive Action" },
  {
    sophro10et2:
      "We bring our attention on the positive, creating a positive-chain reaction.",
  },
  { sophro11: "WHO IS IT FOR?" },
  {
    sophro11et2:
      "Activity based on “Sophrology for Life” for children, adolescents, adults Accessible to all, sophrology adapts perfectly to the individual's needs using simple and effective exercises.",
  },
  {
    sophro12:
      "Adults, take a time out of the stress of modern life and time IN to rebalance your life and yourself.",
  },
  { sophro13: "\u2b27 Learn to relax, calm the mind and let go" },
  { sophro14: "\u2b27 Feel calmer and learn to respond rather than react" },
  { sophro15: "Regain restful sleep and increased energy levels" },
  { sophro16: "\u2b27 Stimulate organ functions" },
  { sophro17: "\u2b27 Increased self-confidence, self esteem" },
  {
    sophro18:
      "\u2b27 Face life challenges and changes: unemployment, divorce, mourning…",
  },
  {
    sophro19:
      "\u2b27 Prepare for a particular event (birth, performance, surgery…)",
  },
  {
    sophro20:
      "	\u2b27 Promote self-awareness and positive thinking and communication",
  },
  { sophro20et2: "\u2b27 Feel more focused" },
  { sophro20et3: "\u2b27 Build motivation and creativity" },
  {
    sophro21:
      "Parents, carers and caring professionals, take a time to listen in - care for yourself first - so you can care for others better.",
  },
  { sophro22: "Children and adolescents" },
  {
    sophro23: "Free our children and adolescents from stress and limitations.",
  },
  {
    sophro24:
      "In today's fast and pressurised world, our children and teenagers have demanding lives at home, in schools and in their social life. They are taught from an early age to listen out and conform to expectations. This can create tensions that sometimes manifest through their body (belly ache, headaches, tears, impulsive movements).",
  },
  { sophro25: "How can Sophrology help ?" },
  { sophro26: "Sophrology is a tool that empowers them by:" },
  {
    sophro27:
      "\u2b27 Teaching them to be aware and use their breathing to calm down, release tensions and befriend their emotions",
  },
  {
    sophro28:
      "\u2b27 Stimulating their creativity, their curiosity, their imagination",
  },
  { sophro29: "\u2b27 Increase their concentration and memory" },
  { sophro30: "\u2b27 Encouraging their independence" },
  { sophro31: "\u2b27 Strengthening their presence to the world" },
  {
    sophro32:
      "\u2b27 Making them aware and teach them to “read” the language of their body, and their sensorial perceptions",
  },
  {
    sophro33:
      "Sophrology is used for exam preparation, sleep, anxiety, self-confidence, change management.",
  },
  { sophro34: "Sophrology for Corporate" },
  { sophro35: "Nurturing your talents" },
  {
    sophro36:
      "Sophrology is great for the corporate world. It can be easily used at a desk and incorporated into your daily life or at moments of increased pressure.",
  },
  {
    sophro37:
      " It offers practical tools and strategies to increase the wellbeing of employees but also to:",
  },
  { sophro38: "\u2b27 Increase performance and creativity," },
  { sophro39: "\u2b27 Prevent burn out," },
  { sophro40: "\u2b27 Decrease impact of stress," },
  { sophro41: "\u2b27 Reinforce team bonding," },
  { sophro42: "\u2b27 Build motivation and confidence," },
  { sophro43: "\u2b27 Promote positive communication," },
  {
    sophro44:
      "\u2b27 Attract new talents who know they will achieve excellence whilst being taking care of in a holistic way.",
  },
  { reiki1: "Reiki" },
  { reiki2: "About REIKI" },
  { reiki3: "" },
  { reiki4: "" },
  { reiki5: "Rei meaning Universal" },
  { reiki6: "Ki meaning energy or life force" },
  {
    reiki7:
      "Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    reiki72:
      "Is a gentle yet powerful form of hands-on healing that can help to restore balance and harmony to the mind and body. Used throughout the world by people of all creeds and belief systems, Reiki is something that can benefit everyone.",
  },
  {
    reiki73:
      "The energy involved in Reiki healing is the universal energy that surrounds all life. You cannot see this energy as it operates on a frequency that is too fast for the naked eye to see, yet Reiki energy flows freely through you.",
  },
  {
    reiki74:
      "Reiki has proved to be of great benefit for a broad range of conditions. It is used to complement conventional therapies in hospitals across the world.",
  },
  {
    reiki75:
      "Reiki Treatmentscan be given anywhere at anytime as no special equipment is needed. The practitioner is a channel which the energy is drawn through by the need or imbalance in the recipient. Neither person has to use any effortof willor concentration during this process.",
  },
  {
    reiki76:
      "Reiki is for everyone from the youngest baby to the most senior “senior citizen”.",
  },
  {
    reiki77:
      "Reiki has a very positive effect on all ailments and can be used veryeffectively in conjunction with other medical treatments.",
  },
  {
    reiki78:
      "The method of receiving a Reiki treatment from a practitioner is a very simple process. The recipient simply lies on a Reiki table (plinth) andif they are unable to lie down the treatment can be given in a sitting position. The mainconcern is for the recipient to be as comfortable as possible and there is no need to remove any clothing as Reiki willpass through anything. The practitioner gentlyplaces their hands non-intrusivelyin a sequence of positions which cover theentire body. Theperson is treated rather than specific symptoms and the person giving the treatment does not diagnose or try to control what happens.",
  },
  {
    reiki79:
      "A full treatment usually takes 1 hour and 15 minutes to 1½ hours.It is importantto take four treatments in a row of four days for maximum benefit.",
  },
  { reiki8: "The reported Benefits of Reiki:" },
  { reiki9: "\u2b27 Boost the immune system" },
  { reiki10: "\u2b27 Reduce Stress" },
  { reiki11: "\u2b27 Increase energy" },
  { reiki12: "\u2b27 Promote relaxation" },
  { reiki13: "\u2b27 Improve focus and clarity of mind." },
  { reiki14: "\u2b27 Enhance self-confidence" },
  { reiki15: "\u2b27 Help with the grieving process" },
  { reiki16: "\u2b27 Complement other therapies" },
  {
    reiki17: "\u2b27 Accelerate the healing process after injuries and surgery",
  },
  { reiki18: "\u2b27 Benefit chronic and acute medical conditions" },
  { reiki19: "\u2b27 Help to maintain health and well-being" },
  { reiki20: "\u2b27 Compliments conventional therapies" },
  { reiki21: "Reiki Distance" },
  { reiki22: "The energy knows no concept of time, or space." },
  {
    reiki23:
      "Reiki distance therefore allows you to be scheduled and received when you want, at the best time of your day or evening. Reiki energy is made available to the person.",
  },
  {
    reiki24:
      "This is a special moment, a moment of CALM and WELLNESS. You just have to relax, close your eyes, you let go by giving you a few minutes just for you. After a first contact by phone, you tell me about your situation and your expectations regarding care.",
  },
  {
    reiki25:
      "Depending on your needs, we can work on a treatment program, established over the week or the month. It is interesting to work over time. The reiki distance will accompany you in your PROCESS. Whatever your problem,reiki will act globally on your whole body and your whole being.",
  },
  { reiki26: "Clarification on how Reiki works from a distance" },
  {
    reiki27:
      "ENERGY goes where INTENT takes it, without the human limitations of TIME and SPACE. It may come as a surprise, but the facts are there.",
  },
  {
    reiki28:
      "We can thus work on the LIBERATION of CELLULAR MEMORIES most of the time unconscious, anchored in our body by conditioning.",
  },
  {
    reiki29:
      "The principle of distance healing is to make Reiki energy available to a person in the PAST, PRESENT or FUTURE. The energy follows the thought so Reiki will go where the intention is.",
  },
  {
    reiki30:
      "The energy transmitted for reiki distance is established with the symbols. Reiki symbols are sacred designs used to give and receive the energy of the universal life force. They are like an antenna to activate and receive energy. Thus, one cantransmit reiki ACROSS THE EARTH.",
  },
  {
    reiki31:
      "Reiki distance can, for some people, promote letting go (faster and easier) to receive Reiki energy without mental resistance.",
  },
  {
    reiki31:
      "The duration of reiki distance treatment is between 15 and 20 min. The treatments are shorter but just as effective as a traditional treatment by laying on of hands. You should know that the effectiveness of Reiki is not proportional to the duration of the treatment performed.",
  },
  { contact1: "You can contact me via this form or via the links below." },
  {
    contact2: `<a href="https://forms.gle/42yqmJ26zecSsn5i9"><img  src="/images/formen.jpg" alt=""></a>`,
  },
  { contact3: "Click on the image to be redirected to the contact form." },
  {
    contact4: `<a class="btn btn-icon btn-phone" href="tel:+353870623425"><i class="fas fa-phone"></i><span>+353870623425</span></a>`,
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
function setLang() {
  loader.style.display = "block";
  window.scrollTo(0, 0);

  setTimeout(function () {
    loader.style.display = "none";
    header.style.zIndex = "999";
  }, 1700);
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
