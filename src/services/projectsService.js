// The ONLY place the app reads projects from. Today: local data file.
// Later: replace the body with fetch("/api/projects") or a Supabase/Firebase query,
// keeping the same return shape, and no component needs to change.
import { projects } from "../data/projects";

// Status is worked out from the links, so you never type it by hand.
// Only set status: "In progress" in projects.js for unfinished work.
function getStatus(project) {
  if (project.status === "In progress") return "In progress";
  if (project.live) return "Live";          // has a live demo
  if (project.github) return "Completed";   // GitHub link only
  return null;                              // no links, so no badge
}

export async function getProjects() {
  return [...projects]
    .map((p) => ({ ...p, status: getStatus(p) }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}