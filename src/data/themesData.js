// Cards Cover Images
import HarryPotter from "../assets/hp.jfif";
import StarWars from "../assets/starwars.jfif";
import Nosferatu from "../assets/NosferatuCover.jpg";
import Ghibili from "../assets/ghibiliCover.jpg";
import StrangerThings from "../assets/StrangerThings.jpg";
import Jurassic from "../assets/jurrasicCover.jpg";
import DarkAcademia from "../assets/dark-academia.webp";
import Wizard from '../assets/readingWizard.jpg';
import Gryffindor from '../assets/Gryffindor_Card.jpeg';
import Slytherin from '../assets/Slytherin_Card.jpeg';
import Hufflepuff from '../assets/Hufflepuff_Card.jpeg';
import Ravenclaw from '../assets/Ravenclaw_Card.jpeg';



// Banner Images for each card
import HarryPotterBanner from "../assets/AlwaysBanner.jpg";
import darthVaderBanner from "../assets/darthVader.jpg";
import NosferatuBanner from "../assets/darkcastle.png";
import GhibiliBanner from "../assets/GhibiliBanner.png";
import StrangerThingsBanner from "../assets/St-banner.jpg";
import JurassicParkBanner from "../assets/DinoBanner.jpg";
import DarkAcademiaBanner from "../assets/DarkAcademiaBanner.webp";
import GryffindorBanner from '../assets/Gryff_bg.png';
import SlytherinBanner from '../assets/Slyth_bg.jpeg';
import HufflepuffBanner from '../assets/Huffle_bg.jpg';
import RavenclawBanner from '../assets/Raven_bg.jpeg';
import ArcaneBanner from '../assets/arcane-hearth.png';

// Theme Screenshot Image
import HarryPotterThemeImg from "../assets/Preview/HP-preview.png";
import StarWarsThemeImg from "../assets/Preview/StarWars-preview.png";
import NosferatuThemeImg from "../assets/Preview/Count-preview.png";
import GhibiliThemeImg from "../assets/Preview/Ghibili-preview.png";
import StrangerThingsThemeImg from "../assets/Preview/StrangerThings-preview.png";
import JurassicParkThemeImg from "../assets/Preview/Jurassic-preview.png";
import DarkAcademiaThemeImg from "../assets/Preview/DarkAcademia-preview.png";
import ArcaneThemeImg from '../assets/Preview/Arcane-preview.png';
import GryffindorThemeImg from '../assets/Preview/Gryffindor-preview.png';
import SlytherinThemeImg from '../assets/Preview/Slytherin-preview.png';
import HufflepuffThemeImg from '../assets/Preview/Hufflepuff-preview.png';
import RavenclawThemeImg from '../assets/Preview/Ravenclaw-preview.png';


