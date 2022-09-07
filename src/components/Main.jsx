import React from "react"
import "./Main.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditeNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    })
  }

  if (!activeNote) {
    return <p className="no-active-note">ノートが選択されていません</p>
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditeNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditeNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h2 className="preview-title">{activeNote.title}</h2>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Main
