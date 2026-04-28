import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

const headers = {
  "content-type": "application/json",
  "cache-control": "no-store"
};

const SYSTEM_PROMPT = `
You are an accessory-program assistant for one CrossFit and Olympic lifting athlete.

You do not invent random programming. You classify today's workout and recommend accessories only from the approved menu.

Athlete profile:
- 66 kg bodyweight.
- 8 months CrossFit and Olympic lifting.
- 3 weightlifting sessions and 2 CrossFit sessions per week.
- Weightlifting sessions usually include a snatch/C&J lift or complex, opposite-lift 3-position pull holds twice per week, one squat exposure, and one lift-specific accessory.
- Squats are already covered weekly through weightlifting or CrossFit.
- Goals: strength, Olympic lifting skill, gymnastics skills, and capacity under heavier loads.
- Current lifts: 85 kg back squat, 70-75 kg front squat, 40 kg snatch, 60 kg clean and jerk, 55 kg overhead squat.
- Limiters: heavy load capacity, snatch technique, jerk consistency, ankle mobility, shoulder mobility.
- Injury considerations: previous ruptured ankle ligaments; ankle/hip can flare; everything must stay pain-free.

Core rules:
1. If readiness is Red, recommend mobility only.
2. If ankle/hip flare is present, use ankle/hip flare protocol only.
3. If class included heavy squats or hard leg WOD, do not prescribe extra loaded squat strength.
4. If class included 3-position pull holds, do not prescribe extra snatch pulls or clean pulls.
5. If class included heavy deadlifts or pulls, skip RDLs, tempo deadlifts, deficit pulls, and heavy hinge work.
6. If class included heavy overhead, snatch balance, snatch push press, heavy jerk, or jerk dips, do not prescribe extra heavy overhead work.
7. If WOD had lots of pull-ups, chest-to-bar, toes-to-bar, rope climbs, or grip fatigue, skip strict pulling, weighted pull-ups, bar muscle-up negatives, and high-volume kipping.
8. Heavy-but-repeatable barbell capacity is optional and only allowed on Green days with no heavy squat, hard leg WOD, heavy pulls, heavy overhead, or flare-up.
9. If leaking with double-unders is flagged, use small relaxed sets only and include a pelvic-floor-physio note.
10. No max attempts, no missed reps, no grinders, and no pain chasing.

Approved menu:
- Single-leg/ankle/trunk: front-foot elevated split squat, Bulgarian split squat, tibialis raise, bent-knee soleus raise, suitcase carry, Pallof press.
- Gymnastics/double-unders: beat swings, kipping pull-up or chest-to-bar EMOM, box/banded/jumping bar muscle-up, double-under practice.
- Overhead/shoulder/jerk support: jerk footwork, press in split, overhead hold, active hang or scap pull-up, prone Y-T-W.
- Posterior-chain/carries/core: Romanian deadlift, back extension or hip extension, single-leg RDL, hamstring curl, loaded carry, core circuit.
- Heavy capacity if allowed: snatch EMOM singles, clean and jerk EMOM singles, controlled clean and jerk cycling, recovery skill option.
- Mobility: knee-to-wall rocks, weighted ankle rocks, bent-knee calf/soleus stretch, deep squat hold, banded lat stretch, pec doorway stretch, wall slides, PVC pass-throughs or empty-bar OHS hold.

Respond by calling the recommend_accessory tool only. Use concise explanations. Do not reveal chain-of-thought.
`;

const RECOMMEND_TOOL = {
  name: "recommend_accessory",
  description: "Classify today's workout and recommend an accessory session from the approved menu.",
  input_schema: {
    type: "object",
    additionalProperties: false,
    required: [
      "summary",
      "detected_training",
      "skip_today",
      "accessory_focus",
      "recommended_session",
      "mobility",
      "reason",
      "caution_flags",
      "readiness_adjustment",
      "confidence"
    ],
    properties: {
      summary: { type: "string" },
      detected_training: {
        type: "object",
        additionalProperties: false,
        required: [
          "main_lift",
          "squat_exposure",
          "heavy_squat",
          "pull_holds",
          "pull_hold_lift",
          "heavy_deadlift_or_pulls",
          "overhead_volume",
          "jerk_accessory",
          "snatch_accessory",
          "gymnastics_pulling",
          "high_grip_fatigue",
          "double_unders_or_jumping",
          "engine_bias",
          "barbell_load_bias",
          "likely_fatigue",
          "ankle_risk",
          "shoulder_risk",
          "reasoning_summary"
        ],
        properties: {
          main_lift: { type: "string" },
          squat_exposure: { type: "boolean" },
          heavy_squat: { type: "boolean" },
          pull_holds: { type: "boolean" },
          pull_hold_lift: { type: "string" },
          heavy_deadlift_or_pulls: { type: "boolean" },
          overhead_volume: { type: "boolean" },
          jerk_accessory: { type: "boolean" },
          snatch_accessory: { type: "boolean" },
          gymnastics_pulling: { type: "boolean" },
          high_grip_fatigue: { type: "boolean" },
          double_unders_or_jumping: { type: "boolean" },
          engine_bias: { type: "string" },
          barbell_load_bias: { type: "string" },
          likely_fatigue: { type: "string" },
          ankle_risk: { type: "string" },
          shoulder_risk: { type: "string" },
          reasoning_summary: { type: "string" }
        }
      },
      skip_today: { type: "array", items: { type: "string" } },
      accessory_focus: { type: "string" },
      recommended_session: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["exercise", "sets", "reps_or_time", "load", "notes"],
          properties: {
            exercise: { type: "string" },
            sets: { type: "string" },
            reps_or_time: { type: "string" },
            load: { type: "string" },
            notes: { type: "string" }
          }
        }
      },
      mobility: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["exercise", "dose", "notes"],
          properties: {
            exercise: { type: "string" },
            dose: { type: "string" },
            notes: { type: "string" }
          }
        }
      },
      reason: { type: "string" },
      caution_flags: { type: "array", items: { type: "string" } },
      readiness_adjustment: { type: "string" },
      confidence: { type: "string", enum: ["low", "medium", "high"] }
    }
  }
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body)
  };
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return "Missing JSON body.";
  }
  if (!payload.workoutText && !payload.imageBase64) {
    return "Please provide workoutText or imageBase64.";
  }
  if (payload.workoutText && String(payload.workoutText).length > 12000) {
    return "Workout text is too long. Keep it under 12,000 characters.";
  }
  if (payload.imageBase64 && String(payload.imageBase64).length > 7_000_000) {
    return "Image is too large. Resize or compress it before uploading.";
  }
  return null;
}

