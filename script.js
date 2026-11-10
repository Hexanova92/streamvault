'use strict';

/* ==========================================================================
   StreamVault — personal video library
   Plain HTML / CSS / JavaScript. No frameworks, no build step, no backend.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Library manifest
   --------------------------------------------------------------------------
   Browsers cannot scan a local folder by themselves (security restriction).
   This list is the "permanent" library. Add an entry after dropping a file
   into videos/ and a thumbnail into thumbnails/. See the import dialog for
   the session-only folder picker alternative.
   -------------------------------------------------------------------------- */
const DEFAULT_LIBRARY = [
  {
    id: 'video-live-crypto',
    title: 'Live Crypto — Gold Analysis — 30 Oct',
    src: 'videos/Live Crypto - Gold Analysis - 30 Oct - The Trade Room - Mayank Raj.mp4',
    thumb: 'thumbnails/Live Crypto - Gold Analysis - 30 Oct - The Trade Room - Mayank Raj.jpg',
    duration: 6640,
    category: 'Live Sessions',
    size: 618804227,
    added: '2026-10-30T22:37:54',
    quality: 'AV1',
    fileName: 'Live Crypto - Gold Analysis - 30 Oct - The Trade Room - Mayank Raj.mp4',
    subtitles: []
  },
  {
    id: 'video50',
    title: 'Scalping Master — Part 50',
    src: 'videos/Scalping Master Part 50.mp4',
    thumb: 'thumbnails/Scalping Master Part 50.jpg',
    duration: 1606,
    category: 'Scalping Master',
    size: 151629262,
    added: '2026-11-10T13:23:10',
    quality: 'HD',
    fileName: 'Scalping Master Part 50.mp4',
    subtitles: []
  },
  {
    id: 'video51',
    title: 'Scalping Master — Part 51',
    src: 'videos/Scalping Master Part 51.mp4',
    thumb: 'thumbnails/Scalping Master Part 51.jpg',
    duration: 2625,
    category: 'Scalping Master',
    size: 127051328,
    added: '2026-11-10T13:26:05',
    quality: 'AV1',
    fileName: 'Scalping Master Part 51.mp4',
    subtitles: []
  },
  {
    id: 'video52',
    title: 'Scalping Master — Part 52',
    src: 'videos/Scalping Master Part 52.mp4',
    thumb: 'thumbnails/Scalping Master Part 52.jpg',
    duration: 2915,
    category: 'Scalping Master',
    size: 112364488,
    added: '2026-11-10T13:26:08',
    quality: 'HD',
    fileName: 'Scalping Master Part 52.mp4',
    subtitles: []
  },
  {
    id: 'video53',
    title: 'Scalping Master — Part 53',
    src: 'videos/Scalping Master Part 53.mp4',
    thumb: 'thumbnails/Scalping Master Part 53.jpg',
    duration: 1158,
    category: 'Scalping Master',
    size: 52111335,
    added: '2026-11-10T13:25:58',
    quality: 'HD',
    fileName: 'Scalping Master Part 53.mp4',
    subtitles: []
  },
  {
    id: 'video54',
    title: 'Scalping Master — Part 54',
    src: 'videos/Scalping Master Part 54.mp4',
    thumb: 'thumbnails/Scalping Master Part 54.jpg',
    duration: 1929,
    category: 'Scalping Master',
    size: 72046262,
    added: '2026-11-10T13:26:02',
    quality: 'HD',
    fileName: 'Scalping Master Part 54.mp4',
    subtitles: []
  },
  {
    id: 'video55',
    title: 'Scalping Master — Part 55',
    src: 'videos/Scalping Master Part 55.mp4',
    thumb: 'thumbnails/Scalping Master Part 55.jpg',
    duration: 1160,
    category: 'Scalping Master',
    size: 71480181,
    added: '2026-11-10T13:26:01',
    quality: 'HD',
    fileName: 'Scalping Master Part 55.mp4',
    subtitles: []
  },
  {
    id: 'video56',
    title: 'Scalping Master — Part 56',
    src: 'videos/Scalping Master Part 56.mp4',
    thumb: 'thumbnails/Scalping Master Part 56.jpg',
    duration: 1476,
    category: 'Scalping Master',
    size: 62513905,
    added: '2026-11-10T13:26:02',
    quality: 'HD',
    fileName: 'Scalping Master Part 56.mp4',
    subtitles: []
  },
  {
    id: 'video57',
    title: 'Scalping Master — Part 57',
    src: 'videos/Scalping Master Part 57.mp4',
    thumb: 'thumbnails/Scalping Master Part 57.jpg',
    duration: 620,
    category: 'Scalping Master',
    size: 47527919,
    added: '2026-11-10T13:25:57',
    quality: 'HD',
    fileName: 'Scalping Master Part 57.mp4',
    subtitles: []
  },
  {
    id: 'video58',
    title: 'Scalping Master — Part 58',
    src: 'videos/Scalping Master Part 58.mp4',
    thumb: 'thumbnails/Scalping Master Part 58.jpg',
    duration: 1544,
    category: 'Scalping Master',
    size: 184611560,
    added: '2026-11-10T13:26:49',
    quality: 'HD',
    fileName: 'Scalping Master Part 58.mp4',
    subtitles: []
  },
  {
    id: 'video59',
    title: 'Scalping Master — Part 59',
    src: 'videos/Scalping Master Part 59.mp4',
    thumb: 'thumbnails/Scalping Master Part 59.jpg',
    duration: 1793,
    category: 'Scalping Master',
    size: 157516759,
    added: '2026-11-10T13:26:52',
    quality: 'AV1',
    fileName: 'Scalping Master Part 59.mp4',
    subtitles: []
  },
  {
    id: 'video60',
    title: 'Scalping Master — Part 60',
    src: 'videos/Scalping Master Part 60.mp4',
    thumb: 'thumbnails/Scalping Master Part 60.jpg',
    duration: 1787,
    category: 'Scalping Master',
    size: 177523853,
    added: '2026-11-10T13:26:54',
    quality: 'HD',
    fileName: 'Scalping Master Part 60.mp4',
    subtitles: []
  },
  {
    id: 'video61',
    title: 'Scalping Master — Part 61',
    src: 'videos/Scalping Master Part 61.mp4',
    thumb: 'thumbnails/Scalping Master Part 61.jpg',
    duration: 2167,
    category: 'Scalping Master',
    size: 214469371,
    added: '2026-11-10T13:26:58',
    quality: 'AV1',
    fileName: 'Scalping Master Part 61.mp4',
    subtitles: []
  },
  {
    id: 'video62',
    title: 'Scalping Master — Part 62',
    src: 'videos/Scalping Master Part 62.mp4',
    thumb: 'thumbnails/Scalping Master Part 62.jpg',
    duration: 854,
    category: 'Scalping Master',
    size: 31453051,
    added: '2026-11-10T13:26:40',
    quality: 'HD',
    fileName: 'Scalping Master Part 62.mp4',
    subtitles: []
  },
  {
    id: 'video63',
    title: 'Scalping Master — Part 63',
    src: 'videos/Scalping Master Part 63.mp4',
    thumb: 'thumbnails/Scalping Master Part 63.jpg',
    duration: 2030,
    category: 'Scalping Master',
    size: 86026316,
    added: '2026-11-10T13:26:53',
    quality: 'HD',
    fileName: 'Scalping Master Part 63.mp4',
    subtitles: []
  },
  {
    id: 'video64',
    title: 'Scalping Master — Part 64',
    src: 'videos/Scalping Master Part 64.mp4',
    thumb: 'thumbnails/Scalping Master Part 64.jpg',
    duration: 1413,
    category: 'Scalping Master',
    size: 55699531,
    added: '2026-11-10T13:26:46',
    quality: 'HD',
    fileName: 'Scalping Master Part 64.mp4',
    subtitles: []
  },
  {
    id: 'video65',
    title: 'Scalping Master — Part 65',
    src: 'videos/Scalping Master Part 65.mp4',
    thumb: 'thumbnails/Scalping Master Part 65.jpg',
    duration: 1732,
    category: 'Scalping Master',
    size: 68010160,
    added: '2026-11-10T13:26:49',
    quality: 'HD',
    fileName: 'Scalping Master Part 65.mp4',
    subtitles: []
  },
  {
    id: 'video66',
    title: 'Scalping Master — Part 66',
    src: 'videos/Scalping Master Part 66.mp4',
    thumb: 'thumbnails/Scalping Master Part 66.jpg',
    duration: 847,
    category: 'Scalping Master',
    size: 39625837,
    added: '2026-11-10T13:26:42',
    quality: 'HD',
    fileName: 'Scalping Master Part 66.mp4',
    subtitles: []
  },
  {
    id: 'video67',
    title: 'Scalping Master — Part 67',
    src: 'videos/Scalping Master Part 67.mp4',
    thumb: 'thumbnails/Scalping Master Part 67.jpg',
    duration: 1489,
    category: 'Scalping Master',
    size: 88459955,
    added: '2026-11-10T13:26:53',
    quality: 'HD',
    fileName: 'Scalping Master Part 67.mp4',
    subtitles: []
  },
  {
    id: 'video68',
    title: 'Scalping Master — Part 68',
    src: 'videos/Scalping Master Part 68.mp4',
    thumb: 'thumbnails/Scalping Master Part 68.jpg',
    duration: 3106,
    category: 'Scalping Master',
    size: 165933423,
    added: '2026-11-10T13:27:02',
    quality: 'HD',
    fileName: 'Scalping Master Part 68.mp4',
    subtitles: []
  }
];

const SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const STORAGE_KEY = 'streamvault:state:v1';
const TRANSPARENT_PX = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

// Chrome/Edge treat every file:// URL as a unique origin, so a <track> cannot
// fetch a sibling .vtt file when the page is opened directly from disk. Inline
// the demo captions as data URLs in that case. Replace the .vtt files (or these
// strings) with your own captions.
const INLINE_SUBTITLES = {
  'subtitles/video1.en.vtt': `WEBVTT

00:00:00.000 --> 00:00:06.000
Subtitles are enabled. This is a demo caption track for video 1.

00:00:06.000 --> 00:00:14.000
Replace subtitles/video1.en.vtt with your own WebVTT captions.

00:00:14.000 --> 00:00:22.000
Use the CC button in the player to turn captions on or off.`,
  'subtitles/video2.en.vtt': `WEBVTT

00:00:00.000 --> 00:00:05.000
Demo captions are working for this video.

00:00:05.000 --> 00:00:12.000
You can load any .vtt file by adding it to the subtitles folder.`,
  'subtitles/video3.en.vtt': `WEBVTT

00:00:00.000 --> 00:00:04.000
A third demo subtitle track.

00:00:04.000 --> 00:00:10.000
Choose a caption track from the player settings menu.`
};

