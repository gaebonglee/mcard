/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import logo from './logo.svg'
import './App.css'
import Text from './components/shared/Text'
import Button from './components/shared/Button'

function App() {
  return (
    <div>
      <Text typography="t1" color="grey">
        t1
      </Text>
      <Text>t2</Text>
      <Text>t3</Text>
      <Text>t4</Text>
      <Text>t5</Text>
      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Button color="success">클릭해주세요</Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="success" weak={true}>
        클릭해주세요
      </Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>
      <Button full={true}>클릭해주세요</Button>
      <Button full={true} disabled={true}>
        클릭해주세요
      </Button>
    </div>
  )
}

export default App
