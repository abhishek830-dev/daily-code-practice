import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import participantsSeed from "./participantsData";
import ParticipantCard from "./ParticipantCard";
import "./participants.css";

export default function ParticipantsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [participants, setParticipants] = useState(participantsSeed);

  const search = searchParams.get("search") || "";
  const role = searchParams.get("role") || "";
  const mutedFilter = searchParams.get("muted"); // 'true' | 'false' | null
  const sort = searchParams.get("sort") || "";

  // On mount, apply per-user mutedIds param if present
  useEffect(() => {
    const mutedIds = searchParams.get("mutedIds");
    if (mutedIds) {
      const setIds = new Set(
        mutedIds
          .split(",")
          .map((s) => Number(s))
          .filter(Boolean),
      );
      setParticipants((prev) =>
        prev.map((p) => ({ ...p, muted: setIds.has(p.id) })),
      );
    }
  }, []);

  const filtered = useMemo(() => {
    let res = [...participants];
    if (search) {
      res = res.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (role) {
      res = res.filter((p) => p.role === role);
    }
    if (mutedFilter === "true" || mutedFilter === "false") {
      res = res.filter((p) => String(p.muted) === mutedFilter);
    }
    if (sort === "name") res.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "role") res.sort((a, b) => a.role.localeCompare(b.role));
    return res;
  }, [participants, search, role, mutedFilter, sort]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || value == null) params.delete(key);
    else params.set(key, value);
    setSearchParams(params);
  };

  // Toggle mute: update state and reflect per-user mutedIds into URL for deep-linking
  const toggleMute = (id) => {
    setParticipants((prev) => {
      const next = prev.map((p) =>
        p.id === id ? { ...p, muted: !p.muted } : p,
      );
      const mutedIds = next.filter((p) => p.muted).map((p) => p.id);
      const params = new URLSearchParams(searchParams);
      if (mutedIds.length) params.set("mutedIds", mutedIds.join(","));
      else params.delete("mutedIds");
      setSearchParams(params);
      return next;
    });
  };

  return (
    <div className="participants-wrapper">
      <div className="header-row">
        <h2>Contributors ({filtered.length})</h2>
        <div className="controls">
          <input
            placeholder="Search contributors"
            value={search}
            onChange={(e) => updateParam("search", e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => updateParam("role", e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="host">Host</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <select
            value={mutedFilter || ""}
            onChange={(e) => updateParam("muted", e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Muted</option>
            <option value="false">Unmuted</option>
          </select>

          <select
            value={sort}
            onChange={(e) => updateParam("sort", e.target.value)}
          >
            <option value="">Sort</option>
            <option value="name">Name</option>
            <option value="role">Role</option>
          </select>
        </div>
      </div>

      <div className="participants-list">
        {filtered.map((user) => (
          <ParticipantCard
            key={user.id}
            user={user}
            onToggleMute={toggleMute}
          />
        ))}
      </div>
    </div>
  );
}
