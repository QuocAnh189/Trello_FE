import { useEffect, useState } from 'react'

//mui
import Container from '@mui/material/Container'

//component
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'

//data
// import { mockData } from '~/apis/mock-data'

//api
import { getBoardApi } from '~/apis'

//redux
import { useGetBoardQuery } from '~/redux/services/boardApi'

const Board = () => {
  const { data: board, isLoading: loadingBoard } = useGetBoardQuery('65fc818c10af1b8be586063c')

  return loadingBoard ? (
    <p>loading</p>
  ) : (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
