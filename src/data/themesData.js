// Cards Cover Images
import HarryPotter from "../assets/hp.jfif";
import StarWars from "../assets/starwars.jfif";
import Nosferatu from "../assets/NosferatuCover.jpg";
import Ghibili from "../assets/ghibiliCover.jpg";
import StrangerThings from "../assets/StrangerThings.jpg";
import Jurassic from "../assets/JurrasicCover.jpg";

// Banner Images for each card
import HarryPotterBanner from "../assets/AlwaysBanner.jpg";
import darthVaderBanner from "../assets/darthVader.jpg";
import NosferatuBanner from "../assets/darkcastle.png";
import GhibiliBanner from "../assets/GhibiliBanner.png";
import StrangerThingsBanner from "../assets/St-banner.jpg";
import JurassicParkBanner from "../assets/DinoBanner.jpg";

// Theme Screenshot Image
import HarryPotterThemeImg from "../assets/Preview/HP-theme-preview.png";
import StarWarsThemeImg from "../assets/Preview/StarWars-theme-preview.png";
import NosferatuThemeImg from "../assets/Preview/Count-preview.png";
import GhibiliThemeImg from "../assets/Preview/Ghibili-theme-preview.png";
import StrangerThingsThemeImg from "../assets/Preview/Stranger-theme-preview.png";
import JurassicParkThemeImg from "../assets/Preview/Jurassic-theme-preview.png";

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
];