function subtitleSrc(src) {
  if (location.protocol !== 'file:') return src;
  const text = INLINE_SUBTITLES[src];
  return text ? `data:text/vtt;charset=utf-8,${encodeURIComponent(text)}` : '';
}

/* --------------------------------------------------------------------------
   2. Inline SVG icon set
   -------------------------------------------------------------------------- */
const ICON_PATHS = {
  play: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>',
  prev: '<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>',
  next: '<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>',
  skipBack: '<path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/><text x="12" y="15.4" text-anchor="middle" font-size="5.8" font-weight="700" fill="currentColor" font-family="Segoe UI, Arial, sans-serif">10</text>',
  skipForward: '<g transform="translate(24,0) scale(-1,1)"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></g><text x="12" y="15.4" text-anchor="middle" font-size="5.8" font-weight="700" fill="currentColor" font-family="Segoe UI, Arial, sans-serif">10</text>',
  volumeUp: '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>',
  volumeDown: '<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>',
  volumeOff: '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>',
  settings: '<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>',
  subtitles: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>',
  pip: '<path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/>',
  theater: '<path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>',
  fullscreen: '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>',
  fullscreenExit: '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>',
  heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
  clock: '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',
  shuffle: '<path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>',
  search: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  menu: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
  close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
  plus: '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
  library: '<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>',
  playCircle: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>',
  folderPlus: '<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"/>',
  folder: '<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>',
  videoFile: '<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>',
  film: '<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>',
  info: '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',
  check: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
  trash: '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>',
  chevronDown: '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
  chevronRight: '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>',
  arrowLeft: '<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>',
  loop: '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>',
  link: '<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>',
  error: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
  sparkle: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>'
};

function icon(name, cls = '') {
  const body = ICON_PATHS[name] || ICON_PATHS.film;
  return `<svg class="icon${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${body}</svg>`;
}

/** Replace <span data-icon="name"></span> placeholders in static HTML. */
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
    el.removeAttribute('data-icon');
  });
}

/* --------------------------------------------------------------------------
   3. Small utilities
   -------------------------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHTML(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatDuration(seconds) {
  const total = Math.max(0, Math.floor(Number(seconds) || 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatDurationLong(seconds) {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  if (h > 0) return `${h} hr ${m} min`;
  if (m > 0) return `${m} min`;
  return `${total} sec`;
}

function formatViews(count) {
  const n = Math.max(0, Number(count) || 0);
  if (n >= 1000000) return `${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return String(n);
}

function formatBytes(bytes) {
  const n = Number(bytes) || 0;
  if (!n) return '—';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(n) / Math.log(1024)));
  return `${(n / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function timeAgo(iso, { long = false } = {}) {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return 'Unknown';
  const diff = Math.max(0, Date.now() - then);
  const day = 86400000;
  if (diff < 60000) return 'just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`;
  if (diff < day) return `${Math.floor(diff / 3600000)} hr ago`;
  if (diff < day * 2) return long ? 'yesterday' : '1 day ago';
  if (diff < day * 7) return `${Math.floor(diff / day)} days ago`;
  if (diff < day * 30) {
    const weeks = Math.floor(diff / (day * 7));
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  }
  if (diff < day * 365) {
    const months = Math.floor(diff / (day * 30));
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }
  const years = Math.floor(diff / (day * 365));
  return `${years} year${years === 1 ? '' : 's'} ago`;
}

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'Unknown';
  try {
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (err) {
    return d.toDateString();
  }
}

function debounce(fn, wait = 180) {
  let timer = 0;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function uid(prefix = 'local') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeSearch(text) {
  return String(text || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

/* --------------------------------------------------------------------------
   4. Persistent state
   -------------------------------------------------------------------------- */
const DEFAULT_STATE = {
  settings: {
    volume: 1,
    muted: false,
    speed: 1,
    autoplay: true,
    loop: false,
    theater: false,
    subtitles: false,
    subtitleIndex: 0
  },
  ui: {
    sidebarCollapsed: false,
    sort: 'newest',
    category: 'All',
    playerVolume: 1
  },
  favorites: [],
  history: {},
  imported: []
};

let appState = loadState();
let sessionLibrary = null;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const fresh = deepClone(DEFAULT_STATE);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fresh;
    const parsed = JSON.parse(raw);
    const merged = {
      settings: Object.assign(fresh.settings, parsed.settings || {}),
      ui: Object.assign(fresh.ui, parsed.ui || {}),
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites.filter((x) => typeof x === 'string') : [],
      history: parsed.history && typeof parsed.history === 'object' ? parsed.history : {},
      imported: Array.isArray(parsed.imported) ? parsed.imported.filter((item) => item && !item.sessionOnly) : []
    };
    merged.settings.volume = clamp(Number(merged.settings.volume), 0, 1);
    merged.settings.speed = SPEEDS.includes(Number(merged.settings.speed)) ? Number(merged.settings.speed) : 1;
    merged.settings.boolVolume = undefined;
    return merged;
  } catch (err) {
    console.warn('[StreamVault] Could not read saved state:', err);
    return fresh;
  }
}

