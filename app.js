// J.A.R.V.I.S. Audio Synthesizer (Web Audio API)
class JarvisAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 1000, duration = 0.05, type = 'sine', vol = 0.05) {
    if (!this.enabled || !this.ctx) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      // Smooth volume ramp down to avoid clicks
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback failed", e);
    }
  }

  playClick() {
    this.playBeep(900, 0.03, 'sine', 0.06);
    setTimeout(() => this.playBeep(1200, 0.03, 'sine', 0.04), 30);
  }

  playHover() {
    this.playBeep(1800, 0.015, 'sine', 0.02);
  }

  playSuccess() {
    this.playBeep(600, 0.1, 'triangle', 0.08);
    setTimeout(() => this.playBeep(800, 0.1, 'triangle', 0.08), 80);
    setTimeout(() => this.playBeep(1200, 0.2, 'triangle', 0.08), 160);
  }

  playError() {
    this.playBeep(150, 0.25, 'sawtooth', 0.1);
    setTimeout(() => this.playBeep(150, 0.25, 'sawtooth', 0.1), 100);
  }

  playSnapCore() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 1.5);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(2000, now + 1.5);
      
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 1.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(now + 1.8);
    } catch(e) {}
  }

  playShutdown() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(10, now + 1.5);
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(now + 1.6);
    } catch(e) {}
  }

  // Chibi Mascot Repulsor Blast Sound Effect
  playRepulsorBlast() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      
      // 1. Charging Sound (Frequency slide up)
      const oscCharge = this.ctx.createOscillator();
      const gainCharge = this.ctx.createGain();
      oscCharge.type = 'sine';
      oscCharge.frequency.setValueAtTime(200, now);
      oscCharge.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
      
      gainCharge.gain.setValueAtTime(0.001, now);
      gainCharge.gain.exponentialRampToValueAtTime(0.08, now + 0.18);
      gainCharge.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      
      oscCharge.connect(gainCharge);
      gainCharge.connect(this.ctx.destination);
      oscCharge.start();
      oscCharge.stop(now + 0.2);

      // 2. Repulsor Discharge Blast (White noise burst & deep sweeping boom)
      setTimeout(() => {
        const blastNow = this.ctx.currentTime;
        const oscBlast = this.ctx.createOscillator();
        const gainBlast = this.ctx.createGain();
        
        oscBlast.type = 'sawtooth';
        oscBlast.frequency.setValueAtTime(800, blastNow);
        oscBlast.frequency.exponentialRampToValueAtTime(80, blastNow + 0.25);
        
        gainBlast.gain.setValueAtTime(0.12, blastNow);
        gainBlast.gain.exponentialRampToValueAtTime(0.0001, blastNow + 0.3);
        
        oscBlast.connect(gainBlast);
        gainBlast.connect(this.ctx.destination);
        oscBlast.start();
        oscBlast.stop(blastNow + 0.35);
      }, 200);
      
    } catch(e) {}
  }
}

const AudioEngine = new JarvisAudioEngine();

// Email Debugger Simulator Data
const EMAIL_BUGS = [
  {
    line: 0,
    text: "SUBJECT: URGENT JOB APPLICATION PLS HIRE ME!!!",
    cleanText: "SUBJECT: Job Application // SLIIT IT Academy Graduate",
    isBug: true,
    errorMsg: "Subject line is informal and uses excessive punctuation.",
    repaired: false
  },
  {
    line: 1,
    text: "hey buddy,",
    cleanText: "Dear Hiring Manager,",
    isBug: true,
    errorMsg: "Greeting is too casual. Use formal salutation.",
    repaired: false
  },
  {
    line: 2,
    text: "I'm writing cuz i saw ur job listing and i need money asap.",
    cleanText: "I am writing to express my strong interest in the software developer vacancy listed on your website.",
    isBug: true,
    errorMsg: "Contains contractions, slang spelling (cuz, ur), and inappropriate motive.",
    repaired: false
  },
  {
    line: 3,
    text: "I am a graduate of SLIIT IT Academy holding a Higher Diploma with a standard GPA.",
    cleanText: "I am a graduate of SLIIT IT Academy holding a Higher Diploma with my verified GPA.",
    isBug: false,
    repaired: true
  },
  {
    line: 4,
    text: "I AM THE BEST CODER IN MY CLASS AND I CAN WRITE PERFECT CODE VERY FAST!!!",
    cleanText: "During my academic studies, I specialized in responsive front-end engineering and modular application structure.",
    isBug: true,
    errorMsg: "ALL CAPS indicates shouting. Statements are arrogant rather than professional.",
    repaired: false
  },
  {
    line: 5,
    text: "Check out my attached portfolio to see my epic creations.",
    cleanText: "Please find attached my CV and detailed project dossier for your review.",
    isBug: true,
    errorMsg: "Slang terms ('epic creations') should be replaced with professional nouns.",
    repaired: false
  },
  {
    line: 6,
    text: "later,",
    cleanText: "Sincerely,",
    isBug: true,
    errorMsg: "Closing is overly familiar. Use 'Sincerely' or 'Kind regards'.",
    repaired: false
  },
  {
    line: 7,
    text: "applicant_signature",
    cleanText: "applicant_signature_repaired",
    isBug: true,
    errorMsg: "Signature is incomplete and lower-case.",
    repaired: false
  }
];

