import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCert, CERT_COLORS } from '../../certs'
import { useCertData } from '../../data/index'
import Loading from '../Loading'
import { useProgress } from '../../context/ProgressContext'

function renderContent(text) {
  return text.split('\n').map((line, i) => {
    if (line.match(/^\|/)) {
      const cells = line.split('|').filter((c) => c.trim())
      if (line.includes('---')) return null
      return (
        <div key={i} className="flex gap-4 text-sm border-b border-slate-700 py-1.5 flex-wrap">
          {cells.map((c, j) => <span key={j} className={`flex-1 min-w-0 ${j === 0 ? 'font-medium text-slate-300' : 'text-slate-400'}`}>{c.trim()}</span>)}
        </div>
      )
    }
    if (line.startsWith('- ')) {
      const inner = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200">$1</strong>').replace(/`([^`]+)`/g, '<code class="bg-slate-900 px-1 rounded text-blue-300 text-xs">$1</code>')
      return <li key={i} className="text-slate-300 text-sm ml-4 list-disc" dangerouslySetInnerHTML={{ __html: inner }} />
    }
    if (line.trim() === '') return <div key={i} className="h-2" />
    const formatted = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200 font-semibold">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-900 px-1.5 py-0.5 rounded text-blue-300 text-xs">$1</code>')
    return <p key={i} className="text-slate-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
  })
}

export default function TopicDetail() {
  const { certId, guideId } = useParams()
  const cert = getCert(certId)
  const data = useCertData(certId)
  const { progress, completeTopic, visitTopic } = useProgress()
  const [openTopic, setOpenTopic] = useState(null)
  if (cert && !data) return <Loading />
  if (!cert || !data) return null
  const c = CERT_COLORS[cert.color]
  const guide = data.studyGuide.find((g) => g.id === guideId)
  if (!guide) return <div className="text-slate-400">Guide not found.</div>

  function toggle(topicId) {
    if (openTopic !== topicId) visitTopic(certId, topicId)
    setOpenTopic(openTopic === topicId ? null : topicId)
  }

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}/study`} className="text-slate-500 hover:text-white text-sm">← Study Guide</Link>
        <h1 className="text-xl font-bold mt-1">{guide.title}</h1>
        <p className="text-slate-400 text-sm mt-1">{guide.summary}</p>
      </div>

      <div className="space-y-2">
        {guide.topics.map((topic) => {
          const isOpen = openTopic === topic.id
          const isComplete = progress[`${certId}:topic_${topic.id}`]?.completed
          return (
            <div key={topic.id} className="card border border-slate-700">
              <button className="w-full flex items-center justify-between text-left" onClick={() => toggle(topic.id)}>
                <div className="flex items-center gap-3">
                  <button
                    className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${isComplete ? `${c.bg} border-transparent` : 'border-slate-600 hover:border-slate-400'}`}
                    onClick={(e) => { e.stopPropagation(); completeTopic(certId, topic.id, !isComplete) }}
                  >
                    {isComplete && <span className="text-white text-xs">✓</span>}
                  </button>
                  <span className="font-medium text-sm">{topic.title}</span>
                </div>
                <span className="text-slate-500 text-lg ml-4">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-slate-700 space-y-1">
                  {renderContent(topic.content)}
                  <div className="pt-4">
                    <button
                      onClick={() => completeTopic(certId, topic.id, !isComplete)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${isComplete ? `${c.dim} ${c.text} border ${c.border}` : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                    >
                      {isComplete ? '✓ Completed' : 'Mark as Complete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
