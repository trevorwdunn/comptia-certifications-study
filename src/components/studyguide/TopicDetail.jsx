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
        <div key={i} className="flex gap-4 text-sm border-b border-line-2 py-1.5 flex-wrap">
          {cells.map((c, j) => <span key={j} className={`flex-1 min-w-0 ${j === 0 ? 'font-medium text-ink-3' : 'text-ink-4'}`}>{c.trim()}</span>)}
        </div>
      )
    }
    if (line.startsWith('- ')) {
      const inner = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink-2">$1</strong>').replace(/`([^`]+)`/g, '<code class="code-inline">$1</code>')
      return <li key={i} className="text-ink-3 text-sm ml-4 list-disc" dangerouslySetInnerHTML={{ __html: inner }} />
    }
    if (line.trim() === '') return <div key={i} className="h-2" />
    const formatted = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-ink-2 font-semibold">$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="code-inline px-1.5 py-0.5">$1</code>')
    return <p key={i} className="text-ink-3 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
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
  if (!guide) return <div className="text-ink-4">Guide not found.</div>

  function toggle(topicId) {
    if (openTopic !== topicId) visitTopic(certId, topicId)
    setOpenTopic(openTopic === topicId ? null : topicId)
  }

  return (
    <div className="space-y-6">
      <div>
        <Link to={`/${certId}/study`} className="text-ink-5 hover:text-ink text-sm">← Study Guide</Link>
        <h1 className="text-xl font-bold mt-1">{guide.title}</h1>
        <p className="text-ink-4 text-sm mt-1">{guide.summary}</p>
      </div>

      <div className="space-y-2">
        {guide.topics.map((topic) => {
          const isOpen = openTopic === topic.id
          const isComplete = progress[`${certId}:topic_${topic.id}`]?.completed
          return (
            <div key={topic.id} className="card border border-line-2">
              <button className="w-full flex items-center justify-between text-left" onClick={() => toggle(topic.id)}>
                <div className="flex items-center gap-3">
                  <button
                    className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${isComplete ? `${c.bg} border-transparent` : 'border-line-3 hover:border-line-5'}`}
                    onClick={(e) => { e.stopPropagation(); completeTopic(certId, topic.id, !isComplete) }}
                  >
                    {isComplete && <span className="text-white text-xs">✓</span>}
                  </button>
                  <span className="font-medium text-sm">{topic.title}</span>
                </div>
                <span className="text-ink-5 text-lg ml-4">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-line-2 space-y-1">
                  {renderContent(topic.content)}
                  <div className="pt-4">
                    <button
                      onClick={() => completeTopic(certId, topic.id, !isComplete)}
                      className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${isComplete ? `${c.dim} ${c.text} border ${c.border}` : 'bg-raised text-ink-3 hover:bg-raised-hi'}`}
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