// STAR Interview Flashcard Data
const STAR_CARDS = [
  {
    question: "Tell me about a time you had to deal with a team conflict during a group project.",
    answer: "<strong>S (Situation):</strong> Two database developers in my SLIIT group disagreed on SQL vs MongoDB schema.<br><strong>T (Task):</strong> As scrum leader, I had to resolve the deadlock to prevent project schedule slippage.<br><strong>A (Action):</strong> Organised an empathy-focused feedback sync. Mapped schema performance pros/cons against project requirements.<br><strong>R (Result):</strong> Reached consensus on PostgreSQL, completed database tasks 2 days early, scored A grade."
  },
  {
    question: "How do you handle working under tight deadlines for development deliverables?",
    answer: "<strong>S (Situation):</strong> A final-year project required an interface build in 48 hours due to a repository crash.<br><strong>T (Task):</strong> Rebuild 3 dashboard subviews and ensure clean API endpoints before final presentation.<br><strong>A (Action):</strong> Set up a rigid timeline checklist. Delegated routing, focused on core elements, cut out secondary visuals.<br><strong>R (Result):</strong> Re-calibrated the build, tested successfully, and presented on time with 98% telemetry efficiency."
  },
  {
    question: "Give an example of a mistake you made in a project and how you resolved it.",
    answer: "<strong>S (Situation):</strong> Accidentally committed raw database API keys to a public GitHub repository during Week 10 Code of Ethics labs.<br><strong>T (Task):</strong> Revoke compromised credentials and secure the repository history immediately.<br><strong>A (Action):</strong> Rotated cloud access tokens, force-pushed repository history filters to purge keys, and set up local git-secrets checkers.<br><strong>R (Result):</strong> Secured access, informed the proctor, and adopted strict environment configuration habits."
  }
];

let activeStarCardIdx = 0;

// Application State
let completedWeeks = JSON.parse(localStorage.getItem('jarvis_completed_weeks')) || [];

// Profile Caching State
let profileData = JSON.parse(localStorage.getItem('jarvis_profile_data')) || {
  name: "ABIRAJ A.",
  gpa: "3.85",
  email: "abiraj.a@starkacademy.lk",
  github: "github.com/abiraj-a"
};

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Bind Audio Engine toggle
  const audioToggle = document.getElementById('audio-toggle');
  audioToggle.addEventListener('change', (e) => {
    AudioEngine.enabled = e.target.checked;
    if (AudioEngine.enabled) AudioEngine.init();
  });

  // Load Tab navigation
  setupTabs();
  
  // Render Lecture Core cards
  renderLectures();

  // Load Profile Setup
  setupProfileSettings();
  propagateProfileData();

  // Load Simulators
  setupEmailDebugger();
  setupStarFlashcards();

  // Progress telemetry calibration
  recalculateProgress();

  // Endgame snap protocol
  setupEndgameProtocol();

  // Floating Mascot Mascot clicks
  setupMascotInteractions();

  // Setup charity outreach gallery
  setupCharityGallery();

  // Initialize Web Speech voice feed
  SpeechEngine.init();

  // Initial Jarvis speech
  typeText("jarvis-output", `Welcome back, Cadet ${profileData.name.split(' ')[0]}. Neural interface calibrated. Select a menu module to begin diagnostics, press VOICE FEED to talk to me, or click my floating chibi doll to fire repulsors.`, 40);
});

// Typing Text Effect Helper
function typeText(elementId, text, speed = 30) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (el.typingTimeout) clearTimeout(el.typingTimeout);
  el.innerHTML = "";
  let i = 0;
  function walk() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      el.typingTimeout = setTimeout(walk, speed);
    }
  }
  walk();
}

// Tab switcher setup
function setupTabs() {
  const menuItems = document.querySelectorAll('.menu-item');
  const viewports = document.querySelectorAll('.viewport-tab');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      AudioEngine.playHover();
    });

    item.addEventListener('click', () => {
      AudioEngine.playClick();
      const tabName = item.getAttribute('data-tab');

      // Update menu states
      menuItems.forEach(mi => mi.classList.remove('active'));
      item.classList.add('active');

      // Update views
      viewports.forEach(vp => {
        vp.classList.remove('active');
        if (vp.getAttribute('id') === `view-${tabName}`) {
          vp.classList.add('active');
        }
      });

      // J.A.R.V.I.S. voice comments based on tabs
      if (tabName === 'dashboard') {
        typeText("jarvis-output", "Main console live. Diagnostic reports indicate positive progression across your Professional Skills modules.", 30);
      } else if (tabName === 'lectures') {
        typeText("jarvis-output", "Curriculum Database accessed. 11 modules representing employability skills, netiquette, and ethics are ready for audit.", 30);
      } else if (tabName === 'skills') {
        typeText("jarvis-output", "Skill quotients laboratory loaded. Displaying soft skills, negotiation parameters, and ethics index charts.", 30);
      } else if (tabName === 'dossier') {
        typeText("jarvis-output", "Stark Cadet ID clearance details retrieved. Displaying customized CV portfolio template.", 30);
      } else if (tabName === 'simulators') {
        typeText("jarvis-output", "Simulation suite operational. Please test your digital netiquette and STAR interview capabilities.", 30);
      } else if (tabName === 'charity') {
        typeText("jarvis-output", "Charity Funding Project archives loaded. Displaying details and dynamic telemetry from the community outreach initiative.", 30);
      }
    });
  });
}

// Profile Customizer Config
function setupProfileSettings() {
  const openBtn = document.getElementById('btn-open-settings');
  const closeBtn = document.getElementById('btn-close-settings');
  const saveBtn = document.getElementById('btn-save-settings');
  const settingsModal = document.getElementById('settings-modal');

  // Set initial form values
  document.getElementById('cfg-name').value = profileData.name;
  document.getElementById('cfg-gpa').value = profileData.gpa;
  document.getElementById('cfg-email').value = profileData.email;
  document.getElementById('cfg-github').value = profileData.github;

  openBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    settingsModal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    settingsModal.classList.remove('active');
  });

  saveBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    
    // Read input values
    profileData.name = document.getElementById('cfg-name').value.trim() || "ABIRAJ A.";
    profileData.gpa = parseFloat(document.getElementById('cfg-gpa').value).toFixed(2) || "3.85";
    profileData.email = document.getElementById('cfg-email').value.trim() || "abiraj.a@starkacademy.lk";
    profileData.github = document.getElementById('cfg-github').value.trim() || "github.com/abiraj-a";

    // Cache to localStorage
    localStorage.setItem('jarvis_profile_data', JSON.stringify(profileData));
    
    // Close modal & propagate DOM
    settingsModal.classList.remove('active');
    propagateProfileData();
    setupEmailDebugger(); // Reload debugger signatures

    AudioEngine.playSuccess();
    typeText("jarvis-output", `Clearance records successfully committed. Profile data re-calibrated. Welcome Cadet ${profileData.name.split(' ')[0]}.`, 30);
  });
}

