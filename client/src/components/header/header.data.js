import LocalMallIcon from '@material-ui/icons/LocalMall'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

const navMenus = [
  {
    name: 'Shop',
    path: '/shop',
    Icon: LocalMallIcon,
  },
  {
    name: 'Contact',
    path: '/contact',
    Icon: PermContactCalendarIcon,
  },
  {
    name: 'Signin',
    path: '/signin',
    Icon: ExitToAppIcon,
  },
  {
    name: 'Signout',
    path: '',
    Icon: PowerSettingsNewIcon,
  },
]

export default navMenus
