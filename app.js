const APP_KEY = "accessoryCoach.v1";

const DAYS = [
  {
    id: "wl1",
    label: "WL Day 1",
    classIncludes: "Main snatch/C&J/complex, opposite pull holds or squat, lift-specific accessory",
    focus: "Single-leg + ankle + trunk",
    time: "20-30 min",
    priority: "High",
    benefit: "Leg strength and ankle range without more heavy squats.",
    skip: "Hard squat day, heavy leg WOD, ankle/hip flare.",
    exercises: [
      { name: "Front-foot elevated split squat or Bulgarian split squat", dose: "3 x 8 each leg", load: "Moderate dumbbells. Add reps first, then load.", cues: ["Knee travels forward", "Full foot pressure", "Controlled ankle range", "Upright torso"] },
      { name: "Tibialis raise", dose: "3 x 15-20", load: "Bodyweight or light load", cues: ["Slow reps", "Toes up hard", "Stop if shin pain builds"] },
      { name: "Bent-knee soleus raise", dose: "3 x 12-15 each side", load: "Pause top and bottom", cues: ["Bent knee", "Own the range", "Prioritise your previously injured side"] },
      { name: "Suitcase carry or Pallof press", dose: "3-4 sets", load: "30 m carry each side or 3 x 10 Pallof each side", cues: ["Ribs down", "Pelvis stacked", "Steady breathing"] }
    ]
  },
  {
    id: "cf1",
    label: "CF Day 1",
    classIncludes: "Lift plus WOD",
    focus: "Gymnastics pulling + double-unders",
    time: "20-30 min",
    priority: "High",
    benefit: "Skill practice while still fresh enough to learn.",
    skip: "WOD had lots of pull-ups, toes-to-bar, rope climbs, or hands are torn.",
    exercises: [
      { name: "Beat swings", dose: "3 x 8-10", load: "Clean rhythm only", cues: ["Hollow to arch", "Active shoulders", "No huge uncontrolled swing"] },
      { name: "Kipping pull-up or chest-to-bar EMOM", dose: "Every 90 sec x 8", load: "3-6 clean reps", cues: ["Small perfect sets", "Stop before form breaks", "Quality over volume"] },
      { name: "Box, banded, or jumping bar muscle-up", dose: "5 x 2-3", load: "Smooth turnover; no failed reps", cues: ["Hips rise", "Pull to low ribs", "Fast sit-up over the bar", "No chicken wing"] },
      { name: "Double-under practice", dose: "5-8 min", load: "EMOM 6 x 10-20 or clean small sets", cues: ["Wrists not arms", "Relaxed breathing", "Stop before frantic reps"] }
    ]
  },
  {
    id: "wl2",
    label: "WL Day 2",
    classIncludes: "Main lift/complex, opposite 3-position pull holds, lift-specific accessory",
    focus: "Overhead stability + shoulder support",
    time: "15-25 min",
    priority: "Medium",
    benefit: "Better lockout and jerk/snatch receiving positions.",
    skip: "Main class had heavy jerk, snatch balance, or overhead accessory; make it mobility only.",
    exercises: [
      { name: "Jerk footwork", dose: "3-5 min", load: "No bar or empty bar", cues: ["Fast feet", "Stable split", "Recover front foot then back foot", "Do not rush"] },
      { name: "Press in split", dose: "3 x 5 each side", load: "Empty bar or light", cues: ["Ribs down", "Bar stacked over mid-foot", "Back knee soft"] },
      { name: "Overhead hold", dose: "3 x 20-30 sec", load: "35-45 kg only if stacked", cues: ["Locked elbows", "Active shoulders", "Ribs down", "No lower-back arch"] },
      { name: "Active hang or scap pull-up", dose: "3 x 20 sec or 3 x 8", load: "Bodyweight", cues: ["Long spine", "Active shoulders", "No pain"] },
      { name: "Prone Y-T-W", dose: "2 x 6 each position", load: "Bodyweight or very light plates", cues: ["Slow and controlled", "Do not shrug", "Keep it low fatigue"] }
    ]
  },
  {
    id: "cf2",
    label: "CF Day 2",
    classIncludes: "Lift plus WOD",
    focus: "Heavy-but-repeatable capacity or recovery skill",
    time: "10-25 min",
    priority: "Optional",
    benefit: "More capacity under load without overreaching.",
    skip: "WOD had heavy barbell, hard leg volume, or you feel red/yellow.",
    exercises: [
      { name: "Snatch EMOM singles", dose: "EMOM 8-10 x 1", load: "27.5-32.5 kg. No misses.", cues: ["Full extension", "Fast under", "Stable overhead", "Stop if timing gets messy"] },
      { name: "Clean and jerk EMOM singles", dose: "EMOM 8-10 x 1", load: "40-47.5 kg. No misses.", cues: ["Smooth clean", "Calm front rack", "Straight dip", "Fast lockout"] },
      { name: "Controlled C&J cycling", dose: "Every 90 sec x 6-8", load: "3 reps at 35-42.5 kg", cues: ["Repeatable, not sprinted", "Planned breaks", "Same setup every rep"] },
      { name: "Recovery skill option", dose: "5-10 min", load: "Double-unders, toes-to-bar, or wall-walk practice", cues: ["Choose one skill only", "Keep it clean", "Leave feeling better"] }
    ]
  },
  {
    id: "wl3",
    label: "WL Day 3",
    classIncludes: "Main lift/complex plus squat or lift accessory",
    focus: "Posterior chain + carries + core",
    time: "20-30 min",
    priority: "High",
    benefit: "Stronger hinge and trunk without more Olympic-pull volume.",
    skip: "Class had heavy pulls/deadlifts or low back is fatigued.",
    exercises: [
      { name: "Romanian deadlift", dose: "3 x 6-8", load: "Moderate; leave 2-3 reps in reserve", cues: ["Hips back", "Lats tight", "Bar close", "Hamstrings loaded"] },
      { name: "Back extension or hip extension", dose: "3 x 10-12", load: "Bodyweight first; add plate if easy", cues: ["Glutes and hamstrings", "Controlled reps", "Do not rush"] },
      { name: "Single-leg RDL", dose: "3 x 8 each side", load: "Dumbbell or kettlebell", cues: ["Stable foot", "Square hips", "Slow lower"] },
      { name: "Hamstring curl", dose: "3 x 10-12", load: "Machine, band, or sliders", cues: ["Slow eccentric", "No cramping", "Full control"] },
      { name: "Loaded carry", dose: "4 x 30-40 m", load: "Farmer, front rack, or sandbag", cues: ["Tall posture", "Steady breath", "Do not lean"] },
      { name: "Core circuit", dose: "3 rounds", load: "Hollow hold 20-30 sec, side plank 30 sec/side, dead bug 8/side", cues: ["Brace without rib flare", "Quality breathing", "No back pain"] }
    ]
  }
];