// Propagate profile details to all spans/placeholders in DOM
function propagateProfileData() {
  // Sidebar elements
  document.getElementById('sb-profile-name').innerText = profileData.name;

  // CV / dossier elements
  document.querySelectorAll('.fill-profile-name').forEach(el => el.innerText = profileData.name);
  document.querySelectorAll('.fill-profile-gpa').forEach(el => el.innerText = profileData.gpa);
  document.getElementById('cv-fill-email').innerText = profileData.email;
  document.getElementById('cv-fill-github').innerText = profileData.github;

  // Certificate elements
  const certName = document.getElementById('cert-recipient-name');
  if (certName) certName.innerText = profileData.name;
}

// Render lecture core grid cards
function renderLectures() {
  const container = document.getElementById('lectures-container');
  if (!container) return;
  container.innerHTML = "";

  LECTURE_DATA.forEach(data => {
    const isCompleted = completedWeeks.includes(data.week);
    const statusText = isCompleted ? "CALIBRATED" : "PENDING AUDIT";
    const statusColor = isCompleted ? "var(--hud-primary)" : "var(--hud-accent-gold)";

    const card = document.createElement('div');
    card.className = `lecture-card`;
    card.id = `lecture-card-${data.week}`;
    if (isCompleted) card.style.borderColor = "var(--hud-primary)";

    card.innerHTML = `
      <div>
        <div class="lecture-card-num">MODULE // WEEK 0${data.week}</div>
        <div class="lecture-card-title">${data.title}</div>
        ${data.instructor ? `<div class="lecture-card-instructor">&#128101; ${data.instructor}</div>` : ''}
      </div>
      <div class="lecture-card-footer">
        <span style="color: ${statusColor}; text-shadow: 0 0 5px ${isCompleted ? 'rgba(0, 240, 255, 0.4)' : 'transparent'}">${statusText}</span>
        <span class="lecture-card-action">INITIALIZE &raquo;</span>
      </div>
    `;

    card.addEventListener('mouseenter', () => AudioEngine.playHover());
    card.addEventListener('click', () => openLecturePopup(data.week));

    container.appendChild(card);
  });
}

// Popup lecture details handler
let currentOpenWeek = null;
function openLecturePopup(week) {
  AudioEngine.playClick();
  currentOpenWeek = week;
  const data = LECTURE_DATA.find(d => d.week === week);
  if (!data) return;

  const isCompleted = completedWeeks.includes(week);
  
  // Set details
  document.getElementById('popup-week-tag').innerText = `CURRICULUM // WEEK 0${week}`;
  document.getElementById('popup-title').innerText = data.title;
  
  // Show instructor inside popup header
  let instructorEl = document.getElementById('popup-instructor');
  if (!instructorEl) {
    instructorEl = document.createElement('div');
    instructorEl.id = 'popup-instructor';
    instructorEl.style.cssText = 'font-family: var(--font-body); font-size: 0.95rem; color: var(--hud-accent-gold); letter-spacing: 1px; margin-top: 4px;';
    document.querySelector('.hologram-title-area').appendChild(instructorEl);
  }
  instructorEl.innerText = data.instructor ? `👤 ${data.instructor}` : '';
  
  document.getElementById('popup-overview').innerText = data.overview;
  
  // Populate skills list
  const skillsContainer = document.getElementById('popup-skills');
  skillsContainer.innerHTML = "";
  data.skills.forEach(s => {
    const li = document.createElement('li');
    li.innerText = s;
    skillsContainer.appendChild(li);
  });

  document.getElementById('popup-activities').innerText = data.activities;
  document.getElementById('popup-reflection').innerText = data.reflection;

  // Video controller setup
  const videoPlayer = document.getElementById('popup-video-player');
  const videoFallback = document.getElementById('popup-video-fallback');

  if (data.video) {
    videoFallback.style.display = "none";
    videoPlayer.style.display = "block";
    videoPlayer.src = data.video;
    videoPlayer.load();
  } else {
    videoPlayer.style.display = "none";
    videoPlayer.src = "";
    videoFallback.style.display = "flex";
  }

  // Update mark completed button styling
  const markBtn = document.getElementById('btn-mark-read');
  if (isCompleted) {
    markBtn.innerText = "MODULE FULLY CALIBRATED";
    markBtn.style.background = "rgba(0, 240, 255, 0.15)";
    markBtn.style.borderColor = "var(--hud-primary)";
  } else {
    markBtn.innerText = "APPROVE & CALIBRATE MODULE";
    markBtn.style.background = "rgba(255, 189, 57, 0.1)";
    markBtn.style.borderColor = "var(--hud-accent-gold)";
  }

  // Show Popup overlay
  document.getElementById('lecture-popup').classList.add('active');

  // Trigger sound synth click feedback
  AudioEngine.playBeep(1200, 0.15, 'sine', 0.05);
}

// Mark as read button click inside popup
const markReadBtn = document.getElementById('btn-mark-read');
markReadBtn.addEventListener('click', () => {
  if (currentOpenWeek === null) return;
  
  const idx = completedWeeks.indexOf(currentOpenWeek);
  if (idx > -1) {
    // Already completed, let's toggle/keep it
    AudioEngine.playBeep(400, 0.1, 'sine', 0.05);
  } else {
    // Mark as completed
    completedWeeks.push(currentOpenWeek);
    localStorage.setItem('jarvis_completed_weeks', JSON.stringify(completedWeeks));
    AudioEngine.playSuccess();
  }

  // Close popup
  document.getElementById('lecture-popup').classList.remove('active');
  const videoPlayer = document.getElementById('popup-video-player');
  videoPlayer.pause();
  videoPlayer.src = "";

  // Refresh data
  renderLectures();
  recalculateProgress();
});

// Close popup button click
const closePopupBtn = document.getElementById('popup-close-btn');
closePopupBtn.addEventListener('click', () => {
  AudioEngine.playClick();
  document.getElementById('lecture-popup').classList.remove('active');
  const videoPlayer = document.getElementById('popup-video-player');
  videoPlayer.pause();
  videoPlayer.src = "";
});

// Telemetry recalculator
function recalculateProgress() {
  const totalWeeks = LECTURE_DATA.length;
  const completedCount = completedWeeks.length;
  const pct = Math.round((completedCount / totalWeeks) * 100);

  // Update text stats
  document.getElementById('stats-unlocked').innerText = completedCount;
  document.getElementById('hud-progress-text').innerText = `${pct}%`;

  // Update SVG Circular progress stroke-dashoffset
  const strokeOffset = 377 - (377 * pct) / 100;
  document.getElementById('hud-progress-bar').style.strokeDashoffset = strokeOffset;

  // Endgame button checker
  const snapBtn = document.getElementById('btn-snap-protocol');
  if (pct === 100) {
    snapBtn.removeAttribute('disabled');
    snapBtn.style.background = "rgba(255, 42, 95, 0.3)";
    snapBtn.style.boxShadow = "0 0 20px rgba(255, 42, 95, 0.6)";
    snapBtn.style.animation = "pulseSnap 1.2s infinite alternate";
  } else {
    snapBtn.setAttribute('disabled', 'true');
    snapBtn.style.background = "rgba(255, 42, 95, 0.03)";
    snapBtn.style.boxShadow = "none";
    snapBtn.style.animation = "none";
  }
}

// Setup Email Debugger Simulator
function setupEmailDebugger() {
  const container = document.getElementById('email-debugger-container');
  if (!container) return;
  container.innerHTML = "";

  // Dynamically set signature checks
  EMAIL_BUGS[7].text = `${profileData.name.toLowerCase().replace(/\s+/g, '')}`;
  EMAIL_BUGS[7].cleanText = `${profileData.name}\nSLIIT Academy Cadet`;

  EMAIL_BUGS.forEach(bug => {
    const lineDiv = document.createElement('div');
    lineDiv.className = "sim-line";
    
    const gutter = document.createElement('span');
    gutter.className = "sim-line-gutter";
    gutter.innerText = String(bug.line + 1).padStart(2, '0');

    const content = document.createElement('span');
    content.className = `sim-line-content ${bug.isBug && !bug.repaired ? 'error-highlight' : ''}`;
    if (bug.isBug && bug.repaired) {
      content.className = "sim-line-content success-highlight";
      content.innerText = bug.cleanText;
    } else {
      content.innerText = bug.text;
    }

    lineDiv.appendChild(gutter);
    lineDiv.appendChild(content);

    // Click on bug lines to repair
    if (bug.isBug && !bug.repaired) {
      content.addEventListener('click', () => {
        AudioEngine.playClick();
        bug.repaired = true;
        
        // Show fix feedback
        const fb = document.getElementById('email-feedback');
        fb.className = "sim-feedback success";
        fb.innerText = `DEBUGGED: Fixed Netiquette Bug - ${bug.errorMsg}`;
        fb.style.display = "block";
        
        setupEmailDebugger(); // rerender code
      });
    }

    container.appendChild(lineDiv);
  });
}

// Check Email Compiler button click
const checkEmailBtn = document.getElementById('btn-check-email');
checkEmailBtn.addEventListener('click', () => {
  const unsolved = EMAIL_BUGS.filter(bug => bug.isBug && !bug.repaired);
  const fb = document.getElementById('email-feedback');

  if (unsolved.length === 0) {
    AudioEngine.playSuccess();
    fb.className = "sim-feedback success";
    fb.innerText = "COMPILE COMPLIANT // Email successfully sanitized. 100% compliant with professional email etiquette regulations.";
  } else {
    AudioEngine.playError();
    fb.className = "sim-feedback error";
    fb.innerText = `COMPILE ERROR // Netiquette check failed. Found ${unsolved.length} unresolved syntax/courtesy exceptions. Fix highlighted elements.`;
  }
  fb.style.display = "block";
});

// Setup STAR Interview Flashcard Deck
function setupStarFlashcards() {
  const card = document.getElementById('star-flashcard');
  if (!card) return;

  card.addEventListener('click', () => {
    AudioEngine.playClick();
    card.classList.toggle('flipped');
  });

  const prevBtn = document.getElementById('btn-prev-card');
  const nextBtn = document.getElementById('btn-next-card');

  prevBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    card.classList.remove('flipped');
    setTimeout(() => {
      activeStarCardIdx = (activeStarCardIdx - 1 + STAR_CARDS.length) % STAR_CARDS.length;
      updateFlashcardContent();
    }, 150);
  });

  nextBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    card.classList.remove('flipped');
    setTimeout(() => {
      activeStarCardIdx = (activeStarCardIdx + 1) % STAR_CARDS.length;
      updateFlashcardContent();
    }, 150);
  });
}

