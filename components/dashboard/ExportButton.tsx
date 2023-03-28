import { Button, Select, Menu, createStyles } from '@mantine/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'

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
}));

export default function ExportButton() {
    const { classes } = useStyles();
    const [selected, setSelected] = useState()
    
    return (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button className={classes.button}> 
                Export
                <img src="/icons/exportb.png" alt="export" width='18px' height='18px' style={{marginLeft: `10px`}} />
            </Button>
          </Menu.Target>
    
          <Menu.Dropdown>
            <Menu.Item >Export as PDF</Menu.Item>
            <Menu.Item >Export as CSV</Menu.Item>
            <Menu.Item >Export as JSON</Menu.Item>
            <Menu.Item >Send an Email</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
}
