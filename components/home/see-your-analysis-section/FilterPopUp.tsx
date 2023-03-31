import { Modal } from '@mantine/core'
import React from 'react'
import Filter from '../../filter'
interface props {
    isfilteropen: boolean
    setIsfilteropen: Function
}
const FilterPopUp = ({ isfilteropen, setIsfilteropen }: props) => {
    return (
        <Modal
            withCloseButton={false}
            opened={isfilteropen}
            onClose={() => setIsfilteropen(false)}
            centered
            radius="lg"
            size="auto"
            padding={0}
        >
            <Filter todashboard={true} close={() => setIsfilteropen(false)} />
        </Modal>
    )
}

export default FilterPopUp