function updateFlashcardContent() {
  const currentCard = STAR_CARDS[activeStarCardIdx];
  document.getElementById('card-question-text').innerText = `"${currentCard.question}"`;
  document.getElementById('card-answer-text').innerHTML = currentCard.answer;
}

// Interactive Mascot Floating Iron Man click repulsor beam shooter
function setupMascotInteractions() {
  const mascot = document.getElementById('jarvis-mascot');
  if (!mascot) return;

  mascot.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop click propagating to background
    
    // Play dual oscillator repulsor charge & blast
    AudioEngine.playRepulsorBlast();

    // Trigger visual blast recoil
    mascot.classList.add('mascot-repulse-blast');
    setTimeout(() => mascot.classList.remove('mascot-repulse-blast'), 160);

    // Let J.A.R.V.I.S comment
    typeText("jarvis-output", `Mascot repulsor diagnostics executed. Laser tracking lock-on calibration successful. Standby.`, 25);

    // Draw repulsor laser beam targeting the center of viewport
    shootRepulsorLaser(mascot);
  });
}

// Dynamic Repulsor Laser Shoot drawing
function shootRepulsorLaser(mascot) {
  // Mascot coordinates
  const rect = mascot.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2 - 10; // Chest reactor center

  // Target coordinates (Center of screen)
  const endX = window.innerWidth / 2;
  const endY = window.innerHeight / 2;

  // Create temporary SVG canvas for repulsor laser lines
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.position = "fixed";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.width = "100vw";
  svg.style.height = "100vh";
  svg.style.zIndex = "850";
  svg.style.pointerEvents = "none";

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", endX);
  line.setAttribute("y2", endY);
  line.setAttribute("class", "repulsor-beam");

  svg.appendChild(line);
  document.body.appendChild(svg);

  // Remove element after fade out animation finishes
  setTimeout(() => {
    svg.remove();
  }, 250);
}