const CONDITIONS = [
  { id: "heavySquat", label: "Heavy back/front squat", detail: "Class already gave the heavy squat stimulus." },
  { id: "hardLegWod", label: "Hard leg WOD", detail: "Leg fatigue could affect lifting quality later this week." },
  { id: "pullHolds", label: "3-position pull holds", detail: "Pull volume is already covered." },
  { id: "heavyDeadlift", label: "Heavy deadlifts or pulls", detail: "Protect low back and recovery." },
  { id: "heavyOverhead", label: "Heavy snatch/OHS/overhead", detail: "Overhead volume is already high." },
  { id: "jerkAccessory", label: "Jerk dips or heavy jerk accessory", detail: "Quality beats more messy reps." },
  { id: "highPulling", label: "Lots of pull-ups/TTB/rope climbs", detail: "Hands, elbows, and shoulders need recovery." },
  { id: "leaking", label: "Double-unders caused leaking", detail: "Use small relaxed sets and breathing focus." },
  { id: "ankleFlare", label: "Ankle or hip flare", detail: "Keep work pain-free and rehab-focused." }
];

const MOBILITY = [
  { area: "Ankle", exercise: "Knee-to-wall rocks", dose: "10 each side", purpose: "Dorsiflexion for squat, clean, and snatch", notes: "Prioritise the previously injured side. No pinching pain." },
  { area: "Ankle", exercise: "Weighted ankle rocks", dose: "10 each side", purpose: "Loaded ankle range", notes: "Use gentle plate or kettlebell pressure." },
  { area: "Ankle", exercise: "Bent-knee calf/soleus stretch", dose: "45 sec each side", purpose: "Squat-specific ankle mobility", notes: "More relevant to squats than straight-knee calf stretching." },
  { area: "Ankle", exercise: "Deep squat hold", dose: "60 sec", purpose: "Bottom position comfort", notes: "Hold a rig if needed; breathe and settle." },
  { area: "Shoulder", exercise: "Banded lat stretch", dose: "45 sec each side", purpose: "Overhead position", notes: "Do not crank on the joint." },
  { area: "Shoulder", exercise: "Pec doorway stretch", dose: "45 sec each side", purpose: "Front shoulder/chest opening", notes: "Useful before jerks, snatches, and wall walks." },
  { area: "Shoulder", exercise: "Wall slides", dose: "10 reps", purpose: "Scapular control", notes: "Ribs down; do not arch to fake range." },
  { area: "Shoulder", exercise: "PVC pass-throughs or empty-bar OHS hold", dose: "10 reps or 30-45 sec", purpose: "Snatch/OHS position", notes: "Choose the cleanest option that day." }
];

const PROGRESS_TESTS = [
  { id: "backsquat", metric: "Back squat", current: "85 kg", goal: "100 kg+", notes: "Track best clean triple too." },
  { id: "frontsquat", metric: "Front squat", current: "70-75 kg", goal: "85-90 kg", notes: "Useful for clean progress." },
  { id: "snatch", metric: "Snatch", current: "40 kg", goal: "50 kg+", notes: "Only test when mobility and timing are sharp." },
  { id: "cleanjerk", metric: "Clean and jerk", current: "60 kg", goal: "70 kg+", notes: "Jerk quality is the limiter." },
  { id: "ohs", metric: "Overhead squat", current: "55 kg", goal: "60 kg+", notes: "Shows overhead confidence and snatch receiving strength." },
  { id: "strictpull", metric: "Strict pull-up", current: "+15 kg", goal: "Maintain/increase", notes: "Do not overdo pulling volume." },
  { id: "du", metric: "Double-unders", current: "10-12 clean reps", goal: "50+ clean reps", notes: "Stop before repeated failure in practice." },
  { id: "bmu", metric: "Bar muscle-up", current: "Box progression", goal: "Full BMU", notes: "Prioritise turnover quality." },
  { id: "grace", metric: "Grace", current: "6:31 RX", goal: "Sub-6 then faster", notes: "Improves as your C&J max rises." },
  { id: "heavywod", metric: "Heavy WOD capacity", current: "Light loads feel fast; heavy loads limit you", goal: "Heavy loads feel moderate", notes: "Main purpose of the accessory plan." }
];

const DEFAULT_STATE = {
  selectedWeek: 1,
  selectedDay: "wl1",
  energy: "Green",
  conditions: {},
  logs: {},
  tests: {},
  mobilityLog: {},
  activeTab: "today",
  aiCoach: {
    workoutText: "",
    trainingDay: "unknown",
    readiness: "Green",
    painFlags: { ankle: false, hip: false, shoulder: false, back: false, hands: false, leaking: false },
    userNotes: "",
    result: null
  }
};

