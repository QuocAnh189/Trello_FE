//mui
import Box from '@mui/material/Box'

//component
import CardItem from './Card/Card'

//dnd-ket
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function ListCard({ cards }) {
  return (
    // <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
    <Box
      sx={{
        p: '0 5px 5px 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overFlowY: 'auto',
        maxHeight: theme =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
            5,
          )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'white',
        },
      }}
    >
      {cards?.map(card => (
        <CardItem key={card._id} card={card} />
      ))}
    </Box>
    // </SortableContext>
  )
}

export default ListCard