// Endgame Protocol Execution (Dust Particle Canvas Disintegration)
function setupEndgameProtocol() {
  const snapBtn = document.getElementById('btn-snap-protocol');
  const cutsceneOverlay = document.getElementById('snap-cutscene-overlay');
  const flash = document.getElementById('snap-flash');
  const subtitle = document.getElementById('snap-subtitle');
  const canvas = document.getElementById('snap-canvas');
  const snapVideo = document.getElementById('snap-video');

  snapBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    
    // Hide viewport interaction points
    snapBtn.setAttribute('disabled', 'true');
    
    // Show overlay
    cutsceneOverlay.style.display = "flex";
    
    // Play snap video with audio
    if (snapVideo) {
      snapVideo.currentTime = 0;
      snapVideo.play().catch(err => {
        console.warn("Video playback blocked by browser security policy. Continuing fallback.", err);
        // Fallback in case browser blocks autoplay with sound (though click was user-initiated)
        setTimeout(() => {
          snapVideo.onended();
        }, 5000);
      });
    }

    subtitle.innerText = "// J.A.R.V.I.S: Protocol Endgame initiated...";

    // Subtitle updates synced with video playback
    const handleSubtitles = () => {
      if (!snapVideo) return;
      const t = snapVideo.currentTime;
      if (t > 1.5 && t < 3.5) {
        subtitle.innerText = "// J.A.R.V.I.S: Channeling nanotech gauntlet containment...";
      } else if (t >= 3.5) {
        subtitle.innerText = "Tony Stark: 'I am... Iron Man.'";
      }
    };

    if (snapVideo) {
      snapVideo.addEventListener('timeupdate', handleSubtitles);
      
      snapVideo.onended = () => {
        snapVideo.removeEventListener('timeupdate', handleSubtitles);
        
        // Screen Flash
        flash.style.opacity = "1";
        flash.style.transition = "opacity 0.05s ease-out";
        
        setTimeout(() => {
          flash.style.opacity = "0";
          flash.style.transition = "opacity 1.5s ease-in";
        }, 80);

        setTimeout(() => {
          // Disintegrate page content using Canvas particle dusting
          cutsceneOverlay.style.display = "none";
          triggerDisintegrationEffect();
        }, 500);
      };
    }
  });

  // Reset console from certificate screen
  const resetBtn = document.getElementById('btn-reset-cert');
  resetBtn.addEventListener('click', () => {
    AudioEngine.playClick();
    completedWeeks = [];
    localStorage.removeItem('jarvis_completed_weeks');
    
    document.getElementById('grad-cert-overlay').style.display = "none";
    document.getElementById('jarvis-interface').style.opacity = "1";
    document.getElementById('jarvis-interface').style.pointerEvents = "auto";
    
    renderLectures();
    recalculateProgress();
    
    typeText("jarvis-output", "HUD Console rebooted successfully. Diagnostic data cleared. Welcome back Cadet.", 30);
  });
}

