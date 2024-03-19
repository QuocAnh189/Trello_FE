import { useEffect, useState } from 'react'

//mui
import Box from '@mui/material/Box'

//component
import ListColumns from './ListColumns/ListColumns'

//util
import { mapOrder } from '~/utils/sorts'

//dnd-kit
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });

  //Yeu cau chuot di chuyen 10px thi moi kich hoat event, fix truong hop click bi goi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  })

  //Nhan giu 250ms va dung sai cua cam ung 500px thi moi kich hoat event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = event => {
    console.log('handleDragEnd: ', event)
    const { active, over } = event
    if (active.id !== over.id) {
      console.log('keo tha')
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      const dndOrderColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderColumnsIds = dndOrderColumns?.map((c) => c._id);

      // Cập nhập lại state column ban đầu sai khi kéo thả
      setOrderedColumns(dndOrderColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          display: 'flex',
          backgroundColor: theme => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          overflowX: 'auto',
          overFlowY: 'hidden',
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
