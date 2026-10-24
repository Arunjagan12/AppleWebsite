import {
  macHigh1,
  macHigh3,
  highlightThirdVideo,
  macHigh4,
  m31,m32,m33,
  mainImg,img1,img2,img3,img4,img5,img6,img7,
  carImg1, carImg2, carImg3, carImg4, carImg5, carImg6, carImg7, carImg8, carImg9
  
} from "../../../utils";


export const navLists = ["Store", "Mac", "iPhone","iPad","Watch","AirPods","TV & Home","Entertainment","Accessories","Support",];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The most advanced chips ever",
      "built for a personal computer.",
      
    ],
    video: macHigh1,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: ["Up to 22 hours of battery life for", "the ultimate in pro portability."],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: [
      "The world’s best laptop display.",
      "Brilliant in every way.",
      
    ],
    video: macHigh3,
    videoDuration: 6,
  },
  {
    id: 4,
    textLists: ["A pro laptop without equal. Now in", "a new colour: Space Black."],
    video: macHigh4,
    videoDuration: 5,
  },
];


export const models = [
  {
    id: 1,
    title: "Macbook Pro White",
    color: ["#8F8A81", "#ffe7b9"],
  },

  {
    id: 4,
    title: "Macbook Pro Black", 
    color: ["#454749", "#3b3b3b"],        //color: ["#454749", "#3b3b3b", "#181819"],
    
  },
];

export const sizes = [
  { label: '6.7"', value: "small" },
  { label: '6.9"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

// constants.js
export const images = [
  mainImg,img1,img2,img3,img4,img5,img6,img7
];

export const carouselData = [
  {
    name: "Software development",
    imgSrc: carImg1,
    description: "Xcode, Unity Editor, Create ML, TensorFlow, PyTorch, NAG Fortran Compiler, Docker, IntelliJ and more."
  },
  {
    name: "Photo editing",
    imgSrc: carImg2,
    description: "Adobe Photoshop, Affinity Photo 2, Capture One, Adobe Photoshop Lightroom, Pixelmator Pro, Topaz Photo AI, DxO Nik and more."
  },
  {
    name: "STEM",
    imgSrc: carImg3,
    description: "MATLAB, Autodesk AutoCAD, NASA TetrUSS, Oxford Nanopore MinKNOW, OsiriX MD, Shapr3D, SurgicalAR, Vectorworks, Archicad and more."
  },
  {
    name: "Graphic Design",
    imgSrc: carImg4,
    description: "Adobe InDesign, Affinity Publisher 2, Sketch, Linearity Curve, Adobe Illustrator, Figma and more."
  },
  {
    name: "Productivity",
    imgSrc: carImg5,
    description: "Microsoft 365, Slack, Zoom, Omni productivity suite and more."
  },
  {
    name: "3D Rendering",
    imgSrc: carImg6,
    description: "Octane X, Maxon Cinema 4D, Maxon Redshift, Autodesk Maya, Adobe Substance Painter, Houdini, Blender and more."
  },
  {
    name: "Music Creation",
    imgSrc: carImg7,
    description: "Logic Pro, Pro Tools, Ableton Live, Cubase, Adobe Audition, FL Studio, MainStage and more."
  },
  {
    name: "Video Editing",
    imgSrc: carImg8,
    description: "DaVinci Resolve Studio, Adobe Premiere Pro, Final Cut Pro, Motion, Adobe After Effects, Nuke, Autodesk Flame and more."
  },
  {
    name: "Gaming",
    imgSrc: carImg9,
    description: "Lies of P, Layers of Fear 2023, Myst, Firmament, Baldur’s Gate 3, Stray, Resident Evil Village and more."
  },
  
];


export const features = [
  {
    id: 1,
    images: [
      m31,
      m32,
      m33
    ]
  },
  {
    id: 2,
    textLists: [
      { text1: "8-core", text2: "CPU" },
      { text1: "Up to", text2: "12-core CPU" },
      { text1: "Up to", text2: "16-core CPU" }
    ]
  },
  {
    id: 3,
    textLists: [
      { text1: "10-core", text2: "CPU" },
      { text1: "Up to", text2: "18-core GPU" },
      { text1: "Up to", text2: "40-core GPU" }
    ]
  },
  {
    id: 4,
    textLists: [
      { text1: "Up to 24GB", text2: "unified memory" },
      { text1: "Up to 36GB", text2: "unified memory" },
      { text1: "Up to 128GB", text2: "unified memory" }
    ]
  }
];