// HTML5 Canvas Disintegration "Dusting" System — optimised with ImageData pixel buffer
function triggerDisintegrationEffect() {
  const canvas = document.getElementById('snap-canvas');
  const ctx = canvas.getContext('2d');
  const ui = document.getElementById('jarvis-interface');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  // Hide UI interface pointer events immediately
  ui.style.pointerEvents = "none";

  // Synthesize particle dusting sound sweep
  AudioEngine.playBeep(80, 2.5, 'triangle', 0.1);

  const W = canvas.width;
  const H = canvas.height;
  const numParticles = 3500;

  // Pre-allocate typed arrays for speed (no object overhead per particle)
  const px   = new Float32Array(numParticles);
  const py   = new Float32Array(numParticles);
  const pvx  = new Float32Array(numParticles);
  const pvy  = new Float32Array(numParticles);
  const pa   = new Float32Array(numParticles); // alpha 0-255
  const pfr  = new Float32Array(numParticles); // fade rate
  const psz  = new Uint8Array(numParticles);   // size 1-3

  for (let i = 0; i < numParticles; i++) {
    px[i]  = Math.random() * W;
    py[i]  = Math.random() * H;
    pvx[i] = 1.5 + Math.random() * 2.5;
    pvy[i] = -0.5 - Math.random() * 1.5;
    pa[i]  = 255;
    pfr[i] = 1.5 + Math.random() * 3.5;   // units: alpha/frame
    psz[i] = 1 + (Math.random() * 2 | 0); // 1 or 2
  }

  // UI visual fade-out
  ui.style.transition = "opacity 2.5s ease-out";
  ui.style.opacity = "0";

  // Shared ImageData — reuse one buffer
  const imageData = ctx.createImageData(W, H);
  const data = imageData.data; // Uint8ClampedArray [R,G,B,A, ...]

  function animate() {
    // Clear buffer (set all alpha to 0)
    data.fill(0);

    let activeParticles = 0;

    for (let i = 0; i < numParticles; i++) {
      if (pa[i] <= 0) continue;
      activeParticles++;

      // Move particle
      px[i] += pvx[i];
      py[i] += pvy[i];
      pa[i] -= pfr[i];

      const alpha = pa[i] < 0 ? 0 : pa[i];
      const xi = px[i] | 0;
      const yi = py[i] | 0;
      const sz = psz[i];

      // Paint sz×sz block of pixels directly into buffer
      for (let dy = 0; dy < sz; dy++) {
        const row = yi + dy;
        if (row < 0 || row >= H) continue;
        for (let dx = 0; dx < sz; dx++) {
          const col = xi + dx;
          if (col < 0 || col >= W) continue;
          const idx = (row * W + col) * 4;
          // Cyan glow: R=0, G=240, B=255
          data[idx]     = 0;
          data[idx + 1] = 240;
          data[idx + 2] = 255;
          data[idx + 3] = alpha | 0;
        }
      }
    }

    // Single draw call — put entire pixel buffer at once
    ctx.putImageData(imageData, 0, 0);

    if (activeParticles > 0) {
      requestAnimationFrame(animate);
    } else {
      canvas.style.display = "none";
      document.getElementById('grad-cert-overlay').style.display = "flex";
      AudioEngine.playSuccess();
    }
  }

  animate();
}

// J.A.R.V.I.S. Web Speech Recognition Engine
class JarvisSpeechEngine {
  constructor() {
    this.recognition = null;
    this.listening = false;
    this.isAwake = false;
    this.isSpeaking = false; // Prevents self-triggering
    this.sleepTimer = null;
    this.btn = null;
    this.indicator = null;
    this.text = null;
    this.synth = window.speechSynthesis;
    this.voice = null;
  }

  init() {
    this.btn = document.getElementById('mic-status-btn');
    this.indicator = document.getElementById('mic-indicator');
    this.text = document.getElementById('mic-text');

    if (!this.btn) return;

    // Load voices for TTS
    const setVoice = () => {
      if (!this.synth) return;
      const voices = this.synth.getVoices();
      
      // Look for offline English female voices for INSTANT zero-delay response
      const femaleVoices = voices.filter(v => 
        v.lang.includes('en') && 
        !v.name.includes('Natural') && 
        !v.name.includes('Online') && (
          v.name.includes('Female') || 
          v.name.includes('Zira') || 
          v.name.includes('Hazel') || 
          v.name.includes('Samantha') ||
          v.name.includes('Victoria')
        )
      );

      this.voice = femaleVoices.length > 0 ? femaleVoices[0] : voices.find(v => v.lang.includes('en')) || voices[0];
    };
    
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = setVoice;
    }
    setVoice();

    // Check SpeechRecognition browser availability
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.text.innerText = "VOICE: UNSUPPORTED";
      this.indicator.style.backgroundColor = "var(--hud-accent-red)";
      this.indicator.style.boxShadow = "0 0 5px var(--hud-accent-red)";
      this.btn.title = "Web Speech API is not supported in this browser environment.";
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;

    // Toggle speech engine on user click
    this.btn.addEventListener('click', () => {
      AudioEngine.playClick();
      if (this.listening) {
        this.listening = false; // Prevent auto-restart
        this.stop();
        this.isAwake = false;
        this.btn.classList.remove('listening');
        this.text.innerText = "VOICE FEED: OFF";
        this.indicator.style.boxShadow = "none";
      } else {
        this.listening = true;
        this.start();
        this.wakeUp(false); // Restoring the wake-up voice!
      }
    });

    // Recognition event hooks
    this.recognition.onstart = () => {
      if (this.listening) {
        this.btn.classList.add('listening');
        if (!this.isAwake) {
          this.text.innerText = "VOICE: STANDBY";
        }
      }
    };

    this.recognition.onend = () => {
      if (this.listening && !this.isSpeaking) {
        // Auto restart to keep listening for wake word
        try { this.recognition.start(); } catch(e){}
      } else if (!this.listening) {
        this.btn.classList.remove('listening');
        this.text.innerText = "VOICE FEED: OFF";
      }
    };

    this.recognition.onerror = (e) => {
      console.warn("Speech recognition error status:", e.error);
      if (e.error === 'not-allowed') {
        this.listening = false;
        this.isAwake = false;
        this.btn.classList.remove('listening');
        this.text.innerText = "VOICE FEED: OFF";
        typeText("jarvis-output", "Speech telemetry alert: Microphone access permission denied.", 30);
        AudioEngine.playError();
      } else if (e.error === 'network') {
        this.listening = false;
        this.isAwake = false;
        this.btn.classList.remove('listening');
        this.text.innerText = "VOICE FEED: OFF";
        typeText("jarvis-output", "J.A.R.V.I.S. Speech Alert: Network error. Speech recognition is blocked on 'file://' links. Please run via localhost.", 30);
        AudioEngine.playError();
      }
    };

