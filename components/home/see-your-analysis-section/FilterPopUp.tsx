import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import Filter from '../../filter'
interface props {
    isfilteropen: boolean
    setIsfilteropen: Function
}
const FilterPopUp = ({ isfilteropen, setIsfilteropen }: props) => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <> <Modal
            withCloseButton={false}
            opened={isfilteropen}
            onClose={() => setIsfilteropen(false)}
            centered
            radius="lg"
            size="auto"
            padding={0}
        >
            <Filter todashboard={true} close={close} />
        </Modal>
        </>
    )
}

export default FilterPopUp