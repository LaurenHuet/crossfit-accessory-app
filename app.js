const APP_KEY = "accessoryCoach.v1";

// ── Data ──────────────────────────────────────────────────────────────────────

const DAYS = [
  {
    id: "wl1", label: "WL Day 1", shortLabel: "WL 1",
    classIncludes: "Main snatch/C&J/complex, opposite pull holds or squat, lift-specific accessory",
    focus: "Single-leg + ankle + trunk", time: "20–30 min", priority: "High",
    benefit: "Leg strength and ankle range without more heavy squats.",
    skip: "Hard squat day, heavy leg WOD, ankle/hip flare.",
    exercises: [
      { name: "Front-foot elevated split squat", dose: "3 × 8 each leg", load: "Moderate dumbbells. Add reps first, then load.", cues: ["Knee travels forward", "Full foot pressure", "Controlled ankle range", "Upright torso"] },
      { name: "Tibialis raise", dose: "3 × 15–20", load: "Bodyweight or light load", cues: ["Slow reps", "Toes up hard", "Stop if shin pain builds"] },
      { name: "Calf raises", dose: "3 × 12–15 each side", load: "Pause top and bottom", cues: ["Bent knee", "Own the range", "Prioritise your previously injured side"] },
      { name: "Suitcase carry or Pallof press", dose: "3–4 sets", load: "30m carry each side or 3 × 10 Pallof each side", cues: ["Ribs down", "Pelvis stacked", "Steady breathing"] }
    ]
  },
  {
    id: "wl2", label: "WL Day 2", shortLabel: "WL 2",
    classIncludes: "Main lift/complex, opposite 3-position pull holds, lift-specific accessory",
    focus: "Overhead stability + shoulder support", time: "15–25 min", priority: "Medium",
    benefit: "Better lockout and jerk/snatch receiving positions.",
    skip: "Main class had heavy jerk, snatch balance, or overhead accessory; make it mobility only.",
    exercises: [
      { name: "Jerk footwork", dose: "3–5 min", load: "No bar or empty bar", cues: ["Fast feet", "Stable split", "Recover front foot then back foot", "Do not rush"] },
      { name: "Press in split", dose: "3 × 5 each side", load: "Empty bar or light", cues: ["Ribs down", "Bar stacked over mid-foot", "Back knee soft"] },
      { name: "Overhead hold", dose: "3 × 20–30 sec", load: "35–45 kg only if stacked", cues: ["Locked elbows", "Active shoulders", "Ribs down", "No lower-back arch"] },
      { name: "Active hang or scap pull-up", dose: "3 × 20 sec or 3 × 8", load: "Bodyweight", cues: ["Long spine", "Active shoulders", "No pain"] },
      { name: "Prone Y-T-W", dose: "2 × 6 each position", load: "Bodyweight or very light plates", cues: ["Slow and controlled", "Do not shrug", "Keep it low fatigue"] }
    ]
  },
  {
    id: "cf1", label: "CF Day 1", shortLabel: "CF 1",
    classIncludes: "Lift plus WOD",
    focus: "Gymnastics pulling + double-unders", time: "20–30 min", priority: "High",
    benefit: "Skill practice while still fresh enough to learn.",
    skip: "WOD had lots of pull-ups, toes-to-bar, rope climbs, or hands are torn.",
    exercises: [
      { name: "Beat swings", dose: "3 × 8–10", load: "Clean rhythm only", cues: ["Hollow to arch", "Active shoulders", "No huge uncontrolled swing"] },
      { name: "Kipping pull-up or chest-to-bar EMOM", dose: "Every 90 sec × 8", load: "3–6 clean reps", cues: ["Small perfect sets", "Stop before form breaks", "Quality over volume"] },
      { name: "Box, banded, or jumping bar muscle-up", dose: "5 × 2–3", load: "Smooth turnover; no failed reps", cues: ["Hips rise", "Pull to low ribs", "Fast sit-up over the bar", "No chicken wing"] },
      { name: "Double-under practice", dose: "5–8 min", load: "EMOM 6 × 10–20 or clean small sets", cues: ["Wrists not arms", "Relaxed breathing", "Stop before frantic reps"] }
    ]
  },
  {
    id: "cf2", label: "CF Day 2", shortLabel: "CF 2",
    classIncludes: "Lift plus WOD",
    focus: "Heavy-but-repeatable capacity or recovery skill", time: "10–25 min", priority: "Optional",
    benefit: "More capacity under load without overreaching.",
    skip: "WOD had heavy barbell, hard leg volume, or you feel red/yellow.",
    exercises: [
      { name: "Snatch EMOM singles", dose: "EMOM 8–10 × 1", load: "27.5–32.5 kg. No misses.", cues: ["Full extension", "Fast under", "Stable overhead", "Stop if timing gets messy"] },
      { name: "Clean and jerk EMOM singles", dose: "EMOM 8–10 × 1", load: "40–47.5 kg. No misses.", cues: ["Smooth clean", "Calm front rack", "Straight dip", "Fast lockout"] },
      { name: "Controlled C&J cycling", dose: "Every 90 sec × 6–8", load: "3 reps at 35–42.5 kg", cues: ["Repeatable, not sprinted", "Planned breaks", "Same setup every rep"] },
      { name: "Recovery skill option", dose: "5–10 min", load: "Double-unders, toes-to-bar, or wall-walk practice", cues: ["Choose one skill only", "Keep it clean", "Leave feeling better"] }
    ]
  },
  {
    id: "wl3", label: "WL Day 3", shortLabel: "WL 3",
    classIncludes: "Main lift/complex plus squat or lift accessory",
    focus: "Posterior chain + carries + core", time: "20–30 min", priority: "High",
    benefit: "Stronger hinge and trunk without more Olympic-pull volume.",
    skip: "Class had heavy pulls/deadlifts or low back is fatigued.",
    exercises: [
      { name: "Romanian deadlift", dose: "3 × 6–8", load: "Moderate; leave 2–3 reps in reserve", cues: ["Hips back", "Lats tight", "Bar close", "Hamstrings loaded"] },
      { name: "Back extension or hip extension", dose: "3 × 10–12", load: "Bodyweight first; add plate if easy", cues: ["Glutes and hamstrings", "Controlled reps", "Do not rush"] },
      { name: "Single-leg RDL", dose: "3 × 8 each side", load: "Dumbbell or kettlebell", cues: ["Stable foot", "Square hips", "Slow lower"] },
      { name: "Hamstring curl", dose: "3 × 10–12", load: "Machine, band, or sliders", cues: ["Slow eccentric", "No cramping", "Full control"] },
      { name: "Loaded carry", dose: "4 × 30–40m", load: "Farmer, front rack, or sandbag", cues: ["Tall posture", "Steady breath", "Do not lean"] },
      { name: "Core circuit", dose: "3 rounds", load: "Hollow hold 20–30s, side plank 30s/side, dead bug 8/side", cues: ["Brace without rib flare", "Quality breathing", "No back pain"] }
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
  { area: "Shoulder", exercise: "PVC pass-throughs or empty-bar OHS hold", dose: "10 reps or 30–45 sec", purpose: "Snatch/OHS position", notes: "Choose the cleanest option that day." }
];

const DEFAULT_STATE = {
  selectedWeek: 1, selectedDay: "wl1", energy: "Green",
  conditions: {}, logs: {}, tests: {}, mobilityLog: {}, activeTab: "today",
  aiCoach: {
    workoutText: "", trainingDay: "unknown", readiness: "Green",
    painFlags: { ankle: false, hip: false, shoulder: false, back: false, hands: false },
    userNotes: "", result: null
  }
};

let state = loadState();
let installPrompt = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(APP_KEY));
    return {
      ...DEFAULT_STATE, ...saved,
      conditions: { ...DEFAULT_STATE.conditions, ...(saved?.conditions || {}) },
      aiCoach: { ...DEFAULT_STATE.aiCoach, ...(saved?.aiCoach || {}), painFlags: { ...DEFAULT_STATE.aiCoach.painFlags, ...(saved?.aiCoach?.painFlags || {}) } }
    };
  } catch { return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
}

