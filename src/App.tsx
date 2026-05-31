import Storybook from './components/Storybook'
import AnnouncementPage from './pages/AnnouncementPage'
import BridePage from './pages/BridePage'
import CoverPage from './pages/CoverPage'
import DetailsPage from './pages/DetailsPage'
import FamiliesPage from './pages/FamiliesPage'
import GroomPage from './pages/GroomPage'

const pages = [
  <CoverPage key="cover" />,
  <GroomPage key="groom" />,
  <BridePage key="bride" />,
  <FamiliesPage key="families" />,
  <AnnouncementPage key="announcement" />,
  <DetailsPage key="details" />,
]

export default function App() {
  return <Storybook pages={pages} />
}
