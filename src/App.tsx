import Storybook from './components/Storybook'
import AnnouncementPage from './pages/AnnouncementPage'
import BridePage from './pages/BridePage'
import CountdownPage from './pages/CountdownPage'
import CoverPage from './pages/CoverPage'
import DetailsPage from './pages/DetailsPage'
import FamiliesPage from './pages/FamiliesPage'
import GroomPage from './pages/GroomPage'

const pages = [
  <CoverPage key="cover" />,
  <BridePage key="bride" />,
  <GroomPage key="groom" />,
  <FamiliesPage key="families" />,
  <AnnouncementPage key="announcement" />,
  <CountdownPage key="countdown" />,
  <DetailsPage key="details" />,
]

export default function App() {
  return <Storybook pages={pages} />
}