function saveState() {
  try {
    // Session imports contain blob: URLs and canvas thumbnails. Persisting them
    // would waste quota and leave dead links after a reload.
    const payload = Object.assign({}, appState, {
      imported: appState.imported.filter((item) => item && !item.sessionOnly)
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[StreamVault] Could not save state:', err);
  }
}

function getLibrary() {
  const base = sessionLibrary && sessionLibrary.length ? sessionLibrary : DEFAULT_LIBRARY;
  const imported = Array.isArray(appState.imported) ? appState.imported : [];
  const seen = new Set();
  return [...base, ...imported].filter((video) => {
    if (!video || !video.id || seen.has(video.id)) return false;
    seen.add(video.id);
    return true;
  });
}

function getVideo(id) {
  return getLibrary().find((video) => video.id === id) || null;
}

function isFavorite(id) {
  return appState.favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    appState.favorites = appState.favorites.filter((item) => item !== id);
  } else {
    appState.favorites.unshift(id);
  }
  saveState();
  return isFavorite(id);
}

function getHistory(id) {
  const row = appState.history[id];
  if (!row || typeof row !== 'object') return null;
  return row;
}

function saveHistory(id, data) {
  if (!id) return;
  const previous = appState.history[id] || {};
  const duration = Number(data.duration) || Number(previous.duration) || 0;
  const progress = clamp(Number(data.progress) || 0, 0, duration || Number.MAX_SAFE_INTEGER);
  const entry = {
    progress,
    duration,
    updated: data.updated || new Date().toISOString(),
    completed: progress > 0 && duration > 0 ? progress / duration >= 0.97 : false
  };
  if (entry.completed && !data.keepCompleted) {
    delete appState.history[id];
  } else {
    appState.history[id] = entry;
  }
  saveState();
}

function clearHistory() {
  appState.history = {};
  saveState();
}

function resolveProgress(video) {
  const row = getHistory(video.id);
  return row && Number.isFinite(row.progress) ? row.progress : 0;
}

function progressPercent(video) {
  const row = getHistory(video.id);
  if (!row || !row.duration) return 0;
  return clamp((row.progress / row.duration) * 100, 0, 100);
}

function categoryList() {
  const names = new Set(['All']);
  getLibrary().forEach((video) => {
    if (video.category) names.add(video.category);
  });
  return Array.from(names);
}

function sortLibrary(list, mode = appState.ui.sort) {
  const arr = list.slice();
  switch (mode) {
    case 'oldest':
      arr.sort((a, b) => new Date(a.added) - new Date(b.added));
      break;
    case 'title':
      arr.sort((a, b) => String(a.title).localeCompare(String(b.title)));
      break;
    case 'duration':
      arr.sort((a, b) => (Number(b.duration) || 0) - (Number(a.duration) || 0));
      break;
    case 'newest':
    default:
      arr.sort((a, b) => new Date(b.added) - new Date(a.added));
  }
  return arr;
}

/* --------------------------------------------------------------------------
   5. Shared view fragments
   -------------------------------------------------------------------------- */
function videoCardHTML(video, { showProgress = false } = {}) {
  const progress = resolveProgress(video);
  const percent = showProgress ? progressPercent(video) : 0;
  const fav = isFavorite(video.id);
  return `
    <article class="card" data-video-id="${escapeHTML(video.id)}">
      <a class="thumb-link" href="#/watch/${encodeURIComponent(video.id)}" aria-label="${escapeHTML(video.title)}">
        <span class="thumb-fallback">${icon('film')}</span>
        <img src="${escapeHTML(video.thumb)}" alt="" loading="lazy"
             onerror="this.style.opacity='0'">
        <span class="duration-badge">${formatDuration(video.duration)}</span>
        ${percent > 96 ? '<span class="watched-badge">Watched</span>' : ''}
        ${percent > 0 ? `<span class="mini-progress"><i style="width:${percent.toFixed(2)}%"></i></span>` : ''}
      </a>
      <button class="fav-btn${fav ? ' active' : ''}" data-action="toggle-fav" data-id="${escapeHTML(video.id)}" aria-label="${fav ? 'Remove from favorites' : 'Add to favorites'}" title="${fav ? 'Remove from favorites' : 'Add to favorites'}">${icon('heart')}</button>
      <div class="card-body">
        <h3 class="card-title"><a href="#/watch/${encodeURIComponent(video.id)}">${escapeHTML(video.title)}</a></h3>
        <div class="card-meta">
          <span class="card-cat">${escapeHTML(video.category || 'Video')}</span>
          <span class="dot"></span>
          <span>${formatViews(video.views || 0)} views</span>
          <span class="dot"></span>
          <span>${timeAgo(video.added)}</span>
        </div>
        ${showProgress && progress ? `<div class="card-meta card-progress-note">${percent.toFixed(0)}% watched · <strong>${formatDuration(Math.max(0, video.duration - progress))} left</strong></div>` : ''}
      </div>
    </article>`;
}

function railHTML(title, videos, { href = '#/videos', showProgress = false } = {}) {
  if (!videos.length) return '';
  return `
    <section>
      <div class="section-head">
        <h2 class="section-title">${icon('playCircle')} ${escapeHTML(title)}</h2>
        <a class="section-link" href="${href}">View all ${icon('chevronRight')}</a>
      </div>
      <div class="rail">
        ${videos.map((video) => videoCardHTML(video, { showProgress })).join('')}
      </div>
    </section>`;
}

function gridHTML(title, videos, { showProgress = false, empty = null, subtitle = '' } = {}) {
  if (!videos.length && empty) return empty;
  return `
    <section>
      <div class="section-head">
        <div>
          <h2 class="section-title">${escapeHTML(title)}</h2>
          ${subtitle ? `<p class="page-sub">${escapeHTML(subtitle)}</p>` : ''}
        </div>
        <span class="count-pill">${videos.length} video${videos.length === 1 ? '' : 's'}</span>
      </div>
      <div class="video-grid">
        ${videos.map((video) => videoCardHTML(video, { showProgress })).join('')}
      </div>
    </section>`;
}

function emptyStateHTML(iconName, title, text, actionHTML = '') {
  return `
    <div class="empty-state">
      <span class="empty-icon">${icon(iconName)}</span>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(text)}</p>
      ${actionHTML}
    </div>`;
}

function pageHeaderHTML(title, subtitle = '', extra = '') {
  return `
    <header class="page-head">
      <div>
        <h1 class="page-title">${escapeHTML(title)}</h1>
        ${subtitle ? `<p class="page-sub">${escapeHTML(subtitle)}</p>` : ''}
      </div>
      ${extra ? `<div class="page-actions">${extra}</div>` : ''}
    </header>`;
}

function filterBarHTML() {
  const categories = categoryList();
  return `
    <div class="filter-bar">
      <div class="chips" role="group" aria-label="Filter by category">
        ${categories.map((cat) => `
          <button class="chip${appState.ui.category === cat ? ' active' : ''}" data-action="category" data-category="${escapeHTML(cat)}" aria-pressed="${appState.ui.category === cat}">
            ${escapeHTML(cat)}
          </button>`).join('')}
      </div>
      <label class="sort-control">
        <span>Sort</span>
        <span class="select-wrap">
          <select class="select" id="sortSelect" aria-label="Sort videos">
            <option value="newest"${appState.ui.sort === 'newest' ? ' selected' : ''}>Newest first</option>
            <option value="oldest"${appState.ui.sort === 'oldest' ? ' selected' : ''}>Oldest first</option>
            <option value="title"${appState.ui.sort === 'title' ? ' selected' : ''}>Title A–Z</option>
            <option value="duration"${appState.ui.sort === 'duration' ? ' selected' : ''}>Longest first</option>
          </select>
          ${icon('chevronDown')}
        </span>
      </label>
    </div>`;
}

function categoryFiltered(videos) {
  if (appState.ui.category === 'All') return videos;
  return videos.filter((video) => video.category === appState.ui.category);
}

/* --------------------------------------------------------------------------
   6. Router
   -------------------------------------------------------------------------- */
let currentRoute = { name: 'home', id: null, query: '' };
let currentCleanup = null;

function parseRoute() {
  const raw = String(location.hash || '').replace(/^#\/?/, '');
  if (!raw) return { name: 'home', id: null, query: '' };
  const [pathPart, queryPart = ''] = raw.split('?');
  const parts = pathPart.split('/').filter(Boolean).map(decodeURIComponent);
  const name = (parts[0] || 'home').toLowerCase();
  let query = '';
  if (name === 'search') {
    const params = new URLSearchParams(queryPart);
    query = params.get('q') || parts.slice(1).join(' ') || '';
  }
  return { name, id: parts[1] || null, query };
}

function navigate(hash) {
  if (location.hash === hash) {
    renderRoute();
  } else {
    location.hash = hash;
  }
}

function goBackOrHome() {
  if (history.length > 1) history.back();
  else navigate('#/home');
}

/* --------------------------------------------------------------------------
   7. Views
   -------------------------------------------------------------------------- */
function renderHome(main) {
  const library = sortLibrary(getLibrary(), 'newest');
  const recent = library.slice(0, 4);
  const featured = library[0];
  const continueWatching = library
    .filter((video) => {
      const row = getHistory(video.id);
      return row && row.progress > 3 && !row.completed;
    })
    .sort((a, b) => new Date(getHistory(b.id).updated) - new Date(getHistory(a.id).updated))
    .slice(0, 4);
  const favorites = library.filter((video) => isFavorite(video.id)).slice(0, 4);
  const categories = categoryList().filter((cat) => cat !== 'All');

  const hero = featured ? `
    <section class="hero">
      <img class="hero-bg" src="${escapeHTML(featured.thumb)}" alt="" onerror="this.style.display='none'">
      <div class="hero-content">
        <span class="hero-eyebrow">${icon('sparkle')} Featured recording</span>
        <h1 class="hero-title">${escapeHTML(featured.title)}</h1>
        <p class="hero-meta">
          <span>${formatDurationLong(featured.duration)}</span>
          <span class="dot"></span>
          <span>${escapeHTML(featured.category || 'Videos')}</span>
          <span class="dot"></span>
          <span>${formatBytes(featured.size)}</span>
          <span class="dot"></span>
          <span>${timeAgo(featured.added, { long: true })}</span>
        </p>
        <p class="hero-desc">Your latest capture, ready to play. Resume where you left off or start from the beginning.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/watch/${encodeURIComponent(featured.id)}">${icon('play')} Play now</a>
          <a class="btn btn-ghost" href="#/videos">${icon('library')} Browse library</a>
        </div>
      </div>
    </section>` : '';

  const stats = `
    <section class="stats" aria-label="Library statistics">
      <div class="stat"><span class="stat-icon">${icon('film')}</span><div><div class="stat-value">${getLibrary().length}</div><div class="stat-label">Videos</div></div></div>
      <div class="stat"><span class="stat-icon">${icon('clock')}</span><div><div class="stat-value">${formatDurationLong(getLibrary().reduce((sum, v) => sum + (Number(v.duration) || 0), 0))}</div><div class="stat-label">Total runtime</div></div></div>
      <div class="stat"><span class="stat-icon">${icon('heart')}</span><div><div class="stat-value">${appState.favorites.length}</div><div class="stat-label">Favorites</div></div></div>
      <div class="stat"><span class="stat-icon">${icon('playCircle')}</span><div><div class="stat-value">${Object.keys(appState.history).length}</div><div class="stat-label">In progress</div></div></div>
    </section>`;

  const categoriesHTML = categories.length ? `
    <section class="category-strip" aria-label="Browse categories">
      ${categories.map((cat) => {
        const count = library.filter((v) => v.category === cat).length;
        return `<button class="category-tile" data-action="category-open" data-category="${escapeHTML(cat)}">
          <span class="category-icon">${icon('folder')}</span>
          <span class="category-name">${escapeHTML(cat)}</span>
          <span class="category-count">${count} video${count === 1 ? '' : 's'}</span>
        </button>`;
      }).join('')}
    </section>` : '';

  main.innerHTML = `${hero}${stats}${continueWatching.length ? railHTML('Continue watching', continueWatching, { href: '#/continue', showProgress: true }) : ''}${railHTML('Recently added', recent)}${categoriesHTML}${favorites.length ? railHTML('Favorites', favorites, { href: '#/favorites' }) : ''}${railHTML('Everything in your library', sortLibrary(getLibrary(), 'newest').slice(0, 8), { href: '#/videos' })}`;
  bindViewEvents(main);
}

function renderAllVideos(main) {
  const library = sortLibrary(categoryFiltered(getLibrary()));
  main.innerHTML = `
    ${pageHeaderHTML('Your library', `${getLibrary().length} videos · ${formatDurationLong(getLibrary().reduce((sum, v) => sum + (Number(v.duration) || 0), 0))} of recordings`, '<button class="btn btn-primary" data-action="open-import">' + icon('plus') + ' Import videos</button>')}
    ${filterBarHTML()}
    ${gridHTML('All videos', library, {
      empty: emptyStateHTML('film', 'No videos in this category', 'Try a different category or import new recordings.', '<button class="btn btn-primary" data-action="clear-category">Show all videos</button>')
    })}
    <div class="load-more-row"><p class="muted">You are viewing ${library.length} of ${getLibrary().length} videos.</p></div>`;
  bindViewEvents(main);
}

function historyRows(videos) {
  return videos.map((video) => {
    const row = getHistory(video.id);
    const percent = progressPercent(video);
    const watchedDate = row ? new Date(row.updated).toLocaleString() : '—';
    return `
      <article class="history-row" data-video-id="${escapeHTML(video.id)}">
        <a class="history-thumb" href="#/watch/${encodeURIComponent(video.id)}">
          <img src="${escapeHTML(video.thumb)}" alt="" loading="lazy" onerror="this.style.opacity=0">
          <span class="duration-badge">${formatDuration(video.duration)}</span>
          <span class="mini-progress"><i style="width:${percent.toFixed(2)}%"></i></span>
        </a>
        <div class="history-info">
          <h3><a href="#/watch/${encodeURIComponent(video.id)}">${escapeHTML(video.title)}</a></h3>
          <p class="muted">StreamVault · ${formatViews(video.views || 0)} views · ${formatDurationLong(video.duration)}</p>
          <p class="muted">${row ? `Watched ${escapeHTML(watchedDate)} · ${percent.toFixed(0)}% complete` : 'Not started'}</p>
        </div>
        <div class="history-actions">
          <a class="btn btn-small" href="#/watch/${encodeURIComponent(video.id)}">${row && row.progress > 3 ? 'Resume' : 'Play'}</a>
          <button class="icon-btn" data-action="history-remove" data-id="${escapeHTML(video.id)}" aria-label="Remove from history" title="Remove from history">${icon('close')}</button>
        </div>
      </article>`;
  }).join('');
}

function renderHistory(main) {
  const all = Object.keys(appState.history)
    .map((id) => getVideo(id))
    .filter(Boolean)
    .sort((a, b) => new Date(appState.history[b.id].updated) - new Date(appState.history[a.id].updated));
  const totalSeconds = all.reduce((sum, video) => sum + (getHistory(video.id)?.progress || 0), 0);

  main.innerHTML = `
    ${pageHeaderHTML('Watch history', all.length ? `${all.length} videos · ${formatDurationLong(totalSeconds)} watched` : 'Nothing watched yet', all.length ? '<button class="btn btn-ghost btn-danger" data-action="clear-history">' + icon('trash') + ' Clear history</button>' : '')}
    ${all.length ? `<div class="history-list">${historyRows(all)}</div>` : emptyStateHTML('clock', 'Your history is empty', 'Videos you open are saved here automatically. Start with a favorite from your library.', '<a class="btn btn-primary" href="#/videos">Browse videos</a>')}`;
  bindViewEvents(main);
}

function renderFavorites(main) {
  const favorites = sortLibrary(getLibrary().filter((video) => isFavorite(video.id)));
  main.innerHTML = `
    ${pageHeaderHTML('Favorites', favorites.length ? `${favorites.length} saved video${favorites.length === 1 ? '' : 's'}` : 'Your saved videos, all in one place')}
    ${favorites.length ? gridHTML('Saved for later', favorites) : emptyStateHTML('heart', 'No favorites yet', 'Tap the heart on any video or in the player to save it here.', '<a class="btn btn-primary" href="#/videos">Find something to watch</a>')}`;
  bindViewEvents(main);
}

function renderContinue(main) {
  const videos = getLibrary()
    .filter((video) => {
      const row = getHistory(video.id);
      return row && row.progress > 3 && !row.completed;
    })
    .sort((a, b) => new Date(getHistory(b.id).updated) - new Date(getHistory(a.id).updated));
  main.innerHTML = `
    ${pageHeaderHTML('Continue watching', videos.length ? 'Pick up right where you left off' : 'You are all caught up')}
    ${videos.length
      ? gridHTML('In progress', videos, { showProgress: true })
      : emptyStateHTML('playCircle', 'Nothing in progress', 'Start a video and your place is saved automatically.', '<a class="btn btn-primary" href="#/videos">Browse videos</a>')}`;
  bindViewEvents(main);
}

function renderSearch(main, query) {
  const q = normalizeSearch(query);
  const results = q
    ? sortLibrary(getLibrary().filter((video) => normalizeSearch([
        video.title, video.category, video.fileName, ...(video.tags || [])
      ].join(' ')).includes(q)))
    : [];
  main.innerHTML = `
    ${pageHeaderHTML(q ? `Results for “${query}”` : 'Search', q ? `${results.length} match${results.length === 1 ? '' : 'es'} in your library` : 'Search your titles, categories, and filenames')}
    ${q ? (results.length ? gridHTML('Videos', results) : emptyStateHTML('search', 'No results found', `Nothing matched “${query}”. Try a shorter keyword or search a category like Trading.`, '<a class="btn btn-primary" href="#/videos">Browse all videos</a>'))
      : emptyStateHTML('search', 'Search your library', 'Use the search bar above. Results filter instantly as you type.')}`;
  bindViewEvents(main);
}

function renderNotFound(main) {
  main.innerHTML = emptyStateHTML('error', 'Page not found', 'The page you are looking for does not exist or was moved.', '<a class="btn btn-primary" href="#/home">Back to home</a>');
}

function renderRoute() {
  const main = $('#main');
  if (!main) return;
  if (typeof currentCleanup === 'function') {
    try { currentCleanup(); } catch (err) { console.warn(err); }
  }
  currentCleanup = null;
  closeMenus();
  currentRoute = parseRoute();
  const { name, id, query } = currentRoute;
  document.body.classList.toggle('on-watch-page', name === 'watch');
  if (name !== 'watch') {
    document.title = 'StreamVault — Your videos, beautifully organized';
  }
  window.scrollTo({ top: 0, behavior: 'auto' });

  switch (name) {
    case 'home':
      renderHome(main);
      break;
    case 'videos':
    case 'library':
      renderAllVideos(main);
      break;
    case 'history':
      renderHistory(main);
      break;
    case 'favorites':
      renderFavorites(main);
      break;
    case 'continue':
      renderContinue(main);
      break;
    case 'search':
      renderSearch(main, query);
      syncSearchInput(query);
      break;
    case 'watch':
      if (id && getVideo(id)) renderWatch(main, id);
      else renderNotFound(main);
      break;
    default:
      renderNotFound(main);
  }
  updateActiveNav(name);
}

function updateActiveNav(name) {
  const map = { home: 'home', videos: 'videos', library: 'videos', history: 'history', favorites: 'favorites', continue: 'continue' };
  const active = map[name] || '';
  $$('.nav-item[data-nav]').forEach((item) => {
    const on = item.dataset.nav === active;
    item.classList.toggle('active', on);
    if (on) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
  renderSidebarCategories();
}

function relatedCardHTML(video) {
  const percent = progressPercent(video);
  return `
    <a class="related-card" href="#/watch/${encodeURIComponent(video.id)}">
      <span class="related-thumb">
        <img src="${escapeHTML(video.thumb)}" alt="" loading="lazy" onerror="this.style.opacity=0">
        <span class="duration-badge">${formatDuration(video.duration)}</span>
        ${percent > 0 ? `<span class="mini-progress"><i style="width:${percent.toFixed(1)}%"></i></span>` : ''}
      </span>
      <span class="related-info">
        <span class="related-title">${escapeHTML(video.title)}</span>
        <span class="related-meta">StreamVault<br>${formatViews(video.views || 0)} views · ${timeAgo(video.added)}</span>
      </span>
    </a>`;
}

function renderWatch(main, id) {
  const video = getVideo(id);
  if (!video) {
    renderNotFound(main);
    return;
  }
  const related = sortLibrary(getLibrary().filter((item) => item.id !== video.id), 'newest').slice(0, 10);
  const fav = isFavorite(video.id);
  const saved = getHistory(video.id);
  const subtitles = (Array.isArray(video.subtitles) ? video.subtitles : [])
    .map((track) => ({ ...track, src: subtitleSrc(track.src) }))
    .filter((track) => track.src);
  const description = video.description || `A personal recording from your StreamVault library. This ${video.quality || 'HD'} capture runs ${formatDurationLong(video.duration)} and was added ${timeAgo(video.added, { long: true })}.`;
  document.title = `${video.title} — StreamVault`;

  main.innerHTML = `
    <div class="watch-view">
      <div class="watch-layout${appState.settings.theater ? ' theater' : ''}" id="watchLayout">
        <div class="watch-main">
          <div class="player-shell" id="playerShell">
            <video class="video-el" id="video" src="${escapeHTML(video.src)}" poster="${escapeHTML(video.thumb)}" preload="metadata" playsinline>
              ${subtitles.map((track) => `<track kind="subtitles" src="${escapeHTML(track.src)}" srclang="${escapeHTML(track.lang || 'en')}" label="${escapeHTML(track.label || 'English')}">`).join('')}
            </video>

            <div class="player-spinner" id="playerSpinner"><div class="spinner"></div></div>

            <div class="player-error" id="playerError" hidden>
              <span class="err-icon">${icon('error')}</span>
              <h3>This video could not be played</h3>
              <p id="playerErrorText">The file may have moved, or your browser may not support its codec. Check that ${escapeHTML(video.src)} exists, then try again.</p>
              <div class="error-actions">
                <button class="btn btn-primary" id="retryBtn">${icon('loop')} Try again</button>
                <a class="btn" href="#/videos">Back to library</a>
              </div>
            </div>

            <div class="player-top">
              <button class="player-back" data-action="player-back" aria-label="Back to library" title="Back">${icon('arrowLeft')}</button>
              <span class="quality-badge" id="qualityBadge">${escapeHTML(video.quality || 'HD')}</span>
            </div>

            <div class="player-toast" id="playerToast" aria-live="polite"></div>

            <div class="player-controls" id="playerControls">
              <div class="progress-wrap" id="progressWrap">
                <div class="progress-track">
                  <div class="progress-buffer" id="progressBuffer"></div>
                  <div class="progress-hover" id="progressHover"></div>
                  <div class="progress-played" id="progressPlayed"></div>
                </div>
                <div class="progress-handle" id="progressHandle"></div>
                <div class="seek-tooltip" id="seekTooltip">0:00</div>
              </div>

              <div class="controls-row">
                <div class="controls-left">
                  <button class="player-btn play-btn" id="playBtn" aria-label="Play" title="Play (Space)">${icon('play')}</button>
                  <button class="player-btn" id="rewindBtn" aria-label="Rewind 10 seconds" title="Rewind 10s (←)">${icon('skipBack')}</button>
                  <button class="player-btn" id="forwardBtn" aria-label="Forward 10 seconds" title="Forward 10s (→)">${icon('skipForward')}</button>
                  <div class="volume-control">
                    <button class="player-btn" id="muteBtn" aria-label="Mute" title="Mute (M)">${icon('volumeUp')}</button>
                    <input class="volume-slider" id="volumeSlider" type="range" min="0" max="1" step="0.01" value="${appState.settings.volume}" aria-label="Volume">
                    <span class="volume-value" id="volumeValue">${Math.round(appState.settings.volume * 100)}%</span>
                  </div>
                  <div class="time-display">
                    <span id="currentTime">0:00</span>
                    <span class="time-sep">/</span>
                    <span id="totalTime">${formatDuration(video.duration)}</span>
                  </div>
                </div>

                <div class="controls-right">
                  <button class="player-btn" id="subtitlesBtn" aria-label="Subtitles" title="Subtitles (C)"${subtitles.length ? '' : ' disabled'}>${icon('subtitles')}</button>
                  <button class="player-btn" id="settingsBtn" aria-label="Settings" title="Settings">${icon('settings')}</button>
                  <button class="player-btn speed-btn" id="speedBtn" aria-label="Playback speed" title="Playback speed">${appState.settings.speed}×</button>
                  <button class="player-btn" id="pipBtn" aria-label="Picture in picture" title="Picture in picture (P)">${icon('pip')}</button>
                  <button class="player-btn" id="theaterBtn" aria-label="Theater mode" title="Theater mode (T)">${icon('theater')}</button>
                  <button class="player-btn" id="fullscreenBtn" aria-label="Fullscreen" title="Fullscreen (F)">${icon('fullscreen')}</button>
                </div>
              </div>
            </div>

            <div class="player-menu speed-menu" id="speedMenu" hidden>
              <div class="menu-header">Playback speed</div>
              ${SPEEDS.map((speed) => `<button class="menu-row${Number(appState.settings.speed) === speed ? ' selected' : ''}" data-speed="${speed}"><span>${speed === 1 ? 'Normal' : speed + '×'}</span><span class="menu-value">${Number(appState.settings.speed) === speed ? icon('check') : ''}</span></button>`).join('')}
            </div>

            <div class="player-menu" id="settingsMenu" hidden>
              <div class="menu-header">Playback</div>
              <button class="menu-row" data-menu-speed><span>Playback speed</span><span class="menu-value" id="settingsSpeed">${appState.settings.speed}× ${icon('chevronRight')}</span></button>
              <div class="menu-row static"><span>Quality</span><span class="menu-value" id="settingsQuality">${escapeHTML(video.quality || 'Source')}</span></div>
              <div class="menu-divider"></div>
              <div class="menu-header small">Options</div>
              <button class="menu-row" data-action="toggle-autoplay"><span>Autoplay next</span><span class="switch${appState.settings.autoplay ? ' on' : ''}" id="autoplaySwitch"></span></button>
              <button class="menu-row" data-action="toggle-loop"><span>Loop video</span><span class="switch${appState.settings.loop ? ' on' : ''}" id="loopSwitch"></span></button>
              <button class="menu-row" data-action="toggle-subtitles"${subtitles.length ? '' : ' disabled'}><span>Subtitles</span><span class="switch${appState.settings.subtitles && subtitles.length ? ' on' : ''}" id="subtitlesSwitch"></span></button>
              <div class="menu-divider"></div>
              <a class="menu-row" href="#/videos"><span>Back to library</span><span class="menu-value">${icon('chevronRight')}</span></a>
            </div>
          </div>

          <h1 class="watch-title">${escapeHTML(video.title)}</h1>
          <div class="watch-sub">
            <span>${formatViews(video.views || 0)} views</span>
            <span class="dot"></span>
            <span>${timeAgo(video.added, { long: true })}</span>
            <span class="dot"></span>
            <span class="badge-soft">${escapeHTML(video.category || 'Video')}</span>
            <span class="dot"></span>
            <span>${formatDurationLong(video.duration)}</span>
          </div>

          <div class="watch-toolbar">
            <div class="watch-actions">
              <button class="action-btn${fav ? ' is-active' : ''}" id="watchFavBtn" data-action="toggle-fav-watch" data-id="${escapeHTML(video.id)}" aria-pressed="${fav}">
                ${icon('heart')} <span id="watchFavLabel">${fav ? 'Saved' : 'Favorite'}</span>
              </button>
              <button class="action-btn" data-action="copy-link" data-id="${escapeHTML(video.id)}">${icon('link')} Copy link</button>
              <button class="action-btn" data-action="random">${icon('shuffle')} Shuffle</button>
              <a class="action-btn" href="#/videos">${icon('library')} Library</a>
            </div>
            <span class="watch-file-info">${escapeHTML(video.fileName || video.id + '.mp4')} · ${formatBytes(video.size)}${saved && saved.progress > 3 ? ` · ${formatDuration(saved.progress)} watched` : ''}</span>
          </div>

          <div class="watch-desc">
            <strong>About this video</strong>
            ${escapeHTML(description)}
            <div class="watch-details">
              <div class="detail-item"><div class="k">Category</div><div class="v">${escapeHTML(video.category || 'Video')}</div></div>
              <div class="detail-item"><div class="k">Duration</div><div class="v">${formatDurationLong(video.duration)}</div></div>
              <div class="detail-item"><div class="k">File size</div><div class="v">${formatBytes(video.size)}</div></div>
              <div class="detail-item"><div class="k">Added</div><div class="v">${formatDate(video.added)}</div></div>
              <div class="detail-item"><div class="k">Quality</div><div class="v">${escapeHTML(video.quality || 'HD')}</div></div>
            </div>
          </div>
        </div>

        <aside class="watch-side">
          <div class="side-head">
            <h2>Up next</h2>
            <button class="autoplay-toggle" data-action="toggle-autoplay">
              ${icon('playCircle')} Autoplay
              <span class="switch${appState.settings.autoplay ? ' on' : ''}" id="autoplaySwitchSide"></span>
            </button>
          </div>
          <div class="related-list">
            ${related.length ? related.map(relatedCardHTML).join('') : '<div class="related-empty">No other videos in your library yet.</div>'}
          </div>
        </aside>
      </div>
    </div>`;

  bindViewEvents(main);
  currentCleanup = initPlayer(video);
}

function bindViewEvents(main) {
  const sortSelect = $('#sortSelect', main);
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      appState.ui.sort = sortSelect.value;
      saveState();
      renderRoute();
    });
  }
  main.querySelectorAll('[data-action="category"]').forEach((button) => {
    button.addEventListener('click', () => {
      appState.ui.category = button.dataset.category || 'All';
      saveState();
      renderRoute();
    });
  });
  $$('[data-action="category-open"]', main).forEach((button) => {
    button.addEventListener('click', () => {
      appState.ui.category = button.dataset.category || 'All';
      saveState();
      navigate('#/videos');
    });
  });
  $$('[data-action="history-remove"]', main).forEach((button) => {
    button.addEventListener('click', () => {
      delete appState.history[button.dataset.id];
      saveState();
      renderRoute();
    });
  });
  $$('[data-action="clear-history"]', main).forEach((button) => {
    button.addEventListener('click', () => {
      if (!Object.keys(appState.history).length) return;
      if (confirm('Clear your entire watch history?')) {
        clearHistory();
        showToast('Watch history cleared');
        renderRoute();
      }
    });
  });
  $$('[data-action="clear-category"]', main).forEach((button) => {
    button.addEventListener('click', () => {
      appState.ui.category = 'All';
      saveState();
      renderRoute();
    });
  });
  $$('[data-action="toggle-fav"]', main).forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const nowFav = toggleFavorite(button.dataset.id);
      button.classList.toggle('active', nowFav);
      button.setAttribute('aria-label', nowFav ? 'Remove from favorites' : 'Add to favorites');
      button.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
      showToast(nowFav ? 'Added to favorites' : 'Removed from favorites');
      updateShellCounts();
      if (currentRoute.name === 'favorites') renderRoute();
    });
  });
}