function buildUserContent(payload) {
  const content = [];

  if (payload.imageBase64) {
    content.push({
      type: "image",
      source: {
        type: "base64",
        media_type: payload.imageMimeType || "image/jpeg",
        data: payload.imageBase64
      }
    });
  }

  content.push({
    type: "text",
    text: JSON.stringify({
      task: "Classify today's completed workout and recommend accessories.",
      workoutText: payload.workoutText || "",
      selectedTrainingDay: payload.trainingDay || "unknown",
      readiness: payload.readiness || "Green",
      painFlags: payload.painFlags || {},
      userNotes: payload.userNotes || "",
      recentWeekSummary: payload.recentWeekSummary || "",
      requiredOutput: "Call recommend_accessory tool only."
    }, null, 2)
  });

  return content;
}

function hardRuleCheck(result, payload) {
  const painFlags = payload.painFlags || {};
  const readiness = payload.readiness || "Green";
  const detected = result.detected_training || {};

  const hardStop = readiness === "Red" || painFlags.ankle || painFlags.hip || painFlags.back;

  if (hardStop) {
    result.accessory_focus = painFlags.ankle || painFlags.hip ? "Ankle/hip flare protocol" : "Mobility only";
    result.summary = "Hard rule applied: readiness or pain flag means no extra loading today.";
    result.recommended_session = [
      {
        exercise: painFlags.ankle || painFlags.hip ? "Controlled ankle mobility" : "Daily ankle and shoulder mobility",
        sets: "1",
        reps_or_time: "8-15 minutes",
        load: "Gentle and pain-free",
        notes: "No heavy accessory work today. Leave recovery in the bank."
      },
      {
        exercise: "Dead bug or side plank",
        sets: "2-3",
        reps_or_time: "8 each side or 20-30 sec each side",
        load: "Bodyweight",
        notes: "Only if pain-free. Focus on breathing and trunk control."
      }
    ];
    result.skip_today = [
      "heavy squats",
      "heavy pulls",
      "heavy overhead",
      "barbell capacity EMOMs",
      "high-volume gymnastics"
    ];
    result.readiness_adjustment = "Red/pain rule applied by backend.";
  }

  if (detected.heavy_squat || detected.squat_exposure) {
    result.skip_today = Array.from(new Set([...(result.skip_today || []), "extra loaded squat strength"]));
  }
  if (detected.pull_holds) {
    result.skip_today = Array.from(new Set([...(result.skip_today || []), "extra snatch pulls", "extra clean pulls"]));
  }
  if (detected.heavy_deadlift_or_pulls) {
    result.skip_today = Array.from(new Set([...(result.skip_today || []), "RDLs", "tempo deadlifts", "deficit pulls", "heavy hinge work"]));
  }
  if (detected.overhead_volume || detected.jerk_accessory || detected.snatch_accessory) {
    result.skip_today = Array.from(new Set([...(result.skip_today || []), "extra heavy overhead accessory"]));
  }
  if (detected.gymnastics_pulling || detected.high_grip_fatigue) {
    result.skip_today = Array.from(new Set([...(result.skip_today || []), "strict pulling", "weighted pull-ups", "bar muscle-up negatives", "high-volume kipping"]));
  }

  return result;
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed. Use POST." });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return jsonResponse(500, { error: "ANTHROPIC_API_KEY is not configured." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body." });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return jsonResponse(400, { error: validationError });
  }

  try {
    const message = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1800,
      temperature: 0.2,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" }
        }
      ],
      tools: [RECOMMEND_TOOL],
      tool_choice: { type: "tool", name: "recommend_accessory" },
      messages: [
        {
          role: "user",
          content: buildUserContent(payload)
        }
      ]
    });

    const toolUse = message.content.find(
      (block) => block.type === "tool_use" && block.name === "recommend_accessory"
    );

    if (!toolUse || !toolUse.input) {
      return jsonResponse(502, {
        error: "Claude did not return the expected tool response.",
        rawStopReason: message.stop_reason
      });
    }

    const checked = hardRuleCheck(toolUse.input, payload);

    return jsonResponse(200, {
      ok: true,
      model: MODEL,
      recommendation: checked,
      usage: message.usage || null
    });
  } catch (error) {
    return jsonResponse(500, {
      error: "AI recommendation failed.",
      details: error?.message || String(error)
    });
  }
};
