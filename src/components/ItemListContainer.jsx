import React from 'react'
import {Box} from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Box marginTop="120px">
      <h1>{greeting}</h1>
    </Box>
  )
}

export default ItemListContainer