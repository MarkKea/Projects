import 
{ MessageSquareMore, Mail, ListTodo, NotepadText, 
    ListPlus, Contact, Receipt, Calendar, Cuboid, Zap, 
    ChartPie, LayoutGrid, AtSign, Scaling, Table, Layers3,
    BookOpen, Users, BookOpenText, Lock, FileText 
} from 'lucide-react'

export const Apps = [
    {
        link: 'Chat',
        icon: <MessageSquareMore size={18} />,
        href: '/apps/chat'
    },
    {
        link: 'Mailbox',
        icon: <Mail size={18} />,
        href: '/apps/mailbox'
    },
    {
        link: 'Todo List',
        icon: <ListTodo size={18} />,
        href: '/apps/todolist'
    },
    {
        link: 'Notes',
        icon: <NotepadText size={18} />,
        href: '/apps/notes'
    },
    {
        link: 'Scrumboard',
        icon: <ListPlus size={18} />,
        href: '/apps/scrumboard'
    },
    {
        link: 'Contacts',
        icon: <Contact size={18} />,
        href: '/apps/contacts'
    },
    {
        link: 'Invoice',
        icon: <Receipt size={18} />,
        href: '/apps/invoice'
    },
    {
        link: 'Calendar',
        icon: <Calendar size={18} />,
        href: '/apps/calendar'
    }
]
export const UserInterface = [
    {
        link: 'Components',
        icon: <Cuboid size={18} />,
        href: '/userinterface/components'
    },
    {
        link: 'Elements',
        icon: <Zap size={18} />,
        href: '/userinterface/elements'
    },
    {
        link: 'Charts',
        icon: <ChartPie size={18} />,
        href: '/userinterface/charts'
    },
    {
        link: 'Widgets',
        icon: <LayoutGrid size={18} />,
        href: '/userinterface/widgets'
    },
    {
        link: 'Font Icons',
        icon: <AtSign size={18} />,
        href: '/userinterface/fonticons'
    },
    {
        link: 'Drag and Drop',
        icon: <Scaling size={18} />,
        href: '/userinterface/draganddrop'
    }
]
export const TablesAndForms = [
    {
        link: 'Tables',
        icon: <Table size={18} />,
        href: '/tablesandforms/tables'
    },
    {
        link: 'Data Tables',
        icon: <Layers3 size={18} />,
        href: '/tablesandforms/datatables'
    },
    {
        link: 'Forms',
        icon: <BookOpen size={18} />,
        href: '/tablesandforms/forms'
    }
]
export const UserAndPages = [
    {
        link: 'Users',
        icon: <Users size={18} />,
        href: '/userandpages/users'
    },
    {
        link: 'Pages',
        icon: <BookOpenText size={18} />,
        href: '/userandpages/pages'
    },
    {
        link: 'Authentification',
        icon: <Lock size={18} />,
        href: '/userandpages/authentification'
    }
]
export const Supports = [
    {
        link: 'Documentation',
        icon: <FileText size={18} />,
        href: '/supports/documentation'
    },
]