/* --------------------------------------------------------------------------
   8. Custom video player
   -------------------------------------------------------------------------- */
function initPlayer(video) {
  const shell = $('#playerShell');
  const el = $('#video');
  if (!shell || !el) return null;

  const refs = {
    spinner: $('#playerSpinner'),
    error: $('#playerError'),
    errorText: $('#playerErrorText'),
    retry: $('#retryBtn'),
    playBtn: $('#playBtn'),
    rewindBtn: $('#rewindBtn'),
    forwardBtn: $('#forwardBtn'),
    muteBtn: $('#muteBtn'),
    volumeSlider: $('#volumeSlider'),
    volumeValue: $('#volumeValue'),
    currentTime: $('#currentTime'),
    totalTime: $('#totalTime'),
    progressWrap: $('#progressWrap'),
    progressBuffer: $('#progressBuffer'),
    progressHover: $('#progressHover'),
    progressPlayed: $('#progressPlayed'),
    progressHandle: $('#progressHandle'),
    seekTooltip: $('#seekTooltip'),
    subtitlesBtn: $('#subtitlesBtn'),
    settingsBtn: $('#settingsBtn'),
    speedBtn: $('#speedBtn'),
    pipBtn: $('#pipBtn'),
    theaterBtn: $('#theaterBtn'),
    fullscreenBtn: $('#fullscreenBtn'),
    speedMenu: $('#speedMenu'),
    settingsMenu: $('#settingsMenu'),
    settingsSpeed: $('#settingsSpeed'),
    toast: $('#playerToast'),
    favorite: $('#watchFavBtn'),
    layout: $('#watchLayout'),
    quality: $('#qualityBadge')
  };

  const tracks = Array.from(el.querySelectorAll('track'));
  const saved = getHistory(video.id);
  let disposed = false;
  let idleTimer = 0;
  let toastTimer = 0;
  let clickTimer = 0;
  let dragging = false;
  let wasDragging = false;
  let lastSavedAt = 0;
  let resumeApplied = false;
  let lastVolume = appState.settings.volume || 1;

  el.controls = false;
  el.volume = clamp(Number(appState.settings.volume), 0, 1);
  el.muted = Boolean(appState.settings.muted);
  el.playbackRate = Number(appState.settings.speed) || 1;
  el.loop = Boolean(appState.settings.loop);
  updateVolumeUI();
  updatePlayButton();
  updateSpeedUI();
  updateSubtitleTracks();
  updateTheaterUI();

  function setActive(button, on) {
    if (!button) return;
    button.classList.toggle('is-active', on);
    button.setAttribute('aria-pressed', String(on));
  }

  function playerToast(message) {
    if (!refs.toast || disposed) return;
    refs.toast.textContent = message;
    refs.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => refs.toast.classList.remove('show'), 1600);
  }

  function updatePlayButton() {
    const playing = !el.paused && !el.ended;
    refs.playBtn.innerHTML = icon(playing ? 'pause' : 'play');
    refs.playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    refs.playBtn.title = playing ? 'Pause (Space)' : 'Play (Space)';
    shell.classList.toggle('is-playing', playing);
  }

  function updateVolumeUI() {
    const volume = el.muted ? 0 : el.volume;
    refs.volumeSlider.value = String(volume);
    refs.volumeSlider.style.setProperty('--vol', `${Math.round(volume * 100)}%`);
    refs.volumeValue.textContent = `${Math.round(volume * 100)}%`;
    const name = el.muted || el.volume === 0 ? 'volumeOff' : el.volume < 0.5 ? 'volumeDown' : 'volumeUp';
    refs.muteBtn.innerHTML = icon(name);
    refs.muteBtn.setAttribute('aria-label', el.muted ? 'Unmute' : 'Mute');
    refs.muteBtn.title = el.muted ? 'Unmute (M)' : 'Mute (M)';
    setActive(refs.muteBtn, el.muted || el.volume === 0);
  }

  function updateTimeUI() {
    const duration = Number.isFinite(el.duration) && el.duration > 0 ? el.duration : (video.duration || 0);
    const current = Number.isFinite(el.currentTime) ? el.currentTime : 0;
    refs.currentTime.textContent = formatDuration(current);
    refs.totalTime.textContent = formatDuration(duration);
    const percent = duration ? clamp((current / duration) * 100, 0, 100) : 0;
    refs.progressPlayed.style.width = `${percent}%`;
    refs.progressHandle.style.left = `${percent}%`;
  }

  function updateBuffer() {
    if (!el.buffered.length || !el.duration) return;
    let end = 0;
    for (let i = 0; i < el.buffered.length; i += 1) {
      if (el.buffered.start(i) <= el.currentTime + 0.5) end = Math.max(end, el.buffered.end(i));
    }
    refs.progressBuffer.style.width = `${clamp((end / el.duration) * 100, 0, 100)}%`;
  }

  function updateSpeedUI() {
    const speed = Number(el.playbackRate) || 1;
    if (refs.speedBtn) refs.speedBtn.textContent = `${speed}×`;
    if (refs.settingsSpeed) refs.settingsSpeed.innerHTML = `${speed}× ${icon('chevronRight')}`;
    $$('#speedMenu .menu-row', shell).forEach((row) => {
      const on = Number(row.dataset.speed) === speed;
      row.classList.toggle('selected', on);
      const value = row.querySelector('.menu-value');
      if (value) value.innerHTML = on ? icon('check') : '';
    });
  }

  function updateSubtitleTracks() {
    const wanted = clamp(Number(appState.settings.subtitleIndex) || 0, 0, Math.max(0, tracks.length - 1));
    tracks.forEach((track, index) => {
      try {
        const textTrack = track.track || el.textTracks[index];
        if (textTrack) {
          textTrack.mode = appState.settings.subtitles && index === wanted ? 'showing' : 'disabled';
        }
      } catch (err) { /* ignore */ }
    });
    setActive(refs.subtitlesBtn, Boolean(appState.settings.subtitles && tracks.length));
    const switchEl = $('#subtitlesSwitch');
    if (switchEl) switchEl.classList.toggle('on', Boolean(appState.settings.subtitles && tracks.length));
  }

  function updateTheaterUI() {
    const on = Boolean(appState.settings.theater);
    refs.layout?.classList.toggle('theater', on);
    setActive(refs.theaterBtn, on);
    if (refs.theaterBtn) refs.theaterBtn.title = on ? 'Exit theater mode (T)' : 'Theater mode (T)';
  }

  function updateAutoplayUI() {
    ['#autoplaySwitch', '#autoplaySwitchSide'].forEach((sel) => {
      const node = $(sel);
      if (node) node.classList.toggle('on', Boolean(appState.settings.autoplay));
    });
  }

  function updateLoopUI() {
    const node = $('#loopSwitch');
    if (node) node.classList.toggle('on', Boolean(appState.settings.loop));
    el.loop = Boolean(appState.settings.loop);
  }

  function persistProgress(force = false) {
    if (disposed && !force) return;
    if (!Number.isFinite(el.duration) || el.duration <= 0) return;
    if (resumeApplied === false && el.currentTime < 3) return;
    const now = Date.now();
    if (!force && now - lastSavedAt < 4000) return;
    lastSavedAt = now;
    saveHistory(video.id, { progress: el.currentTime, duration: el.duration });
    const fav = isFavorite(video.id);
    if (refs.favorite) {
      refs.favorite.classList.toggle('is-active', fav);
      refs.favorite.setAttribute('aria-pressed', String(fav));
      const label = $('#watchFavLabel');
      if (label) label.textContent = fav ? 'Saved' : 'Favorite';
    }
    updateShellCounts();
  }

  function setVolume(next, toast = true) {
    const value = clamp(Number(next), 0, 1);
    el.volume = value;
    el.muted = value === 0;
    if (value > 0) lastVolume = value;
    appState.settings.volume = value;
    appState.settings.muted = el.muted;
    saveState();
    updateVolumeUI();
    if (toast) playerToast(value === 0 ? 'Muted' : `Volume ${Math.round(value * 100)}%`);
  }

  function toggleMute() {
    if (el.muted || el.volume === 0) {
      el.muted = false;
      if (el.volume === 0) el.volume = lastVolume || 0.5;
      playerToast('Unmuted');
    } else {
      lastVolume = el.volume;
      el.muted = true;
      playerToast('Muted');
    }
    appState.settings.volume = el.volume;
    appState.settings.muted = el.muted;
    saveState();
    updateVolumeUI();
  }

  function seekBy(seconds) {
    if (!Number.isFinite(el.duration)) return;
    el.currentTime = clamp(el.currentTime + seconds, 0, el.duration - 0.1);
    updateTimeUI();
    playerToast(`${seconds > 0 ? '+' : ''}${seconds}s`);
  }

  function togglePlay() {
    if (el.paused || el.ended) {
      el.play().catch((err) => {
        console.warn('[StreamVault] Play failed:', err);
        showError('Playback could not start. Click once more, or check the file is present.');
      });
    } else {
      el.pause();
    }
  }

  function showError(message) {
    if (!refs.error) return;
    refs.error.hidden = false;
    refs.errorText.textContent = message || 'The file may have moved, or your browser may not support this codec.';
    refs.spinner.classList.remove('visible');
  }

  function hideError() {
    if (refs.error) refs.error.hidden = true;
  }

  function openMenu(menu) {
    if (!menu) return;
    const willOpen = menu.hidden;
    closeMenus();
    if (willOpen) {
      menu.hidden = false;
      shell.classList.add('menu-open');
      setActive(menu === refs.speedMenu ? refs.speedBtn : refs.settingsBtn, true);
    }
    showControls(false);
  }

  function toggleMenu(menu) {
    if (menu.hidden) openMenu(menu);
    else closeMenus();
  }

  function toggleSubtitles() {
    if (!tracks.length) {
      playerToast('No subtitles for this video');
      return;
    }
    appState.settings.subtitles = !appState.settings.subtitles;
    saveState();
    updateSubtitleTracks();
    playerToast(appState.settings.subtitles ? 'Subtitles on' : 'Subtitles off');
  }

  function toggleTheater() {
    appState.settings.theater = !appState.settings.theater;
    saveState();
    updateTheaterUI();
    playerToast(appState.settings.theater ? 'Theater mode' : 'Default view');
  }

  function fullscreenTarget() {
    return shell;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      const target = fullscreenTarget();
      if (target.requestFullscreen) {
        target.requestFullscreen().catch((err) => {
          console.warn(err);
          playerToast('Fullscreen is not available');
        });
      }
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  function togglePiP() {
    if (!document.pictureInPictureEnabled || typeof el.requestPictureInPicture !== 'function') {
      playerToast('Picture-in-picture is not supported here');
      return;
    }
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(() => {});
    } else {
      el.requestPictureInPicture().catch(() => playerToast('Picture-in-picture was blocked'));
    }
  }

  function nextVideo() {
    const list = sortLibrary(getLibrary(), 'newest');
    const index = list.findIndex((item) => item.id === video.id);
    return index >= 0 && list.length > 1 ? list[(index + 1) % list.length] : null;
  }

  function previousVideo() {
    const list = sortLibrary(getLibrary(), 'newest');
    const index = list.findIndex((item) => item.id === video.id);
    return index >= 0 && list.length > 1 ? list[(index - 1 + list.length) % list.length] : null;
  }

  function playNext() {
    const next = nextVideo();
    if (!next) {
      playerToast('No other videos to play');
      return;
    }
    playerToast(`Playing ${next.title}`);
    setTimeout(() => navigate(`#/watch/${encodeURIComponent(next.id)}`), 280);
  }

  function playPrevious() {
    const prev = previousVideo();
    if (!prev) return;
    navigate(`#/watch/${encodeURIComponent(prev.id)}`);
  }

  function seekToRatio(ratio) {
    if (!Number.isFinite(el.duration) || el.duration <= 0) return;
    el.currentTime = clamp(ratio, 0, 1) * el.duration;
    updateTimeUI();
  }

  function ratioFromEvent(event) {
    const rect = refs.progressWrap.getBoundingClientRect();
    return clamp((event.clientX - rect.left) / rect.width, 0, 1);
  }

  function previewSeek(event) {
    if (!Number.isFinite(el.duration) || el.duration <= 0) return;
    const ratio = ratioFromEvent(event);
    refs.progressHover.style.width = `${ratio * 100}%`;
    refs.seekTooltip.textContent = formatDuration(ratio * el.duration);
    refs.seekTooltip.style.left = `${ratio * 100}%`;
    if (dragging) {
      refs.progressPlayed.style.width = `${ratio * 100}%`;
      refs.progressHandle.style.left = `${ratio * 100}%`;
    }
  }

  function showControls(autoHide = true) {
    shell.classList.remove('idle');
    clearTimeout(idleTimer);
    if (!autoHide || el.paused || shell.classList.contains('menu-open')) return;
    idleTimer = setTimeout(() => {
      if (!el.paused && !shell.classList.contains('menu-open') && !dragging) shell.classList.add('idle');
    }, 2800);
  }

  function applyResume() {
    if (resumeApplied) return;
    resumeApplied = true;
    if (!saved || !saved.progress || saved.completed) return;
    const duration = Number.isFinite(el.duration) ? el.duration : video.duration;
    if (saved.progress > 3 && saved.progress < duration - 5) {
      el.currentTime = saved.progress;
      playerToast(`Resumed at ${formatDuration(saved.progress)}`);
      updateTimeUI();
    }
  }

  /* ---------- media events ---------- */
  const onLoadedMetadata = () => {
    applyResume();
    updateTimeUI();
    if (Number.isFinite(el.duration) && el.duration > 0) {
      saveHistory(video.id, { progress: el.currentTime, duration: el.duration, keepCompleted: true });
    }
    const h = el.videoHeight;
    if (h >= 2000) refs.quality.textContent = '4K';
    else if (h >= 1000) refs.quality.textContent = '1080p';
    else if (h >= 700) refs.quality.textContent = '720p';
    else if (h > 0) refs.quality.textContent = `${h}p`;
  };
  const onTimeUpdate = () => {
    updateTimeUI();
    updateBuffer();
    persistProgress(false);
  };
  const onProgress = () => updateBuffer();
  const onPlay = () => {
    updatePlayButton();
    hideError();
    showControls();
  };
  const onPause = () => {
    updatePlayButton();
    showControls(false);
    persistProgress(true);
  };
  const onPlaying = () => {
    refs.spinner.classList.remove('visible');
    updatePlayButton();
    showControls();
  };
  const onWaiting = () => refs.spinner.classList.add('visible');
  const onCanPlay = () => {
    refs.spinner.classList.remove('visible');
    hideError();
  };
  const onEnded = () => {
    updatePlayButton();
    persistProgress(true);
    if (appState.settings.loop) {
      el.currentTime = 0;
      el.play().catch(() => {});
      return;
    }
    if (appState.settings.autoplay) {
      playNext();
    } else {
      playerToast('Finished');
      showControls(false);
    }
  };
  const onVolumeChange = () => {
    appState.settings.volume = el.volume;
    appState.settings.muted = el.muted;
    saveState();
    updateVolumeUI();
  };
  const onRateChange = updateSpeedUI;
  const onError = () => {
    const code = el.error ? el.error.code : 0;
    const messages = {
      1: 'Playback was aborted.',
      2: 'A network error interrupted the video. If you moved the file, put it back in the videos folder.',
      3: 'The video could not be decoded. Your browser may not support this codec.',
      4: 'The video file could not be found or is not supported. Check that the file exists in the videos folder.'
    };
    showError(messages[code] || 'This video could not be played.');
  };

  /* ---------- pointer + button events ---------- */
  const onProgressDown = (event) => {
    if (!Number.isFinite(el.duration)) return;
    dragging = true;
    wasDragging = true;
    refs.progressWrap.classList.add('dragging');
    refs.progressWrap.setPointerCapture?.(event.pointerId);
    previewSeek(event);
    seekToRatio(ratioFromEvent(event));
    showControls(false);
  };
  const onProgressMove = (event) => {
    previewSeek(event);
    if (dragging) seekToRatio(ratioFromEvent(event));
  };
  const onProgressUp = (event) => {
    if (!dragging) return;
    dragging = false;
    refs.progressWrap.classList.remove('dragging');
    refs.progressWrap.releasePointerCapture?.(event.pointerId);
    seekToRatio(ratioFromEvent(event));
    persistProgress(true);
    showControls();
    setTimeout(() => { wasDragging = false; }, 120);
  };
  const onProgressLeave = () => {
    if (!dragging) refs.progressHover.style.width = '0%';
  };

  const onVideoClick = () => {
    if (wasDragging) return;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => togglePlay(), 220);
  };
  const onVideoDoubleClick = (event) => {
    event.preventDefault();
    clearTimeout(clickTimer);
    toggleFullscreen();
  };

  const onSpeedRow = (event) => {
    const row = event.target.closest('[data-speed]');
    if (!row) return;
    const speed = Number(row.dataset.speed);
    el.playbackRate = speed;
    appState.settings.speed = speed;
    saveState();
    updateSpeedUI();
    closeMenus();
    playerToast(speed === 1 ? 'Normal speed' : `${speed}× speed`);
  };

  const onSettingsClick = (event) => {
    if (event.target.closest('[data-menu-speed]')) {
      closeMenus();
      openMenu(refs.speedMenu);
    }
  };

  const onFullscreenChange = () => {
    const isFull = document.fullscreenElement === shell;
    refs.fullscreenBtn.innerHTML = icon(isFull ? 'fullscreenExit' : 'fullscreen');
    refs.fullscreenBtn.setAttribute('aria-label', isFull ? 'Exit fullscreen' : 'Fullscreen');
  };

  const onKeyDown = (event) => {
    const target = event.target;
    if (target && (target.matches('input, textarea, select') || target.isContentEditable)) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key;
    const lower = key.toLowerCase();
    let handled = true;
    if (key === ' ' || lower === 'k') togglePlay();
    else if (key === 'ArrowLeft') seekBy(-5);
    else if (key === 'ArrowRight') seekBy(5);
    else if (key === 'ArrowUp') setVolume(el.volume + 0.05);
    else if (key === 'ArrowDown') setVolume(el.volume - 0.05);
    else if (lower === 'm') toggleMute();
    else if (lower === 'f') toggleFullscreen();
    else if (lower === 'p') togglePiP();
    else if (lower === 't') toggleTheater();
    else if (lower === 'c') toggleSubtitles();
    else if (lower === 'n' && event.shiftKey) playPrevious();
    else if (lower === 'n') playNext();
    else if (key === '0') seekToRatio(0);
    else if (/^[1-9]$/.test(key)) seekToRatio(Number(key) / 10);
    else if (key === '<' || key === ',') changeSpeed(-0.25);
    else if (key === '>' || key === '.') changeSpeed(0.25);
    else if (key === 'Escape') {
      closeMenus();
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    } else handled = false;
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  function changeSpeed(delta) {
    const current = Number(el.playbackRate) || 1;
    const index = SPEEDS.indexOf(current);
    const nextIndex = clamp((index >= 0 ? index : SPEEDS.indexOf(1)) + (delta > 0 ? 1 : -1), 0, SPEEDS.length - 1);
    const speed = SPEEDS[nextIndex];
    el.playbackRate = speed;
    appState.settings.speed = speed;
    saveState();
    updateSpeedUI();
    playerToast(speed === 1 ? 'Normal speed' : `${speed}× speed`);
  }

  refs.playBtn.addEventListener('click', togglePlay);
  refs.rewindBtn.addEventListener('click', () => seekBy(-10));
  refs.forwardBtn.addEventListener('click', () => seekBy(10));
  refs.muteBtn.addEventListener('click', toggleMute);
  refs.volumeSlider.addEventListener('input', () => setVolume(refs.volumeSlider.value, false));
  refs.volumeSlider.addEventListener('change', () => playerToast(el.muted ? 'Muted' : `Volume ${Math.round(el.volume * 100)}%`));
  refs.subtitlesBtn.addEventListener('click', toggleSubtitles);
  refs.settingsBtn.addEventListener('click', () => toggleMenu(refs.settingsMenu));
  refs.speedBtn.addEventListener('click', () => toggleMenu(refs.speedMenu));
  refs.pipBtn.addEventListener('click', togglePiP);
  refs.theaterBtn.addEventListener('click', toggleTheater);
  refs.fullscreenBtn.addEventListener('click', toggleFullscreen);
  refs.retry.addEventListener('click', () => {
    hideError();
    refs.spinner.classList.add('visible');
    el.load();
    el.play().catch(() => {});
  });
  refs.progressWrap.addEventListener('pointerdown', onProgressDown);
  refs.progressWrap.addEventListener('pointermove', onProgressMove);
  refs.progressWrap.addEventListener('pointerup', onProgressUp);
  refs.progressWrap.addEventListener('pointercancel', onProgressUp);
  refs.progressWrap.addEventListener('pointerleave', onProgressLeave);
  refs.speedMenu.addEventListener('click', onSpeedRow);
  refs.settingsMenu.addEventListener('click', onSettingsClick);
  el.addEventListener('click', onVideoClick);
  el.addEventListener('dblclick', onVideoDoubleClick);
  el.addEventListener('loadedmetadata', onLoadedMetadata);
  el.addEventListener('timeupdate', onTimeUpdate);
  el.addEventListener('progress', onProgress);
  el.addEventListener('play', onPlay);
  el.addEventListener('pause', onPause);
  el.addEventListener('playing', onPlaying);
  el.addEventListener('waiting', onWaiting);
  el.addEventListener('canplay', onCanPlay);
  el.addEventListener('ended', onEnded);
  el.addEventListener('volumechange', onVolumeChange);
  el.addEventListener('ratechange', onRateChange);
  el.addEventListener('error', onError);
  shell.addEventListener('mousemove', () => showControls());
  shell.addEventListener('pointerdown', () => showControls());
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('keydown', onKeyDown);
  window.addEventListener('pagehide', () => persistProgress(true));

  if (Number.isFinite(el.duration) && el.duration > 0) onLoadedMetadata();
  else refs.spinner.classList.add('visible');

  /* ---------- cleanup ---------- */
  return function cleanup() {
    if (disposed) return;
    persistProgress(true);
    disposed = true;
    clearTimeout(idleTimer);
    clearTimeout(toastTimer);
    clearTimeout(clickTimer);
    refs.playBtn.removeEventListener('click', togglePlay);
    el.removeEventListener('loadedmetadata', onLoadedMetadata);
    el.removeEventListener('timeupdate', onTimeUpdate);
    el.removeEventListener('progress', onProgress);
    el.removeEventListener('play', onPlay);
    el.removeEventListener('pause', onPause);
    el.removeEventListener('playing', onPlaying);
    el.removeEventListener('waiting', onWaiting);
    el.removeEventListener('canplay', onCanPlay);
    el.removeEventListener('ended', onEnded);
    el.removeEventListener('volumechange', onVolumeChange);
    el.removeEventListener('ratechange', onRateChange);
    el.removeEventListener('error', onError);
    el.removeEventListener('click', onVideoClick);
    el.removeEventListener('dblclick', onVideoDoubleClick);
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    document.removeEventListener('keydown', onKeyDown);
    el.pause();
    el.removeAttribute('src');
    try { el.load(); } catch (err) { /* ignore */ }
  };
}

