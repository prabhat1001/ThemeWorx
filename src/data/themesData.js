
// Cards Cover Images
import HarryPotter from '../assets/hp.jfif'
import StarWars from '../assets/starwars.jfif'
import Nosferatu from '../assets/NosferatuCover.jpg'
import Ghibili from '../assets/ghibiliCover.jpg'
import StrangerThings from '../assets/StrangerThings.jpg'
import Jurassic from '../assets/JurrasicCover.jpg'

// Banner Images for each card
import HarryPotterBanner from '../assets/AlwaysBanner.jpg'
import darthVaderBanner from '../assets/darthVader.jpg'
import NosferatuBanner from '../assets/darkcastle.png'
import GhibiliBanner from '../assets/GhibiliBanner.png'
import StrangerThingsBanner from '../assets/St-banner.jpg'
import JurassicParkBanner from '../assets/DinoBanner.jpg'

// Theme Screenshot Image

export const ThemesData = [
    {
        id:1,
        slug: "harry-potter",
        src: HarryPotter,
        alt:'HarryPotter',
        title: "Harry Potter",
        bannerImg: HarryPotterBanner,
        tagline: " ''Magic awaits beyond Platform 9¾ — welcome to a world the Muggles couldn’t Google.'' ",
        description: "Step into a workspace where every keystroke feels like casting a spell. Designed for wizards of code, this theme captures the candlelit charm of Hogwarts, floating parchment vibes, and deep library nights studying spells—or debugging errors. Enchanted gold accents glow like Lumos on dark backgrounds reminiscent of the Forbidden Forest. Perfect for developers who believe magic exists in clean syntax, well-crafted logic, and unbreakable focus. Whether you're building apps or conjuring new worlds, this theme whispers, “It is our choices that show what we truly are… so choose dark mode.” Accio productivity—mischief managed!",
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
},
        `,
    },
    {
        id:2,
        slug: "star-wars",
        src: StarWars,
        alt:'StarWars',
        title: "Star Wars",
        bannerImg: darthVaderBanner,
        tagline: " ''Aim your starship at the stars — welcome to the rebellion where impossible is just hyperspace away.''",
        description: "Transport your workspace to a galaxy far, far away. This theme channels the infinite depth of space, the glow of lightsabers, and the discipline of a Jedi warrior. Stark contrasts mirror battles between Light and Dark, guiding your focus like a TIE Fighter across stars. Ideal for both rebels and Sith developers, it blends futuristic UI elements with calm power. When you code, feel the hum of hyperspeed thinking. Whether you build for the Empire or lead the Rebellion, remember: “Do. Or do not. There is no try.” May your code be with you—always.",
        themeImg: "",
        themeCode: "",
    },
    {
        id:3,
        slug: "nosferatu",
        src: Nosferatu,
        alt:'Nosferatu',
        title: "Nosferatu ",
        bannerImg: NosferatuBanner,
        tagline: " ''When the night deepens... welcome to a realm where shadows still breathe''",
        description: "Enter at your own risk. This gothic theme is inspired by silent shadows, moonlit castles, and the chilling elegance of classic horror. Stark monochrome tones evoke Nosferatu’s eerie silence, while faint crimson accents bleed through like forbidden secrets in the night. Perfect for late-night coders who thrive under moonlight and mystery. Every line you write feels like carving runes into ancient stone. Atmospheric, brooding, and unapologetically dramatic—this theme is not for the faint-hearted. You won't fear the darkness… you'll become it. When the sun rises, your bug report vanishes. Productivity after dusk begins here.",
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
        id:4,
        slug: "ghibili",
        src: Ghibili,
        alt:'Ghibili',

        title: "Ghibili Studios",
        bannerImg: GhibiliBanner,
        tagline: " ''Wander softly — welcome to a world where spirits stir the wind and silence speaks.''",
        description: "A peaceful escape into a world painted by serenity and imagination. Inspired by Studio Ghibli’s dreamy forests, floating lights, and gentle pastel dusk skies, this theme invites calm concentration. Soft earth tones nurture creativity, while warm highlights spark curiosity like tiny forest spirits. Ideal for developers who see beauty in details and poetry in functions. Each tab feels like opening a new scene from Totoro’s meadow or Howl’s moving abstraction. Let code flow like wind through trees—quiet, enchanting, purposeful. Sometimes you have to take a leap… the magic begins after you start typing.",
        themeImg: "",
        themeCode: ``,
    },
    {
        id:5,
        slug:"stranger-things",
        src: StrangerThings,
        alt:'StrangerThings',
        title: "Stranger Things",
        bannerImg: StrangerThingsBanner,
        tagline: " '' Welcome to Hawkins. here things are a little bit stranger ! ''",
        description: "Step into the neon-lit shadows of Hawkins with this Stranger Things–inspired VS Code theme — where your code doesn’t just run, it stranges. Designed for developers who like their editors dark, dramatic, and occasionally Demogorgon-free, this theme brings retro sci-fi vibes, glowing synth colors, and just enough mystery to keep you coding “upside down.” Whether you're debugging portals or simply trying to escape bugs from another dimension, this theme keeps your workspace eerie yet comforting. Here's a warning for you! prolonged use may cause sudden nostalgia, increased productivity, and the urge to bicycle at night with walkie-talkies. Pretty strange… right?",
        themeImg: "",
        themeCode: `{
  // ================================
  // 🎃 NOSFERATU – Gothic Ambience
  // Dark, eerie, blue-violet atmosphere
  // ================================
  "workbench.colorCustomizations": {

    // Editor background & text
    "editor.background": "#0D0D2E",      // Deep midnight blue
    "editor.foreground": "#D4D4D4",      // Soft pale grey text
    "editorCursor.foreground": "#FFDD44", // Gothic golden cursor

    // Activity Bar (left sidebar icons)
    "activityBar.background": "#1B1B4B",  // Muted deep violet
    "activityBar.foreground": "#FFDD44",  // Gold icons
    "activityBarBadge.background": "#FFDD44",
    "activityBarBadge.foreground": "#0D0D2E",

    // File explorer background
    "sideBar.background": "#141432",     // Gothic shadow violet
    "sideBar.foreground": "#B3B3E6",     // Faded lavender text
    "sideBarSectionHeader.background": "#1B1B4B",

    // Status bar (bottom)
    "statusBar.background": "#1B1B4B",
    "statusBar.foreground": "#FFDD44",
    "statusBar.noFolderBackground": "#1B1B4B",
    "statusBar.debuggingBackground": "#661111", // Blood red during debug
    "statusBar.debuggingForeground": "#FFDD44",

    // Terminal
    "terminal.background": "#0D0D2E",
    "terminal.foreground": "#FFDD44",
    "terminalCursor.background": "#FFDD44",
    "terminalCursor.foreground": "#FFDD44",

    // Scrollbar
    "scrollbarSlider.background": "#FFDD4411",   // Gold translucent
    "scrollbarSlider.hoverBackground": "#FFDD4444",
    "scrollbarSlider.activeBackground": "#FFDD4477",

    // Minimap
    "minimap.background": "#0D0D2E",

    // Title bar (window top bar)
    "titleBar.activeBackground": "#1B1B4B",
    "titleBar.activeForeground": "#FFDD44",
    "titleBar.inactiveBackground": "#0D0D2E",
    "titleBar.inactiveForeground": "#8888AA"
  },

  // ================================
  // Token colors (syntax highlighting)
  // ================================
  "editor.tokenColorCustomizations": {
    "comments": "#7A6F99",   // Dusty gothic lavender
    "keywords": "#FFDD44",   // Golden runes
    "strings": "#FF7B42",    // Warm ember orange
    "functions": "#77DD77",  // Pale undead green
    "variables": "#8888FF"   // Mystic violet
  },

  // Icon pack
  "workbench.iconTheme": "vscode-icons"
        }`,

    
    },
    {
        id:6,
        slug:"jurassic-park",
        src: Jurassic,
        alt:'JurassicPark',

        title: "Jurassic Park",
        bannerImg: JurassicParkBanner,
        tagline: " '' Life finds a way, Welcome… to a world where giants walk again.'' ",
        description: "Welcome to the era where logic meets primal force. This adventurous theme captures the raw energy of untamed jungles, flickering emergency lights, and roaring ambition. Deep greens of prehistoric leaves blend with electrifying amber hues—the color of preserved DNA. Perfect for developers who break barriers like Dr. Grant breaks theories. Each line of code feels like resurrecting ancient power from chaos. But beware—just because you can code it, doesn't mean you should. Harness prehistoric productivity, avoid catastrophic syntax extinction, and remember: “Life finds a way… and so does your debug session.” ",
        themeImg: "",
        themeCode: ``,
    },
];