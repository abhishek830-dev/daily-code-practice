import React from 'react';

export default function ParticipantCard({ user, onToggleMute }) {
  const initials = user.name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="participant-card">
      <div className="left">
        <div className="avatar">{initials}</div>
        <div className="meta">
          <div className="name-row">
            <div className="name">{user.name}</div>
            <div className={`badge ${user.role}`}>{user.role}</div>
          </div>
        </div>
      </div>

      <div className="actions">
        <button
          className="mute-btn"
          aria-pressed={user.muted}
          onClick={() => onToggleMute(user.id)}
        >
          {user.muted ? '🔇' : '🎤'}
        </button>
      </div>
    </div>
  );
}