function saveState() { localStorage.setItem(APP_KEY, JSON.stringify(state)); }

function escapeHtml(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function dayById(id) { return DAYS.find(d => d.id === id) || DAYS[0]; }
function logKey(week, dayId) { return `${week}-${dayId}`; }

function getLog(week, dayId) {
  const key = logKey(week, dayId);
  if (!state.logs[key]) {
    state.logs[key] = { week, dayId, status: "No", energy: "", pain: "No", squatExposure: "No", pullHoldExposure: "No", accessory: dayById(dayId).focus, timeCap: dayById(dayId).time, load: "", notes: "" };
  }
  return state.logs[key];
}

function priorityClass(priority) {
  const p = (priority || "").toLowerCase();
  if (p.includes("high")) return "high";
  if (p.includes("medium")) return "medium";
  return "optional";
}

function getRecommendation(day, energy, conditions) {
  const flags = Object.fromEntries(Object.entries(conditions).map(([k, v]) => [k, Boolean(v)]));
  let level = energy.toLowerCase();
  let title = day.focus;
  let summary = "Do the planned accessory work. Keep it clean and stop with 1–3 reps in reserve.";
  let instructions = [...day.exercises];
  let badges = [day.time, day.priority];
  let warnings = [];

  if (energy === "Yellow") {
    level = "yellow"; summary = "Shorten the session. Do the first 2–3 pieces only, then mobility. No optional heavy capacity.";
    instructions = day.exercises.slice(0, Math.min(3, day.exercises.length)); badges.push("Reduced volume");
  }
  if (energy === "Red") {
    level = "red"; title = "Mobility only"; summary = "Skip accessory work today. Do the daily ankle and shoulder routine, then leave recovery in the bank.";
    instructions = mobilityAsExercises(); badges = ["8–20 min", "Recovery"];
  }

  if (flags.ankleFlare) {
    level = "red"; title = "Ankle/hip flare protocol"; summary = "Keep everything pain-free. No high-volume jumping, deficit pulls, heavy split squats, or deep loaded squat volume.";
    instructions = [
      { name: "Controlled ankle mobility", dose: "5–7 min", load: "Gentle range only", cues: ["No pinching", "Breathe", "Stay pain-free"] },
      { name: "Calf/soleus work", dose: "2–3 × 12–15", load: "Light, controlled", cues: ["Slow tempo", "Even pressure", "Stop if pain increases"] },
      { name: "Glute med or stability work", dose: "2–3 sets", load: "Banded walks, clams, or side plank", cues: ["Controlled", "No hip pinch", "Low fatigue"] },
      { name: "Light goblet squat", dose: "2 × 8 if pain-free", load: "Very light", cues: ["Use support", "No forced depth", "Quality only"] }
    ]; badges = ["10–15 min", "Rehab focus"];
  }

  if (flags.heavySquat && day.id === "wl1" && energy !== "Red" && !flags.ankleFlare) {
    title = "Light single-leg + ankle only"; summary = "Class already covered heavy squatting. Do a small support dose, not another leg session.";
    instructions = [
      { name: "Split squat", dose: "2 × 8 each leg", load: "Bodyweight or light dumbbells", cues: ["Smooth reps", "No grinding", "Pain-free range"] },
      { name: "Tibialis raise", dose: "2 × 20", load: "Bodyweight", cues: ["Slow", "Toes up hard"] },
      { name: "Ankle mobility", dose: "5 min", load: "Gentle", cues: ["Knee-to-wall", "Weighted ankle rocks", "Deep squat breathing"] }
    ]; badges = ["10–18 min", "Modified"];
  }

  if (flags.hardLegWod && (day.id === "wl1" || day.id === "cf2") && energy !== "Red" && !flags.ankleFlare) {
    level = "yellow"; title = "Core + mobility"; summary = "Leg fatigue is already high. Do trunk and position work only.";
    instructions = [
      { name: "Pallof press", dose: "3 × 10 each side", load: "Moderate band/cable", cues: ["Ribs down", "No twisting", "Steady breath"] },
      { name: "Dead bug", dose: "3 × 8 each side", load: "Bodyweight", cues: ["Slow", "Low back quiet", "Exhale"] },
      { name: "Daily mobility routine", dose: "8 min", load: "Ankle + shoulder", cues: ["Consistency over intensity"] }
    ]; badges = ["12–20 min", "Recovery bias"];
  }

  if (flags.highPulling && day.id === "cf1" && energy !== "Red") {
    level = "yellow"; title = "Double-unders + shoulder mobility"; summary = "Skip strict pulling, BMU negatives, and high-volume kipping. Hands, elbows, and shoulders need recovery.";
    instructions = [
      { name: "Double-under clean sets", dose: "5 min", load: "Small relaxed sets", cues: ["Stop before failure", "Wrists not arms", "Relaxed breathing"] },
      { name: "Banded lat stretch", dose: "45 sec each side", load: "Gentle", cues: ["No cranking"] },
      { name: "Wall slides", dose: "2 × 10", load: "Bodyweight", cues: ["Ribs down", "Smooth scap movement"] }
    ]; badges = ["10–15 min", "Modified"];
  }

  if ((flags.heavyOverhead || flags.jerkAccessory) && day.id === "wl2" && energy !== "Red") {
    level = "yellow"; title = "Light footwork + shoulder support"; summary = "Class already gave heavy overhead or jerk-specific volume. Add quality, not more strain.";
    instructions = [
      { name: "Jerk footwork", dose: "3–5 min", load: "No bar or empty bar", cues: ["Fast feet", "Stable split", "Recover with control"] },
      { name: "Press in split", dose: "2 × 5 each side", load: "Empty bar only", cues: ["Ribs down", "Bar stacked", "No grind"] },
      { name: "Scap and shoulder mobility", dose: "5–8 min", load: "Active hang, wall slides, lat stretch", cues: ["Low fatigue", "No pinching"] }
    ]; badges = ["10–18 min", "Modified"];
  }

  if ((flags.heavyDeadlift || flags.pullHolds) && day.id === "wl3" && energy !== "Red" && !flags.ankleFlare) {
    if (flags.heavyDeadlift) {
      level = "yellow"; title = "Carry + core only"; summary = "Skip RDLs and tempo/deficit deadlifts. Protect your low back and recovery.";
      instructions = [
        { name: "Suitcase carry", dose: "3 × 30m each side", load: "Moderate", cues: ["Tall posture", "No leaning", "Steady breath"] },
        { name: "Pallof press", dose: "3 × 10 each side", load: "Moderate", cues: ["Ribs down", "Pelvis stacked"] },
        { name: "Dead bug", dose: "3 × 8 each side", load: "Bodyweight", cues: ["Slow", "Exhale", "No rib flare"] }
      ]; badges = ["12–20 min", "Modified"];
    } else {
      warnings.push("Opposite-lift pull holds already covered Olympic-pull volume. Keep posterior-chain work moderate; do not add extra snatch/clean pulls.");
    }
  }

  if (day.id === "cf2" && (flags.heavyDeadlift || flags.heavyOverhead || flags.jerkAccessory || flags.heavySquat || flags.hardLegWod || energy !== "Green") && !flags.ankleFlare) {
    level = energy === "Red" ? "red" : "yellow";
    if (energy !== "Red") {
      title = "Recovery skill instead of heavy EMOM"; summary = "Skip heavy-but-repeatable barbell capacity today. Pick one easy skill or mobility piece.";
      instructions = [
        { name: "Double-under practice", dose: "5 min", load: "Small clean sets", cues: ["Relax", "Stop before failure", "Breathe"] },
        { name: "Toes-to-bar technique", dose: "5 × 5–8 if hands/shoulders are fresh", load: "Easy sets", cues: ["Smooth kip", "No grip failure"] },
        { name: "Daily mobility routine", dose: "8 min", load: "Ankle + shoulder", cues: ["Leave feeling better"] }
      ]; badges = ["10–18 min", "Recovery skill"];
    }
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
  const pain = logs.filter(l => l.pain === "Mild" || l.pain === "Yes").length;
  return { planned, done, partial, completion, green, pain };
}

// ── Render ────────────────────────────────────────────────────────────────────

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
  const conditionCount = Object.values(state.conditions).filter(Boolean).length;

  const weekChips = [1,2,3,4,5,6,7,8].map(w =>
    `<button class="chip${state.selectedWeek === w ? " active" : ""}" data-week="${w}">W${w}</button>`
  ).join("");

  const dayChips = DAYS.map(d =>
    `<button class="chip${state.selectedDay === d.id ? " active" : ""}" data-day="${d.id}">${escapeHtml(d.shortLabel)}</button>`
  ).join("");

  const conditionsHtml = CONDITIONS.map(c => `
    <label class="checkbox-row">
      <input type="checkbox" data-condition="${c.id}" ${state.conditions[c.id] ? "checked" : ""} />
      <div><span>${escapeHtml(c.label)}</span><small>${escapeHtml(c.detail)}</small></div>
    </label>
  `).join("");

  document.getElementById("today").innerHTML = `
    <div class="section-label">Week</div>
    <div class="chip-row" style="padding:0 0 2px">${weekChips}</div>

    <div class="section-label" style="margin-top:16px;">Training day</div>
    <div class="chip-row" style="padding:0 0 2px">${dayChips}</div>

    <div class="section-label">Readiness</div>
    <div class="segmented" id="energyButtons">
      ${["Green", "Yellow", "Red"].map(e =>
        `<button type="button" data-energy="${e}" class="${state.energy === e ? "active" : ""}">${e}</button>`
      ).join("")}
    </div>

    <div class="section-label" style="margin-top:20px;">What did class cover?</div>
    <button class="conditions-toggle${conditionCount ? " open" : ""}" id="conditionsToggle">
      <span class="conditions-toggle-label">
        Class conditions
        ${conditionCount > 0 ? `<span class="conditions-count">${conditionCount}</span>` : ""}
      </span>
      <span class="conditions-chevron${conditionCount ? " open" : ""}">&#8964;</span>
    </button>
    <div class="conditions-body" id="conditionsBody" style="display:${conditionCount ? "block" : "none"}">
      <div class="checkbox-list">${conditionsHtml}</div>
      ${conditionCount > 0 ? `<button class="ghost-button" id="clearConditionsButton" style="margin-top:10px;min-height:36px;font-size:13px;">Clear all</button>` : ""}
    </div>

    <div class="section-label" style="margin-top:20px;">Recommendation</div>
    <div class="recommendation ${rec.level}">
      <p class="kicker">Recommended today</p>
      <h2>${escapeHtml(rec.title)}</h2>
      <p>${escapeHtml(rec.summary)}</p>
      <div class="badges">${rec.badges.map((b, i) => `<span class="badge ${i === 1 ? priorityClass(b) : "accent"}">${escapeHtml(b)}</span>`).join("")}</div>
      ${rec.warnings.length ? `<div class="info-block" style="margin-top:10px;"><strong>Note</strong><p>${rec.warnings.map(escapeHtml).join("<br>")}</p></div>` : ""}
    </div>

    <div class="section-label">Exercises</div>
    <div class="exercise-list">
      ${rec.instructions.map((ex, i) => exerciseCard(ex, i, currentLog)).join("")}
    </div>

    <hr class="soft" style="margin-top:20px;" />
    <div class="controls" style="margin-top:14px;">
      <label class="field">Pain today
        <select id="todayPain">${["No", "Mild", "Yes"].map(p => `<option value="${p}" ${currentLog.pain === p ? "selected" : ""}>${p}</option>`).join("")}</select>
      </label>
      <label class="field">Load / result
        <input id="todayLoad" value="${escapeHtml(currentLog.load)}" placeholder="e.g. C&amp;J EMOM 45kg" />
      </label>
    </div>
    <label class="field">Notes
      <textarea id="todayNotes" placeholder="How did it feel?">${escapeHtml(currentLog.notes)}</textarea>
    </label>

    <div class="actions-row" style="margin:16px 0 8px;">
      <button class="primary-button" id="markDoneButton">Mark done</button>
      <button class="secondary-button" id="saveLogButton">Save log</button>
      <button class="ghost-button" id="clearConditionsButton2" style="display:${conditionCount ? "flex" : "none"}">Clear ticks</button>
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
        <div style="flex:1">
          <h4>${escapeHtml(exercise.name)}</h4>
          <p><span class="dose">${escapeHtml(exercise.dose)}</span>${exercise.load ? ` <span style="color:var(--muted)">· ${escapeHtml(exercise.load)}</span>` : ""}</p>
        </div>
        <input type="checkbox" data-exercise="${key}" ${checked} aria-label="Mark ${escapeHtml(exercise.name)} complete"
          style="width:22px;min-height:22px;height:22px;flex-shrink:0;margin-top:2px;accent-color:var(--accent);" />
      </div>
      ${exercise.cues?.length ? `<ul class="cue-list">${exercise.cues.map(c => `<li>${escapeHtml(c)}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function bindTodayEvents() {
  document.querySelectorAll("[data-week]").forEach(btn => {
    btn.addEventListener("click", () => { state.selectedWeek = Number(btn.dataset.week); saveState(); renderAll(); });
  });
  document.querySelectorAll("[data-day]").forEach(btn => {
    btn.addEventListener("click", () => { state.selectedDay = btn.dataset.day; saveState(); renderAll(); });
  });
  document.querySelectorAll("[data-energy]").forEach(btn => {
    btn.addEventListener("click", () => { state.energy = btn.dataset.energy; saveState(); renderAll(); });
  });
  document.querySelectorAll("[data-condition]").forEach(box => {
    box.addEventListener("change", () => { state.conditions[box.dataset.condition] = box.checked; saveState(); renderAll(); });
  });
  document.querySelectorAll("[data-exercise]").forEach(box => {
    box.addEventListener("change", () => {
      const log = getLog(state.selectedWeek, state.selectedDay);
      log.completedExercises = log.completedExercises || {};
      log.completedExercises[box.dataset.exercise] = box.checked;
      saveState(); showToast("Exercise saved"); renderHero();
    });
  });

  const toggle = document.getElementById("conditionsToggle");
  const body = document.getElementById("conditionsBody");
  if (toggle && body) {
    toggle.addEventListener("click", () => {
      const open = body.style.display !== "none";
      body.style.display = open ? "none" : "block";
      toggle.classList.toggle("open", !open);
      toggle.querySelector(".conditions-chevron").classList.toggle("open", !open);
    });
  }

  ["clearConditionsButton", "clearConditionsButton2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", () => { state.conditions = {}; saveState(); renderAll(); });
  });

  document.getElementById("saveLogButton")?.addEventListener("click", () => saveTodayLog(false));
  document.getElementById("markDoneButton")?.addEventListener("click", () => saveTodayLog(true));
}

function saveTodayLog(markDone) {
  const day = dayById(state.selectedDay);
  const log = getLog(state.selectedWeek, day.id);
  const rec = getRecommendation(day, state.energy, state.conditions);
  log.status = markDone ? "Done" : document.getElementById("todayStatus")?.value || "Done";
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
    <h2 style="margin-top:8px;">Program</h2>
    <p>Your gym owns the main lifting. These accessories fill gaps without duplicating stress.</p>
    ${DAYS.map(day => `
      <details class="day-card" ${day.id === state.selectedDay ? "open" : ""}>
        <summary>
          <div class="day-title">
            <div>
              <h3>${escapeHtml(day.label)} — ${escapeHtml(day.focus)}</h3>
              <p>${escapeHtml(day.time)} · ${escapeHtml(day.benefit)}</p>
            </div>
            <span class="chev">+</span>
          </div>
        </summary>
        <div style="padding:0 16px 16px;">
          <div class="details-grid">
            <div class="info-block"><strong>Class includes</strong><span>${escapeHtml(day.classIncludes)}</span></div>
            <div class="info-block"><strong>Skip if</strong><span>${escapeHtml(day.skip)}</span></div>
            <div class="info-block"><strong>Priority</strong><span>${escapeHtml(day.priority)}</span></div>
            <div class="info-block"><strong>Benefit</strong><span>${escapeHtml(day.benefit)}</span></div>
          </div>
          <div class="exercise-list">${day.exercises.map((ex, i) => exerciseCard(ex, i, {})).join("")}</div>
        </div>
      </details>
    `).join("")}
    <div class="card compact" style="margin-top:4px;">
      <h3>Decision rules</h3>
      <div style="display:grid;gap:8px;margin-top:10px;">
        ${CONDITIONS.map(c => `<div class="info-block"><strong>${escapeHtml(c.label)}</strong><p>${escapeHtml(c.detail)}</p></div>`).join("")}
      </div>
    </div>
  `;
}

function renderMobility() {
  const today = new Date().toISOString().slice(0, 10);
  const doneToday = Boolean(state.mobilityLog[today]);
  const byArea = MOBILITY.reduce((acc, m) => { (acc[m.area] = acc[m.area] || []).push(m); return acc; }, {});

  document.getElementById("mobility").innerHTML = `
    <h2 style="margin-top:8px;">Daily Mobility</h2>
    <p>8-minute non-negotiable. Ankle and shoulder consistency will improve your squat, snatch, and jerk.</p>
    <button class="${doneToday ? "secondary-button" : "primary-button"}" id="mobilityDoneButton" style="width:100%;margin-bottom:20px;">
      ${doneToday ? "✓ Mobility done today" : "Mark mobility done"}
    </button>
    ${Object.entries(byArea).map(([area, items]) => `
      <div class="section-label">${escapeHtml(area)}</div>
      ${items.map(item => `
        <div class="mobility-card">
          <h3>${escapeHtml(item.exercise)}</h3>
          <p><span class="dose">${escapeHtml(item.dose)}</span> · ${escapeHtml(item.purpose)}</p>
          <p style="font-size:12px;margin-top:4px;">${escapeHtml(item.notes)}</p>
        </div>
      `).join("")}
    `).join("")}
    <div class="card" style="margin-top:16px;">
      <h3>Flare-up version</h3>
      <p>Controlled mobility + calf/soleus + glute med for 10–15 minutes. No deficit pulls, high-volume jumping, heavy split squats, or deep loaded squat volume.</p>
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
    <h2 style="margin-top:8px;">Tracker</h2>
    <div class="summary-grid">
      <div class="summary-card"><strong>${stats.done}/40</strong><span>done</span></div>
      <div class="summary-card"><strong>${stats.completion}%</strong><span>completion</span><div class="progress-bar" style="margin-top:8px;"><span style="width:${Math.min(stats.completion, 100)}%"></span></div></div>
      <div class="summary-card"><strong>${stats.green}</strong><span>green days</span></div>
      <div class="summary-card"><strong>${stats.pain}</strong><span>pain flags</span></div>
    </div>

    <div class="section-label">Week</div>
    <div class="chip-row" style="padding:0 0 16px;">${[1,2,3,4,5,6,7,8].map(w =>
      `<button class="chip${w === selectedWeek ? " active" : ""}" data-tracker-week="${w}">W${w}</button>`
    ).join("")}</div>

    <div class="tracker-list">
      ${weekRows.map(log => trackerRow(log)).join("")}
    </div>

    <div class="card compact" style="margin-top:16px;">
      <h3>Data</h3>
      <div class="actions-row">
        <button class="secondary-button" id="exportButton">Export data</button>
        <button class="ghost-button" id="resetButton">Reset all data</button>
      </div>
      <p class="footer-note">Logs stored on this device. Export regularly for backup.</p>
    </div>
  `;
  bindTrackerEvents(selectedWeek);
}

function trackerRow(log) {
  const day = dayById(log.dayId);
  return `
    <div class="tracker-row" data-row-key="${escapeHtml(logKey(log.week, log.dayId))}">
      <div class="row-top">
        <div><strong>${escapeHtml(day.label)}</strong><small>${escapeHtml(log.accessory || day.focus)}</small></div>
        <span class="badge ${log.status === "Done" ? "high" : log.status === "Partial" ? "medium" : ""}">${escapeHtml(log.status)}</span>
      </div>
      <div class="row-fields">
        <label class="mini-field">Status
          <select data-log-field="status">${["No","Done","Partial","Skipped"].map(s => `<option value="${s}" ${log.status === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Energy
          <select data-log-field="energy">${["","Green","Yellow","Red"].map(s => `<option value="${s}" ${log.energy === s ? "selected" : ""}>${s || "–"}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Pain
          <select data-log-field="pain">${["No","Mild","Yes"].map(s => `<option value="${s}" ${log.pain === s ? "selected" : ""}>${s}</option>`).join("")}</select>
        </label>
        <label class="mini-field">Load
          <input data-log-field="load" value="${escapeHtml(log.load)}" placeholder="What did you do?" />
        </label>
      </div>
    </div>
  `;
}

function bindTrackerEvents(selectedWeek) {
  document.querySelectorAll("[data-tracker-week]").forEach(btn => {
    btn.addEventListener("click", () => { state.trackerWeek = Number(btn.dataset.trackerWeek); saveState(); renderTracker(); });
  });
  document.querySelectorAll("[data-row-key]").forEach(row => {
    const key = row.dataset.rowKey;
    row.querySelectorAll("[data-log-field]").forEach(input => {
      const handler = () => { state.logs[key][input.dataset.logField] = input.value; state.logs[key].savedAt = new Date().toISOString(); saveState(); renderHero(); };
      input.addEventListener("change", handler);
      if (input.tagName === "INPUT") input.addEventListener("input", handler);
    });
  });
  document.getElementById("exportButton")?.addEventListener("click", exportData);
  document.getElementById("resetButton")?.addEventListener("click", () => {
    if (confirm("Reset all saved logs on this device?")) {
      localStorage.removeItem(APP_KEY); state = loadState(); showToast("Data reset"); renderAll();
    }
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `accessory-coach-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  showToast("Data exported");
}

// ── AI Coach ──────────────────────────────────────────────────────────────────

const AI_RECS_KEY = "accessoryCoach.v1.aiRecommendations";
const AI_PAIN_FLAGS = [
  { id: "ankle", label: "Ankle flare" }, { id: "hip", label: "Hip flare" },
  { id: "shoulder", label: "Shoulder pain" }, { id: "back", label: "Back pain" },
  { id: "hands", label: "Hands/grip fatigue" }
];
const AI_TRAINING_DAYS = ["WL Day 1", "WL Day 2", "CF Day 1", "CF Day 2", "WL Day 3", "Unknown"];

let aiCoachLoading = false;
let aiCoachError = null;

function loadAiRecs() { try { return JSON.parse(localStorage.getItem(AI_RECS_KEY)) || []; } catch { return []; } }
function saveAiRec(entry) {
  const recs = loadAiRecs(); recs.unshift(entry);
  if (recs.length > 20) recs.pop();
  localStorage.setItem(AI_RECS_KEY, JSON.stringify(recs));
}

async function fileToResizedBase64(file, maxWidth = 1400, quality = 0.75) {
  const dataUrl = await new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(file); });
  const img = await new Promise((resolve, reject) => { const i = new Image(); i.onload = () => resolve(i); i.onerror = reject; i.src = dataUrl; });
  const scale = Math.min(1, maxWidth / img.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale); canvas.height = Math.round(img.height * scale);
  canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
  const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
  return { base64: canvas.toDataURL(mimeType, quality).split(",")[1], mimeType };
}

function renderAiCoach() {
  const ac = state.aiCoach || {};
  const painFlags = ac.painFlags || {};
  const readiness = ac.readiness || "Green";
  const recs = loadAiRecs();

  const painFlagsHtml = AI_PAIN_FLAGS.map(f =>
    `<button type="button" class="pain-flag-btn${painFlags[f.id] ? " active" : ""}" data-ai-pain="${f.id}">${escapeHtml(f.label)}</button>`
  ).join("");

  const trainingDayHtml = AI_TRAINING_DAYS.map(d => {
    const val = d === "Unknown" ? "unknown" : d;
    return `<option value="${escapeHtml(val)}" ${(ac.trainingDay || "unknown") === val ? "selected" : ""}>${escapeHtml(d)}</option>`;
  }).join("");

  const historyHtml = recs.length ? `
    <div class="section-label" style="margin-top:24px;">Previous recommendations</div>
    ${recs.slice(0, 3).map(rec => {
      const r = rec.recommendation || {};
      const date = rec.createdAt ? new Date(rec.createdAt).toLocaleDateString() : "–";
      return `<div class="tracker-row"><div class="row-top"><div><strong>${escapeHtml(r.accessory_focus || "AI recommendation")}</strong><small>${escapeHtml(rec.trainingDay || "–")} · ${escapeHtml(date)}</small></div><span class="badge">${escapeHtml(r.confidence || "–")}</span></div>${r.summary ? `<p style="font-size:13px;margin:0;">${escapeHtml(r.summary)}</p>` : ""}</div>`;
    }).join("")}
  ` : "";

  const resultHtml = (!aiCoachLoading && !aiCoachError && ac.result) ? renderAiResultHtml(ac.result) : "";

  document.getElementById("aicoach").innerHTML = `
    <h2 style="margin-top:8px;">AI Coach</h2>
    <p>Paste today's workout. The AI will classify it and recommend your accessory session.</p>
    <p class="kicker">Not a replacement for your coach or physio. If pain is present, flag it.</p>

    <div class="section-label">Today's workout</div>
    <textarea id="aiWorkoutText" rows="4" placeholder="e.g. WL: snatch complex to heavy single, 3-position clean pull holds. WOD: 12 min AMRAP, 10 TTB, 8 DB snatch, 200m run.">${escapeHtml(ac.workoutText || "")}</textarea>

    <label class="field" style="margin-top:12px;">Upload whiteboard photo (optional)
      <input type="file" id="aiImageUpload" accept="image/png,image/jpeg,image/webp" style="min-height:auto;padding:8px;" />
    </label>

    <div class="section-label">Readiness</div>
    <div class="segmented">
      ${["Green","Yellow","Red"].map(r => `<button type="button" data-ai-readiness="${r}" class="${readiness === r ? "active" : ""}">${r}</button>`).join("")}
    </div>

    <div class="section-label" style="margin-top:16px;">Pain flags</div>
    <div class="ai-pain-flags">${painFlagsHtml}</div>

    <label class="field">Training day
      <select id="aiTrainingDay">${trainingDayHtml}</select>
    </label>

    <label class="field" style="margin-top:12px;">Notes (optional)
      <textarea id="aiUserNotes" rows="2" placeholder="How did you feel? Anything to flag?">${escapeHtml(ac.userNotes || "")}</textarea>
    </label>

    <div class="actions-row" style="margin-top:16px;">
      <button class="primary-button" id="aiGetBtn" ${aiCoachLoading ? "disabled" : ""} style="flex:1;">
        ${aiCoachLoading ? "Thinking…" : "Get today's accessory"}
      </button>
    </div>

    ${aiCoachLoading ? `<div class="card" style="margin-top:12px;text-align:center;"><p class="kicker">Reading your workout…</p></div>` : ""}
    ${(!aiCoachLoading && aiCoachError) ? `<div class="card" style="margin-top:12px;border-color:var(--red);"><p style="color:var(--red);margin:0;">${escapeHtml(aiCoachError)}</p></div>` : ""}
    ${resultHtml}
    ${historyHtml}
  `;

  bindAiCoachEvents();
}

function renderAiResultHtml(result) {
  const detected = result.detected_training || {};
  const session = result.recommended_session || [];
  const mobility = result.mobility || [];
  const skipToday = result.skip_today || [];
  const cautionFlags = result.caution_flags || [];

  const detectionBadges = [
    detected.squat_exposure && "Squat", detected.heavy_squat && "Heavy squat",
    detected.pull_holds && `Pull holds`, detected.heavy_deadlift_or_pulls && "Heavy pulls",
    detected.overhead_volume && "Overhead", detected.gymnastics_pulling && "Gymnastics",
    detected.high_grip_fatigue && "Grip fatigue", detected.double_unders_or_jumping && "DUs/jumping"
  ].filter(Boolean).map(f => `<span class="badge warning">${escapeHtml(f)}</span>`).join("");

  const sessionHtml = session.map(ex => exerciseCard({ name: ex.exercise, dose: `${ex.sets} × ${ex.reps_or_time}`, load: ex.load, cues: ex.notes ? [ex.notes] : [] }, 0, {})).join("");
  const mobilityHtml = mobility.map(ex => exerciseCard({ name: ex.exercise, dose: ex.dose, load: "", cues: ex.notes ? [ex.notes] : [] }, 0, {})).join("");

  return `
    <div class="recommendation ${result.confidence === "high" ? "green" : result.confidence === "low" ? "yellow" : ""}" style="margin-top:16px;">
      <p class="kicker">AI recommendation${result.confidence ? ` · ${escapeHtml(result.confidence)} confidence` : ""}</p>
      <h2>${escapeHtml(result.accessory_focus || "Accessory session")}</h2>
      <p>${escapeHtml(result.summary || "")}</p>
      <div class="badges">${detectionBadges || '<span class="badge">No conflicts detected</span>'}</div>
    </div>
    ${detected.reasoning_summary ? `<div class="info-block" style="margin:10px 0;"><strong>Classification</strong><p>${escapeHtml(detected.reasoning_summary)}</p></div>` : ""}
    ${skipToday.length ? `<div class="info-block" style="margin-bottom:10px;"><strong>Skip today</strong><p>${skipToday.map(s => `· ${escapeHtml(s)}`).join("<br>")}</p></div>` : ""}
    ${session.length ? `<div class="section-label">Accessory session</div><div class="exercise-list">${sessionHtml}</div>` : ""}
    ${mobility.length ? `<div class="section-label">Mobility</div><div class="exercise-list">${mobilityHtml}</div>` : ""}
    ${cautionFlags.length ? `<div class="info-block" style="margin-top:10px;"><strong>Caution</strong><p>${cautionFlags.map(f => `· ${escapeHtml(f)}`).join("<br>")}</p></div>` : ""}
    <div class="actions-row" style="margin-top:14px;"><button class="secondary-button" id="aiSaveBtn">Save to tracker</button></div>
  `;
}

function bindAiCoachEvents() {
  document.querySelectorAll("[data-ai-readiness]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.aiCoach.readiness = btn.dataset.aiReadiness; saveState();
      document.querySelectorAll("[data-ai-readiness]").forEach(b => b.classList.toggle("active", b.dataset.aiReadiness === state.aiCoach.readiness));
    });
  });
  document.querySelectorAll("[data-ai-pain]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.aiCoach.painFlags[btn.dataset.aiPain] = !state.aiCoach.painFlags[btn.dataset.aiPain];
      btn.classList.toggle("active"); saveState();
    });
  });
  document.getElementById("aiWorkoutText")?.addEventListener("input", e => { state.aiCoach.workoutText = e.target.value; saveState(); });
  document.getElementById("aiUserNotes")?.addEventListener("input", e => { state.aiCoach.userNotes = e.target.value; saveState(); });
  document.getElementById("aiTrainingDay")?.addEventListener("change", e => { state.aiCoach.trainingDay = e.target.value; saveState(); });
  document.getElementById("aiGetBtn")?.addEventListener("click", handleAiSubmit);
  document.getElementById("aiSaveBtn")?.addEventListener("click", () => {
    const log = getLog(state.selectedWeek, state.selectedDay);
    if (state.aiCoach.result?.accessory_focus) {
      log.accessory = state.aiCoach.result.accessory_focus;
      log.energy = state.aiCoach.readiness;
      log.savedAt = new Date().toISOString();
      saveState(); showToast("Saved to tracker");
    }
  });
}

async function handleAiSubmit() {
  const text = document.getElementById("aiWorkoutText")?.value?.trim();
  if (!text) return;
  aiCoachLoading = true; aiCoachError = null; renderAiCoach();

  try {
    let imagePayload = null;
    const fileInput = document.getElementById("aiImageUpload");
    if (fileInput?.files?.[0]) {
      try { imagePayload = await fileToResizedBase64(fileInput.files[0]); } catch(e) {}
    }
    const payload = {
      workoutText: text, trainingDay: state.aiCoach.trainingDay,
      readiness: state.aiCoach.readiness, painFlags: state.aiCoach.painFlags,
      userNotes: state.aiCoach.userNotes,
      ...(imagePayload ? { imageBase64: imagePayload.base64, imageMimeType: imagePayload.mimeType } : {})
    };
    const res = await fetch("/.netlify/functions/recommend-accessory", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "AI recommendation failed.");
    state.aiCoach.result = data.recommendation;
    saveAiRec({ recommendation: data.recommendation, trainingDay: state.aiCoach.trainingDay, createdAt: new Date().toISOString() });
    saveState();
  } catch(e) {
    aiCoachError = e.message;
  } finally {
    aiCoachLoading = false; renderAiCoach();
  }
}

// ── Tabs ──────────────────────────────────────────────────────────────────────

const TAB_ICONS = {
  today: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  program: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 10h16M4 14h10"/></svg>`,
  mobility: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  tracker: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  aicoach: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`
};

function bindTabs() {
  document.querySelectorAll(".tabs button").forEach(btn => {
    const tab = btn.dataset.tab;
    if (TAB_ICONS[tab]) {
      btn.innerHTML = `<span class="tab-icon">${TAB_ICONS[tab]}</span>${btn.textContent.trim()}`;
    }
    btn.onclick = () => { state.activeTab = btn.dataset.tab; saveState(); updateTabVisibility(); };
  });
}

function updateTabVisibility() {
  document.querySelectorAll(".tabs button").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === state.activeTab));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === state.activeTab));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderAll() {
  renderHero();
  if (state.activeTab === "today") renderToday();
  else if (state.activeTab === "program") renderProgram();
  else if (state.activeTab === "mobility") renderMobility();
  else if (state.activeTab === "tracker") renderTracker();
  else if (state.activeTab === "aicoach") renderAiCoach();
  updateTabVisibility();
}

// ── Init ──────────────────────────────────────────────────────────────────────

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); installPrompt = e;
  document.getElementById("installButton").hidden = false;
});
document.getElementById("installButton")?.addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  if (outcome === "accepted") document.getElementById("installButton").hidden = true;
  installPrompt = null;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

bindTabs();
updateTabVisibility();
renderAll();