/* --------------------------------------------------------------------------
   9. Shell, sidebar, search, import, global actions
   -------------------------------------------------------------------------- */
let toastTimer = 0;

function showToast(message, ms = 2400) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), ms);
}

function updateShellCounts() {
  const videos = getLibrary();
  const navVideoCount = $('#navVideoCount');
  const navFavCount = $('#navFavCount');
  if (navVideoCount) navVideoCount.textContent = String(videos.length);
  if (navFavCount) navFavCount.textContent = String(appState.favorites.length);
  renderSidebarCategories();
}

function renderSidebarCategories() {
  const wrap = $('#sidebarCategories');
  if (!wrap) return;
  const counts = new Map();
  getLibrary().forEach((video) => {
    const cat = video.category || 'Uncategorized';
    counts.set(cat, (counts.get(cat) || 0) + 1);
  });
  wrap.innerHTML = Array.from(counts.entries()).map(([category, count]) => `
    <button class="category-link${appState.ui.category === category ? ' active' : ''}" data-action="category-open" data-category="${escapeHTML(category)}">
      <span>${escapeHTML(category)}</span>
      <span class="cat-count">${count}</span>
    </button>`).join('');
}

function applySidebarState() {
  document.body.classList.toggle('sidebar-collapsed', Boolean(appState.ui.sidebarCollapsed));
}

