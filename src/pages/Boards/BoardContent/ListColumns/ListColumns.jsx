import { useEffect, useState } from 'react'

//mui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

//component
import Column from './Column/Column'

//icon
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import CloseIcon from '@mui/icons-material/Close'

//dnd-ket
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

//toast
import { toast } from 'react-toastify'
import { createColumnApi } from '~/apis'

//redux
import { useCreateColumnMutation } from '~/redux/services/columnApi'

function ListColumns({ columns, addColumnOrderIds }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState()
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState()

  const [createColumn, { isLoading: loadingCreate }] = useCreateColumnMutation()

  const handleAddNewColumn = async () => {
    try {
      if (!newColumnTitle) {
        toast.error('Please enter column')
        return
      }
      const data = { title: newColumnTitle, boardId: '65fc818c10af1b8be586063c' }
      const column = await createColumn(data).unwrap()
      if (column) {
        addColumnOrderIds(column._id)
        toast.success('Create column successffuly')
        toggleOpenNewColumnForm()
        setNewColumnTitle('')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          backgroundColor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overFlowY: 'hidden',
          '&::-webkit-scroll-track': { m: 2 },
        }}
      >
        {columns?.map(column => (
          <Column key={column._id} column={column} />
        ))}
        {!openNewColumnForm ? (
          <Box
            onClick={toggleOpenNewColumnForm}
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              backgroundColor: '#ffffff3d',
            }}
          >
            <Button
              startIcon={<NoteAddIcon />}
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1,
              }}
            >
              Add new column
            </Button>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                minWidth: '250px',
                maxWidth: '250px',
                mx: 2,
                p: 1,
                borderRadius: '6px',
                height: 'fit-content',
                backgroundColor: '#ffffff3d',
              }}
            >
              <TextField
                label="Enter column title..."
                type="text"
                size="small"
                variant="outlined"
                autoFocus
                value={newColumnTitle}
                onChange={e => {
                  setNewColumnTitle(e.target.value)
                }}
                sx={{
                  '& label': { color: 'white' },
                  '& input': { color: 'white' },
                  '& label.Mui-focused': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
                <Button
                  onClick={handleAddNewColumn}
                  disabled={loadingCreate}
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: theme => theme.palette.success.main,
                    '&:hover': { backgroundColor: theme => theme.palette.success.main },
                  }}
                >
                  Add Column
                </Button>
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: 'white',
                    '&:hover': { cursor: 'pointer' },
                    '&:hover': { color: theme => theme.palette.warning.light },
                  }}
                  onClick={toggleOpenNewColumnForm}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

export default ListColumns
