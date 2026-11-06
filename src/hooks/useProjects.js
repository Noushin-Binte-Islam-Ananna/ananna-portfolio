import { useEffect, useState } from "react";
import { getProjects } from "../services/projectsService";
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => { getProjects().then(setProjects).catch(setError).finally(() => setLoading(false)); }, []);
  return { projects, loading, error };
}