function toggleSidebar() {
  if (window.innerWidth <= 1000) {
    const open = document.body.classList.toggle('sidebar-open');
    const scrim = $('#scrim');
    if (scrim) scrim.hidden = !open;
  } else {
    appState.ui.sidebarCollapsed = !appState.ui.sidebarCollapsed;
    saveState();
    applySidebarState();
  }
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');
  const scrim = $('#scrim');
  if (scrim) scrim.hidden = true;
}

/* ---------- Search ---------- */
function syncSearchInput(value) {
  const input = $('#searchInput');
  const clear = $('#searchClear');
  if (!input) return;
  input.value = value || '';
  if (clear) clear.hidden = !input.value;
}

function highlightMatch(text, query) {
  const safe = escapeHTML(text);
  const q = normalizeSearch(query);
  if (!q) return safe;
  const index = normalizeSearch(text).indexOf(q);
  if (index < 0) return safe;
  return `${escapeHTML(text.slice(0, index))}<mark>${escapeHTML(text.slice(index, index + q.length))}</mark>${escapeHTML(text.slice(index + q.length))}`;
}

function hideSuggestions() {
  const node = $('#suggestions');
  if (node) {
    node.hidden = true;
    node.innerHTML = '';
  }
}

function renderSuggestions(query) {
  const node = $('#suggestions');
  if (!node) return;
  const q = normalizeSearch(query);
  if (!q) {
    hideSuggestions();
    return;
  }
  const results = sortLibrary(getLibrary().filter((video) => normalizeSearch([
    video.title, video.category, video.fileName, ...(video.tags || [])
  ].join(' ')).includes(q))).slice(0, 6);
  node.hidden = false;
  if (!results.length) {
    node.innerHTML = `<div class="suggestions-empty">No videos match “${escapeHTML(query)}”</div>`;
    return;
  }
  node.innerHTML = results.map((video) => `
    <button class="suggestion" data-suggest="${escapeHTML(video.id)}" role="option">
      <span class="suggestion-thumb"><img src="${escapeHTML(video.thumb)}" alt="" onerror="this.style.opacity=0"></span>
      <span class="suggestion-meta-wrap">
        <span class="suggestion-title">${highlightMatch(video.title, query)}</span>
        <span class="suggestion-meta">${escapeHTML(video.category || 'Video')} · ${formatDuration(video.duration)}</span>
      </span>
    </button>`).join('');
}