let state = loadState();
let installPrompt = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(APP_KEY));
    return {
      ...DEFAULT_STATE,
      ...saved,
      conditions: { ...DEFAULT_STATE.conditions, ...(saved?.conditions || {}) },
      aiCoach: {
        ...DEFAULT_STATE.aiCoach,
        ...(saved?.aiCoach || {}),
        painFlags: { ...DEFAULT_STATE.aiCoach.painFlags, ...(saved?.aiCoach?.painFlags || {}) }
      }
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function saveState() {
  localStorage.setItem(APP_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function dayById(id) {
  return DAYS.find(day => day.id === id) || DAYS[0];
}

function logKey(week, dayId) {
  return `${week}-${dayId}`;
}

function getLog(week, dayId) {
  const key = logKey(week, dayId);
  if (!state.logs[key]) {
    state.logs[key] = {
      week,
      dayId,
      status: "No",
      energy: "",
      pain: "No",
      squatExposure: "No",
      pullHoldExposure: "No",
      accessory: dayById(dayId).focus,
      timeCap: dayById(dayId).time,
      load: "",
      notes: ""
    };
  }
  return state.logs[key];
}

function priorityClass(priority) {
  const p = priority.toLowerCase();
  if (p.includes("high")) return "high";
  if (p.includes("medium")) return "medium";
  return "optional";
}

function getRecommendation(day, energy, conditions) {
  const flags = Object.fromEntries(Object.entries(conditions).map(([key, val]) => [key, Boolean(val)]));
  let level = energy.toLowerCase();
  let title = day.focus;
  let summary = "Do the planned accessory work. Keep it clean and stop with 1-3 reps in reserve.";
  let instructions = [...day.exercises];
  let badges = [day.time, day.priority];
  let warnings = [];

  if (energy === "Yellow") {
    level = "yellow";
    summary = "Shorten the session. Do the first 2-3 pieces only, then mobility. No optional heavy capacity.";
    instructions = day.exercises.slice(0, Math.min(3, day.exercises.length));
    badges.push("Reduced volume");
  }

  if (energy === "Red") {
    level = "red";
    title = "Mobility only";
    summary = "Skip accessory work today. Do the daily ankle and shoulder routine, then leave recovery in the bank.";
    instructions = mobilityAsExercises();
    badges = ["8-20 min", "Recovery"];
  }

  if (flags.ankleFlare) {
    level = "red";
    title = "Ankle/hip flare protocol";
    summary = "Keep everything pain-free. No high-volume jumping, deficit pulls, heavy split squats, or deep loaded squat volume.";
    instructions = [
      { name: "Controlled ankle mobility", dose: "5-7 min", load: "Gentle range only", cues: ["No pinching", "Breathe", "Stay pain-free"] },
      { name: "Calf/soleus work", dose: "2-3 x 12-15", load: "Light, controlled", cues: ["Slow tempo", "Even pressure", "Stop if pain increases"] },
      { name: "Glute med or stability work", dose: "2-3 sets", load: "Banded walks, clams, or side plank", cues: ["Controlled", "No hip pinch", "Low fatigue"] },
      { name: "Light goblet squat", dose: "2 x 8 if pain-free", load: "Very light", cues: ["Use support", "No forced depth", "Quality only"] }
    ];
    badges = ["10-15 min", "Rehab focus"];
  }

  if (flags.heavySquat && day.id === "wl1" && energy !== "Red" && !flags.ankleFlare) {
    level = energy === "Yellow" ? "yellow" : "green";
    title = "Light single-leg + ankle only";
    summary = "Class already covered heavy squatting. Do a small support dose, not another leg session.";
    instructions = [
      { name: "Split squat", dose: "2 x 8 each leg", load: "Bodyweight or light dumbbells", cues: ["Smooth reps", "No grinding", "Pain-free range"] },
      { name: "Tibialis raise", dose: "2 x 20", load: "Bodyweight", cues: ["Slow", "Toes up hard"] },
      { name: "Ankle mobility", dose: "5 min", load: "Gentle", cues: ["Knee-to-wall", "Weighted ankle rocks", "Deep squat breathing"] }
    ];
    badges = ["10-18 min", "Modified"];
  }

  if (flags.hardLegWod && (day.id === "wl1" || day.id === "cf2") && energy !== "Red" && !flags.ankleFlare) {
    level = "yellow";
    title = "Core + mobility";
    summary = "Leg fatigue is already high. Do trunk and position work only.";
    instructions = [
      { name: "Pallof press", dose: "3 x 10 each side", load: "Moderate band/cable", cues: ["Ribs down", "No twisting", "Steady breath"] },
      { name: "Dead bug", dose: "3 x 8 each side", load: "Bodyweight", cues: ["Slow", "Low back quiet", "Exhale"] },
      { name: "Daily mobility routine", dose: "8 min", load: "Ankle + shoulder", cues: ["Consistency over intensity"] }
    ];
    badges = ["12-20 min", "Recovery bias"];
  }

  if (flags.highPulling && day.id === "cf1" && energy !== "Red") {
    level = "yellow";
    title = "Double-unders + shoulder mobility";
    summary = "Skip strict pulling, BMU negatives, and high-volume kipping. Hands, elbows, and shoulders need recovery.";
    instructions = [
      { name: "Double-under clean sets", dose: "5 min", load: "Small relaxed sets", cues: ["Stop before failure", "Wrists not arms", "Relaxed breathing"] },
      { name: "Banded lat stretch", dose: "45 sec each side", load: "Gentle", cues: ["No cranking"] },
      { name: "Wall slides", dose: "2 x 10", load: "Bodyweight", cues: ["Ribs down", "Smooth scap movement"] }
    ];
    badges = ["10-15 min", "Modified"];
  }

  if ((flags.heavyOverhead || flags.jerkAccessory) && day.id === "wl2" && energy !== "Red") {
    level = "yellow";
    title = "Light footwork + shoulder support";
    summary = "Class already gave heavy overhead or jerk-specific volume. Add quality, not more strain.";
    instructions = [
      { name: "Jerk footwork", dose: "3-5 min", load: "No bar or empty bar", cues: ["Fast feet", "Stable split", "Recover with control"] },
      { name: "Press in split", dose: "2 x 5 each side", load: "Empty bar only", cues: ["Ribs down", "Bar stacked", "No grind"] },
      { name: "Scap and shoulder mobility", dose: "5-8 min", load: "Active hang, wall slides, lat stretch", cues: ["Low fatigue", "No pinching"] }
    ];
    badges = ["10-18 min", "Modified"];
  }

  if ((flags.heavyDeadlift || flags.pullHolds) && day.id === "wl3" && energy !== "Red" && !flags.ankleFlare) {
    if (flags.heavyDeadlift) {
      level = "yellow";
      title = "Carry + core only";
      summary = "Skip RDLs and tempo/deficit deadlifts. Protect your low back and recovery.";
      instructions = [
        { name: "Suitcase carry", dose: "3 x 30 m each side", load: "Moderate", cues: ["Tall posture", "No leaning", "Steady breath"] },
        { name: "Pallof press", dose: "3 x 10 each side", load: "Moderate", cues: ["Ribs down", "Pelvis stacked"] },
        { name: "Dead bug", dose: "3 x 8 each side", load: "Bodyweight", cues: ["Slow", "Exhale", "No rib flare"] }
      ];
      badges = ["12-20 min", "Modified"];
    } else {
      warnings.push("Opposite-lift pull holds already covered Olympic-pull volume. Keep posterior-chain work moderate; do not add extra snatch/clean pulls.");
    }
  }

  if (day.id === "cf2" && (flags.heavyDeadlift || flags.heavyOverhead || flags.jerkAccessory || flags.heavySquat || flags.hardLegWod || energy !== "Green") && !flags.ankleFlare) {
    level = energy === "Red" ? "red" : "yellow";
    title = energy === "Red" ? title : "Recovery skill instead of heavy EMOM";
    summary = energy === "Red" ? summary : "Skip heavy-but-repeatable barbell capacity today. Pick one easy skill or mobility piece.";
    instructions = energy === "Red" ? instructions : [
      { name: "Double-under practice", dose: "5 min", load: "Small clean sets", cues: ["Relax", "Stop before failure", "Breathe"] },
      { name: "Toes-to-bar technique", dose: "5 x 5-8 if hands/shoulders are fresh", load: "Easy sets", cues: ["Smooth kip", "No grip failure"] },
      { name: "Daily mobility routine", dose: "8 min", load: "Ankle + shoulder", cues: ["Leave feeling better"] }
    ];
    badges = energy === "Red" ? badges : ["10-18 min", "Recovery skill"];
  }

  if (flags.leaking && day.id.includes("cf") && energy !== "Red") {
    warnings.push("For double-unders today: use small relaxed sets, breathe, and stop before frantic reps. Consider pelvic floor physio if leaking persists.");
  }

  return { level, title, summary, instructions, badges, warnings };
}

function mobilityAsExercises() {
  return MOBILITY.map(item => ({ name: `${item.area}: ${item.exercise}`, dose: item.dose, load: item.purpose, cues: [item.notes] }));
}

function computeStats() {
  const logs = Object.values(state.logs);
  const planned = 40;
  const done = logs.filter(l => l.status === "Done").length;
  const partial = logs.filter(l => l.status === "Partial").length;
  const completion = Math.round(((done + partial * 0.5) / planned) * 100);
  const green = logs.filter(l => l.energy === "Green").length;
  const yellowRed = logs.filter(l => l.energy === "Yellow" || l.energy === "Red").length;
  const pain = logs.filter(l => l.pain === "Mild" || l.pain === "Yes").length;
  const squat = logs.filter(l => l.squatExposure === "Yes").length;
  const pulls = logs.filter(l => l.pullHoldExposure === "Yes").length;
  return { planned, done, partial, completion, green, yellowRed, pain, squat, pulls };
}

function renderHero() {
  const stats = computeStats();
  document.getElementById("heroStats").innerHTML = [
    [stats.completion + "%", "completion"],
    [stats.done + "/40", "done"],
    [stats.pain, "pain flags"]
  ].map(([value, label]) => `<div class="stat-pill"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("");
}

function renderToday() {
  const day = dayById(state.selectedDay);
  const currentLog = getLog(state.selectedWeek, day.id);
  const rec = getRecommendation(day, state.energy, state.conditions);
  const conditionsHtml = CONDITIONS.map(condition => `
    <label class="checkbox-row">
      <input type="checkbox" data-condition="${condition.id}" ${state.conditions[condition.id] ? "checked" : ""} />
      <span>${escapeHtml(condition.label)}<small>${escapeHtml(condition.detail)}</small></span>
    </label>
  `).join("");

  document.getElementById("today").innerHTML = `
    <div class="card">
      <h2>Today's accessory decision</h2>
      <p>Choose the week/day, set your readiness, then tick what class already included. The recommendation will update automatically.</p>
      <div class="controls">
        <label class="field">Week
          <select id="weekSelect">${[1,2,3,4,5,6,7,8].map(w => `<option value="${w}" ${w === state.selectedWeek ? "selected" : ""}>Week ${w}</option>`).join("")}</select>
        </label>
        <label class="field">Training day
          <select id="daySelect">${DAYS.map(d => `<option value="${d.id}" ${d.id === day.id ? "selected" : ""}>${escapeHtml(d.label)} - ${escapeHtml(d.focus)}</option>`).join("")}</select>
        </label>
        <label class="field">Session status
          <select id="todayStatus">
            ${["No", "Done", "Partial", "Skipped"].map(s => `<option value="${s}" ${currentLog.status === s ? "selected" : ""}>${s}</option>`).join("")}
          </select>
        </label>
      </div>
      <label class="field">Readiness
        <div class="segmented" id="energyButtons">
          ${["Green", "Yellow", "Red"].map(e => `<button type="button" data-energy="${e}" class="${state.energy === e ? "active" : ""}">${e}</button>`).join("")}
        </div>
      </label>
    </div>

    <div class="card">
      <h3>What did class already include?</h3>
      <div class="checkbox-list">${conditionsHtml}</div>
    </div>

    <div class="card">
      <div class="recommendation ${rec.level}">
        <div>
          <p class="kicker">Recommended today</p>
          <h2>${escapeHtml(rec.title)}</h2>
          <p>${escapeHtml(rec.summary)}</p>
        </div>
        <div class="badges">${rec.badges.map(b => `<span class="badge ${priorityClass(b)}">${escapeHtml(b)}</span>`).join("")}</div>
        ${rec.warnings.length ? `<div class="info-block"><strong>Notes</strong><p>${rec.warnings.map(escapeHtml).join("<br>")}</p></div>` : ""}
      </div>
      <div class="exercise-list">
        ${rec.instructions.map((exercise, index) => exerciseCard(exercise, index, currentLog)).join("")}
      </div>
      <hr class="soft" />
      <div class="grid two">
        <label class="field">Ankle/hip pain today
          <select id="todayPain">${["No", "Mild", "Yes"].map(p => `<option value="${p}" ${currentLog.pain === p ? "selected" : ""}>${p}</option>`).join("")}</select>
        </label>
        <label class="field">Load / skill result
          <input id="todayLoad" value="${escapeHtml(currentLog.load)}" placeholder="e.g. C&J EMOM 45kg no misses" />
        </label>
      </div>
      <label class="field" style="margin-top:12px;">Notes
        <textarea id="todayNotes" placeholder="How did it feel? What did your coach cue?">${escapeHtml(currentLog.notes)}</textarea>
      </label>
      <div class="actions-row">
        <button class="primary-button" id="markDoneButton">Mark done</button>
        <button class="secondary-button" id="saveLogButton">Save log</button>
        <button class="ghost-button" id="clearConditionsButton">Clear class ticks</button>
      </div>
    </div>
  `;

  bindTodayEvents();
}

function exerciseCard(exercise, index, log) {
  const key = `ex${index}`;
  const checked = log.completedExercises?.[key] ? "checked" : "";
  return `
    <div class="exercise-card">
      <div class="exercise-head">
        <div>
          <h4>${escapeHtml(exercise.name)}</h4>
          <p><span class="dose">${escapeHtml(exercise.dose)}</span>${exercise.load ? ` - ${escapeHtml(exercise.load)}` : ""}</p>
        </div>
        <input type="checkbox" data-exercise="${key}" ${checked} aria-label="Mark ${escapeHtml(exercise.name)} complete" />
      </div>
      ${exercise.cues?.length ? `<ul class="cue-list">${exercise.cues.map(cue => `<li>${escapeHtml(cue)}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function bindTodayEvents() {
  document.getElementById("weekSelect").addEventListener("change", event => {
    state.selectedWeek = Number(event.target.value);
    saveState();
    renderAll();
  });
  document.getElementById("daySelect").addEventListener("change", event => {
    state.selectedDay = event.target.value;
    saveState();
    renderAll();
  });
  document.querySelectorAll("[data-energy]").forEach(button => {
    button.addEventListener("click", () => {
      state.energy = button.dataset.energy;
      saveState();
      renderAll();
    });
  });
  document.querySelectorAll("[data-condition]").forEach(box => {
    box.addEventListener("change", () => {
      state.conditions[box.dataset.condition] = box.checked;
      saveState();
      renderAll();
    });
  });
  document.querySelectorAll("[data-exercise]").forEach(box => {
    box.addEventListener("change", () => {
      const log = getLog(state.selectedWeek, state.selectedDay);
      log.completedExercises = log.completedExercises || {};
      log.completedExercises[box.dataset.exercise] = box.checked;
      saveState();
      showToast("Exercise tick saved");
      renderHero();
    });
  });
  document.getElementById("clearConditionsButton").addEventListener("click", () => {
    state.conditions = {};
    saveState();
    renderAll();
  });
  document.getElementById("saveLogButton").addEventListener("click", () => saveTodayLog(false));
  document.getElementById("markDoneButton").addEventListener("click", () => saveTodayLog(true));
}

function saveTodayLog(markDone) {
  const day = dayById(state.selectedDay);
  const log = getLog(state.selectedWeek, day.id);
  const rec = getRecommendation(day, state.energy, state.conditions);
  log.status = markDone ? "Done" : document.getElementById("todayStatus").value;
  log.energy = state.energy;
  log.pain = document.getElementById("todayPain").value;
  log.load = document.getElementById("todayLoad").value.trim();
  log.notes = document.getElementById("todayNotes").value.trim();
  log.squatExposure = state.conditions.heavySquat ? "Yes" : "No";
  log.pullHoldExposure = state.conditions.pullHolds ? "Yes" : "No";
  log.accessory = rec.title;
  log.timeCap = rec.badges[0] || day.time;
  log.savedAt = new Date().toISOString();
  saveState();
  showToast(markDone ? "Session marked done" : "Log saved");
  renderAll();
}

function renderProgram() {
  document.getElementById("program").innerHTML = `
    <div class="card">
      <h2>Weekly plan</h2>
      <p>The main rule: your gym program owns the barbell strength and Olympic-lift volume. These accessories fill gaps without duplicating stress.</p>
    </div>
    ${DAYS.map(day => `
      <details class="day-card" ${day.id === state.selectedDay ? "open" : ""}>
        <summary>
          <div class="day-title">
            <div>
              <h3>${escapeHtml(day.label)} - ${escapeHtml(day.focus)}</h3>
              <p>${escapeHtml(day.time)} - ${escapeHtml(day.benefit)}</p>
            </div>
            <span class="chev">+</span>
          </div>
        </summary>
        <div class="details-grid">
          <div class="info-block"><strong>Class already includes</strong><span>${escapeHtml(day.classIncludes)}</span></div>
          <div class="info-block"><strong>Skip or modify if</strong><span>${escapeHtml(day.skip)}</span></div>
          <div class="info-block"><strong>Priority</strong><span>${escapeHtml(day.priority)}</span></div>
          <div class="info-block"><strong>Main benefit</strong><span>${escapeHtml(day.benefit)}</span></div>
        </div>
        <div class="exercise-list">${day.exercises.map((exercise, index) => exerciseCard(exercise, index, {})).join("")}</div>
      </details>
    `).join("")}
    <div class="card compact">
      <h3>Decision rules</h3>
      <div class="exercise-list">
        ${CONDITIONS.map(c => `<div class="info-block"><strong>${escapeHtml(c.label)}</strong><p>${escapeHtml(c.detail)}</p></div>`).join("")}
      </div>
    </div>
  `;
}

function renderMobility() {
  const today = new Date().toISOString().slice(0, 10);
  const doneToday = Boolean(state.mobilityLog[today]);
  document.getElementById("mobility").innerHTML = `
    <div class="card">
      <h2>Daily 8-minute mobility</h2>
      <p>This is the non-negotiable part: ankle and shoulder consistency should improve your squat receiving positions, snatch, and jerk lockout.</p>
      <div class="actions-row">
        <button class="${doneToday ? "secondary-button" : "primary-button"}" id="mobilityDoneButton">${doneToday ? "Mobility done today" : "Mark mobility done"}</button>
      </div>
    </div>
    <div class="grid two">
      ${MOBILITY.map(item => `
        <div class="exercise-card">
          <div class="badges"><span class="badge">${escapeHtml(item.area)}</span><span class="badge">Daily</span></div>
          <h3>${escapeHtml(item.exercise)}</h3>
          <p><span class="dose">${escapeHtml(item.dose)}</span> - ${escapeHtml(item.purpose)}</p>
          <ul class="cue-list"><li>${escapeHtml(item.notes)}</li></ul>
        </div>
      `).join("")}
    </div>
    <div class="card">
      <h3>Flare-up version</h3>
      <p>Controlled mobility + calf/soleus + glute med for 10-15 minutes. No deficit pulls, high-volume jumping, heavy split squats, or deep loaded squat volume.</p>
      <h3>Double-under pressure note</h3>
      <p>Use small sets and relaxed breathing. Stop before frantic reps. Consider pelvic floor physio if leaking persists.</p>
    </div>
  `;
  document.getElementById("mobilityDoneButton").addEventListener("click", () => {
    state.mobilityLog[today] = !state.mobilityLog[today];
    saveState();
    showToast(state.mobilityLog[today] ? "Mobility marked done" : "Mobility unchecked");
    renderMobility();
  });
}

function renderTracker() {
  const stats = computeStats();
  const selectedWeek = Number(state.trackerWeek || state.selectedWeek || 1);
  const weekRows = DAYS.map(day => getLog(selectedWeek, day.id));
  document.getElementById("tracker").innerHTML = `
    <div class="card">
      <h2>8-week tracker</h2>
      <p>Track what class covered, what accessory you chose, and how you felt. This matters more than chasing random extra volume.</p>
      <div class="summary-grid">
        <div class="summary-card"><strong>${stats.done}/40</strong><span>done sessions</span></div>
        <div class="summary-card"><strong>${stats.completion}%</strong><span>completion</span><div class="progress-bar"><span style="width:${Math.min(stats.completion, 100)}%"></span></div></div>
        <div class="summary-card"><strong>${stats.green}</strong><span>green days</span></div>
        <div class="summary-card"><strong>${stats.pain}</strong><span>pain flags</span></div>
      </div>
      <div class="controls">
        <label class="field">Week
          <select id="trackerWeekSelect">${[1,2,3,4,5,6,7,8].map(w => `<option value="${w}" ${w === selectedWeek ? "selected" : ""}>Week ${w}</option>`).join("")}</select>
        </label>
      </div>
    </div>
    <div class="tracker-list">
      ${weekRows.map(log => trackerRow(log)).join("")}
    </div>
    <div class="card compact">
      <h3>Data controls</h3>
      <div class="actions-row">
        <button class="secondary-button" id="exportButton">Export my data</button>
        <button class="ghost-button" id="resetButton">Reset app data</button>
      </div>
      <p class="footer-note">Your logs are stored in this browser on this device. Export regularly if you want a backup.</p>
    </div>
  `;
  bindTrackerEvents(selectedWeek);
}

function trackerRow(log) {
  const day = dayById(log.dayId);
  return `
    <div class="tracker-row" data-row-key="${escapeHtml(logKey(log.week, log.dayId))}">
      <div class="row-top">
        <div><strong>${escapeHtml(day.label)}</strong><small>${escapeHtml(log.accessory || day.focus)} - ${escapeHtml(log.timeCap || day.time)}</small></div>
        <span class="badge ${log.status === "Done" ? "high" : log.status === "Partial" ? "medium" : ""}">${escapeHtml(log.status)}</span>
      </div>
      <div class="row-fields">
        <label class="mini-field">Status
          <select data-log-field="status">${["No", "Done", "Partial", "Skipped"].map(s => `<option value="${s}" ${log.status === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Energy
          <select data-log-field="energy">${["", "Green", "Yellow", "Red"].map(s => `<option value="${s}" ${log.energy === s ? "selected" : ""}>${s || "-"}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Pain
          <select data-log-field="pain">${["No", "Mild", "Yes"].map(s => `<option value="${s}" ${log.pain === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Squat exp.
          <select data-log-field="squatExposure">${["No", "Yes"].map(s => `<option value="${s}" ${log.squatExposure === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
      </div>
      <div class="row-fields full" style="margin-top:10px;">
        <label class="mini-field">Pull holds
          <select data-log-field="pullHoldExposure">${["No", "Yes"].map(s => `<option value="${s}" ${log.pullHoldExposure === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Load / skill result
          <input data-log-field="load" value="${escapeHtml(log.load)}" placeholder="What did you do?" />
        </label>
        <label class="mini-field">Notes
          <input data-log-field="notes" value="${escapeHtml(log.notes)}" placeholder="How did it feel?" />
        </label>
      </div>
    </div>
  `;
}

function bindTrackerEvents(selectedWeek) {
  document.getElementById("trackerWeekSelect").addEventListener("change", event => {
    state.trackerWeek = Number(event.target.value);
    saveState();
    renderTracker();
  });
  document.querySelectorAll("[data-row-key]").forEach(row => {
    const key = row.dataset.rowKey;
    row.querySelectorAll("[data-log-field]").forEach(input => {
      input.addEventListener("change", () => {
        state.logs[key][input.dataset.logField] = input.value;
        state.logs[key].savedAt = new Date().toISOString();
        saveState();
        renderHero();
      });
      input.addEventListener("input", () => {
        if (input.tagName === "INPUT") {
          state.logs[key][input.dataset.logField] = input.value;
          state.logs[key].savedAt = new Date().toISOString();
          saveState();
        }
      });
    });
  });
  document.getElementById("exportButton").addEventListener("click", exportData);
  document.getElementById("resetButton").addEventListener("click", () => {
    if (confirm("Reset all saved logs and progress tests on this device?")) {
      localStorage.removeItem(APP_KEY);
      state = loadState();
      showToast("App data reset");
      renderAll();
    }
  });
}

function renderTests() {
  document.getElementById("tests").innerHTML = `
    <div class="card">
      <h2>Progress tests</h2>
      <p>Retest only when your coach or programming makes it sensible. Track clean, repeatable progress rather than maxing constantly.</p>
    </div>
    <div class="test-list">
      ${PROGRESS_TESTS.map(test => progressRow(test)).join("")}
    </div>
  `;
  document.querySelectorAll("[data-test-id]").forEach(row => {
    const id = row.dataset.testId;
    row.querySelectorAll("[data-test-field]").forEach(input => {
      input.addEventListener("input", () => {
        state.tests[id] = state.tests[id] || {};
        state.tests[id][input.dataset.testField] = input.value;
        saveState();
      });
    });
  });
}

function progressRow(test) {
  const saved = state.tests[test.id] || {};
  return `
    <div class="test-row" data-test-id="${escapeHtml(test.id)}">
      <div class="row-top">
        <div><strong>${escapeHtml(test.metric)}</strong><small>Goal: ${escapeHtml(test.goal)}</small></div>
      </div>
      <div class="row-fields full">
        <label class="mini-field">Current / baseline
          <input data-test-field="current" value="${escapeHtml(saved.current ?? test.current)}" />
        </label>
        <label class="mini-field">Week 4
          <input data-test-field="week4" value="${escapeHtml(saved.week4 ?? "")}" placeholder="Optional" />
        </label>
        <label class="mini-field">Week 8
          <input data-test-field="week8" value="${escapeHtml(saved.week8 ?? "")}" placeholder="Optional" />
        </label>
      </div>
      <label class="mini-field" style="margin-top:10px;">Notes
        <input data-test-field="notes" value="${escapeHtml(saved.notes ?? test.notes)}" />
      </label>
    </div>
  `;
}

function bindTabs() {
  document.querySelectorAll(".tabs button").forEach(button => {
    button.onclick = () => {
      state.activeTab = button.dataset.tab;
      saveState();
      updateTabVisibility();
    };
  });
}

function updateTabVisibility() {
  document.querySelectorAll(".tabs button").forEach(button => button.classList.toggle("active", button.dataset.tab === state.activeTab));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === state.activeTab));
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `accessory-coach-data-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Data exported");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// --- AI Coach ---

const AI_RECS_KEY = "accessoryCoach.v1.aiRecommendations";

const AI_PAIN_FLAGS = [
  { id: "ankle", label: "Ankle flare" },
  { id: "hip", label: "Hip flare" },
  { id: "shoulder", label: "Shoulder pain" },
  { id: "back", label: "Back pain" },
  { id: "hands", label: "Hands torn / grip fatigue" },
  { id: "leaking", label: "Leaking during double-unders" }
];

const AI_TRAINING_DAYS = ["WL Day 1", "CF Day 1", "WL Day 2", "CF Day 2", "WL Day 3", "Unknown"];

let aiCoachLoading = false;
let aiCoachError = null;

function loadAiRecs() {
  try {
    return JSON.parse(localStorage.getItem(AI_RECS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveAiRec(entry) {
  const recs = loadAiRecs();
  recs.unshift(entry);
  if (recs.length > 20) recs.pop();
  localStorage.setItem(AI_RECS_KEY, JSON.stringify(recs));
}

function buildWeekSummary() {
  const week = state.selectedWeek || 1;
  const days = DAYS.map(d => getLog(week, d.id));
  const squatExp = days.filter(l => l.squatExposure === "Yes").length;
  const pullExp = days.filter(l => l.pullHoldExposure === "Yes").length;
  const done = days.filter(l => l.status === "Done").length;
  const pain = days.filter(l => l.pain === "Mild" || l.pain === "Yes").length;
  if (!squatExp && !pullExp && !done) return "";
  return `Week ${week}: ${done} sessions done, ${squatExp} squat exposures, ${pullExp} pull-hold exposures, ${pain} sessions with pain.`;
}

async function fileToResizedBase64(file, maxWidth = 1400, quality = 0.75) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = dataUrl;
  });
  const scale = Math.min(1, maxWidth / img.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
  const base64 = canvas.toDataURL(mimeType, quality).split(",")[1];
  return { base64, mimeType };
}

async function fetchAiRecommendation(payload) {
  const response = await fetch("/.netlify/functions/recommend-accessory", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok || !data.ok) {
    throw new Error(data.error || "AI recommendation failed.");
  }
  return data.recommendation;
}

function renderAiResultHtml(result) {
  const detected = result.detected_training || {};
  const session = result.recommended_session || [];
  const mobility = result.mobility || [];
  const skipToday = result.skip_today || [];
  const cautionFlags = result.caution_flags || [];

  const detectionBadges = [
    detected.squat_exposure && "Squat exposure",
    detected.heavy_squat && "Heavy squat",
    detected.pull_holds && `Pull holds (${detected.pull_hold_lift || "unknown"})`,
    detected.heavy_deadlift_or_pulls && "Heavy deadlifts/pulls",
    detected.overhead_volume && "Overhead volume",
    detected.jerk_accessory && "Jerk accessory",
    detected.snatch_accessory && "Snatch accessory",
    detected.gymnastics_pulling && "Gymnastics pulling",
    detected.high_grip_fatigue && "High grip fatigue",
    detected.double_unders_or_jumping && "Double-unders/jumping"
  ].filter(Boolean).map(f => `<span class="badge warning">${escapeHtml(f)}</span>`).join("");

  const sessionHtml = session.map(ex => `
    <div class="exercise-card">
      <div class="exercise-head">
        <div>
          <h4>${escapeHtml(ex.exercise)}</h4>
          <p><span class="dose">${escapeHtml(ex.sets)} × ${escapeHtml(ex.reps_or_time)}</span>${ex.load ? ` — ${escapeHtml(ex.load)}` : ""}</p>
        </div>
      </div>
      ${ex.notes ? `<ul class="cue-list"><li>${escapeHtml(ex.notes)}</li></ul>` : ""}
    </div>
  `).join("");

  const mobilityHtml = mobility.map(ex => `
    <div class="exercise-card">
      <div class="exercise-head">
        <div>
          <h4>${escapeHtml(ex.exercise)}</h4>
          <p><span class="dose">${escapeHtml(ex.dose)}</span></p>
        </div>
      </div>
      ${ex.notes ? `<ul class="cue-list"><li>${escapeHtml(ex.notes)}</li></ul>` : ""}
    </div>
  `).join("");

  const skipHtml = skipToday.length
    ? `<div class="info-block"><strong>Skip today</strong><p>${skipToday.map(s => `• ${escapeHtml(s)}`).join("<br>")}</p></div>`
    : "";

  const cautionHtml = cautionFlags.length
    ? `<div class="info-block"><strong>Caution</strong><p>${cautionFlags.map(f => `• ${escapeHtml(f)}`).join("<br>")}</p></div>`
    : "";

  const recLevel = result.confidence === "high" ? "green" : result.confidence === "low" ? "yellow" : "";

  return `
    <div class="card">
      <div class="recommendation ${recLevel}">
        <div>
          <p class="kicker">AI recommendation${result.confidence ? ` — ${escapeHtml(result.confidence)} confidence` : ""}</p>
          <h2>${escapeHtml(result.accessory_focus || "Accessory session")}</h2>
          <p>${escapeHtml(result.summary || "")}</p>
        </div>
        <div class="badges">${detectionBadges || '<span class="badge">No conflicts detected</span>'}</div>
      </div>

      ${detected.reasoning_summary ? `<div class="info-block" style="margin-top:12px;"><strong>Workout classification</strong><p>${escapeHtml(detected.reasoning_summary)}</p></div>` : ""}

      ${skipHtml}

      ${session.length ? `<h3 style="margin-top:16px;">Accessory session</h3><div class="exercise-list">${sessionHtml}</div>` : ""}

      ${mobility.length ? `<h3 style="margin-top:16px;">Mobility</h3><div class="exercise-list">${mobilityHtml}</div>` : ""}

      ${result.reason ? `<div class="info-block" style="margin-top:12px;"><strong>Reason</strong><p>${escapeHtml(result.reason)}</p></div>` : ""}

      ${cautionHtml}

      ${result.readiness_adjustment ? `<div class="info-block"><strong>Readiness note</strong><p>${escapeHtml(result.readiness_adjustment)}</p></div>` : ""}

      <div class="actions-row" style="margin-top:16px;">
        <button class="primary-button" id="aiSaveBtn">Save to tracker</button>
      </div>
    </div>
  `;
}

function renderAiHistoryHtml() {
  const recs = loadAiRecs();
  if (!recs.length) return "";
  const rowsHtml = recs.slice(0, 5).map(rec => {
    const r = rec.recommendation || {};
    const date = rec.createdAt ? new Date(rec.createdAt).toLocaleDateString() : "Unknown date";
    return `
      <div class="tracker-row">
        <div class="row-top">
          <div>
            <strong>${escapeHtml(r.accessory_focus || "AI recommendation")}</strong>
            <small>${escapeHtml(rec.trainingDay || "Unknown day")} — ${escapeHtml(date)}</small>
          </div>
          <span class="badge">${escapeHtml(r.confidence || "-")}</span>
        </div>
        ${r.summary ? `<p style="font-size:14px;margin:4px 0 0;">${escapeHtml(r.summary)}</p>` : ""}
      </div>
    `;
  }).join("");
  return `
    <div class="card">
      <h3>Previous AI recommendations</h3>
      <div class="tracker-list">${rowsHtml}</div>
    </div>
  `;
}

function renderAiCoach() {
  const ac = state.aiCoach || {};
  const painFlags = ac.painFlags || {};
  const readiness = ac.readiness || "Green";

  const painFlagsHtml = AI_PAIN_FLAGS.map(flag => `
    <label class="checkbox-row">
      <input type="checkbox" data-ai-pain="${flag.id}" ${painFlags[flag.id] ? "checked" : ""} />
      <span>${escapeHtml(flag.label)}</span>
    </label>
  `).join("");

  const trainingDayHtml = AI_TRAINING_DAYS.map(day => {
    const val = day === "Unknown" ? "unknown" : day;
    return `<option value="${escapeHtml(val)}" ${(ac.trainingDay || "unknown") === val ? "selected" : ""}>${escapeHtml(day)}</option>`;
  }).join("");

  const loadingHtml = aiCoachLoading ? `
    <div class="card">
      <p class="kicker" style="text-align:center;padding:12px 0;">Reading your workout and checking it against your accessory rules...</p>
    </div>
  ` : "";

  const errorHtml = (!aiCoachLoading && aiCoachError) ? `
    <div class="card">
      <p style="color:var(--red);margin-bottom:4px;">Could not get an AI recommendation. You can still use the normal Today tab rules.</p>
      <p class="kicker">${escapeHtml(aiCoachError)}</p>
    </div>
  ` : "";

  const resultHtml = (!aiCoachLoading && !aiCoachError && ac.result) ? renderAiResultHtml(ac.result) : "";

  document.getElementById("aicoach").innerHTML = `
    <div class="card">
      <h2>AI Coach</h2>
      <p>Paste or upload the exact workout you completed today. The AI will classify what you already trained, apply your accessory rules, and recommend what to do next.</p>
      <p class="kicker">This is not a replacement for your coach or physio. If pain is present, choose the pain flag and keep the session pain-free.</p>

      <label class="field" style="margin-top:16px;">Paste today's workout
        <textarea id="aiWorkoutText" rows="4" placeholder="Example: WL: snatch complex to heavy single, 3-position clean pull holds, snatch balance. WOD: 12 min AMRAP, 10 TTB, 8 DB snatch, 200 m run.">${escapeHtml(ac.workoutText || "")}</textarea>
      </label>

      <label class="field" style="margin-top:12px;">Upload whiteboard/gym-program screenshot (optional)
        <input type="file" id="aiImageUpload" accept="image/png,image/jpeg,image/webp" style="min-height:auto;padding:8px;" />
      </label>

      <label class="field" style="margin-top:12px;">Readiness
        <div class="segmented">
          ${["Green", "Yellow", "Red"].map(r => `<button type="button" data-ai-readiness="${r}" class="${readiness === r ? "active" : ""}">${r}</button>`).join("")}
        </div>
      </label>

      <div style="margin-top:12px;">
        <label class="field" style="display:block;margin-bottom:6px;">Pain flags</label>
        <div class="checkbox-list">${painFlagsHtml}</div>
      </div>

      <label class="field" style="margin-top:12px;">Training day
        <select id="aiTrainingDay">${trainingDayHtml}</select>
      </label>

      <label class="field" style="margin-top:12px;">Notes (optional)
        <textarea id="aiUserNotes" rows="2" placeholder="How did you feel? Anything else to mention?">${escapeHtml(ac.userNotes || "")}</textarea>
      </label>

      <div class="actions-row" style="margin-top:16px;">
        <button class="primary-button" id="aiGetBtn" ${aiCoachLoading ? "disabled" : ""}>${aiCoachLoading ? "Loading..." : "Get today's accessory"}</button>
      </div>
    </div>

    ${loadingHtml}
    ${errorHtml}
    ${resultHtml}
    ${renderAiHistoryHtml()}
  `;

  bindAiCoachEvents();
}

function bindAiCoachEvents() {
  document.querySelectorAll("[data-ai-readiness]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.aiCoach.readiness = btn.dataset.aiReadiness;
      saveState();
      document.querySelectorAll("[data-ai-readiness]").forEach(b =>
        b.classList.toggle("active", b.dataset.aiReadiness === state.aiCoach.readiness)
      );
    });
  });

  document.querySelectorAll("[data-ai-pain]").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      state.aiCoach.painFlags[checkbox.dataset.aiPain] = checkbox.checked;
      saveState();
    });
  });

  const workoutEl = document.getElementById("aiWorkoutText");
  if (workoutEl) {
    workoutEl.addEventListener("input", () => {
      state.aiCoach.workoutText = workoutEl.value;
      saveState();
    });
  }

  const dayEl = document.getElementById("aiTrainingDay");
  if (dayEl) {
    dayEl.addEventListener("change", () => {
      state.aiCoach.trainingDay = dayEl.value;
      saveState();
    });
  }

  const notesEl = document.getElementById("aiUserNotes");
  if (notesEl) {
    notesEl.addEventListener("input", () => {
      state.aiCoach.userNotes = notesEl.value;
      saveState();
    });
  }

  const getBtn = document.getElementById("aiGetBtn");
  if (getBtn) {
    getBtn.addEventListener("click", async () => {
      if (aiCoachLoading) return;
      const ac = state.aiCoach;
      const imageFile = document.getElementById("aiImageUpload")?.files?.[0];
      if (!ac.workoutText && !imageFile) {
        showToast("Please paste your workout or upload an image.");
        return;
      }

      aiCoachLoading = true;
      aiCoachError = null;
      renderAiCoach();

      try {
        const payload = {
          workoutText: ac.workoutText || "",
          trainingDay: ac.trainingDay || "unknown",
          readiness: ac.readiness || "Green",
          painFlags: ac.painFlags || {},
          userNotes: ac.userNotes || "",
          recentWeekSummary: buildWeekSummary()
        };

        if (imageFile) {
          try {
            const { base64, mimeType } = await fileToResizedBase64(imageFile);
            payload.imageBase64 = base64;
            payload.imageMimeType = mimeType;
          } catch {
            // proceed without image
          }
        }

        const recommendation = await fetchAiRecommendation(payload);
        state.aiCoach.result = recommendation;
        aiCoachLoading = false;
        aiCoachError = null;
        saveState();
        renderAiCoach();
        showToast("Recommendation ready!");
      } catch (err) {
        aiCoachLoading = false;
        aiCoachError = err?.message || "Unknown error";
        renderAiCoach();
        showToast("Could not get recommendation.");
      }
    });
  }

  const saveBtn = document.getElementById("aiSaveBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const ac = state.aiCoach;
      if (!ac.result) return;
      saveAiRec({
        createdAt: new Date().toISOString(),
        trainingDay: ac.trainingDay || "unknown",
        workoutText: ac.workoutText || "",
        readiness: ac.readiness || "Green",
        painFlags: ac.painFlags || {},
        recommendation: ac.result
      });
      showToast("Saved to tracker.");
      renderAiCoach();
    });
  }
}

function renderAll() {
  renderHero();
  renderToday();
  renderProgram();
  renderMobility();
  renderTracker();
  renderTests();
  renderAiCoach();
  bindTabs();
  updateTabVisibility();
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  const button = document.getElementById("installButton");
  button.hidden = false;
  button.addEventListener("click", async () => {
    button.hidden = true;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
  }, { once: true });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

renderAll();
