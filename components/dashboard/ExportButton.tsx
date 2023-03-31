import { Button, Select, Menu, createStyles } from '@mantine/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import useAccountStore from '../Store/Account'
import { useReactToPrint } from 'react-to-print'

const useStyles = createStyles((theme) => ({
  button: {
    width: `120px`,
    background: `#0062D6`,
    color: `white`,
    borderRadius: `50px`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-around`,
  },
}))

export default function ExportButton() {
  const { classes } = useStyles()
  const [selected, setSelected] = useState()
  const accounts = useAccountStore()

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(accounts)
    const dataUri =
      'data:text/json;charset=utf-8,' + encodeURIComponent(jsonStr)
    const link = document.createElement('a')
    link.setAttribute('href', dataUri)
    link.setAttribute('download', 'accounts.json')
    document.body.appendChild(link)
    link.click()
  }

  const ComponentToPrint = () => {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a sample text.</p>
      </div>
    )
  }

  const componentRef = React.useRef()

  const handleExportPDF = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button className={classes.button}>
          Export
          <img
            src="/icons/exportb.png"
            alt="export"
            width="18px"
            height="18px"
            style={{ marginLeft: `10px` }}
          />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Export as PDF</Menu.Item>
        {/* <Menu.Item onClick={handleExportCSV}>Export as CSV</Menu.Item> */}
        <Menu.Item onClick={handleExportJSON}>Export as JSON</Menu.Item>
        <Menu.Item>Send an Email</Menu.Item>
      </Menu.Dropdown>

      <div style={{ display: 'none' }}>
        <ComponentToPrint ref={componentRef} />
      </div>
    </Menu>
  )
}