function runSearch(query) {
  const q = String(query || '').trim();
  hideSuggestions();
  if (!q) {
    navigate('#/videos');
    return;
  }
  navigate(`#/search?q=${encodeURIComponent(q)}`);
}

/* ---------- Import ---------- */
function openImport() {
  const modal = $('#importModal');
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  const first = modal.querySelector('button');
  if (first) first.focus();
}

function closeImport() {
  const modal = $('#importModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function fallbackThumb(title) {
  const label = escapeHTML(String(title || 'Video').slice(0, 42));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1f2d"/><stop offset="1" stop-color="#111116"/></linearGradient></defs><rect width="960" height="540" fill="url(#g)"/><circle cx="480" cy="250" r="58" fill="#ff3355"/><path d="M462 216l58 34-58 34z" fill="#fff"/><text x="480" y="390" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#b9b9c6">${label}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function probeVideo(file, objectUrl) {
  return new Promise((resolve) => {
    const probe = document.createElement('video');
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      probe.removeAttribute('src');
      probe.load();
      resolve(result);
    };
    const timeout = setTimeout(() => finish({ duration: 0, width: 0, height: 0, thumb: fallbackThumb(file.name) }), 12000);
    probe.preload = 'metadata';
    probe.muted = true;
    probe.playsInline = true;
    probe.onloadedmetadata = () => {
      const duration = Number.isFinite(probe.duration) ? probe.duration : 0;
      const width = probe.videoWidth || 0;
      const height = probe.videoHeight || 0;
      const afterSeek = () => {
        let thumb = fallbackThumb(file.name);
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 640;
          canvas.height = 360;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(probe, 0, 0, canvas.width, canvas.height);
          thumb = canvas.toDataURL('image/jpeg', 0.78);
        } catch (err) { /* keep fallback */ }
        clearTimeout(timeout);
        finish({ duration, width, height, thumb });
      };
      try {
        probe.currentTime = Math.min(1.2, Math.max(0.1, duration * 0.12));
        probe.onseeked = afterSeek;
      } catch (err) {
        clearTimeout(timeout);
        finish({ duration, width, height, thumb: fallbackThumb(file.name) });
      }
    };
    probe.onerror = () => {
      clearTimeout(timeout);
      finish({ duration: 0, width: 0, height: 0, thumb: fallbackThumb(file.name) });
    };
    probe.src = objectUrl;
  });
}