    this.recognition.onresult = (event) => {
      if (this.isSpeaking) return; // Don't listen to own voice echo
      
      // Get the latest result
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.toLowerCase().trim();
      console.log('J.A.R.V.I.S. heard:', transcript);

      if (!this.isAwake) {
        // Listening for wake word
        if (transcript.includes('hey jarvis') || transcript.includes('hello jarvis') || transcript.includes('ok jarvis') || transcript.includes('jarvis wake up')) {
          this.wakeUp();
          
          // Check if there are other words after the wake word to process immediately
          const parts = transcript.split(/jarvis/i);
          if (parts.length > 1 && parts[1].trim().length > 3) {
            setTimeout(() => {
              this.processCommand(parts[1].trim());
            }, 500); // Give it a half second to process wake sound
          }
        }
      } else {
        // Process command
        if (transcript.includes('sleep') || transcript.includes('stop listening') || transcript.includes('standby')) {
          this.sleep();
        } else {
          this.processCommand(transcript);
        }
      }
    };
  }

  speak(text, onStartCallback = null, onEndCallback = null) {
    if (!this.synth) {
      if(onStartCallback) onStartCallback();
      if(onEndCallback) onEndCallback();
      return;
    }
    
    // Clear any stuck utterances
    if (this.synth.speaking || this.synth.pending) {
        this.synth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // CRITICAL: Attach utterance to 'this' to prevent Chrome garbage collection bug which randomly silences audio!
    this.currentUtterance = utterance;

    if (this.voice) utterance.voice = this.voice;
    utterance.pitch = 1.0; // Default pitch is often most natural
    utterance.rate = 1.0;
    
    this.isSpeaking = true;
    this.stop(); // Physically turn off the mic so it can't hear the computer's own voice

    utterance.onstart = () => {
      if (onStartCallback) {
        onStartCallback();
        onStartCallback = null;
      }
    };

    const finishSpeaking = () => {
      // Wait a moment after speaking finishes to clear the air of echoes
      setTimeout(() => { 
        this.isSpeaking = false; 
        if (this.listening) {
          this.start(); // Turn the mic back on!
        }
      }, 500);
      
      if (onEndCallback) {
        onEndCallback();
        onEndCallback = null; // Prevent double firing
      }
    };

    utterance.onend = finishSpeaking;
    // Failsafe in case onend doesn't fire (common browser bug)
    setTimeout(finishSpeaking, text.length * 80 + 5000);
    
    // Failsafe for onstart in case of extreme cloud voice loading delays
    setTimeout(() => {
      if (onStartCallback) {
        onStartCallback();
        onStartCallback = null;
      }
    }, 1500);

    // Minor delay before speak to ensure SpeechSynthesis engine is clear
    setTimeout(() => {
      this.synth.speak(utterance);
    }, 50);
  }

  wakeUp(silent = false) {
    this.isAwake = true;
    this.text.innerText = "VOICE: ACTIVE";
    this.indicator.style.boxShadow = "0 0 15px var(--hud-primary)";
    AudioEngine.playBeep(1200, 0.1, 'sine', 0.05);
    typeText("jarvis-output", "Yes, Cadet? Awaiting command...", 25);
    
    if (silent) {
      clearTimeout(this.sleepTimer);
      this.sleepTimer = setTimeout(() => { this.sleep(); }, 20000);
    } else {
      this.speak("Yes, sir. I am online and listening.", null, () => {
        clearTimeout(this.sleepTimer);
        // Give the user 20 seconds of standby time to speak
        this.sleepTimer = setTimeout(() => {
          this.sleep();
        }, 20000);
      });
    }
  }

  sleep() {
    this.isAwake = false;
    this.text.innerText = "VOICE: STANDBY";
    this.indicator.style.boxShadow = "none";
    typeText("jarvis-output", "Voice interface returning to standby. Say 'Hey Jarvis' to wake.", 25);
  }

  start() {
    if (this.recognition) {
      try { this.recognition.start(); } catch(e){}
    }
  }

  stop() {
    if (this.recognition) {
      try { this.recognition.stop(); } catch(e){}
    }
  }

  processCommand(cmd) {
    clearTimeout(this.sleepTimer);
    typeText("jarvis-output", `Command captured: "${cmd}"`, 25);

    let matched = true;
    let responseText = "";
    let actionCallback = null;

    if (cmd.includes('shutdown') || cmd.includes('shut down')) {
      this.speak("Powering down all systems. Goodbye, sir.", () => {
        AudioEngine.playShutdown();
        document.body.classList.add('crt-shutdown');
      }, null);
      return; // Skip the rest
    } else if (cmd.includes('lecture') || cmd.includes('curriculum') || cmd.includes('week') || cmd.includes('table') || cmd.includes('content')) {
      const tab = document.querySelector('[data-tab="lectures"]');
      if (tab) {
        responseText = "Navigating to table of contents.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('dashboard') || cmd.includes('main') || cmd.includes('home') || cmd.includes('console')) {
      const tab = document.querySelector('[data-tab="dashboard"]');
      if (tab) {
        responseText = "Accessing main console.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('skill') || cmd.includes('lab') || cmd.includes('radar') || cmd.includes('metric')) {
      const tab = document.querySelector('[data-tab="skills"]');
      if (tab) {
        responseText = "Opening skills laboratory.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('dossier') || cmd.includes('cv') || cmd.includes('resume') || cmd.includes('dossyer')) {
      const tab = document.querySelector('[data-tab="dossier"]');
      if (tab) {
        responseText = "Retrieving professional dossier.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('simulation') || cmd.includes('test') || cmd.includes('game') || cmd.includes('debugger')) {
      const tab = document.querySelector('[data-tab="simulators"]');
      if (tab) {
        responseText = "Initializing simulation tests.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('charity') || cmd.includes('fund') || cmd.includes('donate') || cmd.includes('outreach')) {
      const tab = document.querySelector('[data-tab="charity"]');
      if (tab) {
        responseText = "Accessing charity funding records.";
        actionCallback = () => { AudioEngine.playSuccess(); tab.click(); };
      }
    } else if (cmd.includes('snap') || cmd.includes('endgame') || cmd.includes('protocol')) {
      const btn = document.getElementById('btn-snap-protocol');
      if (btn && !btn.hasAttribute('disabled')) {
        responseText = "Executing protocol endgame.";
        actionCallback = () => { AudioEngine.playSuccess(); btn.click(); };
      } else {
        responseText = "Protocol Endgame is currently locked. Complete telemetry first.";
        actionCallback = () => {
          AudioEngine.playError();
          typeText("jarvis-output", "Speech warning: Protocol Endgame is currently locked. Complete telemetry first.", 30);
        };
      }
    } else if (cmd.includes('reboot') || cmd.includes('restart') || cmd.includes('reset')) {
      const btn = document.getElementById('btn-reset-cert');
      if (btn && document.getElementById('grad-cert-overlay').style.display === "flex") {
        responseText = "Rebooting console.";
        actionCallback = () => { AudioEngine.playSuccess(); btn.click(); };
      }
    } else {
      matched = false;
      responseText = "I'm sorry, I didn't catch that command.";
      actionCallback = () => {
        AudioEngine.playError();
        typeText("jarvis-output", `Command warning: "${cmd}" unrecognized by J.A.R.V.I.S. syntax.`, 30);
      };
    }

    if (responseText) {
      this.speak(responseText, actionCallback, () => {
        // If it was an error, stay awake for 15 seconds to let them try again.
        // If it was successful, go to sleep faster (3 seconds)
        const sleepDelay = matched ? 3000 : 15000;
        this.sleepTimer = setTimeout(() => {
          this.sleep();
        }, sleepDelay);
      });
    } else {
      if (actionCallback) actionCallback();
      this.sleepTimer = setTimeout(() => {
        this.sleep();
      }, 3000);
    }
  }
}

// Interactive Charity Outreach Project Gallery
function setupCharityGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.querySelectorAll('.gal-thumb');
  const prevBtn = document.getElementById('btn-gallery-prev');
  const nextBtn = document.getElementById('btn-gallery-next');
  const indexText = document.getElementById('gallery-img-index');
  const galleryFrame = document.querySelector('.holo-gallery-frame');
  const playBtn = document.getElementById('btn-gallery-play');
  const progressBar = document.getElementById('gallery-progress-bar');
  
  if (!mainImg) return;
  
  let currentIndex = 0;
  const images = Array.from(thumbs).map(t => t.src);
  let slideshowTimer = null;
  let isPlaying = false;
  const SLIDE_INTERVAL = 2500; // ms per slide

  // --- Progress bar animation ---
  function startProgressBar() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    // Force reflow so the reset takes effect
    progressBar.offsetHeight;
    progressBar.style.transition = `width ${SLIDE_INTERVAL}ms linear`;
    progressBar.style.width = '100%';
  }

  function stopProgressBar() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
  }

  // --- Core update ---
  function updateGallery(index, fromSlideshow = false) {
    currentIndex = index;
    mainImg.src = images[currentIndex];
    
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === currentIndex);
    });
    
    indexText.textContent = `PHOTO ${currentIndex + 1} / ${images.length}`;
    
    if (!fromSlideshow) AudioEngine.playClick();
    
    const mainContainer = document.querySelector('.gallery-main-container');
    mainContainer.style.animation = 'none';
    mainContainer.offsetHeight;
    mainContainer.style.animation = 'glitchScan 0.45s ease-out';

    // Scroll active thumb into view in the grid
    thumbs[currentIndex].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  // --- Slideshow ---
  function startSlideshow() {
    isPlaying = true;
    if (playBtn) {
      playBtn.innerHTML = '&#9646;&#9646; PAUSE';
      playBtn.classList.add('playing');
    }
    startProgressBar();
    slideshowTimer = setInterval(() => {
      const next = (currentIndex + 1) % images.length;
      updateGallery(next, true);
      AudioEngine.playClick();
      startProgressBar();
    }, SLIDE_INTERVAL);
  }

  function stopSlideshow() {
    isPlaying = false;
    clearInterval(slideshowTimer);
    slideshowTimer = null;
    if (playBtn) {
      playBtn.innerHTML = '&#9654; PLAY';
      playBtn.classList.remove('playing');
    }
    stopProgressBar();
  }

  // --- Controls ---
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      AudioEngine.playClick();
      if (isPlaying) {
        stopSlideshow();
      } else {
        startSlideshow();
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    stopSlideshow();
    let idx = currentIndex - 1;
    if (idx < 0) idx = images.length - 1;
    updateGallery(idx);
  });
  
  nextBtn.addEventListener('click', () => {
    stopSlideshow();
    const idx = (currentIndex + 1) % images.length;
    updateGallery(idx);
  });
  
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('mouseenter', () => AudioEngine.playHover());
    thumb.addEventListener('click', () => {
      stopSlideshow();
      updateGallery(idx);
    });
  });
  
  // 3D Tilt Effect on hover
  galleryFrame.addEventListener('mousemove', (e) => {
    const rect = galleryFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xRotation = -((y - rect.height / 2) / (rect.height / 2)) * 10;
    const yRotation = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    
    galleryFrame.style.transform = `perspective(800px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
  });
  
  galleryFrame.addEventListener('mouseleave', () => {
    galleryFrame.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
}

const SpeechEngine = new JarvisSpeechEngine();
