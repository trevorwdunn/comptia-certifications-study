import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Account from './components/Account'
import CertDashboard from './components/CertDashboard'
import QuizMenu from './components/quiz/QuizMenu'
import QuizSession from './components/quiz/QuizSession'
import FlashcardMenu from './components/flashcards/FlashcardMenu'
import FlashcardDeck from './components/flashcards/FlashcardDeck'
import StudyGuideMenu from './components/studyguide/StudyGuideMenu'
import TopicDetail from './components/studyguide/TopicDetail'
import ProgressView from './components/progress/ProgressView'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="account" element={<Account />} />
              <Route path=":certId" element={<CertDashboard />} />
              <Route path=":certId/quiz" element={<QuizMenu />} />
              <Route path=":certId/quiz/:domainId" element={<QuizSession />} />
              <Route path=":certId/flashcards" element={<FlashcardMenu />} />
              <Route path=":certId/flashcards/:domainId" element={<FlashcardDeck />} />
              <Route path=":certId/study" element={<StudyGuideMenu />} />
              <Route path=":certId/study/:guideId" element={<TopicDetail />} />
              <Route path=":certId/progress" element={<ProgressView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