async function importFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => file && (file.type.startsWith('video/') || /\.(mp4|webm|og[gv]|mov|m4v|mkv|avi)$/i.test(file.name)));
  if (!files.length) {
    showToast('No supported video files found');
    return;
  }
  showToast(`Adding ${files.length} video${files.length === 1 ? '' : 's'}…`, 5000);
  let added = 0;
  for (const file of files) {
    const existing = appState.imported.find((item) => item.fileName === file.name && item.size === file.size);
    if (existing) continue;
    const url = URL.createObjectURL(file);
    const meta = await probeVideo(file, url);
    const id = `local-${hashString(`${file.name}:${file.size}:${file.lastModified}`)}`;
    const quality = meta.height >= 2000 ? '4K' : meta.height >= 1000 ? '1080p' : meta.height >= 700 ? '720p' : meta.height > 0 ? `${meta.height}p` : 'Source';
    const entry = {
      id,
      title: file.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim() || file.name,
      src: url,
      thumb: meta.thumb,
      duration: meta.duration,
      category: 'Imported',
      size: file.size,
      added: new Date().toISOString(),
      quality,
      fileName: file.name,
      subtitles: [],
      sessionOnly: true
    };
    const oldIndex = appState.imported.findIndex((item) => item.id === id);
    if (oldIndex >= 0) appState.imported[oldIndex] = entry;
    else appState.imported.unshift(entry);
    added += 1;
  }
  saveState();
  updateShellCounts();
  closeImport();
  if (added) {
    appState.ui.category = 'All';
    saveState();
  }
  showToast(added ? `Added ${added} video${added === 1 ? '' : 's'} for this session` : 'Those videos are already in your library');
  if (currentRoute.name !== 'watch') renderRoute();
}

function pickFiles() {
  closeImport();
  const input = $('#fileInput');
  if (input) {
    input.value = '';
    input.click();
  }
}

function pickFolder() {
  closeImport();
  const input = $('#folderInput');
  if (input) {
    input.value = '';
    input.click();
  }
}

/* ---------- Menus ---------- */
function closeMenus() {
  const shell = $('#playerShell');
  if (shell) {
    shell.classList.remove('menu-open');
    $$('.player-menu', shell).forEach((menu) => {
      menu.hidden = true;
    });
    $$('#speedBtn, #settingsBtn', shell).forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-pressed', 'false');
    });
  }
}

/* ---------- Random / copy / favorites ---------- */
function playRandom() {
  const library = getLibrary();
  if (!library.length) return;
  const pool = library.length > 1 ? library.filter((video) => video.id !== currentRoute.id) : library;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  navigate(`#/watch/${encodeURIComponent(pick.id)}`);
}

async function copyCurrentLink() {
  const url = location.href;
  try {
    await navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard');
  } catch (err) {
    const temp = document.createElement('textarea');
    temp.value = url;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    try { document.execCommand('copy'); showToast('Link copied to clipboard'); }
    catch (err2) { showToast('Could not copy the link'); }
    temp.remove();
  }
}

function toggleWatchFavorite(id) {
  const nowFav = toggleFavorite(id);
  const button = $('#watchFavBtn');
  const label = $('#watchFavLabel');
  if (button) {
    button.classList.toggle('is-active', nowFav);
    button.setAttribute('aria-pressed', String(nowFav));
  }
  if (label) label.textContent = nowFav ? 'Saved' : 'Favorite';
  showToast(nowFav ? 'Added to favorites' : 'Removed from favorites');
  updateShellCounts();
}

/* ---------- Event delegation ---------- */
function onGlobalClick(event) {
  const actionNode = event.target.closest('[data-action]');
  if (!actionNode) {
    if (!event.target.closest('#suggestions') && !event.target.closest('#searchArea')) hideSuggestions();
    if (!event.target.closest('.player-menu') && !event.target.closest('#settingsBtn') && !event.target.closest('#speedBtn')) closeMenus();
    return;
  }
  const action = actionNode.dataset.action;
  switch (action) {
    case 'toggle-sidebar':
      toggleSidebar();
      break;
    case 'close-sidebar':
      closeSidebar();
      break;
    case 'open-import':
      openImport();
      break;
    case 'close-import':
      closeImport();
      break;
    case 'pick-files':
      pickFiles();
      break;
    case 'pick-folder':
      pickFolder();
      break;
    case 'random':
      playRandom();
      break;
    case 'player-back':
      goBackOrHome();
      break;
    case 'copy-link':
      copyCurrentLink();
      break;
    case 'toggle-fav-watch':
      toggleWatchFavorite(actionNode.dataset.id);
      break;
    case 'toggle-autoplay':
      appState.settings.autoplay = !appState.settings.autoplay;
      saveState();
      ['#autoplaySwitch', '#autoplaySwitchSide'].forEach((sel) => $(sel)?.classList.toggle('on', appState.settings.autoplay));
      showToast(appState.settings.autoplay ? 'Autoplay on' : 'Autoplay off');
      break;
    case 'toggle-loop': {
      appState.settings.loop = !appState.settings.loop;
      saveState();
      const videoEl = $('#video');
      if (videoEl) videoEl.loop = appState.settings.loop;
      $('#loopSwitch')?.classList.toggle('on', appState.settings.loop);
      showToast(appState.settings.loop ? 'Loop on' : 'Loop off');
      break;
    }
    case 'toggle-subtitles': {
      const videoEl = $('#video');
      const hasTracks = videoEl && videoEl.querySelectorAll('track').length > 0;
      if (!hasTracks) { showToast('No subtitles for this video'); break; }
      appState.settings.subtitles = !appState.settings.subtitles;
      saveState();
      if (videoEl) {
        Array.from(videoEl.textTracks).forEach((track) => { track.mode = 'disabled'; });
        Array.from(videoEl.querySelectorAll('track')).forEach((track, index) => {
          const wanted = clamp(Number(appState.settings.subtitleIndex) || 0, 0, videoEl.querySelectorAll('track').length - 1);
          if (appState.settings.subtitles && index === wanted) videoEl.textTracks[index].mode = 'showing';
        });
      }
      $('#subtitlesSwitch')?.classList.toggle('on', appState.settings.subtitles);
      $('#subtitlesBtn')?.classList.toggle('is-active', appState.settings.subtitles);
      showToast(appState.settings.subtitles ? 'Subtitles on' : 'Subtitles off');
      break;
    }
    case 'clear-search':
      syncSearchInput('');
      hideSuggestions();
      $('#searchInput')?.focus();
      break;
    default:
      break;
  }
}

/* ---------- Boot ---------- */
function bindShellEvents() {
  hydrateIcons();
  applySidebarState();
  updateShellCounts();
  updateActiveNav(currentRoute.name);

  const searchInput = $('#searchInput');
  const searchForm = $('#searchForm');
  const searchClear = $('#searchClear');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const value = searchInput.value;
      if (searchClear) searchClear.hidden = !value;
      renderSuggestions(value);
    });
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim()) renderSuggestions(searchInput.value);
    });
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        hideSuggestions();
        searchInput.blur();
      }
    });
  }
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      runSearch(searchInput ? searchInput.value : '');
      if (searchInput) searchInput.blur();
    });
  }

  const suggestions = $('#suggestions');
  if (suggestions) {
    suggestions.addEventListener('click', (event) => {
      const item = event.target.closest('[data-suggest]');
      if (!item) return;
      const id = item.dataset.suggest;
      hideSuggestions();
      navigate(`#/watch/${encodeURIComponent(id)}`);
    });
    suggestions.addEventListener('mousedown', (event) => event.preventDefault());
  }

  document.addEventListener('click', onGlobalClick);
  window.addEventListener('hashchange', renderRoute);

  const fileInput = $('#fileInput');
  const folderInput = $('#folderInput');
  if (fileInput) fileInput.addEventListener('change', () => importFiles(fileInput.files));
  if (folderInput) folderInput.addEventListener('change', () => importFiles(folderInput.files));

  const modal = $('#importModal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeImport();
    });
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeImport();
      closeMenus();
      hideSuggestions();
      closeSidebar();
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const target = event.target;
      if (target && (target.matches('input, textarea, select') || target.isContentEditable)) return;
      event.preventDefault();
      searchInput?.focus();
    }
  });

  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 1000) closeSidebar();
  }, 150));

  /* drag & drop */
  let dragDepth = 0;
  const overlay = $('#dropOverlay');
  window.addEventListener('dragenter', (event) => {
    if (!event.dataTransfer || !Array.from(event.dataTransfer.types || []).includes('Files')) return;
    event.preventDefault();
    dragDepth += 1;
    if (overlay) overlay.hidden = false;
  });
  window.addEventListener('dragover', (event) => {
    if (event.dataTransfer && Array.from(event.dataTransfer.types || []).includes('Files')) event.preventDefault();
  });
  window.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dragDepth = Math.max(0, dragDepth - 1);
    if (dragDepth === 0 && overlay) overlay.hidden = true;
  });
  window.addEventListener('drop', (event) => {
    if (!event.dataTransfer) return;
    event.preventDefault();
    dragDepth = 0;
    if (overlay) overlay.hidden = true;
    if (event.dataTransfer.files && event.dataTransfer.files.length) importFiles(event.dataTransfer.files);
  });

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      appState = loadState();
      updateShellCounts();
      renderRoute();
    }
  });
}

function boot() {
  bindShellEvents();
  if (!location.hash) {
    history.replaceState(null, '', '#/home');
  }
  renderRoute();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}