export const ThemesData = [
  {
    id: 1,
    slug: "harry-potter",
    src: HarryPotter,
    alt: "HarryPotter",
    title: "Harry Potter",
    bannerImg: HarryPotterBanner,
    previewImg: HarryPotterThemeImg,
    tagline:
      " ''Magic awaits beyond Platform 9¾ — welcome to a world the Muggles couldn’t Google.'' ",
    description:
      "Step into a workspace where every keystroke feels like casting a spell. Designed for wizards of code, this theme captures the candlelit charm of Hogwarts, floating parchment vibes, and deep library nights studying spells—or debugging errors. Enchanted gold accents glow like Lumos on dark backgrounds reminiscent of the Forbidden Forest. Perfect for developers who believe magic exists in clean syntax, well-crafted logic, and unbreakable focus. Whether you're building apps or conjuring new worlds, this theme whispers, “It is our choices that show what we truly are… so choose dark mode.” Accio productivity—mischief managed!",
    themeImg: "",
    themeCode: `
  // ===================================
  // 🧙‍♂️ Harry Potter - Wizarding World 🏰
  // ===================================

  "workbench.colorCustomizations": {

    // Editor
    "editor.background": "#030a0f",
    "editor.foreground": "#d9f3ee",

    // Activity Bar
    "activityBar.background": "#0b1e26",
    "activityBar.foreground": "#8fa89a",
    "activityBarBadge.background": "#017c4d",
    "activityBarBadge.foreground": "#ffffff",

    // Side Bar
    "sideBar.background": "#000d13",
    "sideBar.foreground": "#d9f3ee",
    "sideBarSectionHeader.background": "#011f2081",
    "sideBarSectionHeader.foreground": "#a89771",
        
    // Status Bar
    "statusBar.background": "#061010",
    "statusBar.foreground": "#b4b093",

    // Title Bar
    "titleBar.activeBackground": "#0b1e26",
    "titleBar.activeForeground": "#b7cfc9", 


    // Tabs
    "tab.activeBackground": "#18292e",
    "tab.activeForeground": "#d9f3ee",
    "tab.inactiveBackground": "#030a0f",
    "tab.inactiveForeground": "#9cbdac",

    // Panels
    "panel.background": "#000d13",
    "panel.border": "#0f3b35",
    "panelTitle.activeBorder": "#00be66",

    "editorLineNumber.foreground": "#2f7f85",
    "editorLineNumber.activeForeground": "#b3b192",
    "editor.selectionBackground": "#04546d67",
    "editor.inactiveSelectionBackground": "#1f5f6665",
    "editor.selectionHighlightBackground": "#017c4df3",
    "editor.wordHighlightBackground": "#0129333f",
    "editorIndentGuide.background1": "#0f3b35",
    "editorIndentGuide.activeBackground1": "#8fa89a",

    "editorCursor.foreground": "#00be66",
      
  },


  // Editor Syntax Colors
  "editor.tokenColorCustomizations": {
    "comments": "#4e7174",
    "strings": "#8fa89a",
    "keywords": "#01c77b",
    "functions": "#b7cfc9",
    "numbers": "#8fa89a",
    "types": "#1f5f66",
    "variables": "#d9f3ee",
  


    "textMateRules": [
      {
        "scope": "comment",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "fontStyle": "bold"
        }
      }
  ]
},`,
  },
  {
    id: 2,
    slug: "star-wars",
    src: StarWars,
    alt: "StarWars",
    title: "Star Wars",
    bannerImg: darthVaderBanner,
    previewImg: StarWarsThemeImg,
    tagline:
      " ''Aim your starship at the stars — welcome to the rebellion where impossible is just hyperspace away.''",
    description:
      "Transport your workspace to a galaxy far, far away. This theme channels the infinite depth of space, the glow of lightsabers, and the discipline of a Jedi warrior. Stark contrasts mirror battles between Light and Dark, guiding your focus like a TIE Fighter across stars. Ideal for both rebels and Sith developers, it blends futuristic UI elements with calm power. When you code, feel the hum of hyperspeed thinking. Whether you build for the Empire or lead the Rebellion, remember: “Do. Or do not. There is no try.” May your code be with you—always.",
    themeImg: "",
    themeCode: `
// =====================================
// 👽 STAR WARS – Jedi Archive Echoes 🚀
// =====================================

"workbench.colorCustomizations": {

  //Editor 
  "editor.background": "#000",
  "editor.foreground": "#e6e6e6",

  //Activity Bar
  "activityBar.background": "#050608",
  "activityBar.foreground": "#ce0101",
  "activityBar.activeBorder": "#ce0101",
  "activityBarBadge.background": "#6620e9",
  "activityBarBadge.foreground": "#ffffff",

  //Side Bar
  "sideBar.background": "#000",
  "sideBar.foreground": "#c7d2fe",
  "sideBarSectionHeader.background": "#080c1a",
  "sideBarSectionHeader.foreground": "#e0e7ff",

   //Status Bar
  "statusBar.background": "#0f141b",
  "statusBar.foreground": "#84a4fa",

  //Title Bar
  "titleBar.activeBackground": "#050608",
  "titleBar.activeForeground": "#84a4fa",

  //Tabs
  "tab.activeBackground": "#303038",
  "tab.inactiveBackground": "#0b0d12",
  "tab.activeForeground": "#ffffff",
  "tab.inactiveForeground": "#94a3b8",

  //Panel
  "panel.background": "#000",
  "panel.border": "#1f2937",

  //Scrollbar
  "scrollbarSlider.background": "#47556988",
  "scrollbarSlider.hoverBackground": "#475569aa",
  "scrollbarSlider.activeBackground": "#475569cc",

  "editorCursor.foreground": "#2a91f1",

  "editorLineNumber.foreground": "#475569",
  "editorLineNumber.activeForeground": "#f0c75e",
  "editor.selectionBackground": "#1e3a8a88",
  "editor.inactiveSelectionBackground": "#1e3a8a44",
  
},

"editor.tokenColorCustomizations": {
  "comments": "#833734",
  "strings": "#adadad",
  "keywords": "#ff746f",
  "functions": "#60a5fa",
  "numbers": "#d7b22e",
  "types": "#a78bfa",
  "variables": "#e5e7eb",

  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "fontStyle": "bold"
      }
    }
  ]
},`,
  },
  {
    id: 3,
    slug: "nosferatu",
    src: Nosferatu,
    alt: "Nosferatu",
    title: "Nosferatu ",
    bannerImg: NosferatuBanner,
    previewImg: NosferatuThemeImg,
    tagline:
      " ''When the night deepens... welcome to a realm where shadows still breathe''",
    description:
      "Enter at your own risk. This gothic theme is inspired by silent shadows, moonlit castles, and the chilling elegance of classic horror. Stark monochrome tones evoke Nosferatu’s eerie silence, while faint crimson accents bleed through like forbidden secrets in the night. Perfect for late-night coders who thrive under moonlight and mystery. Every line you write feels like carving runes into ancient stone. Atmospheric, brooding, and unapologetically dramatic—this theme is not for the faint-hearted. You won't fear the darkness… you'll become it. When the sun rises, your bug report vanishes. Productivity after dusk begins here.",
    themeImg: "",
    themeCode: `
// ===================================
// 🦇 NOSFERATU – Gothic Ambience 🏰
// ===================================
 "workbench.colorCustomizations": {

  //Editor 
  "editor.background": "#020202",
  "editor.foreground": "#cfd6dd",

  //Activity Bar
  "activityBar.background": "#050608",
  "activityBar.foreground": "#8faec7",
  "activityBarBadge.background": "#df0202",
  "activityBarBadge.foreground": "#ffffff",

  //Side Bar
  "sideBar.background": "#000000",
  "sideBar.foreground": "#aab4be",
  "sideBarSectionHeader.background": "#0d1116",
  "sideBarSectionHeader.foreground": "#cfd6dd",

  //Status Bar
  "statusBar.background": "#090c0f",
  "statusBar.foreground": "#8faec7",

  //Title Bar
  "titleBar.activeBackground": "#050608",
  "titleBar.activeForeground": "#8faec7",
  "titleBar.inactiveBackground": "#050608",
  "titleBar.inactiveForeground": "#5f6b75",

  //Tabs
  "tab.activeBackground": "#020202",
  "tab.inactiveBackground": "#050608",
  "tab.activeForeground": "#e6edf3",
  "tab.inactiveForeground": "#6b7280",
  "tab.hoverBackground": "#14151a",
  "tab.hoverForeground": "#ffffff",
  "tab.activeBorderTop": "#ff0000",

  //Minimap 
  "minimap.background": "#0d0d0e",


  "list.warningForeground": "#fae677",

  //Bottom Panel
  "panel.background": "#000000",
  "panel.border": "#0d1116",

  "editorCursor.foreground": "#ff0000",
  "editorLineNumber.foreground": "#3b4252",
  "editorLineNumber.activeForeground": "#8faec7",
  "editor.selectionBackground": "#111320",
  "editor.inactiveSelectionBackground": "#1e293b44",

  //Scroll Bar
  "scrollbarSlider.background": "#081218",
  "scrollbarSlider.hoverBackground": "#1a1a1a",
  "scrollbarSlider.activeBackground": "#333232"
}
,


"editor.semanticHighlighting.enabled": false,


// ==================================
// Token colors (syntax highlighting)
// ==================================
"editor.tokenColorCustomizations": {
  "comments": "#3a3a3a",
  "strings": "#757272",
  "keywords": "#9387b3",
  "functions": "#7dd3fc",
  "variables": "#cfd6dd",
  "numbers": "#94a3b8",
  "types": "#a5b4fc",
  

  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "fontStyle": "bold"
      }
    }
    ,
    /* HTML TAG NAMES */
    {
      "scope": [
        "entity.name.tag.js.jsx",
        "meta.tag.js.jsx"
      ],
      "settings": {
        "foreground": "#db3542",
        // "fontStyle": "bold"
      }
    },

    /* JSX COMPONENT NAMES */
    {
      "scope": [
        "support.class.component.jsx",
        "support.class.component.tsx"
      ],
      "settings": {
        "foreground": "#A5B4FC"
      }
    },

    /* ATTRIBUTES */
    {
      "scope": [
        "entity.other.attribute-name.js.jsx",
        "meta.tag.attributes.js.jsx",

      ],
      "settings": {
        "foreground": "#8a8a8a"
      }
    },

    /* STRING VALUES */
    {
      "scope": [
        "string.quoted.double.js.jsx",
        "meta.tag.attributes.js.jsx"
      ],
      "settings": {
        "foreground": "#9FC5E8",
        "fontStyle": "italic",
      }
    },

  ]
}
        `,
  },
  {
    id: 4,
    slug: "ghibili",
    src: Ghibili,
    alt: "Ghibili",
    title: "Ghibili Studios",
    bannerImg: GhibiliBanner,
    previewImg: GhibiliThemeImg,
    tagline:
      " ''Wander softly — welcome to a world where spirits stir the wind and silence speaks.''",
    description:
      "A peaceful escape into a world painted by serenity and imagination. Inspired by Studio Ghibli’s dreamy forests, floating lights, and gentle pastel dusk skies, this theme invites calm concentration. Soft earth tones nurture creativity, while warm highlights spark curiosity like tiny forest spirits. Ideal for developers who see beauty in details and poetry in functions. Each tab feels like opening a new scene from Totoro’s meadow or Howl’s moving abstraction. Let code flow like wind through trees—quiet, enchanting, purposeful. Sometimes you have to take a leap… the magic begins after you start typing.",
    themeImg: "",
    themeCode: `
        
// ===================================
// 🍃 GHIBLI STUDIOS – Serene Coding 🌸
// ===================================


// If your VS Code already have a different color theme applied, 
// then add this below color theme specifically for this Ghibili Theme, 
// and remove or comment out the other "workbench.colorTheme" line.


// Base color theme is selected as Default Light+ 
"workbench.colorTheme": "Default Light+",

"workbench.colorCustomizations": {

  // Settings UI
  "foreground": "#3b2a14",
  "settings.editorBackground": "#f3e4c7",
  "settings.headerForeground": "#2f1e0f",
  "settings.settingsHeaderForeground": "#3b2a14",
  "settings.descriptionForeground": "#5a3d1a",
  "settings.textInputForeground": "#2f1e0f",
  "settings.numberInputForeground": "#2f1e0f",
  "settings.checkboxForeground": "#3b2a14",
  "settings.dropdownBackground": "#e6d7b8",
  "settings.dropdownForeground": "#3b2a14",
  "textLink.foreground": "#7a5528",
  "textLink.activeForeground": "#9c6b2f",


  // Editor
  "editor.background": "#f0e3cc",
  "editor.foreground": "#75592a",
  "editorCursor.foreground": "#999c57",
  "editor.lineHighlightBackground": "#b59b738f",
  "editor.selectionBackground": "#b1997165",
  "editor.inactiveSelectionBackground": "#59430bec",

  // Activity Bar
  "activityBar.background": "#d7c096",
  "activityBar.foreground": "#583d0f",
  "activityBar.inactiveForeground": "#b49b74",
  "activityBarBadge.background": "#05a793",
  "activityBarBadge.foreground": "#FFFFFF",
  "activityBar.activeBorder": "#e08512",

  // Sidebar
  "sideBar.background": "#e0d1b2",
  "sideBar.foreground": "#76582d",
  "sideBarSectionHeader.background": "#989b56",
  "sideBarSectionHeader.foreground": "#ffffff",
  "sideBarTitle.foreground": "#583d0f",

  "list.activeSelectionBackground": "#cbb89262",
  "list.activeSelectionForeground": "#161616",
  "list.inactiveSelectionBackground": "#d3c4a3",
  "list.hoverBackground": "#d4c2a0",
  "list.hoverForeground": "#583d0f",

  "input.background": "#b19870",
  "input.foreground": "#2b1d0e",
  "input.placeholderForeground": "#5a4325",
  "input.border": "#8a6a3f",
  "focusBorder": "#7a5528",


  // Status BAr
  "statusBar.background": "#02a998",
  "statusBar.foreground": "#ffff",
  "statusBar.noFolderBackground": "#D8E6DC",

  // Tabs
  "tab.activeBackground": "#999c57",
  "tab.activeForeground": "#ebe6e2",
  "tab.inactiveBackground": "#d2bf9b",
  "tab.inactiveForeground": "#77592c",
  "tab.hoverBackground": "#b8a67f",
  "tab.hoverForeground": "#4a3a12",
  "tab.border": "#e0d1b2",
  "tab.activeBorderTop": "#999c57",
  "editorGroupHeader.tabsBorder": "#e0d1b2",
  "editorGroupHeader.tabsBackground": "#b8a67f",


  // Title Bar
  "titleBar.activeBackground": "#02a998",
  "titleBar.activeForeground": "#ffffff",

  // Scroll Bar
  "scrollbarSlider.background": "#999c57",
  "scrollbarSlider.hoverBackground": "#999c57ce",
  "scrollbarSlider.activeBackground": "#999c57",

  // Panels
  "panel.background": "#d3bc92",
  "panel.border": "#75592a",
  "panelTitle.activeBorder": "#75592a",
  "panelTitle.activeForeground": "#75592a",
  "panelTitle.inactiveForeground": "#77582d",
  "panelSectionHeader.background": "#989b56",

  // Mini Map
  "minimap.background": "#989b5652"
},

// Editor Syntax Colors
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#5d3e0859",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#5c3f0b"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "foreground": "#749402",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#7BAE8E"
      }
    },
    {
      "scope": "variable",
      "settings": {
        "foreground": "#7f5f75"
      }
    },
    {
      "scope": [
        "entity.name.tag.js.jsx",
        "entity.name.tag.html"
      ],
      "settings": {
        "foreground": "#02a998",
        "fontStyle": "bold"
      }
    },
    { "scope": [
      "variable.other.readwrite.alias.js",
      "meta.import.js"
      ],
      "settings": {
        "foreground": "#5c3e0c",
      }

    },
    {
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#B58B4F"
      }
    },{
      "scope": [
        "meta.jsx.children.js.jsx",
        "meta.tag.js.jsx"
      ],
      "settings": {
        "foreground": "#020911",
      }
    },
    {
      "scope": [
        "variable.other.constant.object.jsx",
        "constant",
        "entity.name.constant"
      ],
      "settings": {
        "foreground": "#d36600",
      }
    },
    {
      "scope": [
        "meta.object-literal.key.js",
        "meta.object.member.js",
        "meta.objectliteral.js",

      ],
      "settings": {
        "foreground": "#474747",
      }
    },
    {
      //for key value pairs in json
      "scope": [
        "support.type.property-name.json.comments",
        "string.json.comments"
      ],
      "settings": {
        "foreground": "#75592a",
    }
    },
    {
    
      "scope": [
        "entity.other.attribute-name.js.jsx",
        "meta.tag.attributes.js.jsx",
        "meta.tag.js.jsx"
      ],
      "settings": {
        "foreground": "#1b62e7",
    }
    }

  ]
},`,
  },
  {
    id: 5,
    slug: "stranger-things",
    src: StrangerThings,
    alt: "StrangerThings",
    title: "Stranger Things",
    bannerImg: StrangerThingsBanner,
    previewImg: StrangerThingsThemeImg,
    tagline:
      " '' Welcome to Hawkins. here things are a little bit stranger ! ''",
    description:
      "Step into the neon-lit shadows of Hawkins with this Stranger Things–inspired VS Code theme — where your code doesn’t just run, it stranges. Designed for developers who like their editors dark, dramatic, and occasionally Demogorgon-free, this theme brings retro sci-fi vibes, glowing synth colors, and just enough mystery to keep you coding “upside down.” Whether you're debugging portals or simply trying to escape bugs from another dimension, this theme keeps your workspace eerie yet comforting. Here's a warning for you! prolonged use may cause sudden nostalgia, increased productivity, and the urge to bicycle at night with walkie-talkies. Pretty strange… right?",
    themeImg: "",
    themeCode: `
// ===================================
// 👾 STRANGER THINGS – Way to Upside Down🌌
// ===================================


"workbench.colorCustomizations": {
  /* Base */
  "foreground": "#ff0000",
  "focusBorder": "#c70000",

  /* Editor */
  "editor.background": "#080808",
  "editor.foreground": "#ffffff",
  "editorLineNumber.foreground": "#540000",
  "editorLineNumber.activeForeground": "#ffffff",
  "editorCursor.foreground": "#ff0000",
  "editor.selectionBackground": "#540000",
  "editor.inactiveSelectionBackground": "#92000055",
  "editor.lineHighlightBackground": "#54000033",

  /* Sidebar */
  "sideBar.background": "#000000",
  "sideBar.foreground": "#c70000",
  "sideBarTitle.foreground": "#ff0000",
  "sideBarSectionHeader.background": "#000000",
  "sideBarSectionHeader.foreground": "#ff0000",

  /* Activity Bar */
  "activityBar.background": "#000000",
  "activityBar.foreground": "#d4d4d4",
  "activityBar.inactiveForeground": "#5a5a5a",
  "activityBarBadge.background": "#ff0000",
  "activityBarBadge.foreground": "#ffffff",
  "activityBar.activeBorder": "#ff0000",

  /* Tabs */
  "editorGroupHeader.tabsBackground": "#000000",
  "tab.activeBackground": "#000000",
  "tab.activeForeground": "#ff0000",
  "tab.inactiveBackground": "#2b2b2b",
  "tab.inactiveForeground": "#d4d4d4",
  "tab.border": "#540000",

  /* Title Bar */
  "titleBar.activeBackground": "#000000",
  "titleBar.activeForeground": "#ff0000",
  "titleBar.inactiveBackground": "#000000",
  "titleBar.inactiveForeground": "#540000",

  /* Status Bar */
  "statusBar.background": "#000000",
  "statusBar.foreground": "#a0a0a0",
  "statusBar.noFolderBackground": "#000000",

  /* Terminal */
  "terminal.background": "#000000",
  "terminal.foreground": "#ff0000",
  "terminalCursor.foreground": "#ff0000",

  /* Scrollbar */
  "scrollbarSlider.background": "#54000088",
  "scrollbarSlider.hoverBackground": "#920000aa",
  "scrollbarSlider.activeBackground": "#c70000",

  /* Panels */
  "panel.background": "#000000",
  "panel.border": "#540000"
},

"editor.tokenColorCustomizations": {
  "comments": "#540000",
  "strings": "#ff0000",
  "keywords": "#c70000",
  "numbers": "#ff0000",
  "functions": "#ff0000",
  "variables": "#c70000",
  "types": "#920000",


  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#7e7e7e",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#ff0000"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "foreground": "#c70000",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#ff0000"
      }
    },
    {
      "scope": "variable",
      "settings": {
        "foreground": "#c70000"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "entity.name.tag.html",
        "entity.name.tag.jsx",
        "entity.name.tag.tsx"
      ],
      "settings": {
        "foreground": "#ff0000"
      }
    },
    {
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#920000"
      }
    },
    {
      "scope": ["support.type.property-name.json.comments",
                "string.json.comments"],
      "settings": {
        "foreground": "#ffff"
      }
    }
  ]
},`,
  },
  {
    id: 6,
    slug: "jurassic-park",
    src: Jurassic,
    alt: "JurassicPark",
    title: "Jurassic Park",
    bannerImg: JurassicParkBanner,
    previewImg: JurassicParkThemeImg,
    tagline:
      " '' Life finds a way, Welcome… to a world where giants walk again.'' ",
    description:
      "Welcome to the era where logic meets primal force. This adventurous theme captures the raw energy of untamed jungles, flickering emergency lights, and roaring ambition. Deep greens of prehistoric leaves blend with electrifying amber hues—the color of preserved DNA. Perfect for developers who break barriers like Dr. Grant breaks theories. Each line of code feels like resurrecting ancient power from chaos. But beware—just because you can code it, doesn't mean you should. Harness prehistoric productivity, avoid catastrophic syntax extinction, and remember: “Life finds a way… and so does your debug session.” ",
    themeImg: "",
    themeCode: `
//====================================================
// 🦖🌳 Jurassic Park: Life finds a Way 🌴🦕
//===================================================

// Workbench Color Customization
"workbench.colorCustomizations": {
  /* Global */
  "foreground": "#CFC7A2",
  "focusBorder": "#D7AC3B",

  /* Editor — HIDDEN IN DARKNESS */
  "editor.background": "#000000",
  "editor.foreground": "#CFC7A2",
  "editorCursor.foreground": "#D7AC3B",
  "editorLineNumber.foreground": "#355E4B",
  "editorLineNumber.activeForeground": "#f84444",
  "editor.selectionBackground": "#C2262A44",
  "editor.lineHighlightBackground": "#13261D55",

  /* Sidebar — JUNGLE BUSHES */
  "sideBar.background": "#13261D",
  "sideBar.foreground": "#A9BBA4",
  "sideBarTitle.foreground": "#D7AC3B",
  "sideBarSectionHeader.background": "#1E3A2B",
  "sideBarSectionHeader.foreground": "#CFC7A2",

   // Title Bar
  "titleBar.activeBackground": "#09130e",
  "titleBar.activeForeground": "#69b96f",

  /* Activity Bar */
  "activityBar.background": "#09130e",
  "activityBar.foreground": "#D7AC3B",
  "activityBar.inactiveForeground": "#69b96f",
  "activityBarBadge.background": "#C2262A",
  "activityBarBadge.foreground": "#FFFFFF",

  /* Tabs */
  "editorGroupHeader.tabsBackground": "#000000",
  "tab.activeBackground": "#000000",
  "tab.activeForeground": "#D7AC3B",
  "tab.inactiveBackground": "#13261D",
  "tab.inactiveForeground": "#6F8F7E",
  "tab.border": "#1E3A2B",

  /* Status Bar */
  "statusBar.background": "#13261D",
  "statusBar.foreground": "#CFC7A2",
  "statusBar.noFolderBackground": "#13261D",

  /* Terminal — UNDER THE CANOPY */
  "terminal.background": "#0A120E",
  "terminal.foreground": "#CFC7A2",
  "terminalCursor.foreground": "#D7AC3B",

  /* Panels */
  "panel.background": "#0A120E",
  "panel.border": "#1E3A2B",

  /* Scrollbars */
  "scrollbarSlider.background": "#355E4B88",
  "scrollbarSlider.hoverBackground": "#D7AC3BAA",
  "scrollbarSlider.activeBackground": "#C2262A"
},

// Editor Syntax customization
"editor.tokenColorCustomizations": {


  "textMateRules": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#115230",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#D7AC3B"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "foreground": "#C2262A",
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "entity.name.tag.html",
        "entity.name.tag.jsx",
        "entity.name.tag.tsx"
      ],
      "settings": {
        "foreground": "#C2262A"
      }
    },
    {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#CFC7A2"
      }
    },
    {
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#D7AC3B"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name.js.jsx",
        "meta.tag.attributes.js.jsx"
      ],
      "settings": {
        "foreground": "#51cf45"
      }
    }
  ]
},
    `,
  },
  {
    id: 7,
    slug: "dark-academia",
    src: DarkAcademia,
    alt: "Dark Academia",
    title: "Dark Academia",
    bannerImg: DarkAcademiaBanner,
    previewImg: DarkAcademiaThemeImg,
    tagline:
      " '' Enter a realm of shadows, literature, and minds that dare to wander too far'' ",
    description:"Step into the quiet, candlelit world of Dark Academia with this VS Code theme—where code feels less like logic and more like literature. Wrapped in warm sepia tones, deep shadows, and a scholar’s calm, it transforms your workspace into a place of focus and quiet obsession. Every line feels like a whisper to the soul, as if you were meant for another time, another era—one where thoughts linger longer and the mind finds meaning beyond the present.",
    themeImg: "",
    themeCode: `// DARK ACADEMIA — BOOKSHELF

"workbench.colorCustomizations": {
  /* Base */
  "foreground": "#b07840",
  "focusBorder": "#5a3818",

  /* Editor */
  "editor.background": "#16100a",
  "editor.foreground": "#e8dcc8",
  "editorLineNumber.foreground": "#2e2010",
  "editorLineNumber.activeForeground": "#8a7050",
  "editorCursor.foreground": "#c8922a",
  "editor.selectionBackground": "#5a381844",
  "editor.inactiveSelectionBackground": "#2a1e1033",
  "editor.lineHighlightBackground": "#2a1e1055",

  /* Sidebar */
  "sideBar.background": "#0e0b06",
  "sideBar.foreground": "#5a4028",
  "sideBarTitle.foreground": "#8a6030",
  "sideBarSectionHeader.background": "#0e0b06",
  "sideBarSectionHeader.foreground": "#8a6030",

  /* Activity Bar */
  "activityBar.background": "#0e0b06",
  "activityBar.foreground": "#d4a96a",
  "activityBar.inactiveForeground": "#3a2810",
  "activityBarBadge.background": "#8b3a2a",
  "activityBarBadge.foreground": "#f0e8d8",
  "activityBar.activeBorder": "#c8922a",

  /* Tabs */
  "editorGroupHeader.tabsBackground": "#0e0b06",
  "tab.activeBackground": "#16100a",
  "tab.activeForeground": "#d4a96a",
  "tab.inactiveBackground": "#120e08",
  "tab.inactiveForeground": "#4a3820",
  "tab.border": "#2a1e10",

  /* Title Bar */
  "titleBar.activeBackground": "#0e0b06",
  "titleBar.activeForeground": "#c8922a",
  "titleBar.inactiveBackground": "#0e0b06",
  "titleBar.inactiveForeground": "#3a2810",

  /* Status Bar */
  "statusBar.background": "#0e0b06",
  "statusBar.foreground": "#4a3820",
  "statusBar.noFolderBackground": "#0e0b06",

  /* Terminal */
  "terminal.background": "#0a0806",
  "terminal.foreground": "#c8922a",
  "terminalCursor.foreground": "#c8922a",

  /* Panels */
  "panel.background": "#0a0806",
  "panel.border": "#2a1e10",

  /* Inputs */
  "input.background": "#1a1208",
  "input.foreground": "#e8dcc8",
  "input.border": "#3a2810",
  "input.placeholderForeground": "#4a3820",
  "inputOption.activeBackground": "#3a2810",
  "inputOption.activeForeground": "#c8922a",
  "inputOption.activeBorder": "#c8922a",

  /* Dropdown */
  "dropdown.background": "#1a1208",
  "dropdown.foreground": "#e8dcc8",
  "dropdown.border": "#3a2810",
  "dropdown.listBackground": "#120e08",

  /* Command Palette */
  "quickInput.background": "#120e08",
  "quickInput.foreground": "#e8dcc8",
  "quickInputList.focusBackground": "#2a1e10",
  "quickInputList.focusForeground": "#c8922a",
  "quickInputTitle.background": "#0e0b06",

  /* Menu */
  "menu.background": "#120e08",
  "menu.foreground": "#e8dcc8",
  "menu.selectionBackground": "#2a1e10",
  "menu.selectionForeground": "#c8922a",
  "menu.separatorBackground": "#2a1e10",
  "menu.border": "#3a2810",
  "menubar.selectionBackground": "#2a1e10",
  "menubar.selectionForeground": "#c8922a",

  /* Lists */
  "list.activeSelectionBackground": "#2a1e10",
  "list.activeSelectionForeground": "#c8922a",
  "list.hoverBackground": "#1e1508",
  "list.hoverForeground": "#d4a96a",
  "list.inactiveSelectionBackground": "#1a1208",
  "list.inactiveSelectionForeground": "#b07840",

  /* Settings */
  "settings.headerForeground": "#c8922a",
  "settings.modifiedItemIndicator": "#8b3a2a",
  "settings.checkboxBackground": "#1a1208",
  "settings.checkboxForeground": "#e8dcc8",
  "settings.checkboxBorder": "#3a2810",
  "settings.dropdownBackground": "#1a1208",
  "settings.dropdownForeground": "#e8dcc8",
  "settings.dropdownBorder": "#3a2810",
  "settings.dropdownListBorder": "#3a2810",
  "settings.textInputBackground": "#1a1208",
  "settings.textInputForeground": "#e8dcc8",
  "settings.textInputBorder": "#3a2810",

  /* Scrollbar */
  "scrollbarSlider.background": "#2a1e1055",
  "scrollbarSlider.hoverBackground": "#3a2810aa",
  "scrollbarSlider.activeBackground": "#5a3818"
},

"editor.tokenColorCustomizations": {
  "comments": "#3a2c1c",
  "strings": "#8b3a2a",
  "keywords": "#c8922a",
  "numbers": "#c87840",
  "functions": "#e8dcc8",
  "variables": "#b07840",
  "types": "#7a8c5a",

  "textMateRules": [
    {
      "scope": [
        "entity.other.attribute-name.js.jsx",
        "meta.tag.attributes.js.jsx",
        "meta.tag.js.jsx"
      ],
      "settings": {
        "foreground": "#7a8c5a"
      }
    },
    {
      "scope": "comment",
      "settings": {
        "foreground": "#3a2c1c",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#8b3a2a"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "foreground": "#c8922a",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "keyword.operator",
      "settings": {
        "foreground": "#7a5c38"
      }
    },
    {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#e8dcc8"
      }
    },
    {
      "scope": "variable",
      "settings": {
        "foreground": "#b07840"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "entity.name.tag.html",
        "entity.name.tag.jsx",
        "entity.name.tag.tsx"
      ],
      "settings": {
        "foreground": "#d4a96a"
      }
    },
    {
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#c87840"
      }
    },
    {
      "scope": "support.class",
      "settings": {
        "foreground": "#7a8c5a",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "storage.type",
      "settings": {
        "foreground": "#c8922a",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "punctuation",
      "settings": {
        "foreground": "#4a3828"
      }
    },
    {
      "scope": [
        "support.type.property-name.json.comments",
        "string.json.comments"
      ],
      "settings": {
        "foreground": "#e8dcc8"
      }
    }
  ]
},
`,
  },
  {
    id: 8,
    slug: "arcane-hearth",
    src: Wizard,
    alt: "Arcane Hearth",
    title: "Arcane Hearth",
    bannerImg: ArcaneBanner,
    previewImg: ArcaneThemeImg,
    tagline:
      " '' Welcome to the Arcane Hearth, where ancient magic sleeps beneath every flickering flame.'' ",
    description:"Step into the quiet, candlelit world of Arcane Hearth with this VS Code theme—where code feels less like logic and more like literature. Wrapped in warm sepia tones, deep shadows, and a scholar’s calm, it transforms your workspace into a place of focus and quiet obsession. Every line feels like a whisper to the soul, as if you were meant for another time, another era - one where thoughts linger longer and the mind finds meaning beyond the present.",
    themeImg: "",
    themeCode:`  // 🕯️ WRAITHFIRE LANTERN 🔮

  "workbench.colorCustomizations": {
    /* Base */
    "foreground": "#7ea8a6",
    "focusBorder": "#1c4d52",

    /* Editor — inside the glass, looking at the orb */
    "editor.background": "#071617",
    "editor.foreground": "#d8f0ee",
    "editorLineNumber.foreground": "#1c3234",
    "editorLineNumber.activeForeground": "#5a8a88",
    "editorCursor.foreground": "#4de8e0",
    "editor.selectionBackground": "#1c4d5255",
    "editor.inactiveSelectionBackground": "#12303233",
    "editor.lineHighlightBackground": "#0f2a2c55",

    /* Sidebar — the cold misty background */
    "sideBar.background": "#050d0e",
    "sideBar.foreground": "#3a5c5a",
    "sideBarTitle.foreground": "#4de8e0",
    "sideBarSectionHeader.background": "#050d0e",
    "sideBarSectionHeader.foreground": "#4de8e0",

    /* Activity Bar */
    "activityBar.background": "#050d0e",
    "activityBar.foreground": "#4de8e0",
    "activityBar.inactiveForeground": "#1c3234",
    "activityBarBadge.background": "#ff6a2c",
    "activityBarBadge.foreground": "#0a0605",
    "activityBar.activeBorder": "#4de8e0",

    /* Tabs */
    "editorGroupHeader.tabsBackground": "#050d0e",
    "tab.activeBackground": "#071617",
    "tab.activeForeground": "#4de8e0",
    "tab.inactiveBackground": "#060f10",
    "tab.inactiveForeground": "#2a4442",
    "tab.border": "#0f2a2c",

    /* Title Bar */
    "titleBar.activeBackground": "#050d0e",
    "titleBar.activeForeground": "#4de8e0",
    "titleBar.inactiveBackground": "#050d0e",
    "titleBar.inactiveForeground": "#1c3234",

    /* Status Bar */
    "statusBar.background": "#050d0e",
    "statusBar.foreground": "#3a5c5a",
    "statusBar.noFolderBackground": "#050d0e",

    /* Terminal — the void beyond the fog */
    "terminal.background": "#040a09",
    "terminal.foreground": "#4de8e0",
    "terminalCursor.foreground": "#4de8e0",

    /* Panels */
    "panel.background": "#040a09",
    "panel.border": "#0f2a2c",

    /* Inputs — the rusted iron cage */
    "input.background": "#12201a",
    "input.foreground": "#d8f0ee",
    "input.border": "#4a3527",
    "input.placeholderForeground": "#3a5c5a",
    "inputOption.activeBackground": "#4a3527",
    "inputOption.activeForeground": "#4de8e0",
    "inputOption.activeBorder": "#4de8e0",

    /* Dropdown */
    "dropdown.background": "#12201a",
    "dropdown.foreground": "#d8f0ee",
    "dropdown.border": "#4a3527",
    "dropdown.listBackground": "#060f10",

    /* Command Palette */
    "quickInput.background": "#060f10",
    "quickInput.foreground": "#d8f0ee",
    "quickInputList.focusBackground": "#0f2a2c",
    "quickInputList.focusForeground": "#4de8e0",
    "quickInputTitle.background": "#050d0e",

    /* Menu */
    "menu.background": "#060f10",
    "menu.foreground": "#d8f0ee",
    "menu.selectionBackground": "#0f2a2c",
    "menu.selectionForeground": "#4de8e0",
    "menu.separatorBackground": "#0f2a2c",
    "menu.border": "#4a3527",
    "menubar.selectionBackground": "#0f2a2c",
    "menubar.selectionForeground": "#4de8e0",

    /* Lists */
    "list.activeSelectionBackground": "#0f2a2c",
    "list.activeSelectionForeground": "#4de8e0",
    "list.hoverBackground": "#0a2022",
    "list.hoverForeground": "#7ff5ee",
    "list.inactiveSelectionBackground": "#12201a",
    "list.inactiveSelectionForeground": "#7ea8a6",

    /* Settings */
    "settings.headerForeground": "#4de8e0",
    "settings.modifiedItemIndicator": "#ff6a2c",
    "settings.checkboxBackground": "#12201a",
    "settings.checkboxForeground": "#d8f0ee",
    "settings.checkboxBorder": "#4a3527",
    "settings.dropdownBackground": "#12201a",
    "settings.dropdownForeground": "#d8f0ee",
    "settings.dropdownBorder": "#4a3527",
    "settings.dropdownListBorder": "#4a3527",
    "settings.textInputBackground": "#12201a",
    "settings.textInputForeground": "#d8f0ee",
    "settings.textInputBorder": "#4a3527",

    /* Scrollbar */
    "scrollbarSlider.background": "#0f2a2c55",
    "scrollbarSlider.hoverBackground": "#4a3527aa",
    "scrollbarSlider.activeBackground": "#1c4d52",

    /* Ember accents — the fire smoldering beneath the orb */
    "textLink.foreground": "#ff6a2c",
    "textLink.activeForeground": "#ffab5e",
    "textPreformat.foreground": "#ffab5e",
    "editorLink.activeForeground": "#ffab5e",
    "gitDecoration.modifiedResourceForeground": "#ff6a2c",
    "gitDecoration.untrackedResourceForeground": "#4de8e0",
    "gitDecoration.deletedResourceForeground": "#b3391a",
    "extensionButton.prominentBackground": "#8a3010",
    "extensionButton.prominentForeground": "#ffe8d8",
    "extensionButton.prominentHoverBackground": "#b3391a",
    "progressBar.background": "#ff6a2c",
    "editorBracketHighlight.foreground1": "#4de8e0",
    "editorBracketHighlight.foreground2": "#ff6a2c",
    "editorBracketHighlight.foreground3": "#7ea8a6",
    "editorBracketHighlight.foreground4": "#4a3527",
    "editorBracketHighlight.unexpectedBracket.foreground": "#c85a4a",
    "editorOverviewRuler.modifiedForeground": "#ff6a2c",
    "editorOverviewRuler.findMatchForeground": "#7ff5ee",
    "editorGutter.modifiedBackground": "#ff6a2c",

    /* Extras: bracket/indent/peek/notifications */
    "editorWidget.background": "#060f10",
    "editorWidget.border": "#4a3527",
    "editorSuggestWidget.background": "#060f10",
    "editorSuggestWidget.selectedBackground": "#0f2a2c",
    "editorSuggestWidget.highlightForeground": "#4de8e0",
    "editorIndentGuide.background": "#0f2a2c",
    "editorIndentGuide.activeBackground": "#1c4d52",
    "peekView.border": "#4de8e0",
    "peekViewEditor.background": "#071617",
    "peekViewResult.background": "#050d0e",
    "notificationCenterHeader.background": "#050d0e",
    "notifications.background": "#060f10",
    "notifications.foreground": "#d8f0ee"
  },

  "editor.tokenColorCustomizations": {
    "comments": "#2a4442",
    "strings": "#ff6a2c",
    "keywords": "#4de8e0",
    "numbers": "#ffab5e",
    "functions": "#d8f0ee",
    "variables": "#7ea8a6",
    "types": "#3a8c88",

    "textMateRules": [
      {
        "scope": [
          "entity.other.attribute-name.js.jsx",
          "meta.tag.attributes.js.jsx",
          "meta.tag.js.jsx"
        ],
        "settings": {
          "foreground": "#3a8c88"
        }
      },
      {
        "scope": "comment",
        "settings": {
          "foreground": "#2a4442",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "string",
        "settings": {
          "foreground": "#ff6a2c"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#4de8e0",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#4a6c6a"
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": "#d8f0ee"
        }
      },
      {
        "scope": "variable",
        "settings": {
          "foreground": "#7ea8a6"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.html",
          "entity.name.tag.jsx",
          "entity.name.tag.tsx"
        ],
        "settings": {
          "foreground": "#7ff5ee"
        }
      },
      {
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#ffab5e"
        }
      },
      {
        "scope": "support.class",
        "settings": {
          "foreground": "#3a8c88",
          "fontStyle": "italic"
        }
      },
      {
        "scope": "storage.type",
        "settings": {
          "foreground": "#4de8e0",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "punctuation",
        "settings": {
          "foreground": "#3a3028"
        }
      },
      {
        "scope": [
          "support.type.property-name.json.comments",
          "string.json.comments"
        ],
        "settings": {
          "foreground": "#d8f0ee"
        }
      },
      {
        "scope": "constant.language",
        "settings": {
          "foreground": "#ffab5e",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "entity.name.class",
        "settings": {
          "foreground": "#3a8c88",
          "fontStyle": "bold italic"
        }
      },
      {
        "scope": "entity.name.type",
        "settings": {
          "foreground": "#3a8c88"
        }
      },
      {
        // Ember: control-flow reads as the fire smoldering under
        // the spectral cyan — the "engine" driving the glow above.
        "scope": [
          "keyword.control",
          "keyword.control.flow",
          "keyword.control.conditional",
          "keyword.control.loop"
        ],
        "settings": {
          "foreground": "#ff6a2c",
          "fontStyle": "bold"
        }
      },
      {
        // Rusted iron: built-in/library functions read as the
        // cage itself — old, fixed, holding the magic in place.
        "scope": [
          "support.function",
          "support.function.builtin"
        ],
        "settings": {
          "foreground": "#a8825c"
        }
      },
      {
        "scope": "constant.other.color",
        "settings": {
          "foreground": "#7ff5ee"
        }
      }
    ]
  }`,
  },
  {
    id: 9,
    slug: "house-of-gryffindor",
    src: Gryffindor,
    alt: "gryffindor",
    title: "gryffindor",
    bannerImg: GryffindorBanner,
    previewImg: GryffindorThemeImg,
    tagline: " ''Welcome to the house of Gryffindor, where courage leads the way and every challenge is worth facing.'' ",
    description:"Step into the bold spirit of Gryffindor with a VS Code theme inspired by courage, friendship, and a healthy disregard for playing it safe. Deep crimson tones, warm gold accents, and dark contrasts bring the house's unmistakable character into your workspace. Built for developers who like their editor as bold as their ideas, this theme turns every coding session into a small adventure—because sometimes the hardest part isn't writing the code, it's having the courage to run it.",
    themeImg: "",
    themeCode:` // ⚔️ GRYFFINDOR 🦁

  "workbench.colorCustomizations": {

    "foreground": "#c99a6a",
    "focusBorder": "#7f1d1d",

    "editor.background": "#140a0a",
    "editor.foreground": "#f0e2c8",
    "editorLineNumber.foreground": "#3a1c1c",
    "editorLineNumber.activeForeground": "#a05a5a",
    "editorCursor.foreground": "#d4af37",
    "editor.selectionBackground": "#7f1d1d55",
    "editor.inactiveSelectionBackground": "#3a1c1c33",
    "editor.lineHighlightBackground": "#2a121255",
 
    "sideBar.background": "#0e0707",
    "sideBar.foreground": "#6a4030",
    "sideBarTitle.foreground": "#d4af37",
    "sideBarSectionHeader.background": "#0e0707",
    "sideBarSectionHeader.foreground": "#d4af37",

    "activityBar.background": "#0e0707",
    "activityBar.foreground": "#d4af37",
    "activityBar.inactiveForeground": "#3a1c1c",
    "activityBarBadge.background": "#8f1702",
    "activityBarBadge.foreground": "#f0e8d8",
    "activityBar.activeBorder": "#d4af37",

    "editorGroupHeader.tabsBackground": "#0e0707",
    "tab.activeBackground": "#140a0a",
    "tab.activeForeground": "#d4af37",
    "tab.inactiveBackground": "#110909",
    "tab.inactiveForeground": "#4a2c24",
    "tab.border": "#2a1212",

    "titleBar.activeBackground": "#0e0707",
    "titleBar.activeForeground": "#d4af37",
    "titleBar.inactiveBackground": "#0e0707",
    "titleBar.inactiveForeground": "#3a1c1c",

    "statusBar.background": "#7f1d1d",
    "statusBar.foreground": "#f0e2c8",
    "statusBar.noFolderBackground": "#0e0707",

    "terminal.background": "#180305",
    "terminal.foreground": "#d4af37",
    "terminalCursor.foreground": "#d4af37",
    

    "panel.background": "#0a0505",
    "panel.border": "#2a1212",

    "input.background": "#1c1010",
    "input.foreground": "#f0e2c8",
    "input.border": "#5a2a20",
    "input.placeholderForeground": "#6a4030",
    "inputOption.activeBackground": "#5a2a20",
    "inputOption.activeForeground": "#d4af37",
    "inputOption.activeBorder": "#d4af37",

    "dropdown.background": "#1c1010",
    "dropdown.foreground": "#f0e2c8",
    "dropdown.border": "#5a2a20",
    "dropdown.listBackground": "#110909",

    "quickInput.background": "#110909",
    "quickInput.foreground": "#f0e2c8",
    "quickInputList.focusBackground": "#2a1212",
    "quickInputList.focusForeground": "#d4af37",
    "quickInputTitle.background": "#0e0707",

    "menu.background": "#110909",
    "menu.foreground": "#f0e2c8",
    "menu.selectionBackground": "#2a1212",
    "menu.selectionForeground": "#d4af37",
    "menu.separatorBackground": "#2a1212",
    "menu.border": "#5a2a20",
    "menubar.selectionBackground": "#2a1212",
    "menubar.selectionForeground": "#d4af37",

    "list.activeSelectionBackground": "#2a1212",
    "list.activeSelectionForeground": "#d4af37",
    "list.hoverBackground": "#1e0e0e",
    "list.hoverForeground": "#f0c75e",
    "list.inactiveSelectionBackground": "#1c1010",
    "list.inactiveSelectionForeground": "#c99a6a",

    "settings.headerForeground": "#d4af37",
    "settings.modifiedItemIndicator": "#c41e3a",
    "settings.checkboxBackground": "#1c1010",
    "settings.checkboxForeground": "#f0e2c8",
    "settings.checkboxBorder": "#5a2a20",
    "settings.dropdownBackground": "#1c1010",
    "settings.dropdownForeground": "#f0e2c8",
    "settings.dropdownBorder": "#5a2a20",
    "settings.dropdownListBorder": "#5a2a20",
    "settings.textInputBackground": "#1c1010",
    "settings.textInputForeground": "#f0e2c8",
    "settings.textInputBorder": "#5a2a20",

    "scrollbarSlider.background": "#2a121255",
    "scrollbarSlider.hoverBackground": "#5a2a20aa",
    "scrollbarSlider.activeBackground": "#7f1d1d",

    "textLink.foreground": "#d4af37",
    "textLink.activeForeground": "#f0c75e",
    "gitDecoration.modifiedResourceForeground": "#d4af37",
    "gitDecoration.deletedResourceForeground": "#c41e3a",
    "editorBracketHighlight.foreground1": "#d4af37",
    "editorBracketHighlight.foreground2": "#c41e3a",
    "editorBracketHighlight.foreground3": "#f0e2c8",
    "editorIndentGuide.background": "#2a1212",
    "editorIndentGuide.activeBackground": "#7f1d1d",
    "peekView.border": "#d4af37",
    "peekViewEditor.background": "#140a0a",
    "peekViewResult.background": "#0e0707"
  },

  "editor.tokenColorCustomizations": {
    "comments": "#5a3a2a",
    "strings": "#e8a83a",
    "keywords": "#c41e3a",
    "numbers": "#d4af37",
    "functions": "#f0e2c8",
    "variables": "#c99a6a",
    "types": "#d4af37",

    "textMateRules": [
      { 
	"scope": "comment", 
	"settings": { 
		"foreground": "#5a3a2a", 
		"fontStyle": "italic" 
	 } 
      },
      { "scope": "string", 
	"settings": { 
		"foreground": "#e8a83a" 
	} 
      },
      { "scope": "keyword", 
	"settings": { 
		"foreground": "#c41e3a", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "keyword.operator", 
	"settings": { 
		"foreground": "#8a5a3a" 
	} 
      },
      { "scope": "entity.name.function", 
	"settings": { 
		"foreground": "#f0e2c8" 
	} 
      },
      { "scope": "variable", 
	"settings": { 
		"foreground": "#c99a6a" 
	} 
      },
      { "scope": [
		"entity.name.tag", 
		"entity.name.tag.jsx", 
		"entity.name.tag.tsx"
	  ], 
	"settings": {
		 "foreground": "#d4af37" 
	} 
      },
      { "scope": "constant.numeric", 
	"settings": { 
		"foreground": "#d4af37" 
	} 
      },
      { "scope": "support.class", 
	"settings": { 
		"foreground": "#e8a83a", 
		"fontStyle": "italic" 
	} 
      },
      { "scope": "storage.type", 
	"settings": { 
		"foreground": "#c41e3a", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "punctuation", 
	"settings": { 
		"foreground": "#4a2c24" 
	} 
      },
      { "scope": "constant.language", 
	"settings": { 
		"foreground": "#d4af37", 
		"fontStyle": "bold" 
	}
      },
      { "scope": "entity.name.class", 
	"settings": { 
		"foreground": "#e8a83a", 
		"fontStyle": "bold italic" 
	} 
      },
      { "scope": [
		"keyword.control", 
		"keyword.control.flow", 
		"keyword.control.conditional", 
		"keyword.control.loop"
		], 
		"settings": {
			 "foreground": "#be5f1d", 
			 "fontStyle": "bold" } },
      { "scope": [
		"support.function", 
		"support.function.builtin"
	], "settings": {
		 "foreground": "#a05a5a" 
	} 
      }
    ]
  }`,
  },
   {
    id: 10,
    slug: "house-of-slytherin",
    src: Slytherin,
    alt: "slytherin",
    title: "slytherin",
    bannerImg: SlytherinBanner,
    previewImg: SlytherinThemeImg,
    tagline: "''Welcome to the house of Slytherin, where ambition runs deep and clever minds always have a plan.'' ",
    description:" Enter the calculated world of Slytherin with a VS Code theme built around ambition, precision, and unmistakable dark elegance. Deep greens, subtle silver accents, and shadowy backgrounds create an atmosphere that feels sophisticated without getting in the way of your code. Whether you're building your next project or quietly plotting your way through a particularly stubborn bug, this theme keeps your workspace looking like you definitely had a plan all along.",
    themeImg: "",
    themeCode:`// SLYTHERIN 🐍


  "workbench.colorCustomizations": {
    "foreground": "#7a9a88",
    "focusBorder": "#0f4a30",

    "editor.background": "#0a120e",
    "editor.foreground": "#dcece2",
    "editorLineNumber.foreground": "#1c3226",
    "editorLineNumber.activeForeground": "#5a8a70",
    "editorCursor.foreground": "#c0c0c0",
    "editor.selectionBackground": "#0f4a3055",
    "editor.inactiveSelectionBackground": "#1c322633",
    "editor.lineHighlightBackground": "#122a1c55",

    "sideBar.background": "#060c09",
    "sideBar.foreground": "#3a5c48",
    "sideBarTitle.foreground": "#c0c0c0",
    "sideBarSectionHeader.background": "#060c09",
    "sideBarSectionHeader.foreground": "#c0c0c0",

    "activityBar.background": "#060c09",
    "activityBar.foreground": "#c0c0c0",
    "activityBar.inactiveForeground": "#1c3226",
    "activityBarBadge.background": "#2e8b57",
    "activityBarBadge.foreground": "#0a0f0c",
    "activityBar.activeBorder": "#c0c0c0",

    "editorGroupHeader.tabsBackground": "#060c09",
    "tab.activeBackground": "#0a120e",
    "tab.activeForeground": "#c0c0c0",
    "tab.inactiveBackground": "#080f0b",
    "tab.inactiveForeground": "#2a4436",
    "tab.border": "#0f2a1e",

    "titleBar.activeBackground": "#060c09",
    "titleBar.activeForeground": "#c0c0c0",
    "titleBar.inactiveBackground": "#060c09",
    "titleBar.inactiveForeground": "#1c3226",

    "statusBar.background": "#0f4a30",
    "statusBar.foreground": "#dcece2",
    "statusBar.noFolderBackground": "#060c09",

    "terminal.background": "#040806",
    "terminal.foreground": "#2e8b57",
    "terminalCursor.foreground": "#c0c0c0",

    "panel.background": "#040806",
    "panel.border": "#0f2a1e",

    "input.background": "#101c14",
    "input.foreground": "#dcece2",
    "input.border": "#2a4a38",
    "input.placeholderForeground": "#3a5c48",
    "inputOption.activeBackground": "#2a4a38",
    "inputOption.activeForeground": "#c0c0c0",
    "inputOption.activeBorder": "#c0c0c0",

    "dropdown.background": "#101c14",
    "dropdown.foreground": "#dcece2",
    "dropdown.border": "#2a4a38",
    "dropdown.listBackground": "#080f0b",

    "quickInput.background": "#080f0b",
    "quickInput.foreground": "#dcece2",
    "quickInputList.focusBackground": "#122a1c",
    "quickInputList.focusForeground": "#c0c0c0",
    "quickInputTitle.background": "#060c09",

    "menu.background": "#080f0b",
    "menu.foreground": "#dcece2",
    "menu.selectionBackground": "#122a1c",
    "menu.selectionForeground": "#c0c0c0",
    "menu.separatorBackground": "#122a1c",
    "menu.border": "#2a4a38",
    "menubar.selectionBackground": "#122a1c",
    "menubar.selectionForeground": "#c0c0c0",

    "list.activeSelectionBackground": "#122a1c",
    "list.activeSelectionForeground": "#c0c0c0",
    "list.hoverBackground": "#0e1c12",
    "list.hoverForeground": "#e0e0e0",
    "list.inactiveSelectionBackground": "#101c14",
    "list.inactiveSelectionForeground": "#7a9a88",

    "settings.headerForeground": "#c0c0c0",
    "settings.modifiedItemIndicator": "#2e8b57",
    "settings.checkboxBackground": "#101c14",
    "settings.checkboxForeground": "#dcece2",
    "settings.checkboxBorder": "#2a4a38",
    "settings.dropdownBackground": "#101c14",
    "settings.dropdownForeground": "#dcece2",
    "settings.dropdownBorder": "#2a4a38",
    "settings.dropdownListBorder": "#2a4a38",
    "settings.textInputBackground": "#101c14",
    "settings.textInputForeground": "#dcece2",
    "settings.textInputBorder": "#2a4a38",

    "scrollbarSlider.background": "#122a1c55",
    "scrollbarSlider.hoverBackground": "#2a4a38aa",
    "scrollbarSlider.activeBackground": "#0f4a30",

    "textLink.foreground": "#c0c0c0",
    "textLink.activeForeground": "#e0e0e0",
    "gitDecoration.modifiedResourceForeground": "#c0c0c0",
    "gitDecoration.deletedResourceForeground": "#8b1a2b",
    "editorBracketHighlight.foreground1": "#2e8b57",
    "editorBracketHighlight.foreground2": "#c0c0c0",
    "editorBracketHighlight.foreground3": "#dcece2",
    "editorIndentGuide.background": "#122a1c",
    "editorIndentGuide.activeBackground": "#0f4a30",
    "peekView.border": "#c0c0c0",
    "peekViewEditor.background": "#0a120e",
    "peekViewResult.background": "#060c09"
  },

  "editor.tokenColorCustomizations": {
    "comments": "#2a4436",
    "strings": "#9ecab0",
    "keywords": "#2e8b57",
    "numbers": "#c0c0c0",
    "functions": "#dcece2",
    "variables": "#7a9a88",
    "types": "#5aa878",

    "textMateRules": [
      { 
	"scope": "comment", 
	"settings": { 
		"foreground": "#2a4436", 
		"fontStyle": "italic" 
	 } 
      },
      { "scope": "string", 
	"settings": { 
		"foreground": "#9ecab0" 
	} 
      },
      { "scope": "keyword", 
	"settings": { 
		"foreground": "#2e8b57", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "keyword.operator", 
	"settings": { 
		"foreground": "#4a6c5a" 
	} 
      },
      { "scope": "entity.name.function", 
	"settings": { 
		"foreground": "#dcece2" 
	} 
      },
      { "scope": "variable", 
	"settings": { 
		"foreground": "#7a9a88" 
	} 
      },
      { "scope": [
		"entity.name.tag", 
		"entity.name.tag.jsx", 
		"entity.name.tag.tsx"
	  ], 
	"settings": {
		 "foreground": "#c0c0c0" 
	} 
      },
      { "scope": "constant.numeric", 
	"settings": { 
		"foreground": "#c0c0c0" 
	} 
      },
      { "scope": "support.class", 
	"settings": { 
		"foreground": "#5aa878", 
		"fontStyle": "italic" 
	} 
      },
      { "scope": "storage.type", 
	"settings": { 
		"foreground": "#2e8b57", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "punctuation", 
	"settings": { 
		"foreground": "#2a3a30" 
	} 
      },
      { "scope": "constant.language", 
	"settings": { 
		"foreground": "#c0c0c0", 
		"fontStyle": "bold" 
	}
      },
      { "scope": "entity.name.class", 
	"settings": { 
		"foreground": "#5aa878", 
		"fontStyle": "bold italic" 
	} 
      },
      { "scope": [
		"keyword.control", 
		"keyword.control.flow", 
		"keyword.control.conditional", 
		"keyword.control.loop"
		], 
		"settings": {
			 "foreground": "#e0e0e0", 
			 "fontStyle": "bold" } },
      { "scope": [
		"support.function", 
		"support.function.builtin"
	], "settings": {
		 "foreground": "#4a7a5c" 
	} 
      }
    ]
  }
`,
  },
   {
    id: 11,
    slug: "house-of-hufflepuff",
    src: Hufflepuff,
    alt: "hufflepuff",
    title: "hufflepuff",
    bannerImg: HufflepuffBanner,
    previewImg: HufflepuffThemeImg,
    tagline: " ''Welcome to the house of Hufflepuff, where kindness matters, hard work pays off, and everyone has a place.'' ",
    description:"Settle into the warm and welcoming spirit of Hufflepuff with a VS Code theme inspired by patience, loyalty, kindness, and good old-fashioned hard work. Golden yellows, earthy tones, and rich dark backgrounds create a cozy workspace that feels inviting without becoming distracting. Perfect for developers who believe in doing things properly, helping others along the way, and occasionally wondering why that one bug has survived three hours of debugging.",
    themeImg: "",
    themeCode:`  // 🟡 HUFFLEPUFF 🦡


  "workbench.colorCustomizations": {
    "foreground": "#c9ac6a",
    "focusBorder": "#5a4a1a",

    "editor.background": "#15130c",
    "editor.foreground": "#f0e8d0",
    "editorLineNumber.foreground": "#332c1a",
    "editorLineNumber.activeForeground": "#8a7a4a",
    "editorCursor.foreground": "#ecb939",
    "editor.selectionBackground": "#5a4a1a55",
    "editor.inactiveSelectionBackground": "#332c1a33",
    "editor.lineHighlightBackground": "#2a241255",

    "sideBar.background": "#0e0c07",
    "sideBar.foreground": "#5a5030",
    "sideBarTitle.foreground": "#ecb939",
    "sideBarSectionHeader.background": "#0e0c07",
    "sideBarSectionHeader.foreground": "#ecb939",

    "activityBar.background": "#0e0c07",
    "activityBar.foreground": "#ecb939",
    "activityBar.inactiveForeground": "#332c1a",
    "activityBarBadge.background": "#3a362a",
    "activityBarBadge.foreground": "#f4d06a",
    "activityBar.activeBorder": "#ecb939",

    "editorGroupHeader.tabsBackground": "#0e0c07",
    "tab.activeBackground": "#15130c",
    "tab.activeForeground": "#ecb939",
    "tab.inactiveBackground": "#110f09",
    "tab.inactiveForeground": "#4a4028",
    "tab.border": "#2a2412",

    "titleBar.activeBackground": "#0e0c07",
    "titleBar.activeForeground": "#ecb939",
    "titleBar.inactiveBackground": "#0e0c07",
    "titleBar.inactiveForeground": "#332c1a",

    "statusBar.background": "#3a362a",
    "statusBar.foreground": "#f0e8d0",
    "statusBar.noFolderBackground": "#0e0c07",

    "terminal.background": "#0a0805",
    "terminal.foreground": "#ecb939",
    "terminalCursor.foreground": "#ecb939",

    "panel.background": "#0a0805",
    "panel.border": "#2a2412",

    "input.background": "#1c1810",
    "input.foreground": "#f0e8d0",
    "input.border": "#4a4020",
    "input.placeholderForeground": "#5a5030",
    "inputOption.activeBackground": "#4a4020",
    "inputOption.activeForeground": "#ecb939",
    "inputOption.activeBorder": "#ecb939",

    "dropdown.background": "#1c1810",
    "dropdown.foreground": "#f0e8d0",
    "dropdown.border": "#4a4020",
    "dropdown.listBackground": "#110f09",

    "quickInput.background": "#110f09",
    "quickInput.foreground": "#f0e8d0",
    "quickInputList.focusBackground": "#2a2412",
    "quickInputList.focusForeground": "#ecb939",
    "quickInputTitle.background": "#0e0c07",

    "menu.background": "#110f09",
    "menu.foreground": "#f0e8d0",
    "menu.selectionBackground": "#2a2412",
    "menu.selectionForeground": "#ecb939",
    "menu.separatorBackground": "#2a2412",
    "menu.border": "#4a4020",
    "menubar.selectionBackground": "#2a2412",
    "menubar.selectionForeground": "#ecb939",

    "list.activeSelectionBackground": "#2a2412",
    "list.activeSelectionForeground": "#ecb939",
    "list.hoverBackground": "#1e1a0e",
    "list.hoverForeground": "#f4d06a",
    "list.inactiveSelectionBackground": "#1c1810",
    "list.inactiveSelectionForeground": "#c9ac6a",

    "settings.headerForeground": "#ecb939",
    "settings.modifiedItemIndicator": "#3a362a",
    "settings.checkboxBackground": "#1c1810",
    "settings.checkboxForeground": "#f0e8d0",
    "settings.checkboxBorder": "#4a4020",
    "settings.dropdownBackground": "#1c1810",
    "settings.dropdownForeground": "#f0e8d0",
    "settings.dropdownBorder": "#4a4020",
    "settings.dropdownListBorder": "#4a4020",
    "settings.textInputBackground": "#1c1810",
    "settings.textInputForeground": "#f0e8d0",
    "settings.textInputBorder": "#4a4020",

    "scrollbarSlider.background": "#2a241255",
    "scrollbarSlider.hoverBackground": "#4a4020aa",
    "scrollbarSlider.activeBackground": "#5a4a1a",

    "textLink.foreground": "#ecb939",
    "textLink.activeForeground": "#f4d06a",
    "gitDecoration.modifiedResourceForeground": "#ecb939",
    "gitDecoration.deletedResourceForeground": "#8a5a2a",
    "editorBracketHighlight.foreground1": "#ecb939",
    "editorBracketHighlight.foreground2": "#8a7a5a",
    "editorBracketHighlight.foreground3": "#f0e8d0",
    "editorIndentGuide.background": "#2a2412",
    "editorIndentGuide.activeBackground": "#5a4a1a",
    "peekView.border": "#ecb939",
    "peekViewEditor.background": "#15130c",
    "peekViewResult.background": "#0e0c07"
  },

  "editor.tokenColorCustomizations": {
    "comments": "#4a4028",
    "strings": "#c98a3a",
    "keywords": "#ecb939",
    "numbers": "#f4d06a",
    "functions": "#f0e8d0",
    "variables": "#c9ac6a",
    "types": "#8a7a5a",

    "textMateRules": [
      { 
	"scope": "comment", 
	"settings": { 
		"foreground": "#4a4028", 
		"fontStyle": "italic" 
	 } 
      },
      { "scope": "string", 
	"settings": { 
		"foreground": "#c98a3a" 
	} 
      },
      { "scope": "keyword", 
	"settings": { 
		"foreground": "#ecb939", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "keyword.operator", 
	"settings": { 
		"foreground": "#6a5c3a" 
	} 
      },
      { "scope": "entity.name.function", 
	"settings": { 
		"foreground": "#f0e8d0" 
	} 
      },
      { "scope": "variable", 
	"settings": { 
		"foreground": "#c9ac6a" 
	} 
      },
      { "scope": [
		"entity.name.tag", 
		"entity.name.tag.jsx", 
		"entity.name.tag.tsx"
	  ], 
	"settings": {
		 "foreground": "#f4d06a" 
	} 
      },
      { "scope": "constant.numeric", 
	"settings": { 
		"foreground": "#f4d06a" 
	} 
      },
      { "scope": "support.class", 
	"settings": { 
		"foreground": "#8a7a5a", 
		"fontStyle": "italic" 
	} 
      },
      { "scope": "storage.type", 
	"settings": { 
		"foreground": "#ecb939", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "punctuation", 
	"settings": { 
		"foreground": "#3a3220" 
	} 
      },
      { "scope": "constant.language", 
	"settings": { 
		"foreground": "#f4d06a", 
		"fontStyle": "bold" 
	}
      },
      { "scope": "entity.name.class", 
	"settings": { 
		"foreground": "#8a7a5a", 
		"fontStyle": "bold italic" 
	} 
      },
      { "scope": [
		"keyword.control", 
		"keyword.control.flow", 
		"keyword.control.conditional", 
		"keyword.control.loop"
		], 
		"settings": {
			 "foreground": "#f8f524", 
			 "fontStyle": "bold" } },
      { "scope": [
		"support.function", 
		"support.function.builtin"
	], "settings": {
		 "foreground": "#6a5c3a" 
	} 
      }
    ]
  }`,
  },
   {
    id: 12,
    slug: "house-of-ravenclaw",
    src: Ravenclaw,
    alt: "ravenclaw",
    title: "ravenclaw",
    bannerImg: RavenclawBanner,
    previewImg: RavenclawThemeImg,
    tagline: "'' Welcome to the house of Ravenclaw, where clever minds, curious hearts, and unconventional ideas find their place. ''",
    description:" ''Bring the thoughtful spirit of Ravenclaw into your editor with a theme inspired by curiosity, creativity, and the endless pursuit of understanding. Rich blue tones, refined bronze accents, and deep atmospheric backgrounds create a calm environment for exploring ideas and solving problems. Designed for developers who enjoy understanding why something works—even when they probably could have just copied the Stack Overflow answer.'' ",
    themeImg: "",
    themeCode:`  // RAVENCLAW 🦅


  "workbench.colorCustomizations": {
    "foreground": "#7a8ab0",
    "focusBorder": "#16264a",

    "editor.background": "#0a0e18",
    "editor.foreground": "#dce4f0",
    "editorLineNumber.foreground": "#1c2840",
    "editorLineNumber.activeForeground": "#5a70a0",
    "editorCursor.foreground": "#cd7f32",
    "editor.selectionBackground": "#16264a55",
    "editor.inactiveSelectionBackground": "#1c284033",
    "editor.lineHighlightBackground": "#121c3255",

    "sideBar.background": "#06080e",
    "sideBar.foreground": "#3a4c70",
    "sideBarTitle.foreground": "#cd7f32",
    "sideBarSectionHeader.background": "#06080e",
    "sideBarSectionHeader.foreground": "#cd7f32",

    "activityBar.background": "#06080e",
    "activityBar.foreground": "#cd7f32",
    "activityBar.inactiveForeground": "#1c2840",
    "activityBarBadge.background": "#12858d",
    "activityBarBadge.foreground": "#eaf0ff",
    "activityBar.activeBorder": "#cd7f32",

    "editorGroupHeader.tabsBackground": "#06080e",
    "tab.activeBackground": "#0a0e18",
    "tab.activeForeground": "#cd7f32",
    "tab.inactiveBackground": "#080b13",
    "tab.inactiveForeground": "#2a3a5a",
    "tab.border": "#121c32",

    "titleBar.activeBackground": "#06080e",
    "titleBar.activeForeground": "#cd7f32",
    "titleBar.inactiveBackground": "#06080e",
    "titleBar.inactiveForeground": "#1c2840",

    "statusBar.background": "#16264a",
    "statusBar.foreground": "#dce4f0",
    "statusBar.noFolderBackground": "#06080e",

    "terminal.background": "#05070c",
    "terminal.foreground": "#2a52be",
    "terminalCursor.foreground": "#cd7f32",

    "panel.background": "#05070c",
    "panel.border": "#121c32",

    "input.background": "#101828",
    "input.foreground": "#dce4f0",
    "input.border": "#2a3a5a",
    "input.placeholderForeground": "#3a4c70",
    "inputOption.activeBackground": "#2a3a5a",
    "inputOption.activeForeground": "#cd7f32",
    "inputOption.activeBorder": "#cd7f32",

    "dropdown.background": "#101828",
    "dropdown.foreground": "#dce4f0",
    "dropdown.border": "#2a3a5a",
    "dropdown.listBackground": "#080b13",

    "quickInput.background": "#080b13",
    "quickInput.foreground": "#dce4f0",
    "quickInputList.focusBackground": "#121c32",
    "quickInputList.focusForeground": "#cd7f32",
    "quickInputTitle.background": "#06080e",

    "menu.background": "#080b13",
    "menu.foreground": "#dce4f0",
    "menu.selectionBackground": "#121c32",
    "menu.selectionForeground": "#cd7f32",
    "menu.separatorBackground": "#121c32",
    "menu.border": "#2a3a5a",
    "menubar.selectionBackground": "#121c32",
    "menubar.selectionForeground": "#cd7f32",

    "list.activeSelectionBackground": "#121c32",
    "list.activeSelectionForeground": "#cd7f32",
    "list.hoverBackground": "#0e1626",
    "list.hoverForeground": "#e0a058",
    "list.inactiveSelectionBackground": "#101828",
    "list.inactiveSelectionForeground": "#7a8ab0",

    "settings.headerForeground": "#cd7f32",
    "settings.modifiedItemIndicator": "#2a52be",
    "settings.checkboxBackground": "#101828",
    "settings.checkboxForeground": "#dce4f0",
    "settings.checkboxBorder": "#2a3a5a",
    "settings.dropdownBackground": "#101828",
    "settings.dropdownForeground": "#dce4f0",
    "settings.dropdownBorder": "#2a3a5a",
    "settings.dropdownListBorder": "#2a3a5a",
    "settings.textInputBackground": "#101828",
    "settings.textInputForeground": "#dce4f0",
    "settings.textInputBorder": "#2a3a5a",

    "scrollbarSlider.background": "#121c3255",
    "scrollbarSlider.hoverBackground": "#2a3a5aaa",
    "scrollbarSlider.activeBackground": "#16264a",

    "textLink.foreground": "#cd7f32",
    "textLink.activeForeground": "#e0a058",
    "gitDecoration.modifiedResourceForeground": "#cd7f32",
    "gitDecoration.deletedResourceForeground": "#8a3a3a",
    "editorBracketHighlight.foreground1": "#2a52be",
    "editorBracketHighlight.foreground2": "#cd7f32",
    "editorBracketHighlight.foreground3": "#dce4f0",
    "editorIndentGuide.background": "#121c32",
    "editorIndentGuide.activeBackground": "#16264a",
    "peekView.border": "#cd7f32",
    "peekViewEditor.background": "#0a0e18",
    "peekViewResult.background": "#06080e"
  },

  "editor.tokenColorCustomizations": {
    "comments": "#2a3a5a",
    "strings": "#e0a058",
    "keywords": "#2a52be",
    "numbers": "#cd7f32",
    "functions": "#dce4f0",
    "variables": "#7a8ab0",
    "types": "#5a7ac0",

    "textMateRules": [
      { 
	"scope": "comment", 
	"settings": { 
		"foreground": "#2a3a5a", 
		"fontStyle": "italic" 
	 } 
      },
      { "scope": "string", 
	"settings": { 
		"foreground": "#e0a058" 
	} 
      },
      { "scope": "keyword", 
	"settings": { 
		"foreground": "#2a52be", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "keyword.operator", 
	"settings": { 
		"foreground": "#4a5c8a" 
	} 
      },
      { "scope": "entity.name.function", 
	"settings": { 
		"foreground": "#dce4f0" 
	} 
      },
      { "scope": "variable", 
	"settings": { 
		"foreground": "#7a8ab0" 
	} 
      },
      { "scope": [
		"entity.name.tag", 
		"entity.name.tag.jsx", 
		"entity.name.tag.tsx"
	  ], 
	"settings": {
		 "foreground": "#5a7ac0" 
	} 
      },
      { "scope": "constant.numeric", 
	"settings": { 
		"foreground": "#cd7f32" 
	} 
      },
      { "scope": "support.class", 
	"settings": { 
		"foreground": "#5a7ac0", 
		"fontStyle": "italic" 
	} 
      },
      { "scope": "storage.type", 
	"settings": { 
		"foreground": "#2a52be", 
		"fontStyle": "bold" 
	} 
      },
      { "scope": "punctuation", 
	"settings": { 
		"foreground": "#2a3248" 
	} 
      },
      { "scope": "constant.language", 
	"settings": { 
		"foreground": "#cd7f32", 
		"fontStyle": "bold" 
	}
      },
      { "scope": "entity.name.class", 
	"settings": { 
		"foreground": "#5a7ac0", 
		"fontStyle": "bold italic" 
	} 
      },
      { "scope": [
		"keyword.control", 
		"keyword.control.flow", 
		"keyword.control.conditional", 
		"keyword.control.loop"
		], 
		"settings": {
			 "foreground": "#58dbe0", 
			 "fontStyle": "bold" } },
      { "scope": [
		"support.function", 
		"support.function.builtin"
	], "settings": {
		 "foreground": "#4a5c8a" 
	} 
      }
    ]
  }
`,
  },
  
];
